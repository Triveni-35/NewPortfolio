'use client';
import React, { useEffect, useRef } from 'react';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Java', 'SQL', 'JavaScript', 'Python'],
    span: 'col-span-1',
    rowSpan: '',
    accent: true,
  },
  {
    title: 'Backend Technologies',
    skills: [
      'Spring Boot',
      'Spring Security',
      'Spring Data JPA',
      'Hibernate',
      'REST APIs',
      'Microservices',
      'SOAP Web Services',
      'Oracle Service Bus (OSB)',
      'JWT Authentication',
    ],
    span: 'col-span-1 md:col-span-2',
    rowSpan: 'md:row-span-2',
    accent: false,
  },
  {
    title: 'Frontend',
    skills: ['Angular', 'HTML', 'CSS', 'Bootstrap'],
    span: 'col-span-1',
    rowSpan: '',
    accent: false,
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'MongoDB'],
    span: 'col-span-1',
    rowSpan: '',
    accent: false,
  },
  {
    title: 'Tools & Platforms',
    skills: [
      'Git',
      'GitHub',
      'SVN',
      'Jenkins',
      'Postman',
      'Swagger UI',
      'WebLogic Server',
      'JDeveloper',
      'SOAP UI',
      'Oracle Service Bus',
      'SOA'
    ],
    span: 'col-span-1',
    rowSpan: '',
    accent: false,
  },
  {
    title: 'Core Concepts',
    skills: [
      'OOP',
      'DBMS',
      'Data Structures & Algorithms',
      'Distributed Systems',
      'Design Patterns',
      'Maven',
      'Agile/Scrum',
    ],
    span: 'col-span-1 md:col-span-2',
    rowSpan: '',
    accent: false,
  },
];

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.skill-card');
            cards.forEach((card, i) => {
              setTimeout(() => {
                (card as HTMLElement).style.opacity = '1';
                card.classList.add('animate-fade-up');
              }, i * 70);
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
    <section id="skills" ref={sectionRef} className="py-20 px-6 lg:px-12 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <span className="text-primary font-bold text-xs uppercase tracking-widest mb-3 block">
            Technical Expertise
          </span>
          <h2 className="font-display text-section-title text-foreground">
            Skills &amp; <span className="italic" style={{ color: 'var(--primary)' }}>stack</span>
          </h2>
        </div>

        {/* Bento grid */}
        {/* BENTO MAP (grid-cols-3 desktop):
            Row 1: [col-1: Languages cs-1] [col-2: Backend cs-2 rs-2] [col-3: Frontend cs-1]
            Row 2: [col-1: Databases cs-1] [col-2: OCCUPIED(Backend)] [col-3: Tools cs-1]
            Row 3: [col-1: Core cs-2 (fills last row)] [col-3: OCCUPIED→cs-2]
            Placed 6/6 ✓
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-auto">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className={`skill-card opacity-100 card-sand rounded-4xl p-7 flex flex-col gap-5 group hover:border-primary transition-all duration-300 ${cat.span} ${cat.rowSpan}`}
            >
              <div className="flex items-center justify-between">
                <h3
                  className={`font-display text-xl font-semibold ${
                    cat.accent ? 'text-primary italic' : 'text-foreground'
                  }`}
                >
                  {cat.title}
                </h3>
                <span className="text-xs font-bold text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                  {cat.skills.length}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}