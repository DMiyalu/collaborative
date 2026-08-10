import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { completeOnboarding } from '../users/userService';
import OnboardingPage from './OnboardingPage';

jest.mock('../users/userService', () => ({
  completeOnboarding: jest.fn(),
}));

describe('OnboardingPage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('requires at least one intent', async () => {
    render(<OnboardingPage user={{ uid: 'user-1' }} />);

    await userEvent.click(screen.getByRole('button', { name: /continuer/i }));

    expect(await screen.findByText(/choisis au moins une réponse/i)).toBeInTheDocument();
    expect(completeOnboarding).not.toHaveBeenCalled();
  });

  test('submits selected intents', async () => {
    completeOnboarding.mockResolvedValue('CREATE_TALENT_PROFILE');

    render(<OnboardingPage user={{ uid: 'user-1' }} />);

    await userEvent.click(screen.getByRole('button', { name: /j'ai des compétences/i }));
    await userEvent.click(screen.getByRole('button', { name: /continuer/i }));

    await waitFor(() => {
      expect(completeOnboarding).toHaveBeenCalledWith({
        userId: 'user-1',
        intents: ['HAS_SKILLS'],
      });
    });
  });

  test('allows multiple intents', async () => {
    completeOnboarding.mockResolvedValue('CONTACT_COLLABORATIVE_TEAM');

    render(<OnboardingPage user={{ uid: 'user-1' }} />);

    await userEvent.click(screen.getByRole('button', { name: /j'ai une idée/i }));
    await userEvent.click(screen.getByRole('button', { name: /je veux avancer immédiatement/i }));
    await userEvent.click(screen.getByRole('button', { name: /continuer/i }));

    await waitFor(() => {
      expect(completeOnboarding).toHaveBeenCalledWith({
        userId: 'user-1',
        intents: ['HAS_IDEA', 'MOVE_IMMEDIATELY'],
      });
    });
  });
});
