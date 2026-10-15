/**
 * Semantic design tokens for the mobile app.
 *
 * These tokens mirror the naming conventions used in web artifacts (index.css)
 * so that multi-artifact projects share a cohesive visual identity.
 *
 * Replace the placeholder values below with values that match the project's
 * brand. If a sibling web artifact exists, read its index.css and convert the
 * HSL values to hex so both artifacts use the same palette.
 *
 * To add dark mode, add a `dark` key with the same token names.
 * The useColors() hook will automatically pick it up.
 */

const colors = {
  light: {
    // Legacy aliases (kept for backward compatibility)
    text: '#10221F',
    tint: '#07866C',

    // Core surfaces
    background: '#F6F8F4',
    foreground: '#10221F',

    // Cards / elevated surfaces
    card: '#FFFFFF',
    cardForeground: '#10221F',

    // Primary action color (buttons, links, active states)
    primary: '#07866C',
    primaryForeground: '#ffffff',

    // Secondary / less-emphasis interactive surfaces
    secondary: '#E7F1EC',
    secondaryForeground: '#173D34',

    // Muted / subdued elements (dividers, timestamps, placeholders)
    muted: '#E9EFEB',
    mutedForeground: '#63746E',

    // Accent highlights (badges, selected items, focus rings)
    accent: '#F4E5B9',
    accentForeground: '#4C3B0F',

    // Destructive actions (delete, error states)
    destructive: '#C74343',
    destructiveForeground: '#ffffff',

    // Borders and input outlines
    border: '#D8E2DC',
    input: '#D8E2DC',
  },

  // Border radius (in px). Sync from the sibling web artifact's --radius
  // CSS variable. This value applies to cards, buttons, inputs, and modals.
  radius: 8,
};

export default colors;
