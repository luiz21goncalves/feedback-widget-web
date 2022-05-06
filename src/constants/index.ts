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
    placeholder:
      'Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo...',
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaSVG,
      alt: 'Imagem de uma lâmpada',
    },

    placeholder:
      'Teve uma ideia de melhoria ou de nova funcionalidade? Conta pra gente!',
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtSVG,
      alt: 'Imagem de uma nuvem de pensamento',
    },
    placeholder: 'Queremos te ouvir. O que você gostaria de nos dizer? ',
  },
};
