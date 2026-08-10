import { render, screen } from '@testing-library/react';
import App from './App';
import { subscribeToAuthState } from './features/auth/authService';
import { subscribeToUserDocument } from './features/users/userService';

jest.mock('./features/auth/authService', () => ({
  signOutUser: jest.fn(),
  subscribeToAuthState: jest.fn(),
  sendResetPasswordEmail: jest.fn(),
  signInWithEmail: jest.fn(),
  signInWithGoogle: jest.fn(),
  signUpWithEmail: jest.fn(),
}));

jest.mock('./features/users/userService', () => ({
  subscribeToUserDocument: jest.fn(),
}));

describe('App', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    subscribeToAuthState.mockImplementation((callback) => {
      callback(null);
      return jest.fn();
    });
  });

  test('renders the landing page when signed out', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { name: /les projets rencontrent/i }),
    ).toBeInTheDocument();
  });

  test('renders onboarding for a signed in user who has not completed it', async () => {
    subscribeToAuthState.mockImplementation((callback) => {
      callback({ uid: 'user-1' });
      return jest.fn();
    });
    subscribeToUserDocument.mockImplementation((userId, callback) => {
      callback({ id: userId, onboardingCompleted: false });
      return jest.fn();
    });

    render(<App />);

    expect(
      await screen.findByRole('heading', { name: /qu’est-ce qui t’amène/i }),
    ).toBeInTheDocument();
  });

  test('renders the connected home when onboarding is complete', async () => {
    subscribeToAuthState.mockImplementation((callback) => {
      callback({ uid: 'user-1' });
      return jest.fn();
    });
    subscribeToUserDocument.mockImplementation((userId, callback) => {
      callback({
        id: userId,
        username: 'patrick',
        onboardingCompleted: true,
        recommendedNextStep: 'CREATE_TALENT_PROFILE',
      });
      return jest.fn();
    });

    render(<App />);

    expect(await screen.findByText(/compléter ton profil talent/i)).toBeInTheDocument();
  });
});
