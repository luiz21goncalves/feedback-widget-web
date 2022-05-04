import { useState } from 'react';

import { Camera, Trash } from 'phosphor-react';
import html2canvas from 'html2canvas';

import * as S from './styles';
import { Loading } from '../../Loading';

type ScreenshotButtonProps = {
  onScreenshotTook: (screenshot: string | null) => void;
  screenshot: string | null;
};

export function ScreenshotButton(props: ScreenshotButtonProps) {
  const { onScreenshotTook, screenshot } = props;

  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

  async function handleTakeScreenshot() {
    setIsTakingScreenshot(true);

    const canvas = await html2canvas(document.querySelector('html')!);
    const base64Image = canvas.toDataURL('image/png');

    onScreenshotTook(base64Image);
    setIsTakingScreenshot(false);
  }

  if (screenshot) {
    return (
      <S.ButtonImage
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: 'right bottom',
          backgroundSize: 180,
        }}
        onClick={() => onScreenshotTook(null)}
        type="button"
      >
        <Trash weight="fill" size="1rem" />
      </S.ButtonImage>
    );
  }

  return (
    <S.Container type="button" onClick={handleTakeScreenshot}>
      {isTakingScreenshot ? <Loading /> : <Camera size="1.5rem" />}
    </S.Container>
  );
}
