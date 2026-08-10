import { useState } from 'react';
import {
  sendResetPasswordEmail,
  signInWithEmail,
  signInWithGoogle,
  signUpWithEmail,
} from './authService';
import './AuthPage.css';

const AUTH_MODES = {
  login: 'login',
  signup: 'signup',
};

function MailIcon() {
  return (
    <svg aria-hidden="true" fill="none" height="22" viewBox="0 0 24 24" width="22">
      <path
        d="M4 6.5h16v11H4v-11Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path d="m5 7.5 7 5 7-5" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.8" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg aria-hidden="true" fill="none" height="22" viewBox="0 0 24 24" width="22">
      <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M4.5 20a7.5 7.5 0 0 1 15 0"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg aria-hidden="true" fill="none" height="22" viewBox="0 0 24 24" width="22">
      <path
        d="M6.5 10.5h11v8h-11v-8Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg aria-hidden="true" fill="none" height="22" viewBox="0 0 24 24" width="22">
      <path
        d="M3.5 12s3.2-5 8.5-5 8.5 5 8.5 5-3.2 5-8.5 5-8.5-5-8.5-5Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="M12 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function getFirebaseErrorMessage(error) {
  const code = error?.code || '';

  if (code.includes('auth/invalid-credential') || code.includes('auth/wrong-password')) {
    return 'Email ou mot de passe incorrect. Vérifie tes identifiants puis réessaie.';
  }

  if (code.includes('auth/email-already-in-use')) {
    return 'Cet email a déjà un compte. Connecte-toi avec cet email ou utilise la récupération de mot de passe.';
  }

  if (code.includes('auth/user-not-found')) {
    return 'Aucun compte ne correspond à cet email. Tu peux créer un compte si tu es nouveau sur Collaborative.';
  }

  if (code.includes('auth/invalid-email')) {
    return 'Adresse email invalide. Vérifie le format, par exemple nom@domaine.com.';
  }

  if (code.includes('auth/weak-password')) {
    return 'Mot de passe trop court. Utilise au moins 6 caractères pour sécuriser ton compte.';
  }

  if (code.includes('auth/too-many-requests')) {
    return 'Trop de tentatives en peu de temps. Patiente quelques minutes avant de réessayer.';
  }

  if (code.includes('auth/network-request-failed')) {
    return 'Connexion impossible pour le moment. Vérifie ta connexion internet puis réessaie.';
  }

  if (code.includes('auth/popup-closed-by-user')) {
    return 'La connexion Google a été fermée avant la fin. Relance Google pour terminer la connexion.';
  }

  if (code.includes('auth/popup-blocked')) {
    return 'La fenêtre Google a été bloquée par le navigateur. Autorise les popups pour continuer.';
  }

  if (code.includes('auth/cancelled-popup-request')) {
    return 'Une connexion Google est déjà en cours. Termine-la ou relance l’action.';
  }

  return 'Une erreur est survenue. Réessaie dans un instant ou contacte l’équipe Collaborative si le problème continue.';
}

export default function AuthPage() {
  const [mode, setMode] = useState(AUTH_MODES.login);
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    remember: false,
  });
  const [status, setStatus] = useState({ type: 'idle', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isLogin = mode === AUTH_MODES.login;

  function updateField(event) {
    const { name, value, checked, type } = event.target;
    setFormValues((currentValues) => ({
      ...currentValues,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }

  function switchMode(nextMode) {
    setMode(nextMode);
    setStatus({ type: 'idle', message: '' });
    setShowPassword(false);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus({ type: 'idle', message: '' });

    if (!isLogin && formValues.password !== formValues.confirmPassword) {
      setStatus({
        type: 'error',
        message: 'Les mots de passe ne correspondent pas.',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      if (isLogin) {
        await signInWithEmail({
          email: formValues.email,
          password: formValues.password,
        });
      } else {
        await signUpWithEmail({
          email: formValues.email,
          username: formValues.username,
          password: formValues.password,
        });
      }

      setStatus({
        type: 'success',
        message: isLogin ? 'Connexion réussie.' : 'Compte créé avec succès.',
      });
    } catch (error) {
      setStatus({ type: 'error', message: getFirebaseErrorMessage(error) });
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleResetPassword() {
    if (!formValues.email) {
      setStatus({
        type: 'error',
        message: 'Entre ton email pour recevoir le lien de récupération.',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await sendResetPasswordEmail(formValues.email);
      setStatus({
        type: 'success',
        message: 'Lien de récupération envoyé.',
      });
    } catch (error) {
      setStatus({ type: 'error', message: getFirebaseErrorMessage(error) });
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleGoogleAuth() {
    setIsSubmitting(true);
    setStatus({ type: 'idle', message: '' });

    try {
      await signInWithGoogle();
      setStatus({ type: 'success', message: 'Connexion Google réussie.' });
    } catch (error) {
      setStatus({ type: 'error', message: getFirebaseErrorMessage(error) });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="auth-shell">
      <section className="auth-panel" aria-labelledby="auth-title">
        <img className="auth-logo" src="/icon.png" alt="Collaborative" />

        <header className="auth-header">
          <h1 id="auth-title">{isLogin ? 'Se connecter' : 'Créer un compte'}</h1>
          <p>
            {isLogin
              ? 'Accédez à votre compte pour continuer.'
              : 'Rejoignez Collaborative pour construire ensemble.'}
          </p>
        </header>

        <form className="auth-form" onSubmit={handleSubmit}>
          <label className="field">
            <span>Email</span>
            <span className="input-shell">
              <span className="input-icon" aria-hidden="true">
                <MailIcon />
              </span>
              <input
                aria-label="Email"
                autoComplete="email"
                name="email"
                onChange={updateField}
                placeholder="votre@email.com"
                required
                type="email"
                value={formValues.email}
              />
            </span>
          </label>

          {!isLogin && (
            <label className="field">
              <span>Username</span>
              <span className="input-shell">
                <span className="input-icon" aria-hidden="true">
                  <UserIcon />
                </span>
                <input
                  aria-label="Username"
                  autoComplete="username"
                  name="username"
                  onChange={updateField}
                  placeholder="votre_username"
                  required
                  type="text"
                  value={formValues.username}
                />
              </span>
            </label>
          )}

          <label className="field">
            <span>Mot de passe</span>
            <span className="input-shell">
              <span className="input-icon" aria-hidden="true">
                <LockIcon />
              </span>
              <input
                aria-label="Mot de passe"
                autoComplete={isLogin ? 'current-password' : 'new-password'}
                name="password"
                onChange={updateField}
                placeholder="Votre mot de passe"
                required
                type={showPassword ? 'text' : 'password'}
                value={formValues.password}
              />
              <button
                aria-label={showPassword ? 'Masquer le mot de passe' : 'Afficher le mot de passe'}
                className="icon-button"
                onClick={() => setShowPassword((currentValue) => !currentValue)}
                type="button"
              >
                <EyeIcon />
              </button>
            </span>
          </label>

          {!isLogin && (
            <label className="field">
              <span>Confirmer mot de passe</span>
              <span className="input-shell">
                <span className="input-icon" aria-hidden="true">
                  <LockIcon />
                </span>
                <input
                  aria-label="Confirmer mot de passe"
                  autoComplete="new-password"
                  name="confirmPassword"
                  onChange={updateField}
                  placeholder="Confirmez votre mot de passe"
                  required
                  type={showPassword ? 'text' : 'password'}
                  value={formValues.confirmPassword}
                />
              </span>
            </label>
          )}

          {isLogin && (
            <div className="auth-row">
              <label className="remember-row">
                <input
                  checked={formValues.remember}
                  name="remember"
                  onChange={updateField}
                  type="checkbox"
                />
                <span>Se souvenir de moi</span>
              </label>
              <button className="text-button" onClick={handleResetPassword} type="button">
                Mot de passe oublié ?
              </button>
            </div>
          )}

          {status.message && (
            <p className={`auth-status auth-status-${status.type}`} role="status">
              {status.message}
            </p>
          )}

          <button className="primary-button" disabled={isSubmitting} type="submit">
            {isSubmitting
              ? 'Veuillez patienter...'
              : isLogin
                ? 'Se connecter'
                : 'Créer un compte'}
          </button>
        </form>

        <div className="auth-divider">
          <span>ou</span>
        </div>

        <button className="google-button" disabled={isSubmitting} onClick={handleGoogleAuth} type="button">
          <span aria-hidden="true">G</span>
          Continuer avec Google
        </button>

        <p className="auth-switch">
          {isLogin ? 'Pas encore de compte ?' : 'Déjà un compte ?'}
          <button
            className="text-button"
            onClick={() => switchMode(isLogin ? AUTH_MODES.signup : AUTH_MODES.login)}
            type="button"
          >
            {isLogin ? 'Créer un compte' : 'Se connecter'}
          </button>
        </p>

        <footer className="auth-footer">
          <a href="/terms">Conditions d'utilisation</a>
          <span aria-hidden="true">·</span>
          <a href="/privacy">Confidentialité</a>
        </footer>
      </section>
    </main>
  );
}
