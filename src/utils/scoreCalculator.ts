import { QuestionType, ResultType } from '../types';

export const calculateResults = (
  questions: QuestionType[],
  answers: Record<string, string>
): ResultType => {
  let totalScore = 0;
  let maxPossibleScore = 0;
  
  questions.forEach(question => {
    const selectedOptionId = answers[question.id];
    
    if (selectedOptionId) {
      const selectedOption = question.options.find(option => option.id === selectedOptionId);
      if (selectedOption) {
        // Multiply the option value by the question weight
        totalScore += selectedOption.value * question.weight;
      }
    }
    
    // Calculate max possible score by using the highest value option
    const maxOptionValue = Math.max(...question.options.map(option => option.value));
    maxPossibleScore += maxOptionValue * question.weight;
  });
  
  // Calculate percentage score (rounded to nearest integer)
  const percentageScore = Math.round((totalScore / maxPossibleScore) * 100);
  
  return {
    totalScore,
    maxPossibleScore,
    percentageScore,
    answers
  };
};