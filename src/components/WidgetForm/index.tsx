import { useState } from 'react';

import { FeedbackContentStep } from './Steps/FeedbackContent';
import { FeedbackSeccessStep } from './Steps/FeedbackSuccessStep';
import { FeedbackType, FeedbackTypeStep } from './Steps/FeedbackTypeStep';
import * as S from './styles';

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<null | FeedbackType>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleResetFeedbackType() {
    setFeedbackSent(false);
    setFeedbackType(null);
  }

  return (
    <S.Container>
      {feedbackSent ? (
        <FeedbackSeccessStep
          onFeedbackRestartRequested={handleResetFeedbackType}
        />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              feedbackType={feedbackType}
              onFeedbackRestartRequested={handleResetFeedbackType}
              onFeedbackSent={setFeedbackSent}
            />
          )}
        </>
      )}

      <S.Footer>
        Feito com ♥ pela{' '}
        <a
          href="http://www.rocketseat.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          Rocketseat
        </a>
      </S.Footer>
    </S.Container>
  );
}
