import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Palette,
  ShoppingBag,
  RefreshCcw,
  ShieldCheck,
  TrendingUp,
  // ArrowUpRight,
  LucideIcon,
} from "lucide-react";
import { SERVICES } from "../data/site";

const ICONS: Record<string, LucideIcon> = {
  Code2,
  Palette,
  ShoppingBag,
  RefreshCcw,
  ShieldCheck,
  TrendingUp,
};

export default function Services(): React.JSX.Element {
  return (
    <section
      id="services"
      data-testid="services"
      className="relative py-24 md:py-32 bg-[#F8FAFC]"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-end mb-14 md:mb-20">
          <div className="md:col-span-6">
            <div className="eyebrow mb-4">/ Services</div>
            <h2
              className="font-display font-bold text-[#0F172A] tracking-tighter leading-[0.95]"
              style={{ fontSize: "clamp(40px, 5.5vw, 80px)" }}
            >
              Everything you need <br />
              to grow online.
            </h2>
          </div>
          <div className="md:col-span-5 md:col-start-8 text-[#64748B] text-base md:text-lg leading-relaxed">
            Six focused disciplines that we combine to build a strong digital
            presence — from your first landing page to a fully-featured product.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon] || Code2;
            return (
              <motion.article
                key={s.id}
                data-testid={`service-card-${s.id}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay: 0.05 * i }}
                className="group relative p-8 rounded-2xl bg-white border border-[#E2E8F0] lift"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl border border-[#E2E8F0] bg-white flex items-center justify-center text-[#0F172A] group-hover:border-[#06B6D4] group-hover:text-[#06B6D4] transition-colors duration-300">
                    <Icon size={20} strokeWidth={1.75} />
                  </div>
                  <span className="eyebrow">0{s.id}</span>
                </div>

                <h3 className="mt-8 font-display font-semibold text-[#0F172A] text-2xl md:text-[26px] tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-3 text-[#64748B] text-[15px] leading-relaxed">
                  {s.body}
                </p>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <li
                      key={t}
                      className="text-[11px] tracking-wider uppercase px-2.5 py-1 rounded-full border border-[#E2E8F0] text-[#64748B]"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                {/* <div className="mt-8 pt-6 border-t border-[#E2E8F0] flex items-center justify-between text-[13px] font-medium text-[#0F172A]">
                  <span className="link-sweep">Learn more</span>
                  <span className="w-8 h-8 rounded-full border border-[#E2E8F0] flex items-center justify-center group-hover:bg-[#0F172A] group-hover:text-white group-hover:border-[#0F172A] transition-colors duration-300">
                    <ArrowUpRight size={14} />
                  </span>
                </div> */}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}