import { ReactNode } from 'react';

import { CloseButtom } from '../../../CloseButton';
import * as S from './styles';

type FeedbackHeaderProps = {
  children: ReactNode;
};

export function FeedbackHeader(props: FeedbackHeaderProps) {
  const { children } = props;

  return (
    <header>
      <S.Title>{children}</S.Title>
      <CloseButtom />
    </header>
  );
}
