'use client';
import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const projects = [
{
  title: 'E-Mart Shopping Application',
  subtitle: 'Full-stack e-commerce platform',
  description:
  'Full-stack e-commerce application with product, cart, and order management modules. Features JWT-based authentication, role-based authorization, Angular AuthGuard, pagination, global exception handling, and Swagger UI integration.',
  image:
  "https://img.rocket.new/generatedImages/rocket_gen_img_120bffd62-1772889008858.png",
  imageAlt:
  'E-commerce dashboard interface on laptop, bright airy workspace, white background, modern clean lighting',
  techStack: [
  'Java',
  'Spring Boot',
  'Spring Security',
  'Hibernate',
  'Spring Data JPA',
  'Angular',
  'Authgaurd',
  'Bootstrap',
  'MySQL',
  'JWT',
  'Swagger UI'],

  highlights: [
  'JWT-based authentication & RBAC, DTOs',
  'RESTful APIs with pagination',
  'SLF4J logging & global exception handling',
  'Responsive Angular UI with child routing'],

  accentColor: '#C15C39'
},
{
  title: 'BookNest Hotel Reservation System',
  subtitle: 'MERN stack booking platform',
  description:
  'Hotel reservation platform using the MERN stack with room booking, availability tracking, and role-based access control. Built RESTful APIs and interactive React interfaces with MongoDB-backed persistence.',
  image:
  "https://img.rocket.new/generatedImages/rocket_gen_img_1c3da9418-1772968522209.png",
  imageAlt:
  'Luxury hotel lobby with warm ambient lighting, golden tones, rich interior, bright airy natural light',
  techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'REST APIs'],
  highlights: [
  'JWT authentication & RBAC',
  'Room availability tracking',
  'Interactive React interfaces',
  'MongoDB-backed persistence'],

  accentColor: '#7B6B5A'
}];


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
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="text-primary font-bold text-xs uppercase tracking-widest mb-3 block">
            Personal Projects
          </span>
          <h2 className="font-display text-section-title text-foreground">
            What I&apos;ve <span className="italic" style={{ color: 'var(--primary)' }}>built</span>
          </h2>
        </div>

        {/* Project cards */}
        <div className="flex flex-col gap-8">
          {projects.map((project, idx) =>
          <div
            key={idx}
            className={`project-card opacity-100 bg-background rounded-5xl overflow-hidden border border-border group hover:shadow-xl transition-all duration-500 grid grid-cols-1 lg:grid-cols-2 ${
            idx % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`
            }>
            
              {/* Image side */}
              <div
              className={`relative h-64 lg:h-auto min-h-[280px] overflow-hidden ${
              idx % 2 === 1 ? 'lg:col-start-2' : ''}`
              }>
              
                <AppImage
                src={project.image}
                alt={project.imageAlt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw" />
              
                <div className="absolute inset-0 bg-foreground/20" />
                {/* Tech badges overlay */}
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  {project.techStack.slice(0, 4).map((tech) =>
                <span
                  key={tech}
                  className="bg-black/50 backdrop-blur-md text-white text-xs font-semibold px-2.5 py-1 rounded-full border border-white/20">
                  
                      {tech}
                    </span>
                )}
                  {project.techStack.length > 4 &&
                <span className="bg-black/50 backdrop-blur-md text-white text-xs font-semibold px-2.5 py-1 rounded-full border border-white/20">
                      +{project.techStack.length - 4} more
                    </span>
                }
                </div>
              </div>

              {/* Content side */}
              <div
              className={`p-8 lg:p-12 flex flex-col justify-between ${
              idx % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`
              }>
              
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

                  {/* Highlights */}
                  <ul className="space-y-2.5 mb-8">
                    {project.highlights.map((h, i) =>
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                        <div className="w-4 h-4 rounded-full border border-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon name="CheckIcon" size={10} className="text-primary" />
                        </div>
                        {h}
                      </li>
                  )}
                  </ul>

                  {/* All tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) =>
                  <span key={tech} className="tech-badge">
                        {tech}
                      </span>
                  )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Explore more projects block */}
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
    </section>);

}