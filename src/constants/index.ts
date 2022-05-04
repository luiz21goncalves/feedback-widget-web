import bugSVG from '../assets/bug.svg';
import ideaSVG from '../assets/idea.svg';
import thoughtSVG from '../assets/thought.svg';

export const FEEDBACK_TYPES = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugSVG,
      alt: 'Imagem de um inseto',
    },
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaSVG,
      alt: 'Imagem de uma lâmpada',
    },
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtSVG,
      alt: 'Imagem de uma nuvem de pensamento',
    },
  },
};
