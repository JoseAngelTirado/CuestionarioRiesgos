import React from 'react';
import { QuestionType, ResultType } from '../types';
import { CheckCircle } from 'lucide-react';

interface ResultsProps {
  result: ResultType;
  questions: QuestionType[];
  email: string;
  onRestart: () => void;
}

const Results: React.FC<ResultsProps> = ({ result, questions, email, onRestart }) => {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm p-8 mb-6 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={40} className="text-green-600" />
        </div>
        
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Questionnaire Complete!</h2>
        <p className="text-gray-600 mb-6">Thank you for completing the questionnaire.</p>
        
        <div className="bg-blue-50 rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Your Score</h3>
          <div className="text-5xl font-bold text-blue-600 mb-2">{result.percentageScore}%</div>
          <p className="text-gray-600">Based on your responses</p>
        </div>
        
        <div className="text-left mb-6">
          <h3 className="text-lg font-medium text-gray-900 mb-3">Result Details</h3>
          <p className="text-gray-600 mb-4">
            Email: <span className="font-medium">{email}</span>
          </p>
          <p className="text-gray-600 mb-4">
            Total Score: <span className="font-medium">{result.totalScore} out of {result.maxPossibleScore}</span>
          </p>
        </div>
        
        <button
          onClick={onRestart}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-5 rounded-lg transition-colors duration-200"
        >
          Start New Questionnaire
        </button>
      </div>
    </div>
  );
};

export default Results;