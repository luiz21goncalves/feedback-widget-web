import { styled } from '../../styles';

export const Container = styled('div', {
  background: '$surfacePrimary',
  borderRadius: '1rem',
  marginBottom: '1rem',
  padding: '1rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  boxShadow: '0px 8px 32px rgba(0, 0, 0, 0.15)',
  color: '$textPrimary',
  width: 'calc(100vw - 2rem)',

  '@tablet': {
    width: 'fit-content',
  },
});

export const Footer = styled('footer', {
  fontSize: '0.75rem',
  lineHeight: '1rem',
  color: '$textSecondary',

  '& a': {
    textDecoration: 'underline',
    color: '$textSecondary',
    textUnderlineOffset: '2px',
  },
});
