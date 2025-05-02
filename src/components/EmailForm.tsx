import React, { useState } from 'react';
import { Mail } from 'lucide-react';

interface EmailFormProps {
  onSubmit: (email: string) => void;
}

const EmailForm: React.FC<EmailFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setError('Email is required');
      return;
    }
    
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    setError('');
    onSubmit(email);
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-xl shadow-sm p-6 mb-6">
      <h2 className="text-xl font-medium text-gray-900 mb-4">
        Please enter your email address
      </h2>
      <p className="text-gray-600 mb-6">
        We'll use this to send you your results and follow up information.
      </p>
      
      <form onSubmit={handleSubmit}>
        <div className="relative mb-4">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
            <Mail size={18} />
          </div>
          <input
            type="email"
            className={`bg-gray-50 border ${
              error ? 'border-red-500' : 'border-gray-300'
            } text-gray-900 text-sm rounded-lg block w-full pl-10 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500`}
            placeholder="your.email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-5 rounded-lg transition-colors duration-200"
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default EmailForm;