export interface StudentInfo {
  school: string;
  gradeClass: string;
  number: string;
  name: string;
}

export interface OxQuizQuestion {
  id: number;
  question: string;
  answer: 'O' | 'X';
  explanation: string;
}

export interface MultipleChoiceQuestion {
  id: number;
  question: string;
  options: string[];
  answerIndex: number;
  explanation: string;
}

export interface MatchingItem {
  id: string;
  transportName: string;
  iconName: string;
  characteristic: string;
  category: 'past' | 'land' | 'sea' | 'air';
}

export interface FutureIdea {
  title: string;
  description: string;
  features: string[];
  ecoFriendly: boolean;
  speed: string;
}
