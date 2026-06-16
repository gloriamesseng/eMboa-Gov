import { useEffect } from 'react';

/**
 * Custom hook to handle scroll reveal animations using Intersection Observer.
 * It looks for elements with .reveal or .reveal-up classes and adds the .active class when they enter the viewport.
 */
export function useScrollReveal() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal, .reveal-up');
    elements.forEach((el) => revealObserver.observe(el));

    // Initial check in case elements are already in view
    const revealOnLoad = () => {
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          el.classList.add('active');
        }
      });
    };
    
    setTimeout(revealOnLoad, 500);

    return () => {
      elements.forEach((el) => revealObserver.unobserve(el));
    };
  }, []);
}
