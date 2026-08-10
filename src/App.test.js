import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./features/auth/authService', () => ({
  sendResetPasswordEmail: jest.fn(),
  signInWithEmail: jest.fn(),
  signInWithGoogle: jest.fn(),
  signUpWithEmail: jest.fn(),
}));

test('renders the login page by default', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /se connecter/i })).toBeInTheDocument();
});
