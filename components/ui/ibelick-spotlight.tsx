'use client';
import React, { useRef, useState, useCallback, useEffect } from 'react';
import { cn } from '@/lib/utils';

type SpotlightProps = {
  className?: string;
  size?: number;
};

export function IbelickSpotlight({
  className,
  size = 200,
}: SpotlightProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [parentElement, setParentElement] = useState<HTMLElement | null>(null);

  // Use refs to avoid React state updates on every mouse move
  const mouse = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const reqId = useRef<number>();

  useEffect(() => {
    if (containerRef.current) {
      const parent = containerRef.current.parentElement;
      if (parent) {
        parent.style.position = 'relative';
        parent.style.overflow = 'hidden';
        setParentElement(parent);
      }
    }
  }, []);

  // Smooth lerp function
  const lerp = (start: number, end: number, factor: number) => {
    return start + (end - start) * factor;
  };

  const animate = useCallback(() => {
    if (containerRef.current) {
      // Lerp current position towards target mouse position
      current.current.x = lerp(current.current.x, mouse.current.x, 0.15);
      current.current.y = lerp(current.current.y, mouse.current.y, 0.15);

      containerRef.current.style.transform = `translate(${current.current.x - size / 2}px, ${current.current.y - size / 2}px)`;
    }
    reqId.current = requestAnimationFrame(animate);
  }, [size]);

  useEffect(() => {
    if (isHovered) {
      reqId.current = requestAnimationFrame(animate);
    } else {
      if (reqId.current) cancelAnimationFrame(reqId.current);
    }
    return () => {
      if (reqId.current) cancelAnimationFrame(reqId.current);
    };
  }, [isHovered, animate]);

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      if (!parentElement) return;
      const { left, top } = parentElement.getBoundingClientRect();
      mouse.current = {
        x: event.clientX - left,
        y: event.clientY - top,
      };
    },
    [parentElement]
  );

  useEffect(() => {
    if (!parentElement) return;

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    parentElement.addEventListener('mousemove', handleMouseMove, { passive: true });
    parentElement.addEventListener('mouseenter', handleMouseEnter);
    parentElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      parentElement.removeEventListener('mousemove', handleMouseMove);
      parentElement.removeEventListener('mouseenter', handleMouseEnter);
      parentElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [parentElement, handleMouseMove]);

  return (
    <div
      ref={containerRef}
      className={cn(
        'pointer-events-none absolute left-0 top-0 rounded-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops),transparent_80%)] blur-xl transition-opacity duration-200',
        'from-zinc-50 via-zinc-100 to-zinc-200',
        isHovered ? 'opacity-100' : 'opacity-0',
        className
      )}
      style={{
        width: size,
        height: size,
        willChange: 'transform, opacity',
      }}
    />
  );
}
