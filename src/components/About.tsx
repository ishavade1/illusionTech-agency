import { motion } from 'framer-motion'
import { Target } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="section-container grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-brand opacity-10 rounded-3xl blur-2xl -z-10" />
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80&auto=format&fit=crop"
            alt="WebCraft Studio team collaborating"
            loading="lazy"
            className="rounded-3xl w-full h-[420px] object-cover border border-border shadow-soft"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="eyebrow mb-4">About Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-5">Who We Are</h2>
          <p className="text-muted text-lg leading-relaxed mb-8">
            We help businesses build modern digital experiences through
            beautiful design and reliable development.
          </p>

          <div className="flex items-start gap-4 bg-surface-light rounded-2xl border border-border p-6">
            <span className="shrink-0 w-11 h-11 rounded-xl bg-gradient-brand flex items-center justify-center">
              <Target size={20} className="text-white" />
            </span>
            <div>
              <h3 className="font-heading font-semibold text-ink mb-1">Our Mission</h3>
              <p className="text-sm text-muted leading-relaxed">
                Deliver world-class websites that help businesses grow.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
