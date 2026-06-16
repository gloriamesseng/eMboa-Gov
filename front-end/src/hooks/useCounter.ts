import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook for animating a numeric counter.
 * @param target The final value to reach.
 * @param duration Animation duration in milliseconds.
 * @param delay Delay before starting the animation in milliseconds.
 */
export function useCounter(target: number, duration: number = 2000, delay: number = 0) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);;
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const startAnimation = () => {
      let startTimestamp: number | null = null;
      const startValue = 0;

      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        
        // easeOutQuart easing function
        const easeOut = 1 - Math.pow(1 - progress, 4);
        const currentValue = Math.floor(easeOut * (target - startValue) + startValue);
        
        setCount(currentValue);
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          setCount(target);
        }
      };
      window.requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setTimeout(() => {
            startAnimation();
          }, delay);
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated, target, duration, delay]);

  return { count, countRef };
}
