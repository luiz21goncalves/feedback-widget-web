import { ChatTeardropDots } from 'phosphor-react';
import * as Popover from '@radix-ui/react-popover';

import { WidgetForm } from '../WidgetForm';
import * as S from './styles';

export function Widget() {
  return (
    <Popover.Root>
      <S.Container>
        <S.Content side="top">
          <WidgetForm />
        </S.Content>

        <S.Button>
          <ChatTeardropDots size={24} />
          <S.Label>Feedback</S.Label>
        </S.Button>
      </S.Container>
    </Popover.Root>
  );
}
