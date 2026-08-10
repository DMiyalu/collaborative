import { doc, onSnapshot, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore';
import { COLLECTIONS, getOnboardingNextStep } from '../../domain/collaborative';
import { db } from '../../lib/firebase/firebaseClient';

export function subscribeToUserDocument(userId, callback) {
  if (!userId) {
    return () => {};
  }

  return onSnapshot(doc(db, COLLECTIONS.users, userId), (snapshot) => {
    callback(snapshot.exists() ? snapshot.data() : null);
  });
}

export async function completeOnboarding({ userId, intents }) {
  if (!userId) {
    throw new Error('A userId is required to complete onboarding.');
  }

  if (!Array.isArray(intents) || intents.length === 0) {
    throw new Error('Select at least one intent to complete onboarding.');
  }

  const nextStep = getOnboardingNextStep(intents);

  await updateDoc(doc(db, COLLECTIONS.users, userId), {
    intents,
    onboardingCompleted: true,
    onboardingCompletedAt: serverTimestamp(),
    recommendedNextStep: nextStep,
    updatedAt: serverTimestamp(),
  });

  return nextStep;
}

export function ensureUserDocument({ user }) {
  return setDoc(
    doc(db, COLLECTIONS.users, user.uid),
    {
      id: user.uid,
      email: user.email || '',
      displayName: user.displayName || '',
      photoURL: user.photoURL || '',
      onboardingCompleted: false,
      intents: [],
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    },
    { merge: true },
  );
}
