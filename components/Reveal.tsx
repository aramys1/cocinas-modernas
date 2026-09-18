'use client';

import { useEffect, useRef, type ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'left' | 'right';
  className?: string;
};

export default function Reveal({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element || !('IntersectionObserver' in window)) return;
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    // Server HTML and first-screen content remain visible without waiting for JS.
    if (
      media.matches ||
      element.getBoundingClientRect().top < window.innerHeight
    )
      return;
    let animation: Animation | undefined;
    const transform =
      direction === 'left'
        ? 'translateX(-12px)'
        : direction === 'right'
          ? 'translateX(12px)'
          : 'translateY(16px)';
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        if (!media.matches)
          animation = element.animate(
            [
              { opacity: 0, transform },
              { opacity: 1, transform: 'none' },
            ],
            {
              duration: 450,
              delay: Math.min(delay, 120),
              easing: 'ease-out',
              fill: 'backwards',
            },
          );
        observer.disconnect();
      },
      { threshold: 0.05 },
    );
    observer.observe(element);
    const onMotionChange = () => {
      if (media.matches) {
        animation?.cancel();
        observer.disconnect();
      }
    };
    media.addEventListener('change', onMotionChange);
    return () => {
      animation?.cancel();
      observer.disconnect();
      media.removeEventListener('change', onMotionChange);
    };
  }, [delay, direction]);
  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}
