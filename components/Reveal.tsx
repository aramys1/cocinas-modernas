'use client';

import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react';

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
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  const hiddenTransform =
    direction === 'left'
      ? '-translate-x-6'
      : direction === 'right'
      ? 'translate-x-6'
      : 'translate-y-6';

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
      }}
      className={`
        transition-all
        duration-1000
        ease-out
        motion-reduce:transition-none
        motion-reduce:transform-none
        motion-reduce:opacity-100

        ${
          isVisible
            ? 'opacity-100 translate-x-0 translate-y-0'
            : `opacity-0 ${hiddenTransform}`
        }

        ${className}
      `}
    >
      {children}
    </div>
  );
}