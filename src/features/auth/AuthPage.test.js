import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  sendResetPasswordEmail,
  signInWithEmail,
  signInWithGoogle,
  signUpWithEmail,
} from './authService';
import AuthPage from './AuthPage';

jest.mock('./authService', () => ({
  sendResetPasswordEmail: jest.fn(),
  signInWithEmail: jest.fn(),
  signInWithGoogle: jest.fn(),
  signUpWithEmail: jest.fn(),
}));

describe('AuthPage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('signs in with email and password', async () => {
    signInWithEmail.mockResolvedValue({});

    render(<AuthPage />);

    await userEvent.type(screen.getByLabelText(/email/i), 'user@example.com');
    await userEvent.type(screen.getByLabelText(/^mot de passe$/i), 'password123');
    await userEvent.click(screen.getByRole('button', { name: /^se connecter$/i }));

    await waitFor(() => {
      expect(signInWithEmail).toHaveBeenCalledWith({
        email: 'user@example.com',
        password: 'password123',
      });
    });
  });

  test('switches to signup and creates an account', async () => {
    signUpWithEmail.mockResolvedValue({});

    render(<AuthPage />);

    await userEvent.click(screen.getByRole('button', { name: /créer un compte/i }));
    await userEvent.type(screen.getByLabelText(/email/i), 'user@example.com');
    await userEvent.type(screen.getByLabelText(/username/i), 'patrick');
    await userEvent.type(screen.getByLabelText(/^mot de passe$/i), 'password123');
    await userEvent.type(screen.getByLabelText(/confirmer mot de passe/i), 'password123');
    await userEvent.click(screen.getByRole('button', { name: /^créer un compte$/i }));

    await waitFor(() => {
      expect(signUpWithEmail).toHaveBeenCalledWith({
        email: 'user@example.com',
        username: 'patrick',
        password: 'password123',
      });
    });
  });

  test('does not create an account when passwords differ', async () => {
    render(<AuthPage />);

    await userEvent.click(screen.getByRole('button', { name: /créer un compte/i }));
    await userEvent.type(screen.getByLabelText(/email/i), 'user@example.com');
    await userEvent.type(screen.getByLabelText(/username/i), 'patrick');
    await userEvent.type(screen.getByLabelText(/^mot de passe$/i), 'password123');
    await userEvent.type(screen.getByLabelText(/confirmer mot de passe/i), 'password456');
    await userEvent.click(screen.getByRole('button', { name: /^créer un compte$/i }));

    expect(await screen.findByText(/les mots de passe ne correspondent pas/i)).toBeInTheDocument();
    expect(signUpWithEmail).not.toHaveBeenCalled();
  });

  test('shows a clear message when login credentials are wrong', async () => {
    signInWithEmail.mockRejectedValue({ code: 'auth/invalid-credential' });

    render(<AuthPage />);

    await userEvent.type(screen.getByLabelText(/email/i), 'user@example.com');
    await userEvent.type(screen.getByLabelText(/^mot de passe$/i), 'bad-password');
    await userEvent.click(screen.getByRole('button', { name: /^se connecter$/i }));

    expect(await screen.findByText(/vérifie tes identifiants/i)).toBeInTheDocument();
  });

  test('shows a helpful message when the signup email already exists', async () => {
    signUpWithEmail.mockRejectedValue({ code: 'auth/email-already-in-use' });

    render(<AuthPage />);

    await userEvent.click(screen.getByRole('button', { name: /créer un compte/i }));
    await userEvent.type(screen.getByLabelText(/email/i), 'user@example.com');
    await userEvent.type(screen.getByLabelText(/username/i), 'patrick');
    await userEvent.type(screen.getByLabelText(/^mot de passe$/i), 'password123');
    await userEvent.type(screen.getByLabelText(/confirmer mot de passe/i), 'password123');
    await userEvent.click(screen.getByRole('button', { name: /^créer un compte$/i }));

    expect(await screen.findByText(/cet email a déjà un compte/i)).toBeInTheDocument();
  });

  test('sends a reset password email from the login form', async () => {
    sendResetPasswordEmail.mockResolvedValue({});

    render(<AuthPage />);

    await userEvent.type(screen.getByLabelText(/email/i), 'user@example.com');
    await userEvent.click(screen.getByRole('button', { name: /mot de passe oublié/i }));

    await waitFor(() => {
      expect(sendResetPasswordEmail).toHaveBeenCalledWith('user@example.com');
    });
  });

  test('starts Google sign in', async () => {
    signInWithGoogle.mockResolvedValue({});

    render(<AuthPage />);

    await userEvent.click(screen.getByRole('button', { name: /continuer avec google/i }));

    await waitFor(() => {
      expect(signInWithGoogle).toHaveBeenCalled();
    });
  });
});
