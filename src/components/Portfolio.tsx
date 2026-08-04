import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PORTFOLIO } from "../data/site";

export default function Portfolio(): React.JSX.Element {
  return (
    <section
      id="portfolio"
      data-testid="portfolio"
      className="relative py-24 md:py-32 bg-white"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-end mb-14 md:mb-20">
          <div className="md:col-span-7">
            <div className="eyebrow mb-4">/ Selected work</div>
            <h2
              className="font-display font-bold text-[#0F172A] tracking-tighter leading-[0.95]"
              style={{ fontSize: "clamp(40px, 5.5vw, 80px)" }}
            >
              Real projects. <br />
              Real outcomes.
            </h2>
          </div>

          <div className="md:col-span-4 md:col-start-9 text-[#64748B] text-base md:text-lg leading-relaxed">
            A selection from our recent studio work — spanning fintech, SaaS,
            e-commerce, healthcare, and editorial brands.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[260px] gap-4 md:gap-6">
          {PORTFOLIO.map((p, i) => (
            <motion.a
              key={p.id}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={`portfolio-card-${p.id}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, delay: 0.05 * i }}
              className={`group relative overflow-hidden rounded-[20px] border border-[#E2E8F0] bg-[#F8FAFC] pf-clip lift ${p.span}`}
            >
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
              />

              {/* Category Badge */}
              <div className="absolute left-4 top-4 flex items-center gap-2 text-[11px] uppercase tracking-widest px-3 py-1.5 rounded-full bg-white/85 backdrop-blur border border-white/60 text-[#0F172A]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4]" />
                {p.category}
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#0F172A]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end text-white opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-[opacity,transform] duration-500">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="text-[10px] tracking-wider uppercase px-2 py-1 rounded-full border border-white/25"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <h3 className="font-display font-semibold text-2xl md:text-3xl tracking-tight">
                  {p.title}
                </h3>

                <p className="mt-2 text-white/70 text-sm max-w-md">
                  {p.blurb}
                </p>

                <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium">
                  Visit Website
                  <span className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center">
                    <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}