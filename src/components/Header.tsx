'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

const navLinks = [
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/90 backdrop-blur-xl border-b border-border shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5">
              <AppLogo
                size={36}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              />
              <span
                className={`font-display font-semibold text-lg tracking-tight hidden sm:block transition-colors ${
                  isScrolled ? 'text-foreground' : 'text-white'
                }`}
              >
                Triveni Pilla
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks?.map((link) => (
                <a
                  key={link?.label}
                  href={link?.href}
                  className={`nav-link transition-colors ${
                    isScrolled ? 'text-muted-foreground hover:text-foreground' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link?.label}
                </a>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="mailto:pillatriveni.cs@gmail.com"
                className="bg-primary text-primary-foreground px-5 py-2 rounded-full text-sm font-semibold hover:bg-accent transition-colors"
              >
                Hire Me
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 -mr-2"
              aria-label="Toggle menu"
              onClick={() => setMobileOpen((v) => !v)}
            >
              <Icon
                name={mobileOpen ? 'XMarkIcon' : 'Bars3Icon'}
                size={24}
                className={isScrolled ? 'text-foreground' : 'text-white'}
              />
            </button>
          </div>
        </div>
      </header>
      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 mobile-nav-overlay flex flex-col lg:hidden">
          <div className="flex items-center justify-between px-6 h-16 border-b border-border">
            <span className="font-display font-semibold text-lg text-foreground">Triveni Pilla</span>
            <button onClick={closeMobile} aria-label="Close menu" className="p-2">
              <Icon name="XMarkIcon" size={24} className="text-foreground" />
            </button>
          </div>
          <nav className="flex flex-col px-6 pt-8 gap-2">
            {navLinks?.map((link) => (
              <a
                key={link?.label}
                href={link?.href}
                onClick={closeMobile}
                className="text-foreground font-medium text-xl py-3 border-b border-border hover:text-primary transition-colors"
              >
                {link?.label}
              </a>
            ))}
            <div className="mt-8">
              <a
                href="mailto:pillatriveni.cs@gmail.com"
                className="block bg-primary text-primary-foreground text-center px-6 py-4 rounded-2xl font-semibold text-base hover:bg-accent transition-colors"
              >
                Hire Me
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}