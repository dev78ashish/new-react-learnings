import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import ThemeToggle from './components/ThemeToggle';
import Stopwatch from './components/Stopwatch';

const App = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200'>
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <Stopwatch />
    </div>
  )
}

export default App