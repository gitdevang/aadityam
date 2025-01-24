// hooks\useQualipactAnimation.jsx
import { useEffect, useState } from 'react';

function useQualipactAnimation(refs, threshold = 0.5) {
  const [visibility, setVisibility] = useState(
    refs.reduce((acc, _, index) => ({ ...acc, [index]: false }), {})
  );

  useEffect(() => {
    const observers = refs.map((ref, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            console.log(`Element ${index} is intersecting:`, entry.isIntersecting);  // Debugging line
            if (entry.isIntersecting && !visibility[index]) {
              setVisibility((prevVisibility) => ({
                ...prevVisibility,
                [index]: true,  // Only set to true once
              }));
              observer.unobserve(entry.target);  // Stop observing after it's visible
            }
          });
        },
        {
          threshold,
          rootMargin: '0px 0px -100px 0px', // Adjust this for better visibility detection
        }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return observer;
    });

    return () => {
      observers.forEach((observer, index) => {
        if (refs[index]?.current) {
          observer.unobserve(refs[index].current);
        }
      });
    };
  }, [refs, threshold, visibility]); // Include visibility to prevent unnecessary rerenders

  return visibility;
}

export default useQualipactAnimation;
