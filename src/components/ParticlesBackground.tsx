'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 250; // Massively increased for "more networks"
    const connectionDistance = 220; // Extended reach for complex web

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;

      constructor(w: number, h: number) {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.vx = (Math.random() - 0.5) * 1.0;
        this.vy = (Math.random() - 0.5) * 1.0;
        this.size = Math.random() * 2.5 + 1.5; // Slightly adjusted size
      }

      update(w: number, h: number) {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > w) this.vx *= -1;
        if (this.y < 0 || this.y > h) this.vy *= -1;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        // More saturated colors
        ctx.fillStyle = theme === 'dark' 
          ? 'rgba(20, 184, 166, 0.6)' 
          : 'rgba(20, 184, 166, 0.4)';
        ctx.fill();
      }
    }

    const init = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
      
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(canvas.width, canvas.height));
      }
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      
      // Clear with background color based on theme
      ctx.fillStyle = theme === 'dark' ? '#020617' : '#f8fafc';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update(canvas.width, canvas.height);
        
        // Draw particle with glow
        ctx.beginPath();
        ctx.arc(particles[i].x, particles[i].y, particles[i].size, 0, Math.PI * 2);
        const particleColor = theme === 'dark' ? 'rgba(20, 184, 166, 0.9)' : 'rgba(20, 184, 166, 0.7)';
        ctx.fillStyle = particleColor;
        ctx.shadowBlur = 15;
        ctx.shadowColor = 'rgba(20, 184, 166, 0.5)';
        ctx.fill();
        ctx.shadowBlur = 0; // Reset for lines

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            const opacity = 1 - (distance / connectionDistance);
            // Ultra visible lines
            ctx.strokeStyle = theme === 'dark' 
              ? `rgba(20, 184, 166, ${0.6 * opacity})` 
              : `rgba(20, 184, 166, ${0.5 * opacity})`;
            ctx.lineWidth = 2.5; // Much thicker lines
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      init();
    };

    window.addEventListener('resize', handleResize);
    init();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[-1]"
      style={{ opacity: 1 }}
    />
  );
}


