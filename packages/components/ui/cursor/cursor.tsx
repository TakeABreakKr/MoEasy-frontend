'use client';

import { useEffect, useId, useRef, useState } from 'react';

import { emptyArray } from '../../utils/lib/noop';
import { throttle } from '../../utils/lib/throttle';

import * as styles from './cursor.css';

type CursorTrail = {
  x: number;
  y: number;
  time: number;
};

export function Cursor({ length = 30 }: { length?: number }) {
  const gradientId = useId();
  const cursorRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const restPathRef = useRef<SVGPathElement>(null);
  const trailRef = useRef<CursorTrail[]>([]);
  const linearGradientRef = useRef<SVGLinearGradientElement>(null);
  const linearGradientRef2 = useRef<SVGLinearGradientElement>(null);
  const gradientDirectionRef = useRef({ x1: '0%', y1: '0%', x2: '100%', y2: '0%' });
  const [particles, setParticles] = useState<Record<'x' | 'y' | 'vx' | 'vy' | 'life' | 'id', number>[]>([]);

  useEffect(() => {
    if (!cursorRef.current || !pathRef.current) return;

    let trailEraseInterval = setInterval(() => {
      trailRef.current = trailRef.current.filter((trail) => Date.now() - trail.time < 300);
      pathRef.current?.setAttribute('d', createSmoothPath(trailRef.current));
      restPathRef.current?.setAttribute('d', createSmoothPath(trailRef.current));
      setParticles((prev) => {
        const newParticles = prev
          .map((p) => ({
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            life: p.life - 0.02,
          }))
          .filter((p) => p.life > 0)
          .slice(-length);
        if (newParticles.length === 0) return emptyArray;
        return newParticles;
      });
    }, 32);

    const mousemovetrail = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      requestAnimationFrame(() => {
        trailRef.current = trailRef.current.concat({ x: clientX, y: clientY, time: Date.now() }).slice(-length);
        pathRef.current?.setAttribute('d', createSmoothPath(trailRef.current));
        restPathRef.current?.setAttribute('d', createSmoothPath(trailRef.current));
        gradientDirectionRef.current =
          trailRef.current.length > 1 ? calculateGradientDirection(trailRef.current, e) : gradientDirectionRef.current;
        if (!linearGradientRef.current || !linearGradientRef2.current) return;

        setGradientDirection(linearGradientRef.current, gradientDirectionRef.current);
        setGradientDirection(linearGradientRef2.current, gradientDirectionRef.current);

        if (Math.random() > 0.8) {
          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * 2 + 1; // 속도 증가
          const randomFactor = Math.random() * 0.5; // 무작위 요소 추가
          setParticles((prev) => [
            ...prev,
            {
              x: clientX + (randomFactor - 0.5) * 100, // 초기 위치에 무작위 요소 추가
              y: clientY + (randomFactor - 0.5) * 100,
              vx: Math.cos(angle) * speed * randomFactor,
              vy: Math.sin(angle) * speed * randomFactor,
              life: 1,
              id: Date.now() + Math.random(),
            },
          ]);
        }
      });
    };
    const mousemove = (e: MouseEvent) => {
      const cursor = cursorRef.current;
      const { clientX, clientY } = e;
      requestAnimationFrame(() => {
        cursor?.style.setProperty('left', `${clientX - 10}px`);
        cursor?.style.setProperty('top', `${clientY - 10}px`);
      });
    };

    const cleanup = throttle(mousemovetrail, 10);
    window.addEventListener('mousemove', mousemove);
    window.addEventListener('mousemove', cleanup);
    return () => {
      window.removeEventListener('mousemove', mousemove);
      window.removeEventListener('mousemove', cleanup);
      clearInterval(trailEraseInterval);
    };
  }, [length]);

  return (
    <>
      <div ref={cursorRef} className={styles.cursorCircle} />
      <svg className={styles.cursorTrail}>
        <defs>
          <linearGradient id={gradientId} ref={linearGradientRef}>
            <stop offset="0%" stopColor="#f9c862" stopOpacity="1" />
            <stop offset="75%" stopColor="#06a" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#0a5" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <path ref={pathRef} stroke={`url(#${gradientId})`} strokeWidth="12" fill="none" strokeLinecap="round" />
      </svg>
      <svg className={styles.cursorTrail}>
        <defs>
          <linearGradient id={`${gradientId}-rest`} ref={linearGradientRef2}>
            <stop offset="0%" stopColor="#8048F7" stopOpacity="1" />
            <stop offset="100%" stopColor="#0a5" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          ref={restPathRef}
          stroke={`url(#${gradientId}-rest)`}
          opacity={0.5}
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={styles.particle}
          style={{
            transform: `translate(${particle.x - 2}px, ${particle.y - 2}px)`,
            opacity: particle.life,
          }}
        />
      ))}
    </>
  );
}
function calculateGradientDirection(
  points: CursorTrail[],
  event: MouseEvent,
): { x1: string; y1: string; x2: string; y2: string } {
  const { clientX, clientY } = event;
  const lastPoint = points[points.length - 2];
  const dx = clientX - lastPoint.x;
  const dy = clientY - lastPoint.y;
  const angle = Math.atan2(dy, dx); // 라디안 단위

  // Gradient 방향 업데이트
  return {
    x1: `${50 + 50 * Math.cos(angle)}%`,
    y1: `${50 + 50 * Math.sin(angle)}%`,
    x2: `${50 - 50 * Math.cos(angle)}%`,
    y2: `${50 - 50 * Math.sin(angle)}%`,
  };
}

function createPaths(points: CursorTrail[]): string {
  if (points.length < 2) return '';
  const path = points.map((point, i) => (i === 0 ? `M ${point.x},${point.y}` : `L ${point.x},${point.y}`)).join(' ');
  return path;
}

function createSmoothPath(points: CursorTrail[]): string {
  if (points.length < 3) return ''; // 최소 3점 이상 필요

  let path = `M ${points[0].x},${points[0].y}`; // 시작점
  for (let i = 1; i < points.length - 1; i++) {
    const prev = points[i - 1];
    const curr = points[i];
    const next = points[i + 1];

    // 제어점 계산
    const controlPoint = {
      x: curr.x + (prev.x - next.x) * 0.2, // 0.2는 강도
      y: curr.y + (prev.y - next.y) * 0.2,
    };

    // Cubic Bezier Curve 정의
    path += ` Q ${controlPoint.x},${controlPoint.y} ${curr.x},${curr.y}`;
  }
  return path;
}

function setGradientDirection(
  element: SVGLinearGradientElement,
  gradientDirection: { x1: string; y1: string; x2: string; y2: string },
) {
  element.setAttribute('x1', gradientDirection.x1);
  element.setAttribute('y1', gradientDirection.y1);
  element.setAttribute('x2', gradientDirection.x2);
  element.setAttribute('y2', gradientDirection.y2);
}
