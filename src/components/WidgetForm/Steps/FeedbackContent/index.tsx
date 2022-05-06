import { FormEvent, useState } from 'react';

import { ArrowLeft } from 'phosphor-react';

import { FEEDBACK_TYPES } from '../../../../constants';
import { ScreenshotButton } from '../../ScreenshotButton';
import { FeedbackHeader } from '../FeedbackHeader';
import { FeedbackType } from '../FeedbackTypeStep';
import { api } from '../../../../lib/api';
import { Loading } from '../../../Loading';
import * as S from './styles';

type FeedbackContentStepProps = {
  feedbackType: FeedbackType;
  onFeedbackRestartRequested: () => void;
  onFeedbackSent: (value: boolean) => void;
};

export function FeedbackContentStep(props: FeedbackContentStepProps) {
  const { feedbackType, onFeedbackRestartRequested, onFeedbackSent } = props;
  const feedbackTypeInfo = FEEDBACK_TYPES[feedbackType];

  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState('');
  const [isSenddingFeedback, setIsSenddingFeedback] = useState(false);

  async function handleSubmitFeedback(event: FormEvent) {
    event.preventDefault();
    setIsSenddingFeedback(true);

    await api.post('/feedbacks', {
      type: feedbackType,
      comment,
      screenshot,
    });

    onFeedbackSent(true);
  }

  return (
    <>
      <FeedbackHeader>
        <S.GoBackButton type="button" onClick={onFeedbackRestartRequested}>
          <ArrowLeft weight="bold" size="1rem" />
        </S.GoBackButton>

        <S.Image
          src={feedbackTypeInfo.image.source}
          alt={feedbackTypeInfo.image.alt}
        />

        {feedbackTypeInfo.title}
      </FeedbackHeader>

      <S.Content onSubmit={handleSubmitFeedback}>
        <textarea
          placeholder={feedbackTypeInfo.placeholder}
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        />

        <S.Footer>
          <ScreenshotButton
            screenshot={screenshot}
            onScreenshotTook={setScreenshot}
          />
          <S.ButtonSubmit
            type="submit"
            disabled={comment.length === 0 || isSenddingFeedback}
          >
            {isSenddingFeedback ? <Loading /> : 'Enviar feedback'}
          </S.ButtonSubmit>
        </S.Footer>
      </S.Content>
    </>
  );
}
