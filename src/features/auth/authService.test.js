jest.mock('firebase/auth', () => ({
  createUserWithEmailAndPassword: jest.fn(),
  onAuthStateChanged: jest.fn(),
  sendPasswordResetEmail: jest.fn(),
  GoogleAuthProvider: jest.fn(),
  signInWithPopup: jest.fn(),
  signInWithEmailAndPassword: jest.fn(),
  signOut: jest.fn(),
  updateProfile: jest.fn(),
}));

jest.mock('firebase/firestore', () => ({
  doc: jest.fn((db, collection, id) => ({ db, collection, id })),
  getDoc: jest.fn(),
  serverTimestamp: jest.fn(() => 'SERVER_TIMESTAMP'),
  setDoc: jest.fn(),
  updateDoc: jest.fn(),
}));

jest.mock('../../lib/firebase/firebaseClient', () => ({
  auth: 'AUTH',
  db: 'DB',
}));

const {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} = require('firebase/auth');
const { doc, getDoc, serverTimestamp, setDoc, updateDoc } = require('firebase/firestore');
const {
  sendResetPasswordEmail,
  signInWithEmail,
  signInWithGoogle,
  signOutUser,
  signUpWithEmail,
} = require('./authService');

describe('authService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    doc.mockImplementation((db, collection, id) => ({ db, collection, id }));
    serverTimestamp.mockReturnValue('SERVER_TIMESTAMP');
    getDoc.mockResolvedValue({ exists: () => false });
  });

  test('creates a Firebase auth user and matching Collaborative user document', async () => {
    createUserWithEmailAndPassword.mockResolvedValue({
      user: {
        uid: 'user-1',
        email: 'patrick@example.com',
      },
    });

    await signUpWithEmail({
      email: 'patrick@example.com',
      password: 'secret-password',
      username: 'patrick',
    });

    expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(
      'AUTH',
      'patrick@example.com',
      'secret-password',
    );
    expect(updateProfile).toHaveBeenCalledWith(
      { uid: 'user-1', email: 'patrick@example.com' },
      { displayName: 'patrick' },
    );
    expect(setDoc).toHaveBeenCalledWith(
      { db: 'DB', collection: 'users', id: 'user-1' },
      expect.objectContaining({
        id: 'user-1',
        email: 'patrick@example.com',
        username: 'patrick',
        displayName: 'patrick',
        onboardingCompleted: false,
        intents: [],
      }),
    );
  });

  test('delegates sign in, reset password, and sign out to Firebase Auth', async () => {
    await signInWithEmail({ email: 'user@example.com', password: 'password' });
    await sendResetPasswordEmail('user@example.com');
    await signOutUser();

    expect(signInWithEmailAndPassword).toHaveBeenCalledWith(
      'AUTH',
      'user@example.com',
      'password',
    );
    expect(sendPasswordResetEmail).toHaveBeenCalledWith('AUTH', 'user@example.com');
    expect(signOut).toHaveBeenCalledWith('AUTH');
  });

  test('signs in with Google and merges the user document', async () => {
    signInWithPopup.mockResolvedValue({
      user: {
        uid: 'google-user-1',
        email: 'google@example.com',
        displayName: 'Google User',
        photoURL: 'https://example.com/photo.png',
      },
    });

    await signInWithGoogle();

    expect(signInWithPopup).toHaveBeenCalled();
    expect(setDoc).toHaveBeenCalledWith(
      { db: 'DB', collection: 'users', id: 'google-user-1' },
      expect.objectContaining({
        id: 'google-user-1',
        email: 'google@example.com',
        displayName: 'Google User',
        photoURL: 'https://example.com/photo.png',
        onboardingCompleted: false,
        intents: [],
      }),
    );
  });

  test('does not reset onboarding when an existing Google user signs in', async () => {
    getDoc.mockResolvedValue({ exists: () => true });
    signInWithPopup.mockResolvedValue({
      user: {
        uid: 'google-user-1',
        email: 'google@example.com',
      },
    });

    await signInWithGoogle();

    expect(setDoc).not.toHaveBeenCalled();
    expect(updateDoc).toHaveBeenCalledWith(
      { db: 'DB', collection: 'users', id: 'google-user-1' },
      { updatedAt: 'SERVER_TIMESTAMP' },
    );
  });
});
