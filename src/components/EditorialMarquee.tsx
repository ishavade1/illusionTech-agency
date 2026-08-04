import React from "react";
import Marquee from "react-fast-marquee";
import { MARQUEE } from "../data/site";

export default function EditorialMarquee(): React.JSX.Element {
  return (
    <section
      data-testid="marquee"
      aria-label="Disciplines"
      className="relative py-16 md:py-24 bg-[#F8FAFC] border-y border-[#E2E8F0] overflow-hidden"
    >
      <Marquee gradient={false} speed={38} pauseOnHover>
        {MARQUEE.map((word, i) => (
          <span key={i} className="marquee-item flex items-center">
            {word}
            <span className="dot mx-8 text-[#06B6D4]">•</span>
          </span>
        ))}
      </Marquee>
    </section>
  );
}