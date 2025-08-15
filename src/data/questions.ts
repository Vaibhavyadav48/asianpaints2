import { Question } from '../types';

export const aestheticQuestions: Question[] = [
  {
    id: 'color-preference',
    question: 'What color palette appeals to you most?',
    options: [
      'Warm and earthy tones',
      'Cool and calming blues/greens',
      'Bold and vibrant colors',
      'Neutral and minimalist'
    ]
  },
  {
    id: 'style-preference',
    question: 'Which design style resonates with you?',
    options: [
      'Modern and contemporary',
      'Traditional and classic',
      'Eclectic and artistic',
      'Minimalist and clean'
    ]
  },
  {
    id: 'mood-preference',
    question: 'What mood do you want your room to create?',
    options: [
      'Cozy and intimate',
      'Energetic and vibrant',
      'Calm and peaceful',
      'Sophisticated and elegant'
    ]
  },
  {
    id: 'texture-preference',
    question: 'What textures do you prefer in your space?',
    options: [
      'Soft fabrics and cushions',
      'Natural wood and stone',
      'Smooth and sleek surfaces',
      'Mixed textures and patterns'
    ]
  },
  {
    id: 'lighting-preference',
    question: 'How do you prefer your room to be lit?',
    options: [
      'Bright and well-lit',
      'Warm and ambient',
      'Natural light focused',
      'Dramatic accent lighting'
    ]
  }
];