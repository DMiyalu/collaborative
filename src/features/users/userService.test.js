jest.mock('firebase/firestore', () => ({
  doc: jest.fn((db, collection, id) => ({ db, collection, id })),
  onSnapshot: jest.fn(),
  serverTimestamp: jest.fn(() => 'SERVER_TIMESTAMP'),
  setDoc: jest.fn(),
  updateDoc: jest.fn(),
}));

jest.mock('../../lib/firebase/firebaseClient', () => ({
  db: 'DB',
}));

const { doc, onSnapshot, serverTimestamp, setDoc, updateDoc } = require('firebase/firestore');
const {
  completeOnboarding,
  ensureUserDocument,
  subscribeToUserDocument,
} = require('./userService');

describe('userService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    doc.mockImplementation((db, collection, id) => ({ db, collection, id }));
    serverTimestamp.mockReturnValue('SERVER_TIMESTAMP');
  });

  test('subscribes to a Collaborative user document', () => {
    const unsubscribe = jest.fn();
    const callback = jest.fn();
    onSnapshot.mockImplementation((reference, listener) => {
      listener({
        exists: () => true,
        data: () => ({ id: 'user-1', onboardingCompleted: false }),
      });
      return unsubscribe;
    });

    expect(subscribeToUserDocument('user-1', callback)).toBe(unsubscribe);
    expect(callback).toHaveBeenCalledWith({ id: 'user-1', onboardingCompleted: false });
  });

  test('completes onboarding and stores the recommended next step', async () => {
    await completeOnboarding({
      userId: 'user-1',
      intents: ['HAS_SKILLS'],
    });

    expect(updateDoc).toHaveBeenCalledWith(
      { db: 'DB', collection: 'users', id: 'user-1' },
      expect.objectContaining({
        intents: ['HAS_SKILLS'],
        onboardingCompleted: true,
        recommendedNextStep: 'CREATE_TALENT_PROFILE',
      }),
    );
  });

  test('requires at least one intent before completing onboarding', async () => {
    await expect(completeOnboarding({ userId: 'user-1', intents: [] })).rejects.toThrow(
      'Select at least one intent',
    );
    expect(updateDoc).not.toHaveBeenCalled();
  });

  test('creates a default user document for auth providers', async () => {
    await ensureUserDocument({
      user: {
        uid: 'google-user-1',
        email: 'google@example.com',
        displayName: 'Google User',
        photoURL: 'https://example.com/avatar.png',
      },
    });

    expect(setDoc).toHaveBeenCalledWith(
      { db: 'DB', collection: 'users', id: 'google-user-1' },
      expect.objectContaining({
        id: 'google-user-1',
        email: 'google@example.com',
        displayName: 'Google User',
        onboardingCompleted: false,
        intents: [],
      }),
      { merge: true },
    );
  });
});
