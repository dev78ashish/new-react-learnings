import React, { createContext, useContext, useState } from 'react';
import { useForm, FormProvider as RHFFormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  personalInfoSchema,
  addressInfoSchema,
  educationSchema,
  additionalInfoSchema,
} from '@/schema';

const FormContext = createContext();

const stepSchemas = [
  personalInfoSchema,
  addressInfoSchema,
  educationSchema,
  additionalInfoSchema,
];

const stepKeys = [
  'personalInfo',
  'addressInfo',
  'education',
  'additionalInfo',
];

const defaultFormValues = {
  personalInfo: {
    firstName: '',
    lastName: '',
    email: '',
  },
  addressInfo: {
    houseno: '',
    city: '',
    country: '',
    state: '',
    pincode: ''
  },
  education: {
    degree: '',
    year: '',
    stream: '',
  },
  additionalInfo: {
    password: '',
    confirmpassword: '',
  },
};

export const FormProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const [personalInfoData, setPersonalInfoData] = useState(defaultFormValues.personalInfo);
  const [addressInfoData, setAddressInfoData] = useState(defaultFormValues.addressInfo);
  const [educationData, setEducationData] = useState(defaultFormValues.education);
  const [additionalInfoData, setAdditionalInfoData] = useState(defaultFormValues.additionalInfo);

  const formData = {
    personalInfo: personalInfoData,
    addressInfo: addressInfoData,
    education: educationData,
    additionalInfo: additionalInfoData,
  };

  const methods = useForm({
    mode: 'onChange',
    defaultValues: formData[stepKeys[currentStep]],
    resolver: zodResolver(stepSchemas[currentStep]),
  });

  React.useEffect(() => {
    methods.reset(formData[stepKeys[currentStep]]);
  }, [currentStep]);

  const saveStepData = (data) => {
    const key = stepKeys[currentStep];
    
    switch(key) {
      case 'personalInfo':
        setPersonalInfoData(data);
        break;
      case 'addressInfo':
        setAddressInfoData(data);
        break;
      case 'education':
        setEducationData(data);
        break;
      case 'additionalInfo':
        setAdditionalInfoData(data);
        break;
      default:
        break;
    }
  };

  const handleNext = async (data, isFinal = false) => {
    const isValid = await methods.trigger();
    if (!isValid) return false;

    saveStepData(data);

    if (currentStep < stepKeys.length - 1 && !isFinal) {
      setCurrentStep((prev) => prev + 1);
    }
    
    return true;
  };

  const handleBack = () => {
    if (currentStep > 0) {
      const currentData = methods.getValues();
      saveStepData(currentData);
      
      setCurrentStep((prev) => prev - 1);
    }
  };

  const contextValue = {
    methods,
    currentStep,
    setCurrentStep,
    handleNext,
    handleBack,
    formData,
  };

  return (
    <FormContext.Provider value={contextValue}>
      <RHFFormProvider {...methods}>
        {children}
      </RHFFormProvider>
    </FormContext.Provider>
  );
};

export const useFormStepContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormStepContext must be used within FormProvider');
  }
  return context;
};