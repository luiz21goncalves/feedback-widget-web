import { styled } from '../../../../styles';

export const Container = styled('div', {
  display: 'flex',
  padding: '2rem 0',
  gap: '0.5rem',
  width: '100%',
});

export const FeedbackButton = styled('button', {
  background: '$surfaceSecondary',
  borderRadius: '0.5rem',
  padding: '1.25rem 0',
  width: '6rem',
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.25',
  border: '2px solid transparent',

  '&:hover, &:focus': {
    borderColor: '$brandHover',
  },
});
