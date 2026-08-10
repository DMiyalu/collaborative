import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { auth, db } from '../../lib/firebase/firebaseClient';
import { COLLECTIONS } from '../../domain/collaborative';

export async function signUpWithEmail({ email, password, username, firstName, lastName }) {
  const credential = await createUserWithEmailAndPassword(auth, email, password);
  const displayName = username || [firstName, lastName].filter(Boolean).join(' ');

  if (displayName) {
    await updateProfile(credential.user, { displayName });
  }

  await setDoc(doc(db, COLLECTIONS.users, credential.user.uid), {
    id: credential.user.uid,
    email: credential.user.email,
    username: username || '',
    firstName: firstName || '',
    lastName: lastName || '',
    displayName,
    onboardingCompleted: false,
    intents: [],
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });

  return credential.user;
}

export function signInWithEmail({ email, password }) {
  return signInWithEmailAndPassword(auth, email, password);
}

export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();
  const credential = await signInWithPopup(auth, provider);

  await setDoc(
    doc(db, COLLECTIONS.users, credential.user.uid),
    {
      id: credential.user.uid,
      email: credential.user.email,
      displayName: credential.user.displayName || '',
      photoURL: credential.user.photoURL || '',
      onboardingCompleted: false,
      intents: [],
      updatedAt: serverTimestamp(),
    },
    { merge: true },
  );

  return credential.user;
}

export function sendResetPasswordEmail(email) {
  return sendPasswordResetEmail(auth, email);
}

export function signOutUser() {
  return signOut(auth);
}

export function subscribeToAuthState(callback) {
  return onAuthStateChanged(auth, callback);
}
