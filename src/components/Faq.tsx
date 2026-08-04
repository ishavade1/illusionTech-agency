import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { FAQ as ITEMS } from "../data/site";

export default function Faq(): React.JSX.Element {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      data-testid="faq"
      className="relative py-24 md:py-32 bg-[#F8FAFC]"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <div className="eyebrow mb-4">/ FAQ</div>

          <h2
            className="font-display font-bold text-[#0F172A] tracking-tighter leading-[0.95]"
            style={{ fontSize: "clamp(36px, 4.5vw, 64px)" }}
          >
            Questions, answered.
          </h2>

          <p className="mt-6 text-[#64748B] max-w-sm leading-relaxed">
            Something not here? Send us a note — we usually reply the same day.
          </p>
        </div>

        <div className="md:col-span-7 md:col-start-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            {ITEMS.map((item, i) => {
              const isOpen = open === i;

              return (
                <div
                  key={i}
                  data-testid={`faq-item-${i}`}
                  className="border-b border-[#E2E8F0]"
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between py-6 md:py-8 text-left"
                  >
                    <span className="flex items-baseline gap-6">
                      <span className="eyebrow text-[#64748B]">
                        {String(i + 1).padStart(2, "0")}
                      </span>

                      <span
                        className="font-display font-semibold text-[#0F172A] tracking-tight leading-tight"
                        style={{ fontSize: "clamp(20px,2vw,28px)" }}
                      >
                        {item.q}
                      </span>
                    </span>

                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0"
                    >
                      <Plus size={18} />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.35,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <div className="text-[#64748B] text-base leading-relaxed pl-16 pb-8 pr-4">
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}