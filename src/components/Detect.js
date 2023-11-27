import { useEffect, useState } from "react";
// let options = {
//   threshold: 0.5,
// };

export function useIsVisible(ref) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.intersectionRatio > 0) {
        setIsVisible(entry.isIntersecting);
        observer.unobserve(entry.target);
      }
    });

    if (ref) observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isVisible;
}
