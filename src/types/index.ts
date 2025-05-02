export interface OptionType {
  id: string;
  text: string;
  value: number;
}

export interface QuestionType {
  id: string;
  text: string;
  weight: number;
  options: OptionType[];
}

export interface ResultType {
  totalScore: number;
  maxPossibleScore: number;
  percentageScore: number;
  answers: Record<string, string>;
}