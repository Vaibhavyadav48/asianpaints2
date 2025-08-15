import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import ImageUpload from './components/ImageUpload';
import QuestionCard from './components/QuestionCard';
import DesignOptions from './components/DesignOptions';
import SuccessMessage from './components/SuccessMessage';
import ProgressBar from './components/ProgressBar';
import { aestheticQuestions } from './data/questions';
import { designOptions } from './data/designOptions';
import { UserAnswers } from './types';
import { ArrowRight, ArrowLeft } from 'lucide-react';

type AppStep = 'upload' | 'questions' | 'options' | 'success';

function App() {
  const [currentStep, setCurrentStep] = useState<AppStep>('upload');
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [userAnswers, setUserAnswers] = useState<UserAnswers>({});
  const [selectedDesignOption, setSelectedDesignOption] = useState<string | null>(null);

  const handleImageUpload = useCallback((file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setUploadedImage(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  }, []);

  const handleRemoveImage = useCallback(() => {
    setUploadedImage(null);
  }, []);

  const handleAnswerSelect = useCallback((questionId: string, answer: string) => {
    setUserAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  }, []);

  const handleDesignOptionSelect = useCallback((optionId: string) => {
    setSelectedDesignOption(optionId);
  }, []);

  const canProceedFromUpload = uploadedImage !== null;
  const canProceedFromQuestions = aestheticQuestions.every(q => userAnswers[q.id]);
  const canProceedFromOptions = selectedDesignOption !== null;

  const getStepNumber = () => {
    switch (currentStep) {
      case 'upload': return 1;
      case 'questions': return 2;
      case 'options': return 3;
      case 'success': return 4;
      default: return 1;
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 'upload':
        return (
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Let's Start with Your Room
              </h2>
              <p className="text-gray-600">
                Upload a photo of the room you'd like to redesign
              </p>
            </div>
            <ImageUpload
              onImageUpload={handleImageUpload}
              uploadedImage={uploadedImage}
              onRemoveImage={handleRemoveImage}
            />
          </div>
        );

      case 'questions':
        return (
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Tell Us About Your Style
              </h2>
              <p className="text-gray-600">
                Answer a few questions to help us understand your preferences
              </p>
            </div>
            {aestheticQuestions.map((question, index) => (
              <QuestionCard
                key={question.id}
                question={question}
                selectedAnswer={userAnswers[question.id]}
                onAnswerSelect={handleAnswerSelect}
                questionNumber={index + 1}
                totalQuestions={aestheticQuestions.length}
              />
            ))}
          </div>
        );

      case 'options':
        return (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Choose Your Design Style
              </h2>
              <p className="text-gray-600">
                Based on your preferences, here are our top recommendations
              </p>
            </div>
            <DesignOptions
              options={designOptions}
              selectedOption={selectedDesignOption}
              onOptionSelect={handleDesignOptionSelect}
            />
          </div>
        );

      case 'success':
        return <SuccessMessage />;

      default:
        return null;
    }
  };

  const handleNext = () => {
    switch (currentStep) {
      case 'upload':
        if (canProceedFromUpload) setCurrentStep('questions');
        break;
      case 'questions':
        if (canProceedFromQuestions) setCurrentStep('options');
        break;
      case 'options':
        if (canProceedFromOptions) setCurrentStep('success');
        break;
    }
  };

  const handleBack = () => {
    switch (currentStep) {
      case 'questions':
        setCurrentStep('upload');
        break;
      case 'options':
        setCurrentStep('questions');
        break;
    }
  };

  const getNextButtonText = () => {
    switch (currentStep) {
      case 'upload': return 'Continue to Questions';
      case 'questions': return 'View Design Options';
      case 'options': return 'Confirm Selection';
      default: return 'Next';
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 'upload': return canProceedFromUpload;
      case 'questions': return canProceedFromQuestions;
      case 'options': return canProceedFromOptions;
      default: return false;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {currentStep !== 'success' && (
          <div className="max-w-4xl mx-auto mb-8">
            <ProgressBar currentStep={getStepNumber()} totalSteps={4} />
          </div>
        )}

        {renderStepContent()}

        {currentStep !== 'success' && (
          <div className="max-w-4xl mx-auto mt-8 flex justify-between">
            <button
              onClick={handleBack}
              disabled={currentStep === 'upload'}
              className={`flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${
                currentStep === 'upload'
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
              }`}
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back
            </button>

            <button
              onClick={handleNext}
              disabled={!canProceed()}
              className={`flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${
                canProceed()
                  ? 'bg-orange-500 text-white hover:bg-orange-600'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              {getNextButtonText()}
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;