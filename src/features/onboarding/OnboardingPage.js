import { useState } from 'react';
import { USER_INTENT_OPTIONS } from '../../domain/collaborative';
import { completeOnboarding } from '../users/userService';
import './OnboardingPage.css';

export default function OnboardingPage({ user }) {
  const [selectedIntents, setSelectedIntents] = useState([]);
  const [status, setStatus] = useState({ type: 'idle', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  function toggleIntent(intent) {
    setStatus({ type: 'idle', message: '' });
    setSelectedIntents((currentIntents) =>
      currentIntents.includes(intent)
        ? currentIntents.filter((currentIntent) => currentIntent !== intent)
        : [...currentIntents, intent],
    );
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (selectedIntents.length === 0) {
      setStatus({
        type: 'error',
        message: 'Choisis au moins une réponse pour personnaliser ton expérience.',
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: 'idle', message: '' });

    try {
      await completeOnboarding({
        userId: user.uid,
        intents: selectedIntents,
      });
      setStatus({ type: 'success', message: 'Préférences enregistrées.' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: "Impossible d'enregistrer tes choix pour le moment. Réessaie dans un instant.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="onboarding-shell">
      <section className="onboarding-panel" aria-labelledby="onboarding-title">
        <img className="onboarding-logo" src="/icon.png" alt="Collaborative" />

        <div className="onboarding-kicker">Bienvenue sur Collaborative</div>

        <header className="onboarding-header">
          <h1 id="onboarding-title">Qu’est-ce qui t’amène sur Collaborative ?</h1>
          <p>Choisis une ou plusieurs réponses. Tu pourras toujours ajuster ton parcours ensuite.</p>
        </header>

        <form className="onboarding-form" onSubmit={handleSubmit}>
          <div className="intent-grid">
            {USER_INTENT_OPTIONS.map((option) => {
              const isSelected = selectedIntents.includes(option.value);

              return (
                <button
                  aria-pressed={isSelected}
                  className={`intent-card ${isSelected ? 'intent-card-selected' : ''}`}
                  key={option.value}
                  onClick={() => toggleIntent(option.value)}
                  type="button"
                >
                  <span className="intent-check" aria-hidden="true">
                    {isSelected ? '✓' : ''}
                  </span>
                  <span className="intent-content">
                    <strong>{option.title}</strong>
                    <span>{option.description}</span>
                  </span>
                </button>
              );
            })}
          </div>

          {status.message && (
            <p className={`onboarding-status onboarding-status-${status.type}`} role="status">
              {status.message}
            </p>
          )}

          <button className="onboarding-primary" disabled={isSubmitting} type="submit">
            {isSubmitting ? 'Enregistrement...' : 'Continuer'}
          </button>
        </form>
      </section>
    </main>
  );
}
