export interface Option {
  id: string;
  isDanger: boolean;
  img: string; // SVG string
  text: string;
  info: string;
}

export interface Round {
  title: string;
  desc: string;
  options: Option[];
}

export interface Badge {
  id: string;
  name: string;
  tier: 'gold' | 'silver' | 'bronze' | 'special';
  icon: string;
  color: string;
  borderColor: string;
  description: string;
  requirement: string;
  unlocked: boolean;
}

export interface GameStats {
  score: number;
  highScore: number;
  correctAnswers: number;
  totalQuestions: number;
  streak: number;
  fastestAnswerSec: number;
  unlockedBadgeIds: string[];
}
