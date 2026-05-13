import { motion } from 'framer-motion'
import {
  FileSignature,
  ScrollText,
  KeyRound,
  Building2,
  Home,
  PenLine,
  FileCheck2,
  Eye,
} from 'lucide-react'
import SectionDivider from '../components/SectionDivider'

const SERVICES = [
  {
    icon: FileSignature,
    title: 'Escrituras',
    text: 'Redacción, protocolización y otorgamiento de escrituras públicas con pleno valor legal.',
  },
  {
    icon: ScrollText,
    title: 'Testamentos',
    text: 'Elaboración de testamentos públicos abiertos para asegurar el destino de su patrimonio.',
  },
  {
    icon: KeyRound,
    title: 'Poderes',
    text: 'Otorgamiento de poderes generales y especiales para representación legal.',
  },
  {
    icon: Building2,
    title: 'Constitución de Sociedades',
    text: 'Formalización de sociedades mercantiles, civiles y asociaciones conforme a derecho.',
  },
  {
    icon: Home,
    title: 'Compraventa de Inmuebles',
    text: 'Operaciones inmobiliarias con la máxima seguridad jurídica y diligencia patrimonial.',
  },
  {
    icon: PenLine,
    title: 'Ratificación de Firmas',
    text: 'Reconocimiento auténtico de firmas en documentos privados ante notario.',
  },
  {
    icon: FileCheck2,
    title: 'Protocolizaciones',
    text: 'Incorporación al protocolo notarial de documentos para garantizar su autenticidad.',
  },
  {
    icon: Eye,
    title: 'Fe de Hechos',
    text: 'Constancia notarial de hechos presenciados, con valor probatorio pleno.',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}
const card = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Servicios() {
  return (
    <section
      id="servicios"
      className="relative overflow-hidden bg-gradient-to-b from-obsidian via-charcoal/40 to-obsidian py-28 sm:py-32 lg:py-40"
    >
      {/* Background decoration */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(200,169,107,1)_1px,transparent_1px),linear-gradient(90deg,rgba(200,169,107,1)_1px,transparent_1px)] [background-size:80px_80px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-64 w-[60%] -translate-x-1/2 bg-gold/10 blur-[120px]"
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
          <span className="eyebrow">Servicios</span>
          <h2 className="mt-6 section-title">
            Excelencia notarial en <span className="text-gold-gradient">cada acto</span>
          </h2>
          <p className="mt-6 font-body text-base leading-relaxed text-soft-gray/90 sm:text-lg">
            Ofrecemos un catálogo integral de servicios notariales con el respaldo de la
            experiencia, la discreción y el más alto estándar profesional.
          </p>
        </motion.div>

        <div className="mt-14">
          <SectionDivider />
        </div>

        {/* Services grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {SERVICES.map(({ icon: Icon, title, text }) => (
            <motion.article
              key={title}
              variants={card}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-sm border border-gold/10 bg-charcoal/50 p-7 backdrop-blur-sm transition-all duration-500 hover:border-gold/50 hover:bg-charcoal/80 hover:shadow-gold"
            >
              {/* Gold sweep on hover */}
              <span
                aria-hidden
                className="pointer-events-none absolute -inset-px rounded-sm opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    'radial-gradient(circle at 50% 0%, rgba(200,169,107,0.18), transparent 60%)',
                }}
              />

              {/* Top accent line */}
              <span className="absolute left-7 top-0 h-px w-12 bg-gradient-to-r from-gold to-transparent" />

              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-sm border border-gold/30 bg-obsidian/60 text-gold transition-all duration-500 group-hover:border-gold group-hover:bg-gold/10 group-hover:shadow-gold">
                  <Icon size={22} strokeWidth={1.5} />
                </div>

                <h3 className="mt-6 font-display text-lg tracking-wide text-ivory transition-colors duration-300 group-hover:text-gold">
                  {title}
                </h3>

                <p className="mt-3 font-body text-sm leading-relaxed text-soft-gray/85">
                  {text}
                </p>

                <div className="mt-6 flex items-center gap-2 font-body text-[10px] uppercase tracking-widest text-gold opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <span>Más información</span>
                  <span className="h-px w-8 bg-gold" />
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <p className="font-body text-sm italic text-silver">
            ¿Requiere un servicio en particular? Estamos a sus órdenes.
          </p>
          <a
            href="#contacto"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn-outline mt-6"
          >
            Solicitar asesoría
          </a>
        </motion.div>
      </div>
    </section>
  )
}
