'use client';
import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

const contactLinks = [
{
  label: 'Email',
  value: 'pillatriveni.cs@gmail.com',
  href: 'mailto:pillatriveni.cs@gmail.com',
  icon: 'EnvelopeIcon'
},
{
  label: 'LinkedIn',
  value: 'linkedin.com/in/triveni-pilla-6ba58525b',
  href: 'https://www.linkedin.com/in/triveni-pilla-6ba58525b',
  icon: 'LinkIcon'
},
{
  label: 'GitHub',
  value: 'github.com/Triveni-35',
  href: 'https://github.com/Triveni-35',
  icon: 'CodeBracketIcon'
},
{
  label: 'Phone',
  value: '+91 98xxxxxxxxx',
  href: 'tel:+98xxxxxxxxx',
  icon: 'PhoneIcon'
}];


const codingProfiles = [
  {
    label: 'LeetCode',
    username: 'triveni_pilla',
    href: 'https://leetcode.com/u/Triveni_Pilla',
    icon: 'CodeBracketSquareIcon',
    color: '#FFA116',
    bg: 'bg-[#FFA116]/10',
    border: 'hover:border-[#FFA116]',
    accent: 'text-[#FFA116]',
    description: 'Competitive problem solving'
  },
  {
    label: 'GeeksForGeeks',
    username: 'triveni_pilla',
    href: 'https://www.geeksforgeeks.org/profile/trivenipcs',
    icon: 'CommandLineIcon',
    color: '#2F8D46',
    bg: 'bg-[#2F8D46]/10',
    border: 'hover:border-[#2F8D46]',
    accent: 'text-[#2F8D46]',
    description: 'DSA & coding practice'
  }
];


export default function EducationContact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const els = entry.target.querySelectorAll('.reveal-el');
            els.forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = '1';
                el.classList.add('animate-fade-up');
              }, i * 90);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-20 px-6 lg:px-12 bg-secondary">
      <div className="max-w-6xl mx-auto">
        {/* Education + Contact grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Education card */}
          <div className="reveal-el opacity-100 relative rounded-5xl overflow-hidden min-h-[340px] flex flex-col justify-end">
            <AppImage
              src="https://www.cbit.ac.in/wp-content/uploads/2019/01/ABOUT_TAB-1-1-scaled.jpeg"
              alt="University campus aerial view in bright daylight, green lawns, open sky, airy well-lit academic environment"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw" />
            
            {/* Scrim for dark text — bright photo needs dark overlay for white text */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
            <div className="relative z-10 p-8">
              <div className="text-xs font-bold uppercase tracking-widest text-white/70 mb-2">
                Education
              </div>
              <h3 className="font-display text-2xl font-semibold text-white mb-1 leading-tight">
                Chaitanya Bharathi Institute of Technology
              </h3>
              <p className="text-white/70 text-sm mb-4">
                B.E. Computer Science &amp; Engineering · 2021–2025
              </p>
              <div className="flex items-center gap-3">
                <span className="bg-primary text-white text-2xl font-display font-bold px-4 py-1.5 rounded-2xl">
                  9.42
                </span>
                <span className="text-white/80 text-sm font-medium">CGPA out of 10.0</span>
              </div>
            </div>
          </div>

          {/* Contact links card */}
          <div className="reveal-el opacity-100 card-sand rounded-5xl p-8 flex flex-col justify-between">
            <div>
              <span className="text-primary font-bold text-xs uppercase tracking-widest mb-3 block">
                Contact
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-8">
                Let&apos;s <span className="italic" style={{ color: 'var(--primary)' }}>connect</span>
              </h2>
            </div>

            <div className="space-y-4">
              {contactLinks.map((link) =>
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-4 p-4 rounded-2xl bg-background border border-border hover:border-primary hover:bg-primary/5 transition-all duration-200 group">
                
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                    <Icon name={link.icon as any} size={18} className="text-primary" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      {link.label}
                    </div>
                    <div className="text-sm font-medium text-foreground truncate">{link.value}</div>
                  </div>
                  <Icon
                  name="ArrowTopRightOnSquareIcon"
                  size={16}
                  className="text-muted-foreground ml-auto group-hover:text-primary transition-colors flex-shrink-0" />
                
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Coding Profiles block */}
        <div className="reveal-el opacity-100 mb-8">
          <div className="card-sand rounded-5xl p-8">
            <span className="text-primary font-bold text-xs uppercase tracking-widest mb-3 block">
              Coding Profiles
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-foreground mb-6">
              Find me on <span className="italic" style={{ color: 'var(--primary)' }}>platforms</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {codingProfiles.map((profile) => (
                <a
                  key={profile.label}
                  href={profile.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-5 rounded-2xl bg-background border border-border ${profile.border} transition-all duration-200 group`}
                >
                  <div className={`w-12 h-12 rounded-xl ${profile.bg} flex items-center justify-center flex-shrink-0 transition-colors`}>
                    <Icon name={profile.icon as any} size={22} className={profile.accent} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className={`text-sm font-bold ${profile.accent}`}>{profile.label}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{profile.description}</div>
                  </div>
                  <Icon
                    name="ArrowTopRightOnSquareIcon"
                    size={16}
                    className="text-muted-foreground ml-auto group-hover:text-primary transition-colors flex-shrink-0"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA banner */}
        <div className="reveal-el opacity-100 relative rounded-5xl overflow-hidden bg-foreground p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Blob */}
          <div
            className="absolute top-0 right-0 w-80 h-80 pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(193,92,57,0.3) 0%, transparent 70%)',
              filter: 'blur(60px)'
            }} />
          
          <div className="relative z-10">
            <h3 className="font-display text-3xl md:text-4xl text-white mb-3">
              Open to new <span className="italic text-primary">opportunities</span>
            </h3>
            <p className="text-white/60 max-w-md text-sm leading-relaxed">
              Java Full stack Developer with BFSI domain expertise. Available for full-time roles in
              AI, ML, Data Science, backend engineering, microservices, and distributed systems and any other technologies.
            </p>
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a
              href="mailto:pillatriveni.cs@gmail.com"
              className="bg-primary text-white px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-accent transition-colors whitespace-nowrap text-center">
              
              Send an Email
            </a>
            <a
              href="https://www.linkedin.com/in/triveni-pilla-6ba58525b"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 border border-white/20 text-white px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-white/20 transition-colors whitespace-nowrap text-center">
              
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </section>);

}