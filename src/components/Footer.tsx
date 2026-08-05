import React from "react";
import { ArrowUpRight } from "lucide-react";
import { AGENCY } from "../data/site";
import logo from "/illusiontech-logo.png";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterCol {
  title: string;
  links: FooterLink[];
}

const cols: FooterCol[] = [
  {
    title: "Studio",
    links: [
      { label: "About", href: "#about" },
      { label: "Process", href: "#process" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Website Development", href: "#services" },
      { label: "UI/UX Design", href: "#services" },
      { label: "E-Commerce", href: "#services" },
      { label: "SEO", href: "#services" },
    ],
  },
  {
    title: "Work",
    links: [
      { label: "Selected Projects", href: "#portfolio" },
      { label: "Testimonials", href: "#" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Follow",
    links: AGENCY.socials.map((s) => ({
      label: s.label,
      href: s.href,
    })),
  },
];

export default function Footer(): React.JSX.Element {
  return (
    <footer
      data-testid="footer"
      className="relative bg-[#0F172A] text-white pt-24 md:pt-32 pb-10 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">
          {/* Left */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5 mb-8">
              <img
                  src={logo}
                  alt="IllusionTech"
                  className="h-14 md:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            <div
              className="font-display font-semibold tracking-tighter leading-[0.95]"
              style={{ fontSize: "clamp(28px, 3.2vw, 44px)" }}
            >
              Design &amp; development
              <br />
              for ambitious businesses.
            </div>

            <a
              href={`mailto:${AGENCY.email}`}
              className="mt-8 inline-flex items-center gap-2 link-sweep text-[15px] text-white/80 hover:text-white"
            >
              {AGENCY.email}
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Right */}
          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-8">
            {cols.map((c) => (
              <div key={c.title}>
                <div className="eyebrow text-white/50 mb-5">
                  {c.title}
                </div>

                <ul className="space-y-3">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="text-[14px] text-white/80 hover:text-white link-sweep"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Massive Wordmark */}
        <div
          aria-hidden
          className="font-display font-bold tracking-tighter text-white/[0.06] leading-none select-none"
          style={{ fontSize: "clamp(80px, 22vw, 340px)" }}
        >
          iLLUSIONTECH.
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4 text-[13px] text-white/50">
          <div>
            © {AGENCY.name} All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="link-sweep hover:text-white">
              Privacy
            </a>

            <a href="#" className="link-sweep hover:text-white">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}