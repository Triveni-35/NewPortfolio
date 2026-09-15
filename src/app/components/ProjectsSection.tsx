'use client';
import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const projects = [
  {
    title: 'What Did I Miss? AI Catch-Up Assistant',
    subtitle: 'Agentic AI application',
    description:
      'Built and deployed a full-stack agentic AI platform that analyzes missed group conversations, identifies urgent updates, pending replies, action items, deadlines, and upcoming events using tool calling with Google Gemini and LangGraph.',
    image:
      '/assets/images/wdim.png',
    imageAlt:
      'AI assistant dashboard showing conversation summary and action items on a modern interface',
    techStack: ['FastAPI', 'LangGraph', 'Google Gemini', 'RAG', 'PostgreSQL', 'pgvector', 'Python', 'Pydantic'],
    highlights: [
      'Built a semantic RAG pipeline with Gemini embeddings and pgvector cosine similarity for grounded context-aware responses.',
      'Created a source-agnostic ingestion pipeline with message deduplication, timestamp normalization, and fault-tolerant Gemini processing.',
      'Delivered a React + TypeScript experience with unread tracking and automated test coverage for reliable conversation summaries.',
    ],
    accentColor: '#C15C39',
  },
  {
    title: 'E-Mart Shopping Application',
    subtitle: 'Full-stack e-commerce platform',
    description:
      'Developed a complete e-commerce application with product, cart, and order management features. The system includes JWT authentication, role-based authorization, responsive Angular UI, pagination, DTO-based APIs, and robust validation and logging.',
    image:
      '/assets/images/emart.jpg',
    imageAlt:
      'Modern e-commerce dashboard with shopping cart and product catalog on a clean interface',
    techStack: ['Java', 'Spring Boot', 'Spring Security', 'Hibernate', 'Angular', 'MySQL', 'JWT', 'Bootstrap', 'Swagger UI'],
    highlights: [
      'Implemented JWT-based authentication, role-based access control, and Angular AuthGuard for secure user flows.',
      'Built RESTful APIs with DTOs, validation, pagination, global exception handling, and SLF4J logging.',
      'Created a responsive shopping interface with child routing and streamlined product, cart, and order management workflows.',
    ],
    accentColor: '#7B6B5A',
  },
];

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.project-card');
            cards.forEach((card, i) => {
              setTimeout(() => {
                card.classList.add('animate-fade-up');
                (card as HTMLElement).style.opacity = '1';
              }, i * 120);
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
    <section id="projects" ref={sectionRef} className="py-20 px-6 lg:px-12 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <span className="text-primary font-bold text-xs uppercase tracking-widest mb-3 block">
            Personal Projects
          </span>
          <h2 className="font-display text-section-title text-foreground">
            What I&apos;ve <span className="italic" style={{ color: 'var(--primary)' }}>built</span>
          </h2>
        </div>

        <div className="flex flex-col gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`project-card opacity-100 bg-background rounded-5xl overflow-hidden border border-border group hover:shadow-xl transition-all duration-500 grid grid-cols-1 lg:grid-cols-2 ${
                idx % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div
                className={`relative h-64 lg:h-auto min-h-[280px] overflow-hidden ${
                  idx % 2 === 1 ? 'lg:col-start-2' : ''
                }`}
              >
                <AppImage
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

                <div className="absolute inset-0 bg-foreground/20" />
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="bg-black/50 backdrop-blur-md text-white text-xs font-semibold px-2.5 py-1 rounded-full border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="bg-black/50 backdrop-blur-md text-white text-xs font-semibold px-2.5 py-1 rounded-full border border-white/20">
                      +{project.techStack.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              <div
                className={`p-8 lg:p-12 flex flex-col justify-between ${
                  idx % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''
                }`}
              >
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
                    {project.subtitle}
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-8 text-sm">
                    {project.description}
                  </p>

                  <ul className="space-y-2.5 mb-8">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                        <div className="w-4 h-4 rounded-full border border-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon name="CheckIcon" size={10} className="text-primary" />
                        </div>
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-5xl border border-border bg-background p-10 flex flex-col items-center text-center gap-4">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Icon name="FolderOpenIcon" size={24} className="text-primary" />
          </div>
          <h3 className="font-display text-xl font-semibold text-foreground">
            Explore More Projects
          </h3>
          <p className="text-muted-foreground text-sm max-w-md leading-relaxed">
            Check out my GitHub profile for more projects, experiments, and open-source contributions.
          </p>
          <a
            href="https://github.com/Triveni-35"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold text-sm px-6 py-3 rounded-full hover:opacity-90 transition-opacity duration-200"
          >
            <Icon name="GithubIcon" size={18} className="text-primary-foreground" />
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}
