import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { AGENCY } from "../data/site";
import logo from "/illusiontech-logo.png";

declare global {
  interface Window {
    __lenis?: {
      scrollTo: (target: Element, options?: { offset?: number }) => void;
    };
  }
}

interface NavItem {
  label: string;
  id: string;
}

const NAV: NavItem[] = [
  { label: "Work", id: "portfolio" },
  { label: "Services", id: "services" },
  { label: "Process", id: "process" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

function scrollToId(id: string): void {
  const el = document.getElementById(id);
  if (!el) return;

  const lenis = window.__lenis;

  if (lenis) {
    lenis.scrollTo(el, { offset: -80 });
  } else {
    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

export default function Navbar(): React.JSX.Element {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.1,
      }}
      data-testid="navbar"
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",

        open
          ? "bg-transparent border-transparent"
          : scrolled
          ? "bg-white/85 backdrop-blur-xl border-b border-[#E2E8F0]/80"
          : "bg-transparent border-transparent",
      ].join(" ")}
    >
      <nav className="max-w-[1440px] mx-auto px-6 md:px-10 h-[72px] flex items-center justify-between">
        <button
            data-testid="nav-logo"
            onClick={() => scrollToId("home")}
            className="group"
          >
            <img
              src={logo}
              alt="IllusionTech"
              className="h-18 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </button>

        <ul className="hidden md:flex items-center gap-9">
          {NAV.map((n) => (
            <li key={n.id}>
              <button
                data-testid={`nav-link-${n.id}`}
                onClick={() => scrollToId(n.id)}
                className="link-sweep text-[13px] font-medium text-[#0F172A]/80 hover:text-[#0F172A]"
              >
                {n.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <button
            data-testid="nav-cta-quote"
            onClick={() => scrollToId("contact")}
            className="btn-primary"
          >
            Get Free Quote
            <ArrowUpRight size={16} />
          </button>
        </div>

        <button
          data-testid="nav-mobile-toggle"
          className="md:hidden w-10 h-10 rounded-full border border-[#E2E8F0] flex items-center justify-center"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={18} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[9999] bg-[#0F172A] text-white overflow-y-auto md:hidden"
          >
            <div className="sticky top-0 bg-[#0F172A] px-6 h-[72px] flex items-center justify-between border-b border-white/10">
              <div className="font-display font-semibold text-[15px]">
                {AGENCY.name}
              </div>

              <button
                data-testid="mobile-menu-close"
                onClick={() => setOpen(false)}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center"
                aria-label="Close menu"
              >
                <X size={18} />
              </button>
            </div>

            <div className="px-6 pt-6 pb-12 flex flex-col gap-1">
              {NAV.map((n, i) => (
                <motion.button
                  key={n.id}
                  data-testid={`mobile-nav-${n.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: i * 0.05,
                    duration: 0.45,
                  }}
                  className="text-left font-display text-4xl font-semibold py-3 border-b border-white/10"
                  onClick={() => {
                    setOpen(false);

                    setTimeout(() => {
                      scrollToId(n.id);
                    }, 100);
                  }}
                >
                  {n.label}
                </motion.button>
              ))}

              <button
                data-testid="mobile-cta-quote"
                className="mt-8 inline-flex items-center justify-center gap-2 py-4 rounded-full bg-white text-[#0F172A] font-medium"
                onClick={() => {
                  setOpen(false);

                  setTimeout(() => {
                    scrollToId("contact");
                  }, 100);
                }}
              >
                Get Free Quote
                <ArrowUpRight size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}