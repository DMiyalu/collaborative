import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { assertFirebaseEnv, getFirebaseConfig } from '../../config/firebaseEnv';

assertFirebaseEnv();

const firebaseApp = initializeApp(getFirebaseConfig());

export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);
export { firebaseApp };
