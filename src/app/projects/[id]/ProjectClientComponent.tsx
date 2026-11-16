'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Anton, DM_Sans } from 'next/font/google';
import {
  FaArrowLeft, FaArrowRight, FaGithub, FaUser, FaCalendarAlt, FaUsers, FaCheck,
} from 'react-icons/fa';

const display = Anton({ weight: '400', subsets: ['latin'] });
const body = DM_Sans({ subsets: ['latin'] });

/* cream #F6EBDD | ink #1E1612 | clay #C4542D | olive #5E6340 | sand #E9C98F */

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  client?: string;
  timeframe?: string;
  technologies?: string[];
  imageSrc: string;
  link?: string;
  imageGallery?: string[];
  features?: string[];
  type?: 'Individual' | 'Group' | 'Dual';
  githubRepo?: string;
  videoUrl?: string;
}

interface ProjectClientComponentProps {
  project: Project;
  nextProject?: Project | null;
}

/* removes hidden zero-width characters that were inside some timeframe strings */
const clean = (s?: string) => (s ?? '').replace(/[\u200b-\u200d\ufeff]/g, '').replace(/\s+/g, ' ').trim();

const Star = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
    <path d="M12 0c.6 6.4 5.6 11.4 12 12-6.4.6-11.4 5.6-12 12-.6-6.4-5.6-11.4-12-12C6.4 11.4 11.4 6.4 12 0z" />
  </svg>
);

const Globe = ({ className = '', stroke = '#E9C98F' }: { className?: string; stroke?: string }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none" stroke={stroke} strokeWidth="1" aria-hidden>
    <circle cx="60" cy="60" r="52" />
    {[18, 34, 46].map((rx) => <ellipse key={rx} cx="60" cy="60" rx={rx} ry="52" />)}
    {[-36, -18, 0, 18, 36].map((y) => <ellipse key={y} cx="60" cy={60 + y} rx={Math.sqrt(52 * 52 - y * y)} ry="9" />)}
  </svg>
);

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-[#1E1612]/40 bg-[#F6EBDD] px-4 py-1.5 text-[11px] font-medium tracking-wide">
    <span className="h-1.5 w-1.5 rounded-full bg-[#C4542D]" />{children}
  </span>
);

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.5, delay },
});

