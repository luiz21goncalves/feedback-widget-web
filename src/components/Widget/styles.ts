import * as Popover from '@radix-ui/react-popover';

import { styled } from '../../styles';

export const Container = styled('div', {
  position: 'absolute',
  top: 'auto',
  left: 'auto',
  right: 40,
  bottom: 40,
});

export const Button = styled(Popover.Trigger, {
  background: '$brand',
  border: 'none',
  borderRadius: '$pill',
  height: 48,
  padding: '0 12px',
  color: '$textOnBrandColor',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',

  '&:hover span': {
    maxWidth: '200px',
    marginLeft: '8px',
  },
});

export const Label = styled('span', {
  fontSize: '16px',
  lineHeight: '24px',
  fontWeight: 500,
  maxWidth: 0,
  overflow: 'hidden',
  transition: 'max-width 500ms linear',
});

export const Content = styled(Popover.PopoverContent, {});
