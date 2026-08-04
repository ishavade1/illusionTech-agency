import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "../data/site";

export default function Testimonials(): React.JSX.Element {
  const [i, setI] = useState<number>(0);
  const n = TESTIMONIALS.length;

  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % n), 6000);
    return () => clearInterval(id);
  }, [n]);

  const t = TESTIMONIALS[i];

  return (
    <section
      data-testid="testimonials"
      className="relative py-24 md:py-32 bg-white"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-end mb-14">
          <div className="md:col-span-7">
            <div className="eyebrow mb-4">/ Testimonials</div>
            <h2
              className="font-display font-bold text-[#0F172A] tracking-tighter leading-[0.95]"
              style={{ fontSize: "clamp(40px, 5.5vw, 80px)" }}
            >
              What our clients say.
            </h2>
          </div>
          <div className="md:col-span-3 md:col-start-10 flex items-center gap-2 justify-start md:justify-end">
            <button
              data-testid="testimonial-prev"
              onClick={() => setI((p) => (p - 1 + n) % n)}
              className="w-11 h-11 rounded-full border border-[#E2E8F0] flex items-center justify-center hover:border-[#0F172A] transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              data-testid="testimonial-next"
              onClick={() => setI((p) => (p + 1) % n)}
              className="w-11 h-11 rounded-full border border-[#E2E8F0] flex items-center justify-center hover:border-[#0F172A] transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center min-h-[420px]">
          {/* <div className="md:col-span-5 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative aspect-[4/5] rounded-[20px] overflow-hidden border border-[#E2E8F0]"
              >
                <img
                  src={t.avatar}
                  alt={t.name}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 [background:radial-gradient(60%_40%_at_50%_0%,rgba(255,255,255,0.25),transparent_60%)]" />
              </motion.div>
            </AnimatePresence>
          </div> */}

          <div className="md:col-span-7">
            <div className="flex items-center gap-1 mb-6 text-[#06B6D4]">
              {[0, 1, 2, 3, 4].map((s) => (
                <Star key={s} size={16} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={i}
                data-testid={`testimonial-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <p
                  className="font-display font-medium text-[#0F172A] tracking-tight leading-[1.15]"
                  style={{ fontSize: "clamp(24px, 3vw, 44px)" }}
                >
                  &ldquo;{t.body}&rdquo;
                </p>
                <footer className="mt-8 flex items-center gap-4">
                  <div>
                    <div className="font-display font-semibold text-[#0F172A]">
                      {t.name}
                    </div>
                    <div className="text-sm text-[#64748B]">{t.role}</div>
                  </div>
                </footer>
              </motion.blockquote>
            </AnimatePresence>

            {/* Progress bar */}
            <div className="mt-10 flex items-center gap-3">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  data-testid={`testimonial-dot-${idx}`}
                  onClick={() => setI(idx)}
                  className={[
                    "h-[3px] rounded-full transition-all duration-500",
                    idx === i ? "w-14 bg-[#0F172A]" : "w-6 bg-[#E2E8F0]",
                  ].join(" ")}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}