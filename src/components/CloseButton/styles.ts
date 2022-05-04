import * as Popover from '@radix-ui/react-popover';

import { styled } from '../../styles';

export const Container = styled(Popover.Close, {
  position: 'absolute',
  top: '1.25rem',
  right: '1.25rem',
  color: '$textSecondary',
  transition: 'all 200ms',

  '&:hover': {
    color: '$tooltip',
  },
});
