import { useEffect, useRef } from 'react';

const useScrollToTop = (dependencies) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTo(0, 0);
    }
  }, dependencies);

  return ref;
};

export default useScrollToTop;