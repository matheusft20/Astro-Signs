import React from 'react';

/**
 * A simple animation utility that mimics the basic API of framer-motion
 * without requiring the actual dependency
 */

interface MotionProps {
  initial?: Record<string, any>;
  animate?: Record<string, any>;
  transition?: Record<string, any>;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const motion = {
  div: React.forwardRef<HTMLDivElement, MotionProps & React.HTMLAttributes<HTMLDivElement>>(
    ({ initial, animate, transition, children, ...props }, ref) => {
      const [isAnimated, setIsAnimated] = React.useState(false);
      
      React.useEffect(() => {
        // Small delay to ensure the initial state is applied before animating
        const timer = setTimeout(() => {
          setIsAnimated(true);
        }, 10);
        
        return () => clearTimeout(timer);
      }, []);
      
      const getStyles = () => {
        const styles: React.CSSProperties = {};
        
        if (initial && !isAnimated) {
          Object.entries(initial).forEach(([key, value]) => {
            if (key === 'y') {
              styles.transform = `translateY(${value}px)`;
            } else if (key === 'x') {
              styles.transform = `translateX(${value}px)`;
            } else if (key === 'scale') {
              styles.transform = styles.transform 
                ? `${styles.transform} scale(${value})`
                : `scale(${value})`;
            } else if (key === 'opacity') {
              styles.opacity = value;
            }
          });
        }
        
        if (animate && isAnimated) {
          Object.entries(animate).forEach(([key, value]) => {
            if (key === 'y') {
              styles.transform = `translateY(${value}px)`;
            } else if (key === 'x') {
              styles.transform = `translateX(${value}px)`;
            } else if (key === 'scale') {
              styles.transform = styles.transform 
                ? `${styles.transform} scale(${value})`
                : `scale(${value})`;
            } else if (key === 'opacity') {
              styles.opacity = value;
            }
          });
        }
        
        // Add transition property
        if (transition) {
          const duration = transition.duration || 0.3;
          const delay = transition.delay || 0;
          styles.transition = `all ${duration}s ease ${delay}s`;
        } else {
          styles.transition = 'all 0.3s ease';
        }
        
        return styles;
      };
      
      return React.createElement('div', { ref, style: getStyles(), ...props }, children);
    }
  )
};