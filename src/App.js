import { useEffect, useState } from 'react';
import './App.css';
import AuthPage from './features/auth/AuthPage';
import { signOutUser, subscribeToAuthState } from './features/auth/authService';
import LandingPage from './features/landing/LandingPage';
import OnboardingPage from './features/onboarding/OnboardingPage';
import { subscribeToUserDocument } from './features/users/userService';

function LoadingScreen() {
  return (
    <main className="app-loading">
      <img src="/icon.png" alt="Collaborative" />
      <p>Chargement...</p>
    </main>
  );
}

function HomeShell({ userDoc }) {
  const nextStepLabels = {
    CREATE_PROJECT: 'Créer ton premier projet',
    CREATE_TALENT_PROFILE: 'Compléter ton profil talent',
    CONTACT_COLLABORATIVE_TEAM: "Parler à l'équipe Collaborative",
    DISCOVER: 'Découvrir les opportunités',
  };

  return (
    <main className="home-shell">
      <section className="home-panel">
        <img src="/icon.png" alt="Collaborative" />
        <p className="home-kicker">Collaborative MVP</p>
        <h1>Bienvenue{userDoc?.username ? `, ${userDoc.username}` : ''}</h1>
        <p>
          Ton onboarding est terminé. La prochaine étape recommandée est prête pour le
          prochain module.
        </p>
        <div className="home-next-step">
          {nextStepLabels[userDoc?.recommendedNextStep] || nextStepLabels.DISCOVER}
        </div>
        <button type="button" onClick={signOutUser}>
          Se déconnecter
        </button>
      </section>
    </main>
  );
}

function App() {
  const [authUser, setAuthUser] = useState(null);
  const [userDoc, setUserDoc] = useState(null);
  const [isAuthLoading, setIsAuthLoading] = useState(true);
  const [isUserLoading, setIsUserLoading] = useState(false);
  const [isAuthRequested, setIsAuthRequested] = useState(false);

  useEffect(() => {
    return subscribeToAuthState((nextUser) => {
      setAuthUser(nextUser);
      setUserDoc(null);
      setIsAuthLoading(false);
      setIsUserLoading(Boolean(nextUser));
    });
  }, []);

  useEffect(() => {
    if (!authUser) {
      setIsUserLoading(false);
      return undefined;
    }

    return subscribeToUserDocument(authUser.uid, (nextUserDoc) => {
      setUserDoc(nextUserDoc);
      setIsUserLoading(false);
    });
  }, [authUser]);

  if (isAuthLoading || isUserLoading) {
    return <LoadingScreen />;
  }

  if (!authUser) {
    return isAuthRequested ? <AuthPage /> : <LandingPage onOpenAuth={() => setIsAuthRequested(true)} />;
  }

  if (!userDoc?.onboardingCompleted) {
    return <OnboardingPage user={authUser} />;
  }

  return <HomeShell userDoc={userDoc} />;
}

export default App;
