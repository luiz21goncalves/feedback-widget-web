import { FormEvent, useState } from 'react';

import { ArrowLeft } from 'phosphor-react';

import { FEEDBACK_TYPES } from '../../../../constants';
import { ScreenshotButton } from '../../ScreenshotButton';
import { FeedbackHeader } from '../FeedbackHeader';
import { FeedbackType } from '../FeedbackTypeStep';
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

  function handleSubmitFeedback(event: FormEvent) {
    event.preventDefault();

    console.log({
      screenshot,
      comment,
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
          placeholder="Conte com detalhes o que está acontecendo..."
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        />

        <S.Footer>
          <ScreenshotButton
            screenshot={screenshot}
            onScreenshotTook={setScreenshot}
          />
          <S.ButtonSubmit type="submit" disabled={comment.length === 0}>
            Enviar feedback
          </S.ButtonSubmit>
        </S.Footer>
      </S.Content>
    </>
  );
}
