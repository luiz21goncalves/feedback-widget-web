import { FEEDBACK_TYPES } from '../../../../constants';
import { FeedbackHeader } from '../FeedbackHeader';
import * as S from './styles';

export type FeedbackType = keyof typeof FEEDBACK_TYPES;

type FeedbackTypeStepProps = {
  onFeedbackTypeChanged: (feedbackType: FeedbackType) => void;
};

export function FeedbackTypeStep(props: FeedbackTypeStepProps) {
  const { onFeedbackTypeChanged } = props;
  return (
    <>
      <FeedbackHeader>Deixe seu feedback</FeedbackHeader>

      <S.Container>
        {Object.entries(FEEDBACK_TYPES).map(([key, { title, image }]) => (
          <S.FeedbackButton
            key={key}
            type="button"
            onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
          >
            <img src={image.source} alt={image.alt} />
            <span>{title}</span>
          </S.FeedbackButton>
        ))}
      </S.Container>
    </>
  );
}
