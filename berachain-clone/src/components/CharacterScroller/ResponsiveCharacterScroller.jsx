import React, { useEffect, useState } from "react";
import CharacterScrollerMobile from "./components/CharacterScrollerMobile";
import CharacterScroller from "./components/CharacterScroller";


const ResponsiveCharacterScroller = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? <CharacterScrollerMobile /> : <CharacterScroller />;
};

export default ResponsiveCharacterScroller;