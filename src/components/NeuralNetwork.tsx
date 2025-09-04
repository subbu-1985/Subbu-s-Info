'use client';

import { useEffect, useRef } from 'react';

class CleanNeuralNetwork {
  container: HTMLElement;
  canvas: HTMLCanvasElement | null;
  ctx: CanvasRenderingContext2D | null;
  particles: any[];
  mouse: { x: number; y: number };
  animationId: number | null;
  isMobile: boolean;
  time: number;
  mode: string;
  config: {
    particleCount: number;
    maxDistance: number;
    mouseRadius: number;
    particleSpeed: number;
    particleSize: number;
    lineOpacity: number;
    particleOpacity: number;
    mouseAttraction: number;
    pulseSpeed: number;
  };
  colors: { r: number; g: number; b: number }[];
  clusterCount: number;
  clusters: any[][];

  constructor(container: HTMLElement) {
    this.container = container;
    this.canvas = null;
    this.ctx = null;
    this.particles = [];
    this.mouse = { x: 0, y: 0 };
    this.animationId = null;
    this.isMobile = this.detectMobile();
    this.time = 0;
    this.mode = 'dynamic';

    // Enhanced configuration for better visibility
    this.config = {
      particleCount: 150,
      maxDistance: 120,
      mouseRadius: 200,
      particleSpeed: 0.8,
      particleSize: 2.5,
      lineOpacity: 0.6,
      particleOpacity: 0.8,
      mouseAttraction: 0.03,
      pulseSpeed: 0.02
    };

    // More vibrant colors
    this.colors = [
      { r: 100, g: 200, b: 255 },   // Bright blue
      { r: 255, g: 100, b: 200 },   // Bright pink
      { r: 255, g: 200, b: 100 },   // Bright orange
      { r: 100, g: 255, b: 150 },   // Bright green
      { r: 200, g: 100, b: 255 },   // Bright purple
      { r: 255, g: 255, b: 100 },   // Bright yellow
    ];

    this.init();
  }

  detectMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
           window.innerWidth <= 768;
  }

  init() {
    this.createCanvas();
    this.createParticles();
    this.bindEvents();
    this.animate();
  }

  createCanvas() {
    this.canvas = document.createElement('canvas');
    this.canvas.id = 'neural-network-canvas';
    
    // Fixed positioning and z-index
    this.canvas.style.position = 'fixed';
    this.canvas.style.top = '0';
    this.canvas.style.left = '0';
    this.canvas.style.width = '100vw';
    this.canvas.style.height = '100vh';
    this.canvas.style.zIndex = '1'; // Changed from -1 to 1
    this.canvas.style.pointerEvents = 'none';
    this.canvas.style.background = 'transparent';

    this.container.appendChild(this.canvas);
    this.ctx = this.canvas.getContext('2d');

    this.resize();
  }

  createParticles() {
    this.particles = [];
    this.clusterCount = 6;
    this.clusters = [];

    // Create cluster centers
    const cols = Math.ceil(Math.sqrt(this.clusterCount));
    const rows = Math.ceil(this.clusterCount / cols);
    const hGap = this.canvas.width / (cols + 1);
    const vGap = this.canvas.height / (rows + 1);
    const centerPoints = [];
    
    for (let c = 0; c < this.clusterCount; c++) {
      const row = Math.floor(c / cols);
      const col = c % cols;
      centerPoints.push({
        x: hGap * (col + 1),
        y: vGap * (row + 1)
      });
      this.clusters.push([]);
    }
    
    const clusterRadius = Math.min(hGap, vGap) / 3;

    for (let i = 0; i < this.config.particleCount; i++) {
      const clusterIndex = i % this.clusterCount;
      const center = centerPoints[clusterIndex];
      const color = this.colors[Math.floor(Math.random() * this.colors.length)];
      
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * clusterRadius;
      const x = center.x + Math.cos(angle) * radius;
      const y = center.y + Math.sin(angle) * radius;

      const particle = {
        x: x,
        y: y,
        vx: (Math.random() - 0.5) * this.config.particleSpeed,
        vy: (Math.random() - 0.5) * this.config.particleSpeed,
        originalVx: (Math.random() - 0.5) * this.config.particleSpeed,
        originalVy: (Math.random() - 0.5) * this.config.particleSpeed,
        color: color,
        size: this.config.particleSize + Math.random() * 1,
        originalSize: this.config.particleSize + Math.random() * 1,
        phase: Math.random() * Math.PI * 2,
        energy: 0,
        cluster: clusterIndex
      };
      this.particles.push(particle);
      this.clusters[clusterIndex].push(particle);
    }
  }

  bindEvents() {
    window.addEventListener('resize', () => this.resize());

    document.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    });

    document.addEventListener('mouseleave', () => {
      this.mouse.x = -1000;
      this.mouse.y = -1000;
    });

    document.addEventListener('click', () => {
      this.createEnergyWave();
    });
  }

  resize() {
    if (!this.canvas) return;

    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    if (this.particles.length > 0) {
      this.createParticles();
    }
  }

  createEnergyWave() {
    this.particles.forEach(particle => {
      const dx = this.mouse.x - particle.x;
      const dy = this.mouse.y - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 200) {
        const force = (200 - distance) / 200;
        particle.energy = force * 1.5;
      }
    });
  }

  updateParticles() {
    this.time += this.config.pulseSpeed;

    this.particles.forEach((particle, index) => {
      const dx = this.mouse.x - particle.x;
      const dy = this.mouse.y - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.config.mouseRadius) {
        const force = (this.config.mouseRadius - distance) / this.config.mouseRadius;
        const angle = Math.atan2(dy, dx);

        let multiplier = 1;
        if (this.mode === 'repulsion') {
          multiplier = -1.5;
        } else if (this.mode === 'attraction') {
          multiplier = 2;
        }

        particle.vx += Math.cos(angle) * force * this.config.mouseAttraction * multiplier;
        particle.vy += Math.sin(angle) * force * this.config.mouseAttraction * multiplier;
        particle.energy = Math.max(particle.energy, force * 0.5);
      } else {
        particle.vx += (particle.originalVx - particle.vx) * 0.02;
        particle.vy += (particle.originalVy - particle.vy) * 0.02;
      }

      const orbitalForce = 0.03;
      particle.vx += Math.cos(this.time + particle.phase) * orbitalForce;
      particle.vy += Math.sin(this.time + particle.phase) * orbitalForce;

      particle.energy *= 0.96;

      const pulseFactor = 1 + Math.sin(this.time * 1.5 + particle.phase) * 0.1;
      const energyFactor = 1 + particle.energy * 0.5;
      particle.size = particle.originalSize * pulseFactor * energyFactor;

      particle.x += particle.vx;
      particle.y += particle.vy;

      if (particle.x < 0 || particle.x > this.canvas.width) {
        particle.vx *= -0.9;
        particle.originalVx *= -0.9;
        particle.x = Math.max(0, Math.min(this.canvas.width, particle.x));
        particle.energy += 0.2;
      }
      if (particle.y < 0 || particle.y > this.canvas.height) {
        particle.vy *= -0.9;
        particle.originalVy *= -0.9;
        particle.y = Math.max(0, Math.min(this.canvas.height, particle.y));
        particle.energy += 0.2;
      }

      particle.vx *= 0.99;
      particle.vy *= 0.99;
    });
  }

  drawConnections() {
    for (let clusterIndex = 0; clusterIndex < this.clusters.length; clusterIndex++) {
      const clusterParticles = this.clusters[clusterIndex];
      for (let i = 0; i < clusterParticles.length; i++) {
        for (let j = i + 1; j < clusterParticles.length; j++) {
          const dx = clusterParticles[i].x - clusterParticles[j].x;
          const dy = clusterParticles[i].y - clusterParticles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < this.config.maxDistance) {
            const opacity = (this.config.maxDistance - distance) / this.config.maxDistance;
            const energy = (clusterParticles[i].energy + clusterParticles[j].energy) / 2;

            const color1 = clusterParticles[i].color;
            const finalOpacity = opacity * this.config.lineOpacity * (0.8 + energy * 0.2);

            const avgR = (color1.r + clusterParticles[j].color.r) / 2;
            const avgG = (color1.g + clusterParticles[j].color.g) / 2;
            const avgB = (color1.b + clusterParticles[j].color.b) / 2;

            this.ctx.strokeStyle = `rgba(${avgR}, ${avgG}, ${avgB}, ${finalOpacity})`;
            this.ctx.lineWidth = 1.5 + energy * 1;

            this.ctx.beginPath();
            this.ctx.moveTo(clusterParticles[i].x, clusterParticles[i].y);
            this.ctx.lineTo(clusterParticles[j].x, clusterParticles[j].y);
            this.ctx.stroke();
          }
        }
      }
    }
  }

  drawParticles() {
    this.particles.forEach(particle => {
      const dx = this.mouse.x - particle.x;
      const dy = this.mouse.y - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      let size = particle.size;
      let opacity = this.config.particleOpacity;

      if (distance < this.config.mouseRadius) {
        const proximity = 1 - (distance / this.config.mouseRadius);
        size += proximity * 1.5;
        opacity += proximity * 0.4;
      }

      size += particle.energy * 1.5;
      opacity += particle.energy * 0.3;

      const gradient = this.ctx.createRadialGradient(
        particle.x, particle.y, 0,
        particle.x, particle.y, size * 1.5
      );

      const finalOpacity = Math.min(opacity, 1);
      gradient.addColorStop(0, `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, ${finalOpacity})`);
      gradient.addColorStop(0.7, `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, ${finalOpacity * 0.5})`);
      gradient.addColorStop(1, `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, 0)`);

      this.ctx.fillStyle = gradient;
      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
      this.ctx.fill();

      if (particle.energy > 0.1) {
        this.ctx.fillStyle = `rgba(255, 255, 255, ${particle.energy * 0.4})`;
        this.ctx.beginPath();
        this.ctx.arc(particle.x, particle.y, size * 0.4, 0, Math.PI * 2);
        this.ctx.fill();
      }
    });
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.updateParticles();
    this.drawConnections();
    this.drawParticles();

    this.animationId = requestAnimationFrame(() => this.animate());
  }

  destroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    if (this.canvas && this.canvas.parentNode) {
      this.canvas.parentNode.removeChild(this.canvas);
    }
  }
}

export default function NeuralNetwork() {
  const containerRef = useRef<HTMLDivElement>(null);
  const networkRef = useRef<CleanNeuralNetwork | null>(null);

  useEffect(() => {
    if (containerRef.current && !networkRef.current) {
      try {
        networkRef.current = new CleanNeuralNetwork(containerRef.current);
      } catch (error) {
        console.error('Error initializing NeuralNetwork:', error);
      }
    }

    return () => {
      if (networkRef.current) {
        networkRef.current.destroy();
        networkRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0"
      style={{ 
        zIndex: 1,
        pointerEvents: 'none'
      }}
    />
  );
}
