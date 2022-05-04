import { CircleNotch } from 'phosphor-react';

import { keyframes, styled } from '../../styles';

const toSpin = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
});

export const Spinner = styled(CircleNotch, {
  animation: `${toSpin} 1s linear infinite`,
});
