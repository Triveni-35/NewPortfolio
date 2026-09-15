'use client';
import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';


export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY, currentTarget } = e;
      const el = currentTarget as HTMLElement;
      const { width, height, left, top } = el.getBoundingClientRect();
      const mx = (clientX - left) / width - 0.5;
      const my = (clientY - top) / height - 0.5;

      const blob = hero.querySelector('.hero-blob') as HTMLElement;
      if (blob) {
        blob.style.transform = `translate(${mx * 40}px, ${my * 30}px)`;
      }
    };

    hero.addEventListener('mousemove', handleMouseMove);
    return () => hero.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ minHeight: '100vh' }}>
      
      {/* Background photo */}
      <div className="absolute inset-0 z-0">
        <AppImage
          src="https://img.rocket.new/generatedImages/rocket_gen_img_11bc57644-1772175190337.png"
          alt="Dimly lit developer workspace with dark screens, glowing code editor, deep shadows, atmospheric low-key lighting"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw" />
        
        {/* Gradient scrim — dark left for white text */}
        <div className="absolute inset-0 gradient-scrim-left" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Atmospheric blob */}
      <div
        className="hero-blob absolute top-1/3 left-1/4 w-96 h-96 rounded-full pointer-events-none z-10 transition-transform duration-700"
        style={{
          background: 'radial-gradient(circle, rgba(193,92,57,0.25) 0%, transparent 70%)',
          filter: 'blur(60px)'
        }} />
      

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-20 flex flex-col justify-between min-h-screen px-6 lg:px-12 pt-32 pb-12">
        
        {/* Main text */}
        <div className="max-w-3xl mt-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-md text-xs font-bold uppercase tracking-widest text-white/90 mb-10 animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-ring" />
            Available for opportunities 
          </div>

          {/* Name */}
          <h1 className="font-display text-hero-xl text-white mb-6 animate-fade-in stagger-1">
            Triveni<br />
            <span className="italic" style={{ color: '#E8A088' }}>Pilla</span>
          </h1>

          {/* Role */}
          <p className="text-xl md:text-2xl text-white/80 font-light leading-snug max-w-xl mb-10 animate-fade-in stagger-2">
            Software Engineer with 1+ year of experience in Spring Boot microservices, banking integrations, and secure enterprise applications.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 animate-fade-in stagger-3">
            <a
              href="#experience"
              className="bg-primary text-primary-foreground px-8 py-3.5 rounded-full text-base font-semibold hover:bg-accent transition-colors">
              
              View Experience
            </a>
            <a
              href="mailto:pillatriveni.cs@gmail.com"
              className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-3.5 rounded-full text-base font-semibold hover:bg-white/20 transition-colors">
              
              Get in Touch
            </a>
          </div>
        </div>

        {/* Bottom stats bar */}
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-0 sm:divide-x divide-white/20 animate-fade-in stagger-4">
          <div className="sm:pr-12" suppressHydrationWarning>
            <div className="text-3xl md:text-4xl font-display font-semibold text-white mb-1" suppressHydrationWarning>1+</div>
            <div className="text-sm text-white/60 font-medium">Years at LTIMindtree</div>
          </div>
          <div className="sm:px-12" suppressHydrationWarning>
            <div className="text-3xl md:text-4xl font-display font-semibold text-white mb-1" suppressHydrationWarning>20+</div>
            <div className="text-sm text-white/60 font-medium">Banking integrations built</div>
          </div>
          <div className="sm:px-12" suppressHydrationWarning>
            <div className="text-3xl md:text-4xl font-display font-semibold text-white mb-1" suppressHydrationWarning>9.42</div>
            <div className="text-sm text-white/60 font-medium">CGPA · CBIT Hyderabad</div>
          </div>
          <div className="sm:pl-12" suppressHydrationWarning>
            <div className="text-3xl md:text-4xl font-display font-semibold text-white mb-1" suppressHydrationWarning>8+</div>
            <div className="text-sm text-white/60 font-medium">Security vulnerabilities fixed</div>
          </div>
        </div>
      </div>
    </section>);

}