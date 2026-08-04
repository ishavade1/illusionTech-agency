import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

function scrollToId(id: string): void {
  const el = document.getElementById(id);
  if (!el) return;
  const lenis = window.__lenis;
  if (lenis) lenis.scrollTo(el, { offset: -60 });
  else el.scrollIntoView({ behavior: "smooth" });
}

export default function CTA(): React.JSX.Element {
  return (
    <section
      data-testid="cta"
      className="relative py-20 md:py-28 bg-white"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[32px] bg-[#0F172A] text-white p-10 md:p-20"
        >
          <div className="pointer-events-none absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full blur-3xl opacity-40 bg-[radial-gradient(circle,#2563EB,transparent_60%)]" />
          <div className="pointer-events-none absolute -bottom-40 -left-32 w-[500px] h-[500px] rounded-full blur-3xl opacity-30 bg-[radial-gradient(circle,#06B6D4,transparent_60%)]" />
          <div className="relative grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-8">
              <div className="eyebrow mb-6 text-white/60">/ Let's build</div>
              <h2
                className="font-display font-bold tracking-tighter leading-[0.95]"
                style={{ fontSize: "clamp(40px, 6.5vw, 108px)" }}
              >
                Ready to build <br />
                something amazing?
              </h2>
              <p className="mt-8 max-w-xl text-white/70 text-base md:text-lg leading-relaxed">
                Tell us about your project — we'll come back within a business
                day with a plan, a timeline, and a fixed quote.
              </p>
            </div>
            <div className="md:col-span-4 flex flex-col md:items-end gap-3">
              <button
                data-testid="cta-get-quote"
                onClick={() => scrollToId("contact")}
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white text-[#0F172A] font-medium text-sm hover:bg-[#06B6D4] hover:text-[#0F172A] transition-colors duration-300"
              >
                Get Free Quote <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}