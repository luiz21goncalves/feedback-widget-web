import * as Popover from '@radix-ui/react-popover';

import { styled } from '../../styles';

export const Container = styled('div', {
  position: 'absolute',
  top: 'auto',
  left: 'auto',
  right: '1rem',
  bottom: '1rem',
  '@tablet': {
    right: '2rem',
    bottom: '2rem',
  },
});

export const Button = styled(Popover.Trigger, {
  background: '$brand',
  border: 'none',
  borderRadius: '$pill',
  height: '3rem',
  padding: '0 12px',
  color: '$textOnBrandColor',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',

  '&:hover span': {
    maxWidth: '200px',
    marginLeft: '0.5rem',
  },

  '&:focus': {
    outlineWidth: '2px',
    outlineStyle: 'solid',
    outlineColor: '$brandHover',
    outlineOffset: '2px',
  },
});

export const Label = styled('span', {
  fontSize: '1rem',
  lineHeight: '1.5rem',
  fontWeight: 500,
  maxWidth: 0,
  overflow: 'hidden',
  transition: 'max-width 500ms linear',
});

export const Content = styled(Popover.PopoverContent, {});
