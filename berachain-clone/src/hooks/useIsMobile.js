import { useEffect, useState } from 'react';

const useIsMobile = (breakpoint = 900) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);

  useEffect(() => {
    const resizeListener = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    window.addEventListener('resize', resizeListener);
    return () => window.removeEventListener('resize', resizeListener);
  }, [breakpoint]);

  return isMobile;
};

export default useIsMobile;
