import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Stepper = ({ currentStep }) => {
  const steps = [
    { id: 1, title: 'Personal' },
    { id: 2, title: 'Address' },
    { id: 3, title: 'Professional' },
    { id: 4, title: 'Security' }
  ];

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center relative">
        {/* Connection lines */}
        <div className="absolute left-0 right-0 top-4 flex justify-between z-0">
          {steps.map((step, index) => {
            // Don't render a line after the last step
            if (index === steps.length - 1) return null;
            
            // Calculate line width - each line takes up full width between steps
            const lineWidth = `calc(100% / ${steps.length - 1})`;
            
            return (
              <div 
                key={`line-${index}`} 
                className={`h-0.5 mx-2 ${
                  // Color the line if the step is completed
                  currentStep > step.id ? 'bg-blue-500' : 'bg-gray-300'
                }`}
                style={{ width: lineWidth }}
              />
            );
          })}
        </div>
        
        {/* Steps/Circles */}
        {steps.map((step, index) => (
          <div key={step.id} className="flex flex-col items-center z-10">
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                currentStep >= step.id
                  ? 'bg-blue-500 border-blue-600 text-white'
                  : 'bg-white border-gray-300 text-gray-500'
              }`}
            >
              {currentStep > step.id ? (
                <CheckCircle2 className="w-5 h-5" />
              ) : (
                step.id
              )}
            </div>
            <div className="mt-2 text-sm font-medium">
              {step.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stepper;