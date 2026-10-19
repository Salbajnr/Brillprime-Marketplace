import { readFileSync } from 'node:fs';

const app = JSON.parse(
  readFileSync(new URL('../app.json', import.meta.url), 'utf8'),
).expo;
const eas = JSON.parse(
  readFileSync(new URL('../eas.json', import.meta.url), 'utf8'),
);
const errors = [];

function expect(condition, message) {
  if (!condition) errors.push(message);
}

expect(app.name === 'BrillPrime', 'Expo app name must be BrillPrime.');
expect(
  app.ios?.bundleIdentifier === 'com.brillprime.app',
  'iOS bundle identifier must remain com.brillprime.app.',
);
expect(
  app.android?.package === 'com.brillprime.app',
  'Android application ID must remain com.brillprime.app.',
);
expect(
  /^\d+\.\d+\.\d+$/.test(app.version),
  'App version must use semantic version format (for example, 1.0.0).',
);
expect(
  /^\d+$/.test(app.ios?.buildNumber ?? ''),
  'iOS build number must be a numeric string.',
);
expect(
  Number.isInteger(app.android?.versionCode) && app.android.versionCode > 0,
  'Android version code must be a positive integer.',
);
expect(
  ['ios', 'android', 'web'].every((platform) =>
    app.platforms?.includes(platform),
  ),
  'iOS, Android, and web must all be enabled.',
);
expect(
  app.web?.output === 'static',
  'Web output must be configured for static hosting.',
);
expect(
  eas.cli?.appVersionSource === 'remote',
  'EAS must use remote build-number management.',
);

const profileExpectations = {
  development: { androidBuildType: 'apk', internal: true },
  preview: { androidBuildType: 'apk', internal: true },
  production: { androidBuildType: 'app-bundle', internal: false },
};

for (const [name, expected] of Object.entries(profileExpectations)) {
  const profile = eas.build?.[name];
  expect(Boolean(profile), `Missing EAS build profile: ${name}.`);
  if (!profile) continue;

  expect(profile.channel === name, `${name} profile channel must be ${name}.`);
  expect(
    profile.environment === name,
    `${name} profile must use the ${name} environment.`,
  );
  expect(
    profile.env?.EXPO_PUBLIC_APP_ENV === name,
    `${name} profile must expose EXPO_PUBLIC_APP_ENV=${name}.`,
  );
  expect(
    profile.android?.buildType === expected.androidBuildType,
    `${name} Android build type must be ${expected.androidBuildType}.`,
  );
  expect(
    (profile.distribution === 'internal') === expected.internal,
    `${name} distribution setting is incorrect.`,
  );
  expect(
    profile.autoIncrement === true,
    `${name} profile must auto-increment native build numbers.`,
  );
  expect(
    (profile.developmentClient === true) === (name === 'development'),
    `Only the development profile should build a development client.`,
  );
}

if (errors.length > 0) {
  console.error('BrillPrime configuration validation failed:');
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log(
    'BrillPrime app identifiers, platform settings, and EAS profiles are valid.',
  );
}
