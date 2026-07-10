'use client';
import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

const achievements = [
  {
    icon: 'ServerIcon',
    title: 'Multi-tenant microservices',
    description:
      'Developed Spring Boot microservices for core banking workflows — account management, card lifecycle, customer onboarding, transaction processing, and statement generation.',
  },
  {
    icon: 'ShieldCheckIcon',
    title: '8 OWASP vulnerabilities fixed',
    description:
      'Resolved 8 security vulnerabilities detected by OWASP Dependency Check by upgrading dependencies, compatibility testing, and ensuring secure application releases.',
  },
  {
    icon: 'ArrowPathIcon',
    title: 'Distributed resilience patterns',
    description:
      'Improved reliability by implementing retry strategies, connection pooling, timeout management, and idempotent request handling across distributed services.',
  },
  {
    icon: 'CircleStackIcon',
    title: '20+ banking integrations',
    description:
      'Built 20+ integrations with external banking and payment systems using SOAP services, SOA workflows, and Oracle Service Bus for online and batch financial operations.',
  },
  {
    icon: 'LockClosedIcon',
    title: 'PCI-aligned security controls',
    description:
      'Strengthened compliance by implementing encryption, PII masking, RBAC, and PCI-aligned controls for sensitive financial data processing.',
  },
  {
    icon: 'DocumentIcon',
    title: 'Secure file-based pipelines',
    description:
      'Developed file-based integration pipelines for Card Production and PIN Generation services supporting downstream banking vendors and payment ecosystems.',
  },
  {
    icon: 'UserGroupIcon',
    title: 'Agile & mentorship',
    description:
      'Contributed to Agile sprint planning, effort estimation, production issue resolution, peer code reviews, and mentored new joiners through project knowledge transfer sessions.',
  },
];

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.reveal-card');
            cards.forEach((card, i) => {
              setTimeout(() => {
                card.classList.add('animate-fade-up');
                (card as HTMLElement).style.opacity = '1';
              }, i * 80);
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
    <section id="experience" ref={sectionRef} className="py-20 px-6 lg:px-12 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16 grid gap-4 md:grid-cols-2 md:items-end">
          <div>
            <span className="text-primary font-bold text-xs uppercase tracking-widest mb-3 block">
              Professional Experience
            </span>
            <h2 className="font-display text-section-title text-foreground">
              Where I&apos;ve<br />
              <span className="italic" style={{ color: 'var(--primary)' }}>worked</span>
            </h2>
          </div>
          <div>
            {/* Company card */}
            <div className="card-sand rounded-4xl p-6 flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center flex-shrink-0">
                <span className="text-white font-display font-bold text-xl">L</span>
              </div>
              <div>
                <div className="font-semibold text-foreground text-lg">LTIMindtree</div>
                <div className="text-muted-foreground text-sm">Software Engineer · June 2025 – Present</div>
                <div className="text-primary text-xs font-semibold mt-1 uppercase tracking-wide">BFSI Domain · Hyderabad</div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements grid — asymmetric bento */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className={`reveal-card opacity-100 card-sand rounded-4xl p-7 flex flex-col gap-4 group hover:border-primary transition-all duration-300 ${
                idx === 0 ? 'lg:col-span-2' : ''
              } ${idx === 3 ? 'lg:col-span-2' : ''}`}
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Icon name={item.icon as any} size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2 text-base leading-snug">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}