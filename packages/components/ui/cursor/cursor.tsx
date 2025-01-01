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

const cursorPop = (
  <svg width="150" height="150" viewBox="0 0 149 150" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M78.1113 88.041L93.7913 146.561" stroke="currentColor" strokeMiterlimit="10" />
    <path d="M146.25 55.4004L87.7305 71.0804" stroke="currentColor" strokeMiterlimit="10" />
    <path d="M61.1511 78.4199L2.62109 94.0999" stroke="currentColor" strokeMiterlimit="10" />
    <path d="M111.53 10.291L81.2402 62.761" stroke="currentColor" strokeMiterlimit="10" />
    <path d="M67.6298 86.7402L37.3398 139.21" stroke="currentColor" strokeMiterlimit="10" />
    <path d="M138.9 111.851L86.4297 81.5508" stroke="currentColor" strokeMiterlimit="10" />
    <path d="M62.4407 67.9504L9.9707 37.6504" stroke="currentColor" strokeMiterlimit="10" />
    <path d="M55.0918 2.94141L70.7718 61.4614" stroke="currentColor" strokeMiterlimit="10" />
    <path d="M78.1113 88.041L93.7913 146.561" stroke="currentColor" strokeMiterlimit="10" />
    <path d="M146.25 55.4023L87.7305 71.0823" stroke="currentColor" strokeMiterlimit="10" />
    <path d="M61.1511 78.4219L2.62109 94.1019" stroke="currentColor" strokeMiterlimit="10" />
    <path d="M111.53 10.291L81.2402 62.761" stroke="currentColor" strokeMiterlimit="10" />
    <path d="M67.6318 86.7422L37.3418 139.212" stroke="currentColor" strokeMiterlimit="10" />
    <path d="M138.902 111.851L86.4316 81.5508" stroke="currentColor" strokeMiterlimit="10" />
    <path d="M62.4407 67.9524L9.9707 37.6523" stroke="currentColor" strokeMiterlimit="10" />
    <path d="M21.7715 22.2305L64.6115 65.0705" stroke="currentColor" strokeMiterlimit="10" />
    <path d="M84.2598 84.4316L127.1 127.272" stroke="currentColor" strokeMiterlimit="10" />
    <path d="M126.951 22.0918L84.1113 64.9318" stroke="currentColor" strokeMiterlimit="10" />
    <path d="M64.7599 84.5703L21.9199 127.41" stroke="currentColor" strokeMiterlimit="10" />
    <path d="M74.3301 0.380859V60.9608" stroke="currentColor" strokeMiterlimit="10" />
    <path d="M74.541 88.541V149.131" stroke="currentColor" strokeMiterlimit="10" />
    <path d="M148.81 74.6504H88.2305" stroke="currentColor" strokeMiterlimit="10" />
    <path d="M60.6506 74.8516H0.0605469" stroke="currentColor" strokeMiterlimit="10" />
    <path d="M2.57031 55.6016L61.0903 71.2816" stroke="currentColor" strokeMiterlimit="10" />
    <path d="M87.7812 78.2207L146.311 93.9007" stroke="currentColor" strokeMiterlimit="10" />
    <path d="M93.5902 2.88086L77.9102 61.4008" stroke="currentColor" strokeMiterlimit="10" />
    <path d="M70.971 88.1016L55.291 146.622" stroke="currentColor" strokeMiterlimit="10" />
    <path d="M37.1602 10.3906L67.4502 62.8606" stroke="currentColor" strokeMiterlimit="10" />
    <path d="M81.4199 86.6406L111.72 139.111" stroke="currentColor" strokeMiterlimit="10" />
    <path d="M138.8 37.4707L86.3301 67.7707" stroke="currentColor" strokeMiterlimit="10" />
    <path d="M62.55 81.7305L10.0801 112.03" stroke="currentColor" strokeMiterlimit="10" />
  </svg>
);

export function Cursor({ length = 30 }: { length?: number }) {
  const gradientId = useId();
  const cursorRef = useRef<HTMLDivElement>(null);
  const popRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const trailRef = useRef<CursorTrail[]>([]);
  const linearGradientRef = useRef<SVGLinearGradientElement>(null);
  const gradientDirectionRef = useRef({ x1: '0%', y1: '0%', x2: '100%', y2: '0%' });
  const [particles, setParticles] = useState<Record<'x' | 'y' | 'vx' | 'vy' | 'life' | 'id', number>[]>([]);

  useEffect(() => {
    if (!cursorRef.current || !pathRef.current) return;

    let trailEraseInterval = setInterval(() => {
      trailRef.current = trailRef.current.filter((trail) => Date.now() - trail.time < 300);
      pathRef.current?.setAttribute('d', createSmoothPath(trailRef.current));
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
        gradientDirectionRef.current =
          trailRef.current.length > 1 ? calculateGradientDirection(trailRef.current, e) : gradientDirectionRef.current;
        linearGradientRef.current?.setAttribute('x1', gradientDirectionRef.current.x1);
        linearGradientRef.current?.setAttribute('y1', gradientDirectionRef.current.y1);
        linearGradientRef.current?.setAttribute('x2', gradientDirectionRef.current.x2);
        linearGradientRef.current?.setAttribute('y2', gradientDirectionRef.current.y2);
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
      const pop = popRef.current;
      const { clientX, clientY } = e;
      requestAnimationFrame(() => {
        cursor?.style.setProperty('left', `${clientX - 10}px`);
        cursor?.style.setProperty('top', `${clientY - 10}px`);
        pop?.style.setProperty('left', `${clientX - 75}px`);
        pop?.style.setProperty('top', `${clientY - 75}px`);
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
      <div ref={popRef} className={styles.cursorPopStyle}>
        {cursorPop}
      </div>
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
