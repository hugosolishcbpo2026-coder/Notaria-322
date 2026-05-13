import { motion } from 'framer-motion'
import { Scale, ShieldCheck, Gem, Users } from 'lucide-react'
import SectionDivider from '../components/SectionDivider'

const PILLARS = [
  {
    icon: Scale,
    title: 'Profesionalismo',
    text: 'Cada acto notarial se conduce con rigor técnico, precisión jurídica y la solemnidad propia de la fe pública.',
  },
  {
    icon: ShieldCheck,
    title: 'Seguridad Jurídica',
    text: 'Garantizamos la validez, certeza y permanencia de cada documento que pasa por nuestra notaría.',
  },
  {
    icon: Gem,
    title: 'Credibilidad Institucional',
    text: 'Una trayectoria construida sobre la integridad, la transparencia y el cumplimiento estricto de la ley.',
  },
  {
    icon: Users,
    title: 'Atención Personalizada',
    text: 'Acompañamos a cada cliente con un trato cercano, confidencial y enfocado en sus necesidades particulares.',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

export default function Nosotros() {
  return (
    <section
      id="nosotros"
      className="relative overflow-hidden bg-obsidian py-28 sm:py-32 lg:py-40"
    >
      {/* Soft gold halo */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-32 h-96 w-96 rounded-full bg-gold/5 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 bottom-20 h-[28rem] w-[28rem] rounded-full bg-emerald/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="eyebrow">Nosotros</span>
          <h2 className="mt-6 section-title">
            Una tradición notarial al servicio de la <span className="text-gold-gradient">Ciudad de México</span>
          </h2>
          <p className="mt-6 font-body text-base leading-relaxed text-soft-gray/90 sm:text-lg">
            En Notaría Pública 322 ejercemos la función notarial con la responsabilidad de
            quien custodia la fe pública. Nuestra labor combina el conocimiento jurídico
            profundo con la sensibilidad para entender cada caso como único, ofreciendo
            soluciones a la medida de particulares, empresas e instituciones.
          </p>
        </motion.div>

        <div className="mt-14">
          <SectionDivider />
        </div>

        {/* Two-column block: imagery + statement */}
        <div className="mt-20 grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Imagery panel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="luxury-edge relative aspect-[4/5] overflow-hidden rounded-sm border border-gold/15 bg-charcoal">
              {/* Decorative inner pattern (placeholder for hero photo) */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(200,169,107,0.18),transparent_70%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,23,42,0.4),transparent_50%,rgba(122,30,44,0.15))]" />

              {/* Center seal */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-40 w-40 flex-col items-center justify-center rounded-full border border-gold/40 bg-obsidian/50 backdrop-blur-sm">
                  <span className="font-display text-3xl text-gold-gradient">322</span>
                  <span className="mt-1 font-body text-[10px] uppercase tracking-[0.3em] text-silver">
                    Notaría
                  </span>
                  <span className="mt-3 h-px w-12 bg-gold/60" />
                  <span className="mt-3 font-body text-[9px] uppercase tracking-widest text-gold">
                    Fides Publica
                  </span>
                </div>
              </div>

              {/* Corner brackets */}
              <span className="pointer-events-none absolute left-3 top-3 h-6 w-6 border-l border-t border-gold/60" />
              <span className="pointer-events-none absolute right-3 top-3 h-6 w-6 border-r border-t border-gold/60" />
              <span className="pointer-events-none absolute bottom-3 left-3 h-6 w-6 border-b border-l border-gold/60" />
              <span className="pointer-events-none absolute bottom-3 right-3 h-6 w-6 border-b border-r border-gold/60" />
            </div>

            {/* Floating caption card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="glass absolute -bottom-8 -right-4 max-w-[14rem] rounded-sm p-5 shadow-gold lg:-right-10"
            >
              <p className="font-display text-sm uppercase tracking-widest text-gold">
                Fe Pública
              </p>
              <p className="mt-2 font-body text-xs leading-relaxed text-soft-gray">
                Investidos por el Estado para dar certeza y autenticidad a los actos jurídicos.
              </p>
            </motion.div>
          </motion.div>

          {/* Pillars list */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="space-y-6"
          >
            {PILLARS.map(({ icon: Icon, title, text }) => (
              <motion.div
                key={title}
                variants={item}
                className="group relative flex gap-5 rounded-sm border border-gold/10 bg-charcoal/40 p-6 transition-all duration-500 hover:border-gold/40 hover:bg-charcoal/70 hover:shadow-gold"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm border border-gold/40 bg-obsidian/60 text-gold transition-all duration-500 group-hover:border-gold group-hover:bg-gold/10">
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-display text-lg tracking-wide text-ivory">{title}</h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-soft-gray/85">
                    {text}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
