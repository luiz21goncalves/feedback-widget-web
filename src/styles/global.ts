import { globalCss } from '.';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  'button, body': {
    fontFamily: '$default',
    color: '$textPrimary',
  },

  'html, body, #root': {
    width: '100vw',
    height: '100vh',
  },

  body: {
    backgroundColor: '$background',
  },

  button: {
    background: 'transparent',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
  },
});
