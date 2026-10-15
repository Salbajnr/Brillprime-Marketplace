function requirePublicEnv(name: string, value: string | undefined): string {
  if (!value?.trim()) {
    throw new Error(
      `Missing ${name}. Set it in the environment for the current app profile.`,
    );
  }

  return value.trim();
}

export type FirebaseClientConfig = {
  apiKey: string;
  authDomain: string;
  projectId: string;
  appId: string;
};

export type SupabaseClientConfig = {
  url: string;
  anonymousKey: string;
};

export function getFirebaseClientConfig(): FirebaseClientConfig {
  return {
    apiKey: requirePublicEnv(
      'EXPO_PUBLIC_FIREBASE_API_KEY',
      process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
    ),
    authDomain: requirePublicEnv(
      'EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN',
      process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
    ),
    projectId: requirePublicEnv(
      'EXPO_PUBLIC_FIREBASE_PROJECT_ID',
      process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
    ),
    appId: requirePublicEnv(
      'EXPO_PUBLIC_FIREBASE_APP_ID',
      process.env.EXPO_PUBLIC_FIREBASE_APP_ID,
    ),
  };
}

export function getSupabaseClientConfig(): SupabaseClientConfig {
  return {
    url: requirePublicEnv(
      'EXPO_PUBLIC_SUPABASE_URL',
      process.env.EXPO_PUBLIC_SUPABASE_URL,
    ),
    anonymousKey: requirePublicEnv(
      'EXPO_PUBLIC_SUPABASE_ANON_KEY',
      process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY,
    ),
  };
}
