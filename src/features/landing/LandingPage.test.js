import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LandingPage from './LandingPage';

describe('LandingPage', () => {
  test('renders the public landing page content', () => {
    render(<LandingPage onOpenAuth={jest.fn()} />);

    expect(screen.getByRole('heading', { name: /les projets rencontrent/i })).toBeInTheDocument();
    expect(screen.getByText(/pas un marketplace de freelances/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /le match n'est que le début/i })).toBeInTheDocument();
  });

  test('opens auth from the main hero CTA', async () => {
    const onOpenAuth = jest.fn();
    render(<LandingPage onOpenAuth={onOpenAuth} />);

    await userEvent.click(screen.getByRole('link', { name: /j'ai un projet/i }));

    expect(onOpenAuth).toHaveBeenCalled();
  });

  test('opens auth from an entry intent', async () => {
    const onOpenAuth = jest.fn();
    render(<LandingPage onOpenAuth={onOpenAuth} />);

    await userEvent.click(screen.getByRole('button', { name: /j'ai des compétences/i }));

    expect(onOpenAuth).toHaveBeenCalled();
  });
});
