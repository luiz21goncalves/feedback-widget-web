import { styled } from '../../../styles';

export const Container = styled('button', {
  padding: '0.5rem',
  background: '$surfaceSecondary',
  borderRadius: '0.25rem',
  borderColor: 'transparent',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: '2.5rem',
  transition: 'all 200ms',

  '&:hover': {
    background: '$surfaceSecondaryHover',
  },

  '&:focus': {
    outlineWidth: '2px',
    outlineStyle: 'solid',
    outlineColor: '$brandHover',
    outlineOffset: '2px',
  },
});

export const ButtonImage = styled('button', {
  padding: '0.25rem',
  width: '2.5rem',
  height: '2.5rem',
  borderRadius: '0.25rem',
  borderColor: 'transparent',
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'flex-end',
  color: '$textSecondary',

  '&:hover': {
    color: '$tooltip',
  },
});
