import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle
} from '@/components/ui/card';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useFormStepContext } from '@/Contexts/FormContext';
import Stepper from './Stepper';
import PersonalInfoStep from './PersonalInfoStep';
import AddressInfoStep from './AddressInfoStep';
import ProfessionalInfoStep from './ProfessionalInfoStep';
import AdditionalInfoStep from './AdditionalInfoStep';

const MultiStepForm = () => {
  const {
    currentStep,
    handleNext,
    handleBack,
    methods,
    formData,
    setCurrentStep,
  } = useFormStepContext();

  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const steps = [
    { id: 0, name: 'personalInfo', component: PersonalInfoStep },
    { id: 1, name: 'addressInfo', component: AddressInfoStep },
    { id: 2, name: 'education', component: ProfessionalInfoStep },
    { id: 3, name: 'additionalInfo', component: AdditionalInfoStep },
  ];

  const CurrentStepComponent = steps[currentStep]?.component;

  const onSubmit = () => {
    console.log('Final Submitted Data:', formData);
    setIsSubmitted(true);
  };

  const handleFinalSubmit = async () => {
    const valid = await methods.trigger();
    if (!valid) return;

    const lastStepData = methods.getValues();
    const success = await handleNext(lastStepData, true);

    if (success) {
      onSubmit();
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle>Multi-step Registration Form</CardTitle>
          <CardDescription>Complete all steps to submit your information</CardDescription>
        </CardHeader>

        <CardContent>
          {!isSubmitted ? (
            <>
              <Stepper currentStep={currentStep + 1} />
              <form onSubmit={(e) => e.preventDefault()}>
                <CurrentStepComponent />
              </form>
            </>
          ) : (
            <div className="text-center p-4">
              <h3 className="text-lg font-semibold text-green-600 mb-2">Registration Complete!</h3>
              <p>Thank you for submitting your information.</p>
              <div className="mt-4 text-left bg-gray-50 p-4 rounded-md">
                <h4 className="font-medium mb-2">Form Data Summary:</h4>
                <pre className="text-xs overflow-auto p-2 bg-gray-100 rounded">
                  {JSON.stringify(formData, null, 2)}
                </pre>
              </div>
            </div>
          )}
        </CardContent>

        <CardFooter className="flex">
          {!isSubmitted ? (
            <>
              {currentStep !== 0 && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleBack}
                  disabled={currentStep === 0}
                >
                  <ArrowLeft className="mr-2 h-4 w-4" /> Previous
                </Button>
              )}

              <Button
                type="button"
                onClick={() =>
                  currentStep === steps.length - 1
                    ? handleFinalSubmit()
                    : handleNext(methods.getValues())
                }
              >
                {currentStep === steps.length - 1 ? 'Submit' : (
                  <>
                    Next <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </>
          ) : (
            <Button
              onClick={() => {
                methods.reset();
                setCurrentStep(0);
                setIsSubmitted(false);
              }}
            >
              Start Over
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default MultiStepForm;