import React from 'react';

import AppLogo from '@/components/ui/AppLogo';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo + name */}
          <div className="flex items-center gap-2">
            <AppLogo size={28} />
            <span className="font-display font-semibold text-foreground text-sm">Triveni Pilla</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#experience" className="hover:text-foreground transition-colors font-medium">Experience</a>
            <a href="#projects" className="hover:text-foreground transition-colors font-medium">Projects</a>
            <a href="#skills" className="hover:text-foreground transition-colors font-medium">Skills</a>
            <a href="#contact" className="hover:text-foreground transition-colors font-medium">Contact</a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2026 Triveni Pilla
          </p>
        </div>
      </div>
    </footer>
  );
}