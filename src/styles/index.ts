import { createStitches } from '@stitches/react';

export const { globalCss, styled } = createStitches({
  theme: {
    colors: {
      brand: '#8257E5',
      brandHover: '#996DFF',
      textOnBrandColor: '#FFFFFF',
      surfacePrimary: '#18181B',
      surfaceSecondary: '#27272A',
      surfaceSecondaryHover: '#3F3F46',
      stroke: '#52525B',
      tooltip: '#F4F4F5',
      textPrimary: '#f4f4f5',
      textSecondary: '#A1A1AA',
      textOnTooltip: ' #27272A',
      background: '#09090A',
    },

    fonts: {
      default: 'Inter, sans-serif;',
    },

    radii: {
      pill: '9999px',
    },
  },
});
