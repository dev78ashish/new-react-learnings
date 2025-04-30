import React from 'react'
import { FormProvider } from './Contexts/FormContext'
import MultiStepForm from './Components/MultiStepForm'
import DropdownSearch from './Components/DropdownSearch'

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    <FormProvider>
      <MultiStepForm />
      {/* <DropdownSearch /> */}
    </FormProvider>
  </div>
  )
}

export default App