import React from "react";
import { motion } from "framer-motion";
import { CHAPTERS, WHY } from "../data/site";
import { Sparkles, Zap, Smartphone, Headphones, LucideIcon } from "lucide-react";

const WHY_ICONS: LucideIcon[] = [Sparkles, Zap, Smartphone, Headphones];

export default function Manifesto(): React.JSX.Element {
  return (
    <section
      id="about"
      data-testid="manifesto"
      className="relative py-24 md:py-32 bg-white"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-end mb-16 md:mb-24">
          <div className="md:col-span-6">
            <div className="eyebrow mb-4">/ Manifesto</div>
            <h2
              className="font-display font-bold text-[#0F172A] tracking-tighter leading-[0.95]"
              style={{ fontSize: "clamp(40px, 5.5vw, 80px)" }}
            >
              Four beliefs that shape everything we ship.
            </h2>
          </div>
          <div className="md:col-span-5 md:col-start-8 text-[#64748B] text-base md:text-lg leading-relaxed">
            We're a small, senior team. That means every project gets our best
            thinking — not a handoff from the people who sold it to the people
            who build it.
          </div>
        </div>

        {/* Chapters */}
        <div className="border-t border-[#E2E8F0]">
          {CHAPTERS.map((c, i) => (
            <motion.div
              key={c.n}
              data-testid={`chapter-${c.n}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.7, delay: i * 0.05 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-14 md:py-20 border-b border-[#E2E8F0]"
            >
              <div className="md:col-span-3">
                <div
                  className="font-display font-black text-[#0F172A] tracking-tighter leading-none"
                  style={{ fontSize: "clamp(72px, 12vw, 200px)" }}
                >
                  {c.n}
                </div>
              </div>
              <div className="md:col-span-5 md:col-start-5">
                <h3
                  className="font-display font-semibold text-[#0F172A] tracking-tight leading-[1.05]"
                  style={{ fontSize: "clamp(28px, 3.2vw, 44px)" }}
                >
                  {c.title}
                </h3>
              </div>
              <div className="md:col-span-3 md:col-start-10 text-[#64748B] text-[15px] md:text-base leading-relaxed">
                {c.body}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why choose us grid */}
        <div className="mt-24 md:mt-32">
          <div className="eyebrow mb-4">/ Why clients choose us</div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 mt-8">
            {WHY.map((w, i) => {
              const Icon = WHY_ICONS[i] || Sparkles;
              return (
                <motion.div
                  key={w.title}
                  data-testid={`why-card-${i}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.05 * i }}
                  className="p-6 md:p-8 rounded-2xl border border-[#E2E8F0] lift bg-white"
                >
                  <Icon
                    size={22}
                    strokeWidth={1.75}
                    className="text-[#2563EB]"
                  />
                  <h4 className="mt-6 font-display font-semibold text-[#0F172A] text-lg tracking-tight">
                    {w.title}
                  </h4>
                  <p className="mt-2 text-[#64748B] text-sm leading-relaxed">
                    {w.body}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}