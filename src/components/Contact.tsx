import React, { useState, ChangeEvent, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Mail, Phone, MapPin, Clock } from "lucide-react";
import { AGENCY } from "../data/site";

const SERVICES: string[] = [
  "Landing Page",
  "E-commerce Store",
  "Restaurant Digital Menu",
  "Website Redesign",
  "UI/UX Design",
  "Website Maintenance",
  "SEO & Performance",
];
const BUDGETS: string[] = [
  "Under ₹25,000",
  "₹25,000 – ₹50,000",
  "₹50,000 – ₹1,00,000",
  "₹1,00,000 – ₹2,50,000",
  "Above ₹2,50,000",
];

const FIELD =
  "w-full bg-transparent border-0 border-b border-[#E2E8F0] pb-3 pt-1 text-[#0F172A] placeholder:text-[#64748B]/70 text-[15px] focus:outline-none focus:border-[#0F172A] transition-colors";
const LABEL = "eyebrow block mb-3";

interface ContactForm {
  full_name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  message: string;
  consent: boolean;
}

const INITIAL_FORM: ContactForm = {
  full_name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  budget: "",
  message: "",
  consent: true,
};

type FormFieldElement =
  | HTMLInputElement
  | HTMLTextAreaElement
  | HTMLSelectElement;

