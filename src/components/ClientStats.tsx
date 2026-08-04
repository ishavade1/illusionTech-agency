import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { STATS, Stat } from "../data/site";

function useCounter(target: number, active: boolean, duration = 1600): number {
  const [value, setValue] = useState<number>(0);

  useEffect(() => {
    if (!active) return;
    let raf: number;
    const start = performance.now();
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(target * eased));
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);

  return value;
}

interface StatCardProps {
  stat: Stat;
  active: boolean;
  index: number;
}

function StatCard({ stat, active, index }: StatCardProps): React.JSX.Element {
  // "24/7" is not a number — render as-is
  const isNumeric = typeof stat.value === "number" && stat.suffix !== "/7";
  const n = useCounter(isNumeric ? stat.value : 0, active && isNumeric);

  return (
    <motion.div
      data-testid={`stat-${index}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, delay: 0.08 * index }}
      className="relative flex flex-col justify-between p-8 md:p-10 border-t border-[#E2E8F0] first:border-l-0 md:border-l md:border-t-0 md:first:border-l-0 lift bg-white"
    >
      <div className="eyebrow">0{index + 1}</div>
      <div className="mt-10">
        <div
          className="font-display font-bold text-[#0F172A] tracking-tighter leading-none"
          style={{ fontSize: "clamp(48px, 6vw, 96px)" }}
        >
          {isNumeric ? n : "24"}
          <span className="text-[#06B6D4]">{stat.suffix}</span>
        </div>
        <div className="mt-4 text-[#64748B] text-sm md:text-base max-w-[220px]">
          {stat.label}
        </div>
      </div>
    </motion.div>
  );
}

export default function Stats(): React.JSX.Element {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      data-testid="stats"
      className="relative bg-white border-y border-[#E2E8F0]"
    >
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {STATS.map((s, i) => (
          <StatCard key={i} stat={s} active={inView} index={i} />
        ))}
      </div>
    </section>
  );
}