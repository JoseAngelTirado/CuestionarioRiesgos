import React, { useState, useEffect } from 'react';
import Question from './Question';
import ProgressBar from './ProgressBar';
import EmailForm from './EmailForm';
import Results from './Results';
import { QuestionType, ResultType } from '../types';
import { calculateResults } from '../utils/scoreCalculator';
import questionData from '../data/questions';

const QuestionnaireContainer: React.FC = () => {
  const [questions] = useState<QuestionType[]>(questionData);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(-1);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [email, setEmail] = useState<string>('');
  const [showResults, setShowResults] = useState<boolean>(false);
  const [results, setResults] = useState<ResultType | null>(null);
  const [showEmailForm, setShowEmailForm] = useState<boolean>(true);

  const handleSelectOption = (optionId: string) => {
    if (currentQuestionIndex >= 0) {
      setAnswers({
        ...answers,
        [questions[currentQuestionIndex].id]: optionId,
      });
    }
  };

  const handleEmailSubmit = (submittedEmail: string) => {
    setEmail(submittedEmail);
    setShowEmailForm(false);
    setCurrentQuestionIndex(0);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Calculate results
      const calculatedResults = calculateResults(questions, answers);
      setResults(calculatedResults);
      setShowResults(true);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else {
      setShowEmailForm(true);
      setCurrentQuestionIndex(-1);
    }
  };

  const handleRestart = () => {
    setAnswers({});
    setEmail('');
    setShowResults(false);
    setShowEmailForm(true);
    setCurrentQuestionIndex(-1);
  };

  const isOptionSelected = currentQuestionIndex >= 0 && 
    questions[currentQuestionIndex].id in answers;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 md:py-20">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Interactive Questionnaire</h1>
        <p className="text-gray-600">Answer all questions to get your personalized score</p>
      </div>

      {showEmailForm && (
        <EmailForm onSubmit={handleEmailSubmit} />
      )}

      {!showEmailForm && !showResults && (
        <>
          <ProgressBar 
            currentStep={currentQuestionIndex + 1} 
            totalSteps={questions.length} 
          />
          
          <Question
            question={questions[currentQuestionIndex]}
            selectedOption={answers[questions[currentQuestionIndex].id] || null}
            onSelectOption={handleSelectOption}
          />
          
          <div className="w-full max-w-2xl mx-auto flex justify-between">
            <button
              onClick={handlePreviousQuestion}
              className="px-5 py-2.5 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
            >
              Back
            </button>
            
            <button
              onClick={handleNextQuestion}
              disabled={!isOptionSelected}
              className={`px-5 py-2.5 bg-blue-600 text-white rounded-lg transition-colors duration-200 ${
                isOptionSelected 
                  ? 'hover:bg-blue-700' 
                  : 'opacity-50 cursor-not-allowed'
              }`}
            >
              {currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next'}
            </button>
          </div>
        </>
      )}

      {showResults && results && (
        <Results 
          result={results} 
          questions={questions}
          email={email}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
};

export default QuestionnaireContainer;