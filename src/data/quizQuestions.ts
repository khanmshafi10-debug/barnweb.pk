import { QuizQuestion } from '../types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'primary-goal',
    question: 'What is your primary health or beauty focus today?',
    subtitle: 'Select the main area where you seek natural, unadulterated results.',
    options: [
      {
        label: 'Hair Growth & Scalp Vitality',
        tag: 'Hair Fall',
        description: 'Reduce hair thinning, boost root strength, soothe itchy or dry scalp'
      },
      {
        label: 'Clear Radiant Skin Glow',
        tag: 'Glowing Skin',
        description: 'Fade dark spots, soothe acne blemishes, restore natural facial radiance'
      },
      {
        label: 'Cellular Energy & Stamina',
        tag: 'Energy',
        description: 'Overcome chronic fatigue, elevate workout recovery, sustain daily focus'
      },
      {
        label: 'Deep Sleep & Stress Relief',
        tag: 'Stress',
        description: 'Calm evening anxiety, regulate cortisol levels, improve sleep depth'
      },
      {
        label: 'Immunity & Digestive Balance',
        tag: 'Immunity',
        description: 'Strengthen daily immune shields, calm bloated gut lining, absorb nutrients'
      }
    ]
  },
  {
    id: 'preference-type',
    question: 'Which product format do you prefer incorporating into your daily routine?',
    subtitle: 'Choose your preferred texture and application method.',
    options: [
      {
        label: 'Pure Raw Foods & Honey Jars',
        tag: 'grown',
        description: 'Sublime spoonfuls of wild honeys, A2 cultured ghee, or raw fermented ciders'
      },
      {
        label: 'High-Altitude Mineral Resins & Elixirs',
        tag: 'restored',
        description: 'Concentrated Shilajit resin, herbal adaptogens, and organic root powders'
      },
      {
        label: 'Topical Cold-Pressed Oils & Mists',
        tag: 'oils',
        description: 'Cold-pressed hair serums, pure facial hydrosols, and therapeutic oils'
      },
      {
        label: 'Curated 3-Step Routine Bundles',
        tag: 'bundles',
        description: 'Complete synergistic gift kits designed for maximum combined potency'
      }
    ]
  },
  {
    id: 'lifestyle-pace',
    question: 'How much time can you dedicate to your daily wellness ritual?',
    subtitle: 'We tailor recommendations to fit your real-world schedule.',
    options: [
      {
        label: '1 Minute Morning Boost',
        tag: 'Quick',
        description: 'Effortless spoonfuls, quick facial drops, or simple water dissolutions'
      },
      {
        label: '5-10 Minute Evening Sanctuary',
        tag: 'Ritual',
        description: 'Soothing scalp massages, warm herbal tea steeping, or face mask rituals'
      }
    ]
  }
];