export default function Contact(): React.JSX.Element {
  const [form, setForm] = useState<ContactForm>(INITIAL_FORM);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [done, setDone] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const on =
    (k: keyof ContactForm) =>
    (e: ChangeEvent<FormFieldElement>): void => {
      const target = e.target;
      setForm((f) => ({
        ...f,
        [k]:
          target instanceof HTMLInputElement && target.type === "checkbox"
            ? target.checked
            : target.value,
      }));
    };

  // No backend yet — this simulates a submit locally so the UI/UX is fully
  // testable. Swap the body of this function for a real API call once a
  // backend exists (see comment below).
  const submit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!form.consent) {
      setError("Please agree to be contacted to continue.");
      return;
    }
    setError("");
    setSubmitting(true);

    // --- Backend integration point ---
    // When you have an API, replace this setTimeout block with something like:
    //
    // try {
    //   await axios.post(`${API_URL}/contact`, form);
    //   setDone(true);
    // } catch (err) {
    //   setError("Something went wrong. Please try again.");
    // } finally {
    //   setSubmitting(false);
    // }
    setTimeout(() => {
      setSubmitting(false);
      setDone(true);
    }, 700);
  };

  return (
    <section
      id="contact"
      data-testid="contact"
      className="relative py-24 md:py-32 bg-[#F8FAFC]"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-end mb-14 md:mb-20">
          <div className="md:col-span-7">
            <div className="eyebrow mb-4">/ Contact</div>
            <h2
              className="font-display font-bold text-[#0F172A] tracking-tighter leading-[0.95]"
              style={{ fontSize: "clamp(40px, 5.5vw, 80px)" }}
            >
              Start a project.
            </h2>
          </div>
          <div className="md:col-span-4 md:col-start-9 text-[#64748B] text-base md:text-lg leading-relaxed">
            Tell us a little about your project. We'll come back with a plan, a
            timeline, and a fixed quote — usually within a business day.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          {/* Left — details */}
          <aside className="md:col-span-4 space-y-10">
    <div>
      <div className="eyebrow mb-3">Email</div>
      <a
        href={`mailto:${AGENCY.email}`}
        data-testid="contact-email"
        className="link-sweep font-display text-xl md:text-2xl text-[#0F172A] tracking-tight inline-flex items-center gap-2"
      >
        <Mail size={16} />
        {AGENCY.email}
      </a>
    </div>

    <div>
      <div className="eyebrow mb-3">Phone</div>
      <a
        href={`tel:${AGENCY.phone.replace(/\s/g, "")}`}
        data-testid="contact-phone"
        className="link-sweep font-display text-xl md:text-2xl text-[#0F172A] tracking-tight inline-flex items-center gap-2"
      >
        <Phone size={16} />
        {AGENCY.phone}
      </a>
    </div>

    <div>
      <div className="eyebrow mb-3">Studio</div>
      <div className="text-[#0F172A] font-display text-lg tracking-tight inline-flex items-center gap-2">
        <MapPin size={16} />
        {AGENCY.address}
      </div>
    </div>

    <div>
      <div className="eyebrow mb-3">Hours</div>
      <div className="text-[#0F172A] font-display text-lg tracking-tight inline-flex items-center gap-2">
        <Clock size={16} />
        {AGENCY.hours}
      </div>
    </div>

    <div>
      <div className="eyebrow mb-3">Follow</div>
      <div className="flex flex-wrap gap-2">
        {AGENCY.socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            className="text-[13px] px-3 py-1.5 rounded-full border border-[#E2E8F0] text-[#0F172A] hover:border-[#0F172A] transition-colors"
          >
            {s.label}
          </a>
        ))}
      </div>
    </div>
  </aside>

          {/* Right — form / success */}
          <div className="md:col-span-8 relative min-h-[560px]">
            <AnimatePresence mode="wait">
              {!done ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  data-testid="contact-form"
                  onSubmit={submit}
                  className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 p-6 md:p-10 rounded-3xl bg-white border border-[#E2E8F0]"
                >
                  <div>
                    <label className={LABEL}>Full name*</label>
                    <input
                      required
                      data-testid="input-name"
                      value={form.full_name}
                      onChange={on("full_name")}
                      className={FIELD}
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className={LABEL}>Email*</label>
                    <input
                      required
                      type="email"
                      data-testid="input-email"
                      value={form.email}
                      onChange={on("email")}
                      className={FIELD}
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label className={LABEL}>Phone</label>
                    <input
                      data-testid="input-phone"
                      value={form.phone}
                      onChange={on("phone")}
                      className={FIELD}
                      placeholder="+91 555 000 1234"
                    />
                  </div>
                  <div>
                    <label className={LABEL}>Company</label>
                    <input
                      data-testid="input-company"
                      value={form.company}
                      onChange={on("company")}
                      className={FIELD}
                      placeholder="Company name"
                    />
                  </div>
                  <div>
                    <label className={LABEL}>Service</label>
                    <select
                      data-testid="input-service"
                      value={form.service}
                      onChange={on("service")}
                      className={FIELD}
                    >
                      <option value="">Choose a service</option>
                      {SERVICES.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className={LABEL}>Budget</label>
                    <select
                      data-testid="input-budget"
                      value={form.budget}
                      onChange={on("budget")}
                      className={FIELD}
                    >
                      <option value="">Choose a budget</option>
                      {BUDGETS.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className={LABEL}>Project description*</label>
                    <textarea
                      required
                      rows={4}
                      data-testid="input-message"
                      value={form.message}
                      onChange={on("message")}
                      className={`${FIELD} resize-none`}
                      placeholder="What are you trying to build? Any timelines, goals, or references?"
                    />
                  </div>
                  <div className="md:col-span-2 flex items-start gap-3">
                    <input
                      id="consent"
                      type="checkbox"
                      data-testid="input-consent"
                      checked={form.consent}
                      onChange={on("consent")}
                      className="mt-1 w-4 h-4 accent-[#0F172A]"
                    />
                    <label
                      htmlFor="consent"
                      className="text-sm text-[#64748B] leading-relaxed"
                    >
                      I agree to be contacted by {AGENCY.name} regarding this
                      inquiry. We'll never share your details.
                    </label>
                  </div>

                  {error && (
                    <div
                      data-testid="contact-error"
                      className="md:col-span-2 text-sm text-red-600"
                    >
                      {error}
                    </div>
                  )}

                  <div className="md:col-span-2 flex flex-wrap items-center justify-between gap-4">
                    <div className="text-sm text-[#64748B]">
                      We reply within one business day.
                    </div>
                    <button
                      type="submit"
                      data-testid="submit-inquiry"
                      disabled={submitting}
                      className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {submitting ? "Sending…" : "Send inquiry"}
                      <ArrowUpRight size={16} />
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="done"
                  data-testid="contact-success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="p-10 md:p-16 rounded-3xl bg-white border border-[#E2E8F0] min-h-[520px] flex flex-col items-start justify-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#0F172A] text-white flex items-center justify-center mb-8">
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path className="check-path" d="M4 12l5 5L20 6" />
                    </svg>
                  </div>
                  <div className="eyebrow mb-3">Inquiry received</div>
                  <h3
                    className="font-display font-bold text-[#0F172A] tracking-tighter leading-[0.95]"
                    style={{ fontSize: "clamp(36px, 4.5vw, 64px)" }}
                  >
                    Thank you — we'll be in touch shortly.
                  </h3>
                  <p className="mt-6 max-w-lg text-[#64748B] text-base md:text-lg leading-relaxed">
                    A confirmation of your inquiry has been recorded. Expect a
                    personal reply from our team within one business day.
                  </p>
                  <button
                    data-testid="contact-reset"
                    onClick={() => {
                      setDone(false);
                      setForm(INITIAL_FORM);
                    }}
                    className="mt-10 btn-ghost"
                  >
                    Send another
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}