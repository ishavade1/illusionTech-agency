import React, { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { ArrowUpRight, ArrowDownRight, Check } from "lucide-react";

declare global {
  interface Window {
    __lenis?: {
      scrollTo: (target: Element, options?: { offset?: number }) => void;
    };
  }
}

function scrollToId(id: string): void {
  const el = document.getElementById(id);
  if (!el) return;
  const lenis = window.__lenis;
  if (lenis) lenis.scrollTo(el, { offset: -60 });
  else el.scrollIntoView({ behavior: "smooth" });
}

const HERO_LINES: string[] = ["Build a website", "that grows your", "business."];
const BADGES: string[] = ["Responsive", "SEO friendly", "Fast delivery", "Ongoing support"];

const lineVariants: Variants = {
  hidden: { y: "110%" },
  show: (i: number) => ({
    y: "0%",
    transition: { duration: 1, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero(): React.JSX.Element {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const orb1Y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const imgY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section
      id="home"
      ref={ref}
      data-testid="hero"
      className="relative min-h-[100vh] pt-[112px] pb-16 md:pb-24 overflow-hidden bg-white"
    >
      {/* Parallax backdrop */}
      <motion.div
        aria-hidden
        style={{ y: bgY }}
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[120vw] h-[80vh]"
      >
        <div className="absolute inset-0 [background:radial-gradient(60%_60%_at_50%_40%,rgba(37,99,235,0.10),transparent_70%)]" />
      </motion.div>

      <motion.div
        aria-hidden
        style={{ y: orb1Y }}
        className="pointer-events-none absolute top-24 -left-24 w-[520px] h-[520px] rounded-full blur-3xl opacity-60"
      >
        <div className="w-full h-full rounded-full bg-[radial-gradient(circle_at_30%_30%,#06B6D4,transparent_60%)]" />
      </motion.div>
      <motion.div
        aria-hidden
        style={{ y: orb2Y }}
        className="pointer-events-none absolute bottom-0 -right-32 w-[560px] h-[560px] rounded-full blur-3xl opacity-50"
      >
        <div className="w-full h-full rounded-full bg-[radial-gradient(circle_at_60%_40%,#4F46E5,transparent_60%)]" />
      </motion.div>

      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Left */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="inline-flex w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
            <span className="eyebrow">Now booking · Q1 2026</span>
          </motion.div>

          <h1
            data-testid="hero-headline"
            className="font-display font-bold text-[#0F172A] tracking-tighter leading-[0.92]"
            style={{ fontSize: "clamp(44px, 8vw, 128px)" }}
          >
            {HERO_LINES.map((line, i) => (
              <span key={i} className="line-mask">
                <motion.span
                  custom={i}
                  initial="hidden"
                  animate="show"
                  variants={lineVariants}
                  className="inline-block will-change-transform"
                >
                  {i === 2 ? (
                    <>
                      business
                      <span className="inline-block align-middle mx-2 w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#06B6D4]" />
                    </>
                  ) : (
                    line
                  )}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="mt-8 max-w-xl text-[#64748B] text-base md:text-lg leading-relaxed"
          >
            We're a small studio designing and building modern, responsive,
            high-performance websites that help ambitious businesses attract
            more customers and grow online.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <button
              data-testid="hero-cta-quote"
              onClick={() => scrollToId("contact")}
              className="btn-primary"
            >
              Get Free Quote <ArrowUpRight size={16} />
            </button>
            <button
              data-testid="hero-cta-portfolio"
              onClick={() => scrollToId("portfolio")}
              className="btn-ghost"
            >
              View Portfolio <ArrowDownRight size={16} />
            </button>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.15 }}
            className="mt-10 flex flex-wrap gap-x-6 gap-y-3"
          >
            {BADGES.map((b) => (
              <li
                key={b}
                data-testid={`hero-badge-${b.toLowerCase().replace(/\s/g, "-")}`}
                className="inline-flex items-center gap-2 text-[13px] text-[#0F172A]/80"
              >
                <span className="w-5 h-5 rounded-full bg-[#0F172A] text-white flex items-center justify-center">
                  <Check size={12} strokeWidth={3} />
                </span>
                {b}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Right — spotlit editorial visual */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="lg:col-span-5 relative"
        >
          <motion.div style={{ y: imgY }} className="relative">
            <div className="relative aspect-[4/5] w-full rounded-[28px] overflow-hidden border border-[#E2E8F0] bg-[#F8FAFC]">
              <img
                src="https://images.pexels.com/photos/31622948/pexels-photo-31622948.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Abstract digital composition"
                loading="eager"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Spotlight highlight */}
              <div className="absolute inset-0 [background:radial-gradient(60%_40%_at_50%_0%,rgba(255,255,255,0.35),transparent_60%)]" />
              {/* Bottom label plate */}
              <div className="absolute left-4 right-4 bottom-4 rounded-2xl bg-white/85 backdrop-blur-xl border border-white/50 p-4 flex items-center justify-between">
                <div>
                  <div className="eyebrow">Case</div>
                  <div className="font-display font-semibold text-[#0F172A]">
                    Northlight Bank
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#0F172A] text-white flex items-center justify-center">
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </div>

            {/* Rotating stamp */}
            <div className="absolute -left-6 -bottom-6 w-24 h-24 rounded-full bg-[#0F172A] text-white flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="spin-slow w-full h-full">
                <defs>
                  <path
                    id="c"
                    d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0"
                  />
                </defs>
                <text
                  fontSize="10"
                  fill="currentColor"
                  fontFamily="Poppins, sans-serif"
                  letterSpacing="4"
                >
                  <textPath href="#c">
                    · CRAFTED · SINCE 2025 · CRAFTED · SINCE 2025
                  </textPath>
                </text>
              </svg>
              <span className="absolute w-3 h-3 rounded-full bg-[#06B6D4]" />
            </div>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}