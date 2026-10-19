# BrillPrime Mobile

Expo Router foundation for the BrillPrime consumer and merchant apps. This
checkpoint contains the project setup only; marketplace screens and workflows
are intentionally not implemented yet.

## Project setup

- App ID: `com.brillprime.app` on iOS and Android
- Expo SDK: 57
- Navigation: Expo Router, rooted at `src/app`
- Server state: TanStack React Query
- Styling: React Native `StyleSheet` and local semantic color tokens
- Authentication provider: Firebase
- Backend services: Supabase
- TypeScript: strict mode

Firebase and Supabase SDK packages are installed. The app does not initialize
either service until feature work is approved and valid project configuration is
provided.

## Environment configuration

Copy the matching `.env.*.example` file to `.env.local` for local development,
then fill in the public client configuration for your Firebase and Supabase
projects. `.env.local` is ignored by Git.

The local workflow sets `EXPO_PUBLIC_APP_ENV=development`. EAS profiles set the
same value for their matching `development`, `preview`, or `production`
environment. Configure the Firebase and Supabase client values separately for
each environment. `EXPO_PUBLIC_*` values are embedded in the app bundle; never
put a Firebase service-account key or Supabase service-role key in the mobile
app. Use the Supabase anonymous key with server-side authorization policies.

The scaffold includes a React error boundary with a recoverable fallback and
logs unhandled UI exceptions to the app console. Remote crash-report ingestion
is not connected yet.

## Run and verify

- **iOS and Android:** start the `artifacts/brillprime-mobile: expo` workflow,
  then use Replit's phone preview/QR flow with Expo Go. The current screen is
  only the scaffold confirmation screen.
- **Web:** run `pnpm --filter @workspace/brillprime-mobile run web:export` to
  export the static web build to `dist/`. `pnpm run expo:check` exports the iOS,
  Android, and web bundles for a compile check.
- **Checks:** from the workspace root, run
  `pnpm --filter @workspace/brillprime-mobile run typecheck`,
  `pnpm --filter @workspace/brillprime-mobile run lint`,
  `pnpm --filter @workspace/brillprime-mobile run format:check`, and
  `pnpm --filter @workspace/brillprime-mobile run eas:validate`.

The development EAS profile builds a custom development client; Expo Go remains
available for checking the current scaffold. Features that use native-only
modules will need a custom development build.

## Release profiles

| Profile       | Distribution                | Android artifact         | App environment |
| ------------- | --------------------------- | ------------------------ | --------------- |
| `development` | Internal development client | APK                      | `development`   |
| `preview`     | Internal tester build       | APK                      | `preview`       |
| `production`  | Store release               | Android App Bundle (AAB) | `production`    |

All three profiles use the fixed iOS bundle identifier and Android application
ID `com.brillprime.app`, and automatically increment native build numbers. That
means installing a build from another profile replaces the same app on a
device. iOS internal and production distribution still require Apple signing
and App Store Connect setup. The production Android profile is configured to
produce an AAB; Google Play submission is not supported by Replit's current
mobile publishing flow.

## CI and native builds

GitHub Actions runs lint, strict TypeScript checks, EAS profile validation, and
Expo bundle exports for iOS, Android, and web. The CI export verifies Metro
bundling, but it does not run a cloud EAS native build. The EAS development,
preview, and production profiles are configured in `eas.json`.

## Source layout

- `src/app` — Expo Router routes
- `src/components` — shared UI and error-boundary components
- `src/features` — future consumer and merchant feature modules
- `src/hooks` — shared hooks
- `src/lib` — service configuration and shared utilities
