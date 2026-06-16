import { useEffect, useRef } from 'react';

/**
 * Custom hook to recreate the floating particles effect.
 * It manages the lifecycle of particle elements within a container.
 */
export function useParticles() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createParticle = () => {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      const size = Math.random() * 4 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.bottom = `${Math.random() * 20}%`;
      
      const duration = Math.random() * 4 + 4;
      particle.style.animationDuration = `${duration}s`;
      
      // Gold accent particles vs default green
      if (Math.random() > 0.5) {
        particle.style.background = '#FCD116'; 
      }
      
      container.appendChild(particle);
      
      setTimeout(() => {
        if (container.contains(particle)) {
          particle.remove();
        }
      }, duration * 1000);
    };

    const intervalId = setInterval(createParticle, 300);

    return () => {
      clearInterval(intervalId);
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return containerRef;
}
