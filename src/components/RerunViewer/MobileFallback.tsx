'use client';

import { useEffect, useState } from "react";


type MobileFallbackProps = {
  children: JSX.Element
  fallback: JSX.Element
};

const MobileFallback = ({ children, fallback }: MobileFallbackProps) => {
  const width = typeof window === "undefined" ? 1080 : window.innerWidth;
  const [isMobile, setIsMobile] = useState(width <= 800);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 800);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    isMobile ? fallback : children
  );
};

export default MobileFallback
