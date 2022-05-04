import { CloseButtom } from '../../../CloseButton';
import * as S from './styles';
import successSVG from '../../../../assets/success.svg';

type FeedbackSuccessStepProps = {
  onFeedbackRestartRequested: () => void;
};

export function FeedbackSeccessStep(props: FeedbackSuccessStepProps) {
  const { onFeedbackRestartRequested } = props;

  return (
    <>
      <header>
        <CloseButtom />
      </header>
      <S.Content>
        <img src={successSVG} alt="ícone de sucesso" />

        <span>Agradecemos o feedback!</span>

        <button type="button" onClick={onFeedbackRestartRequested}>
          Quero enviar outro
        </button>
      </S.Content>
    </>
  );
}
