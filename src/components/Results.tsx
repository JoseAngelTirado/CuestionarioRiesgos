import React from 'react';
import { QuestionType, ResultType } from '../types';
import { Smile, Meh, Frown } from 'lucide-react';

interface ResultsProps {
  result: ResultType;
  questions: QuestionType[];
  email: string;
  onRestart: () => void;
}

const Results: React.FC<ResultsProps> = ({ result, email, onRestart }) => {
  const { percentageScore, totalScore, maxPossibleScore } = result;

  // Categoría con clases y emoji
  const getCategory = (percentage: number) => {
    if (percentage >= 85) {
      return {
        message: 'Excelente',
        textColor: 'text-green-600',
        bgColor: 'bg-green-100',
        iconColor: 'text-green-600',
        Icon: Smile,
      };
    } else if (percentage >= 60) {
      return {
        message: 'Puedes mejorar',
        textColor: 'text-yellow-600',
        bgColor: 'bg-yellow-100',
        iconColor: 'text-yellow-600',
        Icon: Meh,
      };
    } else {
      return {
        message: 'Estás en riesgo, infórmate y toma acciones',
        textColor: 'text-red-600',
        bgColor: 'bg-red-100',
        iconColor: 'text-red-600',
        Icon: Frown,
      };
    }
  };

  const category = getCategory(percentageScore);
  const { Icon } = category;

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm p-8 mb-6 text-center">
        
      {/* Icono de categoría */}
        <div className={`w-32 h-32 ${category.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
          <Icon size={80} className={category.iconColor} />
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-2">¡Cuestionario completado!</h2>
        <p className="text-gray-600 mb-6">Gracias por completar el cuestionario.</p>

        <div className="bg-blue-50 rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Puntuación</h3>
          <div className="text-5xl font-bold text-blue-600 mb-2">{percentageScore}%</div>
          <p className="text-gray-600">Obtenida en tus respuestas</p>
        </div>

        {/* Categoría según resultado */}
        <div className={`rounded-lg p-6 mb-6 ${category.bgColor}`}>
          <h3 className={`text-xl font-semibold mb-2 ${category.textColor}`}>Categoría</h3>
          <p className={`text-lg ${category.textColor}`}>{category.message}</p>
        </div>

        {/* Resultados */}
        <div className="text-left mb-6">
          <h3 className="text-lg font-medium text-gray-900 mb-3">Resultados</h3>
          <p className="text-gray-600 mb-4">
            Email: <span className="font-medium">{email}</span>
          </p>
          <p className="text-gray-600 mb-4">
            Puntuación: <span className="font-medium">{totalScore} de {maxPossibleScore}</span>
          </p>
        </div>

        <button
          onClick={onRestart}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-5 rounded-lg transition-colors duration-200"
        >
          Empezar de nuevo
        </button>
      </div>
    </div>
  );
};

export default Results;
