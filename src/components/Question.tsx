import React from 'react';
import { QuestionType, OptionType } from '../types';
import { CheckCircle, Circle } from 'lucide-react';

interface QuestionProps {
  question: QuestionType;
  selectedOption: string | null;
  onSelectOption: (optionId: string) => void;
}

const Question: React.FC<QuestionProps> = ({
  question,
  selectedOption,
  onSelectOption,
}) => {
  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-xl shadow-sm p-6 mb-6 transition-all duration-300 ease-in-out">
      <h2 className="text-xl font-medium text-gray-900 mb-4">{question.text}</h2>
      
      <div className="space-y-3">
        {question.options.map((option: OptionType) => (
          <div
            key={option.id}
            onClick={() => onSelectOption(option.id)}
            className={`flex items-center p-4 rounded-lg cursor-pointer transition-all duration-200 ${
              selectedOption === option.id
                ? 'bg-blue-50 border-blue-500 border'
                : 'border border-gray-200 hover:bg-gray-50'
            }`}
          >
            <div className="mr-3 text-blue-500">
              {selectedOption === option.id ? (
                <CheckCircle size={20} />
              ) : (
                <Circle size={20} />
              )}
            </div>
            <span className="text-gray-700">{option.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;