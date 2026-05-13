import { motion } from 'framer-motion'
import { Briefcase, ShieldCheck, Landmark, Award } from 'lucide-react'
import SectionDivider from '../components/SectionDivider'

const METRICS = [
  {
    icon: Briefcase,
    title: 'Atención Profesional',
    text: 'Equipo altamente capacitado en materia notarial, fiscal y patrimonial, comprometido con la excelencia.',
  },
  {
    icon: ShieldCheck,
    title: 'Seguridad Jurídica',
    text: 'Cada documento se elabora bajo los más estrictos estándares legales para garantizar su plena validez.',
  },
  {
    icon: Landmark,
    title: 'Confianza Institucional',
    text: 'Reconocimiento por parte de instituciones públicas, privadas y financieras a lo largo de los años.',
  },
  {
    icon: Award,
    title: 'Asesoría Especializada',
    text: 'Acompañamiento integral que va más allá del trámite, con visión preventiva y estratégica.',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

export default function Experiencia() {
  return (
    <section
      id="experiencia"
      className="relative overflow-hidden bg-obsidian py-28 sm:py-32 lg:py-40"
    >
      {/* Decorative emerald accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-emerald/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 left-0 h-96 w-96 rounded-full bg-ruby/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="eyebrow">Experiencia</span>
          <h2 className="mt-6 section-title">
            Una trayectoria que <span className="text-gold-gradient">respalda</span> cada acto
          </h2>
          <p className="mt-6 font-body text-base leading-relaxed text-soft-gray/90 sm:text-lg">
            Nuestra reputación se ha forjado caso por caso, documento por documento, con un
            mismo principio: brindar resultados impecables con la atención que cada cliente
            merece.
          </p>
        </motion.div>

        <div className="mt-14">
          <SectionDivider />
        </div>

        {/* Metric cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {METRICS.map(({ icon: Icon, title, text }, i) => (
            <motion.article
              key={title}
              variants={item}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-sm border border-gold/15 bg-gradient-to-b from-charcoal/70 to-obsidian/80 p-8 backdrop-blur-sm transition-all duration-500 hover:border-gold/50 hover:shadow-gold"
            >
              {/* Number watermark */}
              <span className="pointer-events-none absolute right-4 top-2 font-display text-7xl font-medium text-gold/10 transition-colors duration-500 group-hover:text-gold/20">
                0{i + 1}
              </span>

              {/* Top gold line */}
              <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

              <div className="relative">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-sm border border-gold/30 bg-obsidian/60 text-gold transition-all duration-500 group-hover:border-gold group-hover:bg-gold/10">
                  <Icon size={22} strokeWidth={1.5} />
                </div>

                <h3 className="mt-6 font-display text-xl tracking-wide text-ivory">{title}</h3>

                <div className="mt-3 h-px w-12 bg-gold/40 transition-all duration-500 group-hover:w-20 group-hover:bg-gold" />

                <p className="mt-5 font-body text-sm leading-relaxed text-soft-gray/85">
                  {text}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Quote block */}
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mx-auto mt-24 max-w-3xl text-center"
        >
          <span className="font-display text-6xl leading-none text-gold/40">“</span>
          <p className="mt-2 font-display text-2xl italic leading-relaxed text-ivory/90 sm:text-3xl">
            La fe pública no se otorga, se honra todos los días con cada acto, cada firma y
            cada palabra.
          </p>
          <footer className="mt-6 font-body text-xs uppercase tracking-[0.3em] text-gold">
            — Notaría Pública 322
          </footer>
        </motion.blockquote>
      </div>
    </section>
  )
}
