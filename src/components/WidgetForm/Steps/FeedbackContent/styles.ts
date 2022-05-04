import { styled } from '../../../../styles';

export const Image = styled('img', {
  width: '1.5rem',
  height: '1.5rem',
});

export const GoBackButton = styled('button', {
  position: 'absolute',
  top: '1.25rem',
  left: '1.25rem',
  color: '$textSecondary',
  transition: 'all 200ms',

  '&:hover': {
    color: '$tooltip',
  },
});

export const Content = styled('form', {
  width: '100%',
  margin: '1rem 0',

  '& textarea': {
    width: '100%',
    minWidth: '304px',
    minHeight: '112px',
    color: '$textPrimary',
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    background: 'transparent',
    padding: '0.5rem 0.75rem',
    fontFamily: '$default',
    border: '1px solid',
    borderColor: '$stroke',
    borderRadius: '0.25rem',
    resize: 'none',
  },

  '& textarea::placeholder': {
    color: '$textSecondary',
  },

  '& textarea:focus': {
    borderColor: '$brand',
    outline: 'none',
  },

  '::-webkit-scrollbar': {
    width: '0.5rem',
  },

  '::-webkit-scrollbar-track': {
    background: 'transparent',
  },

  '::-webkit-scrollbar-thumb': {
    background: '$surfaceSecondaryHover',
    borderRadius: '$pill',
  },
});

export const ButtonSubmit = styled('button', {
  padding: '0.5rem',
  background: '$brand',
  borderRadius: '0.25rem',
  borderColor: 'transparent',
  flex: '1',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '0.875rem',
  lineHeight: '1.5rem',
  fontWeight: 500,

  '&:hover': {
    background: '$brandHover',
  },

  '&:focus': {
    outlineWidth: '2px',
    outlineStyle: 'solid',
    outlineColor: '$brandHover',
    outlineOffset: '2px',
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  '&:disabled:hover': {
    background: '$brand',
  },
});

export const Footer = styled('footer', {
  display: 'flex',
  gap: '0.5rem',
  marginTop: '0.5rem',
});
