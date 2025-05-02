import { QuestionType } from '../types';

const questions: QuestionType[] = [
  {
    id: 'q1',
    text: 'How often do you exercise per week?',
    weight: 5, // High importance for health
    options: [
      { id: 'q1a', text: 'Never', value: 1 },
      { id: 'q1b', text: '1-2 times', value: 2 },
      { id: 'q1c', text: '3-4 times', value: 4 },
      { id: 'q1d', text: '5+ times', value: 5 }
    ]
  },
  {
    id: 'q2',
    text: 'How would you rate your stress levels?',
    weight: 4, // Important for mental health
    options: [
      { id: 'q2a', text: 'Very high', value: 1 },
      { id: 'q2b', text: 'High', value: 2 },
      { id: 'q2c', text: 'Moderate', value: 3 },
      { id: 'q2d', text: 'Low', value: 5 }
    ]
  },
  {
    id: 'q3',
    text: 'How many hours of sleep do you get per night on average?',
    weight: 4, // Important for overall health
    options: [
      { id: 'q3a', text: 'Less than 5 hours', value: 1 },
      { id: 'q3b', text: '5-6 hours', value: 2 },
      { id: 'q3c', text: '7-8 hours', value: 5 },
      { id: 'q3d', text: 'More than 8 hours', value: 4 }
    ]
  },
  {
    id: 'q4',
    text: 'How would you describe your diet?',
    weight: 5, // High importance for health
    options: [
      { id: 'q4a', text: 'Mostly fast food/processed', value: 1 },
      { id: 'q4b', text: 'Mix of healthy and unhealthy', value: 3 },
      { id: 'q4c', text: 'Mostly home-cooked meals', value: 4 },
      { id: 'q4d', text: 'Balanced, nutritious diet', value: 5 }
    ]
  },
  {
    id: 'q5',
    text: 'How much water do you drink daily?',
    weight: 3, // Moderate importance
    options: [
      { id: 'q5a', text: 'Less than 2 cups', value: 1 },
      { id: 'q5b', text: '2-4 cups', value: 2 },
      { id: 'q5c', text: '5-7 cups', value: 4 },
      { id: 'q5d', text: '8+ cups', value: 5 }
    ]
  },
  {
    id: 'q6',
    text: 'How often do you engage in activities you enjoy?',
    weight: 3, // Moderate importance for wellbeing
    options: [
      { id: 'q6a', text: 'Rarely', value: 1 },
      { id: 'q6b', text: 'Sometimes', value: 3 },
      { id: 'q6c', text: 'Often', value: 4 },
      { id: 'q6d', text: 'Very often', value: 5 }
    ]
  },
  {
    id: 'q7',
    text: 'How would you rate your work-life balance?',
    weight: 4, // Important for wellbeing
    options: [
      { id: 'q7a', text: 'Poor', value: 1 },
      { id: 'q7b', text: 'Fair', value: 2 },
      { id: 'q7c', text: 'Good', value: 4 },
      { id: 'q7d', text: 'Excellent', value: 5 }
    ]
  }
];

export default questions;