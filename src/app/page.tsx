'use client';
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Anton, DM_Sans, Mrs_Saint_Delafield } from "next/font/google";
import {
  FaLaptopCode, FaPalette, FaMobileAlt, FaCloud, FaLinkedin, FaGithub, FaFacebook,
  FaWhatsapp, FaEnvelope, FaArrowUp, FaArrowRight, FaMapMarkerAlt, FaCheck, FaTrophy, FaPlus,
  FaTimes, FaChevronLeft, FaChevronRight, FaExpandAlt, FaBriefcase, FaGraduationCap, FaBars,
} from "react-icons/fa";

const display = Anton({ weight: "400", subsets: ["latin"] });
const body = DM_Sans({ subsets: ["latin"] });
const script = Mrs_Saint_Delafield({ weight: "400", subsets: ["latin"] });

/* cream #F6EBDD | ink #1E1612 | clay #C4542D | olive #5E6340 | sand #E9C98F */

type Project = { id: string; title: string; category: string; imageSrc: string; technologies?: string[] };
const projects: Project[] = [
  { id: 'drivex', title: 'DriveX', category: 'Web Development', imageSrc: '/drivex.png', technologies: ['Next.js', 'Node.js', 'Express.js', 'MongoDB'] },
  { id: 'novacare', title: 'NOVA CARE', category: 'Web Development', imageSrc: '/novacare.png', technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'] },
  { id: 'e-library', title: 'E - Library', category: 'Web Development', imageSrc: '/elibrary.png', technologies: ['Next.js', 'Node.js', 'Express.js', 'MongoDB'] },
  { id: 'n_and_b', title: 'N & B Taxi Services', category: 'Web Development', imageSrc: '/nb.png', technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'] },
  { id: 'crop-care-app', title: 'Crop Care App', category: 'App Development', imageSrc: '/cropcare.png', technologies: ['Flutter', 'Java kotlin', 'Python', 'MongoDB'] },
  { id: 'lylu', title: 'LYLU', category: 'Web Development', imageSrc: '/lylu.png', technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'] },
  { id: 'teacher', title: 'Mutual Transfer Portal', category: 'Web Development', imageSrc: '/teacher.png', technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'] },
  { id: 'silva', title: 'De Silva Bar', category: 'Web Development', imageSrc: '/bar.png', technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'] },
];

type BlogPost = { id: string; title: string; excerpt: string; date: string; readTime?: string; category: string; link?: string; image?: string };
const blogPosts: BlogPost[] = [
  { id: '1', title: 'Understanding SonarQube: Catching Issues Before They Become Bugs', excerpt: 'While exploring different security testing tools during my internship, one that stood out for how early it works in the development cycle…', date: 'Aug 23, 2026', category: 'Security', link: 'https://medium.com/@nilakshisamarasekara0/understanding-sonarqube-catching-issues-before-they-become-bugs-9b7138aca60a' /*, image: '/sonarqube.webp' */ },
  { id: '2', title: 'What I Learned About Snyk: Shifting Security Left in Modern Software Development', excerpt: 'As software engineers, we spend a lot of time thinking about functionality, performance, and user experience. Security is often something…', date: 'Aug 20, 2026', category: 'Security', link: 'https://medium.com/@nilakshisamarasekara0/what-i-learned-about-snyk-shifting-security-left-in-modern-software-development-8b690654190a' /*, image: '/snyk.webp' */ },
  { id: '3', title: 'A/B Deployment: Getting Two Versions Live at Once', excerpt: 'You\u2019ve built two versions of a \u201cBuy Now\u201d button, one blue, one orange. Before you can find out which one performs better, you need both…', date: 'Aug 20, 2026', category: 'DevOps', link: 'https://medium.com/@nilakshisamarasekara0/a-b-testing-how-to-know-which-version-wins-9a26711be718' /*, image: '/ab-deployment.webp' */ },
];

type GalleryImage = { id: number; src: string; title: string; tag?: string };
const galleryImages: GalleryImage[] = [
  { id: 1, src: "/gallery1.jpeg", title: "INSL Provincial Competition 2024", tag: "Winners" },
  { id: 2, src: "/gallery2.png", title: "Team Collaboration" },
  { id: 3, src: "/gallery3.png", title: "PYHACK 2023" },
  { id: 4, src: "/gallery4.jpeg", title: "Team Collaboration" },
  { id: 5, src: "/gallery5.jpeg", title: "Team Collaboration" },
  { id: 6, src: "/gallery6.png", title: "INSL Provincial Competition 2023", tag: "Top 10" },
];

const services = [
  { no: "01", icon: <FaLaptopCode />, title: "FULL-STACK DEVELOPMENT", text: "Complete web apps from UI to database. I focus on performance, security and clean, scalable architecture.", chips: ["React", "Next.js", "Node.js", "Spring Boot", "MongoDB", "MySQL"] },
  { no: "02", icon: <FaMobileAlt />, title: "MOBILE APPS", text: "Smooth, high-performance Android and iOS apps from a single Flutter codebase.", chips: ["Flutter", "Android", "iOS", "Kotlin"] },
  { no: "03", icon: <FaCloud />, title: "CLOUD & DEVOPS", text: "Containerized apps, automated pipelines and monitoring so releases stay safe and simple.", chips: ["Docker", "CI/CD", "AWS S3", "CloudWatch"] },
  { no: "04", icon: <FaPalette />, title: "UI / UX DESIGN", text: "Wireframes, prototypes and design systems that make products easy and nice to use.", chips: ["Figma", "Wireframes", "Prototyping", "Design systems"] },
];

// Edit these to match your real journey
const journey = [
  { year: "2022", kind: "EDUCATION", icon: <FaGraduationCap />, title: "BSc in Software Engineering", org: "Sabaragamuwa University of Sri Lanka", note: "2022 – 2026" },
  { year: "JUN 2026", kind: "EXPERIENCE", icon: <FaBriefcase />, title: "Associate Software Engineer Intern", org: "Pearson", note: "Present", current: true },
];

const highlights = [
  { big: "10+", label: "Projects shipped" },
  { big: "Top 10", label: "INSL Provincial 2023" },
  { big: "Winners", label: "INSL Provincial 2024" },
  { big: "10+", label: "Blog articles" },
];

const navItems = [
  { id: 'home', label: 'Home' }, { id: 'about', label: 'About' }, { id: 'expertise', label: 'Expertise' },
  { id: 'work', label: 'Work' }, { id: 'gallery', label: 'Gallery' }, { id: 'blog', label: 'Blog' }, { id: 'contact', label: 'Contact' },
];
const words = ["FULL-STACK DEVELOPER", "FRONTEND DEVELOPER", "MOBILE DEVELOPER", "CLOUD & DEVOPS"];

/* ---------- decorative pieces ---------- */
const Star = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
    <path d="M12 0c.6 6.4 5.6 11.4 12 12-6.4.6-11.4 5.6-12 12-.6-6.4-5.6-11.4-12-12C6.4 11.4 11.4 6.4 12 0z" />
  </svg>
);

const Globe = ({ className = "", stroke = "#E9C98F" }: { className?: string; stroke?: string }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none" stroke={stroke} strokeWidth="1" aria-hidden>
    <circle cx="60" cy="60" r="52" />
    {[18, 34, 46].map((rx) => <ellipse key={rx} cx="60" cy="60" rx={rx} ry="52" />)}
    {[-36, -18, 0, 18, 36].map((y) => <ellipse key={y} cx="60" cy={60 + y} rx={Math.sqrt(52 * 52 - y * y)} ry="9" />)}
  </svg>
);

const Terrain = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 160 100" className={className} fill="none" stroke="#C4542D" strokeWidth="1" aria-hidden>
    {Array.from({ length: 9 }).map((_, row) => {
      const y = 30 + row * 8;
      const pts = Array.from({ length: 33 }).map((_, i) => {
        const h = Math.sin(i / 3 + row / 2) * (4 + row * 0.9) * Math.exp(-Math.pow((i - 16) / 12, 2));
        return `${i * 5},${(y - h).toFixed(1)}`;
      });
      return <polyline key={row} points={pts.join(" ")} />;
    })}
  </svg>
);

const Badge = ({ text }: { text: string }) => (
  <div className="relative h-28 w-28 shrink-0">
    <svg viewBox="0 0 120 120" className="absolute inset-0 animate-[spin_24s_linear_infinite] motion-reduce:animate-none" aria-hidden>
      <defs><path id="ring" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" /></defs>
      <text fontSize="9.5" letterSpacing="3.2" fill="#E9C98F" fontWeight="700"><textPath href="#ring">{text}</textPath></text>
    </svg>
    <Star className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 text-[#F6EBDD]" />
  </div>
);

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-[#1E1612]/40 bg-[#F6EBDD] px-4 py-1.5 text-[11px] font-medium tracking-wide">
    <span className="h-1.5 w-1.5 rounded-full bg-[#C4542D]" />{children}
  </span>
);

const RoundBtn = ({ onClick, children, tone = "bg-[#C4542D] text-[#F6EBDD]", knob = "bg-[#E9C98F] text-[#1E1612]" }: { onClick: () => void; children: React.ReactNode; tone?: string; knob?: string }) => (
  <button onClick={onClick} className={`group flex items-center gap-3 rounded-full py-2 pl-6 pr-2 text-xs font-bold ${tone}`}>
    {children}
    <span className={`flex h-8 w-8 items-center justify-center rounded-full transition group-hover:translate-x-1 ${knob}`}><FaArrowRight /></span>
  </button>
);

/* ---------- WHAT I DO: accordion ---------- */
const WhatIDo = () => {
  const [open, setOpen] = useState(0);
  return (
    <div className="grid gap-6 lg:grid-cols-[0.8fr_1.4fr]">
      <div className="relative flex flex-col justify-between overflow-hidden rounded-[2rem] bg-[#C4542D] p-7 text-[#F6EBDD] lg:min-h-[460px]">
        <Globe className="absolute -bottom-16 -right-16 h-72 w-72 opacity-30" stroke="#F6EBDD" />
        <div>
          <p className="text-[11px] font-bold tracking-[0.25em] text-[#E9C98F]">WHAT I DO</p>
          <h2 className={`${display.className} mt-3 text-5xl uppercase leading-[0.98] sm:text-6xl`}>
            From idea<br />to <span className="text-[#E9C98F]">live</span><br />product
          </h2>
        </div>
        <div className="relative mt-8 flex items-end justify-between gap-4">
          <motion.div key={open} initial={{ scale: 0.6, rotate: -20, opacity: 0 }} animate={{ scale: 1, rotate: 0, opacity: 1 }}
            className="flex h-24 w-24 items-center justify-center rounded-full bg-[#1E1612] text-4xl text-[#E9C98F]">
            {services[open].icon}
          </motion.div>
          <Badge text="CODE • CRAFT • SHIP • CODE • CRAFT • SHIP •" />
        </div>
      </div>

      <div className="divide-y divide-[#1E1612]/25 rounded-[2rem] border-2 border-[#1E1612] bg-[#F6EBDD] px-5 sm:px-8">
        {services.map((s, i) => {
          const active = open === i;
          return (
            <div key={s.no}>
              <button onClick={() => setOpen(i)} aria-expanded={active} className="flex w-full items-center gap-4 py-5 text-left">
                <span className={`${display.className} text-2xl ${active ? 'text-[#C4542D]' : 'text-[#1E1612]/40'}`}>{s.no}</span>
                <span className={`${display.className} flex-1 text-2xl uppercase tracking-wide sm:text-3xl ${active ? '' : 'text-[#1E1612]/70'}`}>{s.title}</span>
                <span className={`flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#1E1612] text-xs transition-all ${active ? 'rotate-45 bg-[#C4542D] text-[#F6EBDD] border-[#C4542D]' : ''}`}><FaPlus /></span>
              </button>
              <motion.div initial={false} animate={{ height: active ? 'auto' : 0, opacity: active ? 1 : 0 }} transition={{ duration: 0.35 }} className="overflow-hidden">
                <p className="max-w-xl pb-3 pl-12 text-sm leading-relaxed text-[#1E1612]/80">{s.text}</p>
                <div className="flex flex-wrap gap-2 pb-6 pl-12">
                  {s.chips.map((c) => <span key={c} className="rounded-full bg-[#1E1612] px-3 py-1 text-[11px] font-bold text-[#E9C98F]">{c}</span>)}
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

/* ---------- FEATURED WORK: interactive index + live preview ---------- */
const FeaturedWork = () => {
  const [category, setCategory] = useState('All');
  const [active, setActive] = useState(0);

  const list = category === 'All' ? projects : projects.filter((p) => p.category === category);
  const current = list[Math.min(active, list.length - 1)];

  return (
    <section id="work" className="scroll-mt-28">
      {/* heading + filters */}
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-[11px] font-bold tracking-[0.25em] text-[#C4542D]">FEATURED WORK</p>
          <h2 className={`${display.className} mt-1 text-5xl uppercase leading-none sm:text-6xl`}>
            Things I&apos;ve <span className="text-[#C4542D]">built</span>
          </h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {['All', 'Web Development', 'App Development'].map((c) => (
            <button key={c} onClick={() => { setCategory(c); setActive(0); }}
              className={`rounded-full border-2 px-4 py-1.5 text-xs font-bold transition ${category === c ? 'border-[#1E1612] bg-[#1E1612] text-[#E9C98F]' : 'border-[#1E1612]/40 hover:border-[#1E1612]'}`}>
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_1.15fr]">
        {/* LEFT: project index */}
        <ul className="order-2 divide-y divide-[#1E1612]/20 rounded-[2rem] border-2 border-[#1E1612] bg-[#F6EBDD] px-3 sm:px-5 lg:order-1">
          {list.map((p, i) => {
            const on = current?.id === p.id;
            return (
              <li key={p.id}>
                <button
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className="group flex w-full items-center gap-4 py-4 text-left"
                  aria-current={on}>
                  <span className={`${display.className} w-9 text-xl transition-colors ${on ? 'text-[#C4542D]' : 'text-[#1E1612]/35'}`}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="flex-1">
                    <span className={`${display.className} block text-2xl uppercase tracking-wide transition-all duration-300 sm:text-[1.7rem] ${on ? 'translate-x-2 text-[#1E1612]' : 'text-[#1E1612]/55'}`}>
                      {p.title}
                    </span>
                    <span className="text-[11px] font-medium text-[#1E1612]/60">{p.category}</span>
                  </span>
                  <span className={`flex h-9 w-9 items-center justify-center rounded-full border-2 text-xs transition-all duration-300 ${on ? '-rotate-45 border-[#C4542D] bg-[#C4542D] text-[#F6EBDD]' : 'border-[#1E1612]/40'}`}>
                    <FaArrowRight />
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        {/* RIGHT: live preview */}
        {current && (
          <div className="order-1 lg:sticky lg:top-28 lg:order-2 lg:self-start">
            <div className="relative">
              <div className="absolute -bottom-3 -right-3 h-full w-full rounded-[2rem] bg-[#5E6340]" />
              <motion.div
                key={current.id}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="relative overflow-hidden rounded-[2rem] border-2 border-[#1E1612] bg-[#1E1612]">
                <div className="relative aspect-[4/3]">
                  <Image src={current.imageSrc} alt={current.title} fill
                    sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E1612]/80 via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-[#E9C98F] px-3 py-1 text-[10px] font-bold text-[#1E1612]">
                    {current.category}
                  </span>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-3 bg-[#1E1612] p-4 sm:p-5">
                  <div className="flex flex-wrap gap-1.5">
                    {(current.technologies ?? []).map((t) => (
                      <span key={t} className="rounded-full border border-[#F6EBDD]/40 px-2.5 py-0.5 text-[10px] text-[#F6EBDD]">{t}</span>
                    ))}
                  </div>
                  <Link href={`/projects/${current.id}`}
                    className="group flex items-center gap-3 rounded-full bg-[#C4542D] py-1.5 pl-5 pr-1.5 text-xs font-bold text-[#F6EBDD]">
                    VIEW PROJECT
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#E9C98F] text-[#1E1612] transition group-hover:translate-x-1">
                      <FaArrowRight />
                    </span>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

/* ---------- GALLERY: bento grid + lightbox ---------- */
/* 2 columns on mobile, 4 on large screens (6 images fill 3 rows exactly) */
const tileSpan = [
  "col-span-2 row-span-2",
  "",
  "",
  "col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
];
const shadowTone = ["bg-[#5E6340]", "bg-[#C4542D]", "bg-[#E9C98F]"];

const Gallery = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const total = galleryImages.length;

  const close = useCallback(() => setSelected(null), []);
  const step = useCallback(
    (dir: number) => setSelected((s) => (s === null ? s : (s + dir + total) % total)),
    [total]
  );

  useEffect(() => {
    if (selected === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [selected, close, step]);

  const current = selected !== null ? galleryImages[selected] : null;

  return (
    <section id="gallery" className="scroll-mt-28">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <Pill>Gallery</Pill>
          <h2 className={`${display.className} mt-4 text-5xl uppercase leading-none sm:text-6xl`}>
            Moments &amp; <span className="text-[#C4542D]">milestones</span>
          </h2>
        </div>
        <p className="max-w-xs text-sm leading-relaxed text-[#1E1612]/70">
          Competitions, hackathons and the teams behind my projects. Tap any photo to view it full size.
        </p>
      </div>

      <div className="mt-6 grid auto-rows-[150px] grid-cols-2 gap-4 sm:auto-rows-[190px] lg:grid-cols-4 lg:gap-5">
        {galleryImages.map((img, i) => (
          <div key={img.id} className={`relative ${tileSpan[i] ?? ""}`}>
            {/* offset colour block behind each tile */}
            <div className={`absolute -bottom-2 -right-2 h-full w-full rounded-[1.4rem] ${shadowTone[i % 3]}`} />
            <button
              onClick={() => setSelected(i)}
              aria-label={`Open photo: ${img.title}`}
              className="group relative block h-full w-full overflow-hidden rounded-[1.4rem] border-2 border-[#1E1612] bg-[#1E1612] text-left transition duration-300 hover:-translate-x-1 hover:-translate-y-1 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[#C4542D]">
              <Image
                src={img.src}
                alt={img.title}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E1612]/85 via-[#1E1612]/10 to-transparent" />

              {img.tag && (
                <span className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-[#E9C98F] px-3 py-1 text-[10px] font-bold text-[#1E1612]">
                  <FaTrophy className="text-[#C4542D]" /> {img.tag}
                </span>
              )}

              <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#F6EBDD] text-[11px] text-[#1E1612] opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100">
                <FaExpandAlt />
              </span>

              <h3 className="absolute inset-x-4 bottom-3 text-xs font-bold leading-snug text-[#F6EBDD] sm:text-sm">
                {img.title}
              </h3>
            </button>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {current && selected !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={current.title}
            className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-[#1E1612]/90 p-4 backdrop-blur-sm sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}>
            <button
              onClick={close}
              aria-label="Close"
              className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#C4542D] text-[#F6EBDD] transition hover:scale-110 sm:right-8 sm:top-8">
              <FaTimes />
            </button>

            <motion.div
              key={current.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}>
              <div className="absolute -bottom-3 -right-3 h-full w-full rounded-[1.6rem] bg-[#5E6340]" />
              <div className="relative overflow-hidden rounded-[1.6rem] border-2 border-[#F6EBDD] bg-[#F6EBDD]">
                <div className="relative h-[60vh] sm:h-[68vh]">
                  <Image src={current.src} alt={current.title} fill sizes="100vw" className="object-contain p-2" priority />
                </div>
                <div className="flex items-center justify-between gap-3 bg-[#1E1612] px-5 py-3 text-[#F6EBDD]">
                  <div className="flex items-center gap-3">
                    <h3 className="text-sm font-bold">{current.title}</h3>
                    {current.tag && (
                      <span className="rounded-full bg-[#E9C98F] px-3 py-0.5 text-[10px] font-bold text-[#1E1612]">{current.tag}</span>
                    )}
                  </div>
                  <span className={`${display.className} text-lg text-[#E9C98F]`}>
                    {String(selected + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </motion.div>

            <div className="mt-8 flex gap-3" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => step(-1)} aria-label="Previous photo"
                className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#E9C98F] text-[#E9C98F] transition hover:bg-[#E9C98F] hover:text-[#1E1612]">
                <FaChevronLeft />
              </button>
              <button onClick={() => step(1)} aria-label="Next photo"
                className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#E9C98F] text-[#E9C98F] transition hover:bg-[#E9C98F] hover:text-[#1E1612]">
                <FaChevronRight />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

/* ---------- BLOG: featured article + reading list ---------- */
const Blog = () => {
  const [featured, ...rest] = blogPosts;

  return (
    <section id="blog" className="scroll-mt-28">
      {/* heading */}
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <Pill>Blog</Pill>
          <h2 className={`${display.className} mt-4 text-5xl uppercase leading-none sm:text-6xl`}>
            What I&apos;m <span className="text-[#C4542D]">learning</span>
          </h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-[#1E1612]/70">
            Short write-ups on security testing, DevOps and the things I pick up while building.
          </p>
        </div>
        <a href="https://medium.com/@nilakshisamarasekara0" target="_blank" rel="noopener noreferrer"
          className="group flex items-center gap-3 rounded-full bg-[#1E1612] py-1.5 pl-5 pr-1.5 text-xs font-bold text-[#E9C98F]">
          ALL ARTICLES ON MEDIUM
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#C4542D] text-[#F6EBDD] transition group-hover:translate-x-1">
            <FaArrowRight />
          </span>
        </a>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
        {/* LEFT: featured (latest) article */}
        {featured && (
          <a href={featured.link} target="_blank" rel="noopener noreferrer"
            className="group relative flex min-h-[400px] flex-col justify-between overflow-hidden rounded-[2rem] border-2 border-[#1E1612] bg-[#C4542D] p-7 text-[#F6EBDD] shadow-[8px_8px_0_#1E1612] transition duration-300 hover:-translate-x-1 hover:-translate-y-1 sm:p-9">
            <Globe className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 opacity-25 transition duration-700 group-hover:rotate-12" stroke="#F6EBDD" />

            <div className="relative flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-[#E9C98F] px-3 py-1 text-[10px] font-bold tracking-wide text-[#1E1612]">LATEST</span>
              <span className="rounded-full border border-[#F6EBDD]/60 px-3 py-1 text-[10px] font-bold">{featured.category}</span>
              <span className="text-xs text-[#F6EBDD]/80">{featured.date}{featured.readTime ? ` · ${featured.readTime}` : ''}</span>
            </div>

            <div className="relative my-8">
              <h3 className={`${display.className} line-clamp-4 text-3xl uppercase leading-[1.08] sm:text-[2.6rem]`}>
                {featured.title}
              </h3>
              <p className="mt-4 line-clamp-3 max-w-md text-sm leading-relaxed text-[#F6EBDD]/90">{featured.excerpt}</p>
            </div>

            <div className="relative flex items-end justify-between gap-4">
              <span className="flex items-center gap-3 rounded-full bg-[#E9C98F] py-2 pl-6 pr-2 text-xs font-bold text-[#1E1612]">
                READ ARTICLE
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1E1612] text-[#E9C98F] transition group-hover:translate-x-1">
                  <FaArrowRight />
                </span>
              </span>
              <span className="hidden sm:block"><Badge text="READ • LEARN • SHARE • READ • LEARN • SHARE •" /></span>
            </div>
          </a>
        )}

        {/* RIGHT: reading list */}
        <div className="flex flex-col overflow-hidden rounded-[2rem] border-2 border-[#1E1612] bg-[#F6EBDD]">
          <div className="flex items-center justify-between border-b-2 border-[#1E1612] bg-[#E9C98F] px-5 py-3 sm:px-7">
            <span className="flex items-center gap-2 text-xs font-extrabold tracking-wider">
              <Star className="h-4 w-4 text-[#C4542D]" /> READING LIST
            </span>
            <span className="text-xs font-bold text-[#1E1612]/70">{blogPosts.length} articles</span>
          </div>

          <ul className="flex flex-1 flex-col divide-y divide-[#1E1612]/20">
            {rest.map((p, i) => (
              <li key={p.id} className="flex-1">
                <a href={p.link} target="_blank" rel="noopener noreferrer"
                  className="group flex h-full items-center gap-4 px-5 py-5 transition-colors hover:bg-[#E9C98F]/40 sm:px-7">
                  <span className={`${display.className} text-3xl text-[#1E1612]/30 transition-colors group-hover:text-[#C4542D]`}>
                    {String(i + 2).padStart(2, '0')}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2 text-[11px]">
                      <span className="font-extrabold tracking-wide text-[#C4542D]">{p.category.toUpperCase()}</span>
                      <span className="text-[#1E1612]/55">{p.date}{p.readTime ? ` · ${p.readTime}` : ''}</span>
                    </div>
                    <h3 className="mt-1 line-clamp-2 text-base font-bold leading-snug sm:text-lg">{p.title}</h3>
                  </div>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[#1E1612]/50 text-xs transition-all duration-300 group-hover:-rotate-45 group-hover:border-[#C4542D] group-hover:bg-[#C4542D] group-hover:text-[#F6EBDD]">
                    <FaArrowRight />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

/* ---------- page ---------- */
const PortfolioPage: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % words.length), 2200);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 300);
      const cur = navItems.map((n) => n.id).find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const r = el.getBoundingClientRect();
        return r.top <= 120 && r.bottom >= 120;
      });
      if (cur) setActiveSection(cur);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const sendEmail = () => {
    window.location.href = "mailto:nilakshisamarasekara0@gmail.com?subject=Contact%20from%20Portfolio&body=Hi%20Nilakshi,%0A%0AI%20found%20your%20portfolio%20and...";
  };

  return (
    <div className={`${body.className} min-h-screen overflow-x-clip bg-[#F6EBDD] px-3 pb-8 pt-24 text-[#1E1612] sm:px-6`}>
      {/* Nav */}
      <nav className="fixed left-0 top-3 z-50 w-full px-3 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center justify-between gap-2 rounded-full bg-[#1E1612] px-4 py-2.5 shadow-xl sm:px-5">
            <button onClick={() => go('home')} className="flex items-center gap-2 text-[#F6EBDD]" aria-label="Go to top">
              <Star className="h-7 w-7 shrink-0 text-[#C4542D]" />
              <span className={`${display.className} text-sm leading-[1.05] tracking-wide sm:text-base`}>NILAKSHI<br />SAMARASEKARA</span>
            </button>

            <div className="hidden gap-6 text-[11px] font-medium uppercase tracking-wider lg:flex">
              {navItems.map((n) => (
                <button key={n.id} onClick={() => go(n.id)} className={activeSection === n.id ? 'text-[#C4542D]' : 'text-[#F6EBDD]/70 hover:text-[#F6EBDD]'}>{n.label}</button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button onClick={() => go('contact')} className="hidden items-center gap-2 rounded-full bg-[#C4542D] px-5 py-2 text-[11px] font-bold text-[#F6EBDD] sm:flex">
                LET&apos;S TALK <FaArrowRight />
              </button>
              <button onClick={() => setMenuOpen((o) => !o)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C4542D] text-[#F6EBDD] lg:hidden">
                {menuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>

          {menuOpen && (
            <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}
              className="mt-2 rounded-[1.6rem] bg-[#1E1612] p-3 shadow-xl lg:hidden">
              <div className="grid grid-cols-2 gap-2">
                {navItems.map((n) => (
                  <button key={n.id} onClick={() => go(n.id)}
                    className={`rounded-full px-4 py-2.5 text-left text-xs font-bold uppercase tracking-wider ${activeSection === n.id ? 'bg-[#C4542D] text-[#F6EBDD]' : 'bg-[#F6EBDD]/10 text-[#F6EBDD]'}`}>
                    {n.label}
                  </button>
                ))}
              </div>
              <button onClick={() => go('contact')} className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-[#E9C98F] px-5 py-2.5 text-xs font-bold text-[#1E1612] sm:hidden">
                LET&apos;S TALK <FaArrowRight />
              </button>
            </motion.div>
          )}
        </div>
      </nav>

      <main className="mx-auto max-w-6xl space-y-10">
        {/* Hero */}
        <section id="home" className="scroll-mt-28 grid items-center gap-8 pt-4 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <Pill>Software Engineer · Colombo, Sri Lanka</Pill>
            <h1 className={`${display.className} mt-6 text-[clamp(2.1rem,9.5vw,3.4rem)] uppercase leading-[1] sm:text-[clamp(3rem,5.4vw,4.6rem)]`}>
              Hello world,<br /><span className="text-[#C4542D]">I&apos;m Nilakshi,</span><br />software engineer
            </h1>
            <p className="mt-5 text-sm font-bold tracking-[0.25em] text-[#5E6340]">{words[index]}</p>
            <p className="mt-3 max-w-md text-[15px] leading-relaxed text-[#1E1612]/80">
              I turn ideas into fast, clean and reliable web and mobile apps, from the screen you tap to the server and cloud behind it.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-5">
              <RoundBtn onClick={() => go('work')}>VIEW MY WORK</RoundBtn>
              <button onClick={() => go('contact')} className="flex items-center gap-2 text-xs font-bold text-[#C4542D]">
                CONTACT ME <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#C4542D]"><FaArrowRight className="text-[10px]" /></span>
              </button>
            </div>
            <div className="mt-8 flex max-w-md flex-wrap items-center gap-3 rounded-2xl border border-[#1E1612]/30 px-4 py-3">
              <div className="flex gap-1.5">
                {["React", "Next", "Node", "Flutter"].map((t) => (
                  <span key={t} className="rounded-full bg-[#1E1612] px-2.5 py-1 text-[10px] font-bold text-[#E9C98F]">{t}</span>
                ))}
              </div>
              <span className="text-[11px] leading-tight text-[#1E1612]/70">Tools I use every day</span>
            </div>
          </div>

          <motion.div className="relative mx-auto aspect-[1/1.05] w-full max-w-[520px]"
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="absolute right-0 top-[8%] h-[62%] w-[88%] rounded-[1.6rem] bg-[#5E6340] sm:rounded-[2.2rem]">
              <Globe className="absolute right-[6%] top-[8%] w-[40%] opacity-80" />
            </div>
            <div className="absolute left-0 top-0 aspect-square w-[78%] rounded-full bg-[#C4542D]" />
            <div className="absolute left-0 top-0 aspect-square w-[78%] overflow-hidden rounded-full">
              <Image src="/babaa.png" alt="Nilakshi Samarasekara" fill sizes="(max-width: 640px) 80vw, 400px" priority
                className="object-cover object-top mix-blend-multiply grayscale-[25%]" />
            </div>
            <div className="absolute bottom-[7%] right-0 h-[27%] w-[40%] overflow-hidden rounded-2xl border-2 border-[#C4542D]/60 bg-[#1E1612] sm:rounded-3xl">
              <div className="absolute right-[12%] top-[14%] aspect-square w-[22%] rounded-full bg-[#C4542D]" />
              <Terrain className="absolute bottom-0 w-full" />
            </div>
            <div className="absolute bottom-0 left-[3%] w-[44%] rounded-2xl border border-[#C4542D]/50 bg-[#F6EBDD] p-2.5 text-[10px] font-medium leading-snug sm:rounded-3xl sm:p-3 sm:text-[11px]">
              Designing and building products that solve real problems.
            </div>
            <Star className="absolute right-[2%] top-0 w-[9%] text-[#C4542D]" />
            <Star className="absolute left-[46%] top-[3%] w-[4%] text-[#1E1612]" />
            <Star className="absolute bottom-[22%] left-[38%] w-[6%] text-[#1E1612]" />
          </motion.div>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-28 grid gap-5 lg:grid-cols-[1.45fr_1fr]">
          {/* LEFT: intro panel */}
          <div className="relative flex min-h-[340px] flex-col justify-between overflow-hidden rounded-[2rem] bg-[#5E6340] p-7 text-[#F6EBDD] sm:p-10">
            <Globe className="pointer-events-none absolute -right-14 -top-14 h-72 w-72 opacity-25" />
            <Star className="absolute right-8 bottom-24 h-7 w-7 text-[#E9C98F]" />

            <div className="relative">
              <p className="text-[11px] font-bold tracking-[0.25em] text-[#E9C98F]">ABOUT ME</p>
              <h2 className={`${display.className} mt-3 text-5xl uppercase leading-[0.98] text-[#E9C98F] sm:text-7xl`}>
                Nice to<br />meet you
              </h2>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-[#F6EBDD]/90">
                I&apos;m a software engineer with a Software Engineering degree from Sabaragamuwa University of Sri Lanka.
                I care about clean code, simple interfaces and products that people enjoy using.
              </p>
            </div>

            <div className="relative mt-8 flex items-end justify-between gap-4">
              <div>
                <div className="flex flex-wrap gap-2">
                  {['BSc Software Engineering', 'Sri Lanka'].map((t) => (
                    <span key={t} className="rounded-full border border-[#E9C98F]/60 px-3 py-1 text-[11px] font-bold text-[#E9C98F]">{t}</span>
                  ))}
                </div>
                <p className={`${script.className} mt-3 text-6xl leading-none text-[#E9C98F]`}>Nilakshi</p>
              </div>
              <span className="hidden sm:block"><Badge text="CLEAN CODE • GOOD UX • CLEAN CODE • GOOD UX •" /></span>
            </div>
          </div>

          {/* RIGHT: three trait cards */}
          <div className="grid gap-4">
            {[
              { icon: <FaLaptopCode />, title: 'FULL-STACK + MOBILE', text: 'Web and Flutter apps from the screen to the database.', box: 'bg-[#C4542D] text-[#F6EBDD]', chip: 'bg-[#1E1612] text-[#E9C98F]' },
              { icon: <FaCheck />, title: 'CLEAN, TESTED CODE', text: 'Readable, maintainable code that is easy to trust.', box: 'bg-[#E9C98F] text-[#1E1612]', chip: 'bg-[#C4542D] text-[#F6EBDD]' },
              { icon: <FaMapMarkerAlt />, title: 'REMOTE FRIENDLY', text: 'Clear updates and smooth teamwork, wherever the team is.', box: 'bg-[#1E1612] text-[#F6EBDD]', chip: 'bg-[#E9C98F] text-[#1E1612]' },
            ].map((c, i) => (
              <div key={c.title}
                className={`group flex items-center gap-4 rounded-[1.6rem] border-2 border-[#1E1612] p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[6px_6px_0_#1E1612] ${c.box}`}>
                <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-lg ${c.chip}`}>{c.icon}</span>
                <div className="min-w-0">
                  <h3 className={`${display.className} text-xl uppercase tracking-wide`}>{c.title}</h3>
                  <p className="mt-0.5 text-xs leading-relaxed opacity-85">{c.text}</p>
                </div>
                <span className={`${display.className} ml-auto text-3xl opacity-30`}>{String(i + 1).padStart(2, '0')}</span>
              </div>
            ))}
          </div>
        </section>

        {/* What I do */}
        <section id="expertise" className="scroll-mt-28"><WhatIDo /></section>

        {/* Experience & education: journey timeline */}
        <section className="relative overflow-hidden rounded-[2rem] bg-[#1E1612] p-6 text-[#F6EBDD] sm:p-10">
          <Globe className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 opacity-15" />
          <div className="relative flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-bold tracking-[0.25em] text-[#E9C98F]">EXPERIENCE &amp; EDUCATION</p>
              <h2 className={`${display.className} mt-2 text-4xl uppercase leading-none sm:text-6xl`}>
                My journey <span className="text-[#C4542D]">so far</span>
              </h2>
            </div>
            <Star className="hidden h-10 w-10 text-[#C4542D] sm:block" />
          </div>

          <ol className="relative mt-12 grid gap-8 lg:grid-cols-2 lg:gap-6">
            {/* connecting line: vertical on mobile, horizontal on desktop */}
            <span className="absolute bottom-3 left-[11px] top-3 w-px bg-[#C4542D]/60 lg:hidden" />
            <span className="absolute left-0 right-0 top-[11px] hidden h-px bg-[#C4542D]/60 lg:block" />

            {journey.map((j) => (
              <li key={j.year + j.title} className="relative pl-10 lg:pl-0 lg:pt-12">
                <span className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#C4542D] bg-[#1E1612]">
                  <span className={`h-2.5 w-2.5 rounded-full ${j.current ? 'animate-pulse bg-[#E9C98F]' : 'bg-[#C4542D]'}`} />
                </span>

                <div className={`h-full rounded-[1.4rem] p-5 transition duration-300 hover:-translate-y-1 ${j.current ? 'bg-[#C4542D] text-[#F6EBDD]' : 'border border-[#F6EBDD]/20 bg-[#F6EBDD]/5'}`}>
                  <div className="flex items-start justify-between gap-3">
                    <p className={`${display.className} text-4xl leading-none ${j.current ? 'text-[#E9C98F]' : 'text-[#E9C98F]'}`}>{j.year}</p>
                    <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm ${j.current ? 'bg-[#1E1612] text-[#E9C98F]' : 'bg-[#E9C98F] text-[#1E1612]'}`}>{j.icon}</span>
                  </div>
                  <span className={`mt-4 inline-block rounded-full px-3 py-0.5 text-[10px] font-extrabold tracking-wider ${j.current ? 'bg-[#E9C98F] text-[#1E1612]' : 'border border-[#C4542D] text-[#C4542D]'}`}>
                    {j.kind}
                  </span>
                  <h3 className="mt-3 text-base font-bold leading-snug">{j.title}</h3>
                  <p className={`mt-1 text-xs ${j.current ? 'text-[#F6EBDD]/90' : 'text-[#F6EBDD]/70'}`}>{j.org}</p>
                  {j.note && <p className={`mt-3 text-[11px] font-bold tracking-wide ${j.current ? 'text-[#E9C98F]' : 'text-[#F6EBDD]/50'}`}>{j.note.toUpperCase()}</p>}
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Highlights */}
        <section className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {highlights.map((h, i) => (
            <div key={h.label} className={`rounded-[1.4rem] p-5 ${i % 2 === 0 ? 'bg-[#E9C98F]' : 'border border-[#C4542D]/50'}`}>
              <FaTrophy className="mb-3 text-[#C4542D]" />
              <p className={`${display.className} text-3xl uppercase leading-none sm:text-4xl`}>{h.big}</p>
              <p className="mt-1 text-xs font-medium text-[#1E1612]/70">{h.label}</p>
            </div>
          ))}
        </section>

        {/* Featured work */}
        <FeaturedWork />

        {/* Gallery */}
        <Gallery />

        {/* Blog */}
        <Blog />

        {/* Contact */}
        <section id="contact" className="scroll-mt-28 relative overflow-hidden rounded-[2rem] bg-[#C4542D] p-6 text-[#F6EBDD] sm:p-10">
          <Globe className="absolute -right-10 -top-10 h-64 w-64 opacity-40" stroke="#F6EBDD" />
          <div className="relative grid gap-8 lg:grid-cols-[1.3fr_1fr_1fr]">
            <div>
              <p className="text-xs font-bold">READY TO BUILD SOMETHING GREAT?</p>
              <h2 className={`${display.className} mt-3 text-5xl uppercase leading-[0.95] text-[#E9C98F] sm:text-7xl`}>Let&apos;s work<br />together</h2>
            </div>
            <div className="text-sm">
              <p>Have a project in mind or just want to say hi? I&apos;d love to hear from you.</p>
              <div className="mt-5"><RoundBtn onClick={sendEmail} tone="bg-[#E9C98F] text-[#1E1612]" knob="bg-[#1E1612] text-[#E9C98F]"><FaEnvelope /> START A PROJECT</RoundBtn></div>
            </div>
            <div className="space-y-3 border-t border-[#F6EBDD]/30 pt-5 text-xs lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <p className="font-bold">EMAIL</p>
              <a href="mailto:nilakshisamarasekara0@gmail.com" className="block break-all underline">nilakshisamarasekara0@gmail.com</a>
              <p className="pt-2 font-bold">SOCIAL</p>
              <div className="flex gap-3">
                {[
                  { h: "https://www.linkedin.com/in/znilakshi", i: <FaLinkedin />, l: "LinkedIn" },
                  { h: "https://github.com/ZNilakshi", i: <FaGithub />, l: "GitHub" },
                  { h: "https://web.facebook.com/profile.php?id=100081272980560", i: <FaFacebook />, l: "Facebook" },
                  { h: "https://wa.me/94702610614?text=Hi%20Nilakshi", i: <FaWhatsapp />, l: "WhatsApp" },
                ].map((s) => (
                  <a key={s.l} href={s.h} aria-label={s.l} target="_blank" rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1E1612] text-base text-[#E9C98F] transition hover:scale-110">{s.i}</a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="flex flex-wrap items-center justify-between gap-3 rounded-[2rem] bg-[#1E1612] px-6 py-4 sm:rounded-full text-xs text-[#F6EBDD]/80">
          <span className="flex items-center gap-2"><Star className="h-5 w-5 text-[#C4542D]" /> Nilakshi Samarasekara · Software Engineer</span>
          <span>&copy; {new Date().getFullYear()} All rights reserved.</span>
        </footer>
      </main>

      {showScrollTop && (
        <button onClick={scrollToTop} aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-50 rounded-full bg-[#C4542D] p-3 text-[#F6EBDD] shadow-lg hover:bg-[#a9441f]"><FaArrowUp /></button>
      )}
    </div>
  );
};

export default PortfolioPage;