const ProjectClientComponent: React.FC<ProjectClientComponentProps> = ({ project, nextProject }) => {
  const timeframe = clean(project.timeframe);

  const infoCards = [
    project.client && { icon: <FaUser />, label: 'CLIENT', value: project.client, tone: 'bg-[#C4542D] text-[#F6EBDD]' },
    timeframe && { icon: <FaCalendarAlt />, label: 'TIMEFRAME', value: timeframe, tone: 'bg-[#5E6340] text-[#F6EBDD]' },
    project.type && { icon: <FaUsers />, label: 'PROJECT TYPE', value: project.type, tone: 'bg-[#E9C98F] text-[#1E1612]' },
  ].filter(Boolean) as { icon: React.ReactNode; label: string; value: string; tone: string }[];

  return (
    <div className={`${body.className} min-h-screen bg-[#F6EBDD] px-3 pb-8 pt-24 text-[#1E1612] sm:px-6`}>
      {/* Nav */}
      <nav className="fixed left-0 top-3 z-50 w-full px-3 sm:px-6">
        <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full bg-[#1E1612] px-5 py-2.5 shadow-xl">
          <Link href="/" className="group flex items-center gap-3 text-[#F6EBDD]">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#C4542D] text-xs transition group-hover:-translate-x-1">
              <FaArrowLeft />
            </span>
            <span className="text-[11px] font-bold tracking-wider">BACK TO PORTFOLIO</span>
          </Link>
          <span className="hidden items-center gap-2 text-[#F6EBDD] sm:flex">
            <Star className="h-5 w-5 text-[#C4542D]" />
            <span className={`${display.className} text-sm leading-none tracking-wide`}>NILAKSHI SAMARASEKARA</span>
          </span>
          <span className="rounded-full bg-[#E9C98F] px-4 py-1.5 text-[11px] font-bold text-[#1E1612]">{project.category}</span>
        </div>
      </nav>

      <main className="mx-auto max-w-6xl space-y-10">
        {/* Hero */}
        <section className="grid items-center gap-10 pt-4 lg:grid-cols-[1fr_1.1fr]">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Pill>Project · {project.category}</Pill>
            <h1 className={`${display.className} mt-6 text-[3rem] uppercase leading-[1] sm:text-[4.4rem]`}>
              {project.title}
            </h1>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-[#1E1612]/80">{project.description}</p>

            {project.githubRepo && (
              <a href={project.githubRepo} target="_blank" rel="noopener noreferrer"
                className="group mt-7 inline-flex items-center gap-3 rounded-full bg-[#C4542D] py-2 pl-6 pr-2 text-xs font-bold text-[#F6EBDD]">
                <FaGithub className="text-base" /> VIEW ON GITHUB
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E9C98F] text-[#1E1612] transition group-hover:translate-x-1">
                  <FaArrowRight />
                </span>
              </a>
            )}
          </motion.div>

          <motion.div className="relative" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }}>
            <div className="absolute -bottom-4 -right-4 h-full w-full rounded-[2.2rem] bg-[#5E6340]" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2.2rem] border-2 border-[#1E1612] bg-[#1E1612]">
              <Image src={project.imageSrc} alt={project.title} fill priority
                sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover" />
            </div>
            <Star className="absolute -left-3 -top-3 h-10 w-10 text-[#C4542D]" />
            <Star className="absolute -bottom-6 left-10 h-6 w-6 text-[#1E1612]" />
          </motion.div>
        </section>

        {/* Info cards */}
        {infoCards.length > 0 && (
          <section className="grid gap-4 sm:grid-cols-3">
            {infoCards.map((c, i) => (
              <motion.div key={c.label} {...fade(i * 0.08)}
                className="flex items-center gap-4 rounded-[1.4rem] border-2 border-[#1E1612] bg-[#F6EBDD] p-4">
                <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-lg ${c.tone}`}>{c.icon}</span>
                <div className="min-w-0">
                  <p className="text-[10px] font-extrabold tracking-[0.2em] text-[#C4542D]">{c.label}</p>
                  <p className="mt-0.5 text-sm font-bold leading-snug">{c.value}</p>
                </div>
              </motion.div>
            ))}
          </section>
        )}

        {/* Technologies */}
        {project.technologies && project.technologies.length > 0 && (
          <motion.section {...fade()} className="relative overflow-hidden rounded-[2rem] bg-[#1E1612] p-6 text-[#F6EBDD] sm:p-8">
            <Globe className="pointer-events-none absolute -right-12 -top-12 h-56 w-56 opacity-20" />
            <p className="relative text-[11px] font-bold tracking-[0.25em] text-[#E9C98F]">TECHNOLOGIES USED</p>
            <div className="relative mt-4 flex flex-wrap gap-3">
              {project.technologies.map((t) => (
                <span key={t} className="rounded-full border border-[#E9C98F]/60 px-5 py-2 text-sm font-bold text-[#E9C98F] transition hover:bg-[#E9C98F] hover:text-[#1E1612]">
                  {t}
                </span>
              ))}
            </div>
          </motion.section>
        )}

        {/* Features */}
        {project.features && project.features.length > 0 && (
          <section>
            <p className="text-[11px] font-bold tracking-[0.25em] text-[#C4542D]">KEY FEATURES</p>
            <h2 className={`${display.className} mt-1 text-4xl uppercase leading-none sm:text-5xl`}>
              What it <span className="text-[#C4542D]">does</span>
            </h2>
            <ul className="mt-6 grid gap-4 md:grid-cols-2">
              {project.features.map((f, i) => {
                const [head, ...tail] = f.trim().split(/\s[–-]\s/);
                const rest = tail.join(' – ');
                return (
                  <motion.li key={i} {...fade((i % 2) * 0.06)}
                    className="flex items-start gap-4 rounded-[1.4rem] border border-[#C4542D]/50 bg-[#F6EBDD] p-4 transition hover:-translate-y-1 hover:border-[#C4542D]">
                    <span className={`${display.className} text-3xl leading-none text-[#C4542D]`}>{String(i + 1).padStart(2, '0')}</span>
                    <div className="min-w-0">
                      <p className="flex items-center gap-2 text-sm font-extrabold">
                        <FaCheck className="text-[10px] text-[#5E6340]" /> {head}
                      </p>
                      {rest && <p className="mt-1 text-sm leading-relaxed text-[#1E1612]/75">{rest}</p>}
                    </div>
                  </motion.li>
                );
              })}
            </ul>
          </section>
        )}

        {/* Video */}
        {project.videoUrl && (
          <motion.section {...fade()} className="mx-auto w-full max-w-4xl">
            <p className="text-center text-[11px] font-bold tracking-[0.25em] text-[#C4542D]">PROJECT DEMO</p>
            <div className="relative mt-4">
              <div className="absolute -bottom-3 -right-3 h-full w-full rounded-[1.6rem] bg-[#5E6340]" />
              <div className="relative overflow-hidden rounded-[1.6rem] border-2 border-[#1E1612] bg-[#1E1612]">
                {project.videoUrl.includes('youtube.com') || project.videoUrl.includes('vimeo.com') ? (
                  <iframe src={project.videoUrl} title={`${project.title} demo`} className="aspect-video w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                ) : (
                  <video controls className="w-full" src={project.videoUrl} />
                )}
              </div>
            </div>
          </motion.section>
        )}

        {/* Gallery */}
        {project.imageGallery && project.imageGallery.length > 0 && (
          <section>
            <p className="text-[11px] font-bold tracking-[0.25em] text-[#C4542D]">SCREENS</p>
            <h2 className={`${display.className} mt-1 text-4xl uppercase leading-none sm:text-5xl`}>
              Project <span className="text-[#C4542D]">gallery</span>
            </h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {project.imageGallery.map((src, i) => (
                <motion.div key={src + i} {...fade(i * 0.06)} className="relative">
                  <div className={`absolute -bottom-2 -right-2 h-full w-full rounded-[1.4rem] ${['bg-[#5E6340]', 'bg-[#C4542D]', 'bg-[#E9C98F]'][i % 3]}`} />
                  <div className="group relative aspect-[4/3] overflow-hidden rounded-[1.4rem] border-2 border-[#1E1612] bg-[#1E1612]">
                    <Image src={src} alt={`${project.title} screen ${i + 1}`} fill sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition duration-700 group-hover:scale-105" />
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* Next project */}
        {nextProject && (
          <motion.div {...fade()}>
            <Link href={`/projects/${nextProject.id}`}
              className="group relative flex flex-wrap items-center justify-between gap-6 overflow-hidden rounded-[2rem] bg-[#C4542D] p-7 text-[#F6EBDD] shadow-[8px_8px_0_#1E1612] transition duration-300 hover:-translate-x-1 hover:-translate-y-1 sm:p-10">
              <Globe className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 opacity-30" stroke="#F6EBDD" />
              <div className="relative">
                <p className="text-xs font-bold tracking-[0.2em] text-[#E9C98F]">CONTINUE EXPLORING · NEXT PROJECT</p>
                <h3 className={`${display.className} mt-2 text-4xl uppercase leading-none sm:text-6xl`}>{nextProject.title}</h3>
              </div>
              <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#E9C98F] text-[#1E1612] transition group-hover:translate-x-2">
                <FaArrowRight className="text-xl" />
              </span>
            </Link>
          </motion.div>
        )}

        {/* Footer */}
        <footer className="flex flex-wrap items-center justify-between gap-3 rounded-full bg-[#1E1612] px-6 py-4 text-xs text-[#F6EBDD]/80">
          <span className="flex items-center gap-2"><Star className="h-5 w-5 text-[#C4542D]" /> Nilakshi Samarasekara · Software Engineer</span>
          <Link href="/" className="font-bold text-[#E9C98F] hover:underline">← Back to portfolio</Link>
        </footer>
      </main>
    </div>
  );
};

export default ProjectClientComponent;