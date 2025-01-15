import { useEffect, useState } from 'react';

const useTypingEffect = (delay = 1000) => {
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return isTyping;
};

export default useTypingEffect;
