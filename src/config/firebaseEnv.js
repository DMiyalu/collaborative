const requiredFirebaseEnvKeys = [
  'REACT_APP_FIREBASE_API_KEY',
  'REACT_APP_FIREBASE_AUTH_DOMAIN',
  'REACT_APP_FIREBASE_PROJECT_ID',
  'REACT_APP_FIREBASE_STORAGE_BUCKET',
  'REACT_APP_FIREBASE_MESSAGING_SENDER_ID',
  'REACT_APP_FIREBASE_APP_ID',
];

export function getFirebaseConfig(env = process.env) {
  return {
    apiKey: env.REACT_APP_FIREBASE_API_KEY,
    authDomain: env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: env.REACT_APP_FIREBASE_APP_ID,
  };
}

export function getMissingFirebaseEnvKeys(env = process.env) {
  return requiredFirebaseEnvKeys.filter((key) => !env[key]);
}

export function assertFirebaseEnv(env = process.env) {
  const missingKeys = getMissingFirebaseEnvKeys(env);

  if (missingKeys.length > 0) {
    throw new Error(`Missing Firebase environment variables: ${missingKeys.join(', ')}`);
  }
}
