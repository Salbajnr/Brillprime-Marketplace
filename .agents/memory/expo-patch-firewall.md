---
name: Expo patch firewall
description: The workspace package firewall can delay newly published Expo SDK patch versions.
---

When `expo install --fix` recommends an Expo SDK patch that the package firewall blocks for its minimum release-age rule, keep the currently installed SDK-compatible versions rather than bypassing the gate. Validate the app with platform bundle exports and retry alignment after the release matures.

**Why:** The generated Expo 57 scaffold encountered this during setup, while iOS, Android, and web bundles still exported successfully.

**How to apply:** Treat this as temporary package-version skew, not an application-code failure. Report the blocked patch update and avoid forcing package resolution.
