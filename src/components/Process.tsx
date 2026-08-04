import React from "react";
import { motion } from "framer-motion";
import { PROCESS } from "../data/site";

export default function Process(): React.JSX.Element {
  return (
    <section
      id="process"
      data-testid="process"
      className="relative py-24 md:py-32 bg-[#0F172A] text-white overflow-hidden"
    >
      {/* soft accent halo */}
      <div className="pointer-events-none absolute top-1/2 -translate-y-1/2 -left-40 w-[600px] h-[600px] rounded-full blur-3xl opacity-30 bg-[radial-gradient(circle,#4F46E5,transparent_60%)]" />
      <div className="pointer-events-none absolute top-1/4 -right-40 w-[500px] h-[500px] rounded-full blur-3xl opacity-30 bg-[radial-gradient(circle,#06B6D4,transparent_60%)]" />
      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-end mb-16 md:mb-24">
          <div className="md:col-span-7">
            <div className="eyebrow mb-4 text-white/60">/ Process</div>
            <h2
              className="font-display font-bold tracking-tighter leading-[0.95]"
              style={{ fontSize: "clamp(40px, 5.5vw, 80px)" }}
            >
              A calm, considered six-step way of working.
            </h2>
          </div>
          <div className="md:col-span-4 md:col-start-9 text-white/70 text-base md:text-lg leading-relaxed">
            The same rhythm on every project — the depth of each step scales
            with the scope. You always know exactly where we are.
          </div>
        </div>
        <div className="relative">
          {/* vertical rail */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-white/15" />
          <div className="space-y-14 md:space-y-24">
            {PROCESS.map((p, i) => {
              const rightSide = i % 2 === 1;
              return (
                <motion.div
                  key={p.n}
                  data-testid={`process-step-${p.n}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.7, delay: i * 0.05 }}
                  className={[
                    "relative grid grid-cols-1 md:grid-cols-2 items-start md:items-center gap-6",
                    rightSide ? "md:[&>div:first-child]:col-start-2" : "",
                  ].join(" ")}
                >
                  {/* Node */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-2">
                    <div className="w-3 h-3 rounded-full bg-[#06B6D4] ring-4 ring-[#0F172A]" />
                  </div>
                  <div
                    className={[
                      "pl-14 md:pl-0",
                      rightSide ? "md:pl-16" : "md:pr-16 md:text-right",
                    ].join(" ")}
                  >
                    <div className="eyebrow text-white/50">Step {p.n}</div>
                    <div
                      className="mt-4 font-display font-semibold tracking-tighter leading-none"
                      style={{ fontSize: "clamp(40px, 5vw, 72px)" }}
                    >
                      {p.title}
                    </div>
                  </div>
                  <div
                    className={[
                      "pl-14 md:pl-0 text-white/70 leading-relaxed text-base md:text-lg",
                      rightSide ? "md:pr-16 md:text-right" : "md:pl-16",
                    ].join(" ")}
                  >
                    {p.body}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}