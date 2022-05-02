import { ChatTeardropDots } from 'phosphor-react';
import * as Popover from '@radix-ui/react-popover';

import * as S from './styles';

export function Widget() {
  return (
    <Popover.Root>
      <S.Container>
        <S.Content>Hello world</S.Content>

        <S.Button>
          <ChatTeardropDots size={24} />
          <S.Label>Feedback</S.Label>
        </S.Button>
      </S.Container>
    </Popover.Root>
  );
}
