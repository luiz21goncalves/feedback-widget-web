import { styled } from '../../../../styles';

export const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '2.5rem 0',
  minWidth: '304px',

  '& span': {
    fontSize: '1.25rem',
    lineHeight: '1.5rem',
    marginTop: '0.5rem',
  },

  '& button': {
    padding: '0.5rem 1.5rem',
    marginTop: '1.5rem',
    borderRadius: '0.25rem',
    background: '$surfaceSecondary',
    transition: 'all 200ms',
    fontSize: '0.875rem',
    lineHeight: '1.5rem',
  },

  '& button:hover': {
    background: '$surfaceSecondaryHover',
  },

  '& button:focus': {
    outlineWidth: '2px',
    outlineStyle: 'solid',
    outlineColor: '$brandHover',
    outlineOffset: '2px',
  },
});
