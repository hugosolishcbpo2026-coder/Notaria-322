import { motion } from 'framer-motion'
import { MapPin, Clock, Phone, Mail } from 'lucide-react'
import SectionDivider from '../components/SectionDivider'

const INFO = [
  {
    icon: MapPin,
    label: 'Dirección',
    value: ['Col. Del Valle, Benito Juárez', 'Ciudad de México · C.P. 03103'],
  },
  {
    icon: Clock,
    label: 'Horario',
    value: ['Lunes a Viernes', '9:00 — 18:00 hrs'],
  },
  {
    icon: Phone,
    label: 'Teléfono',
    value: ['Próximamente'],
  },
  {
    icon: Mail,
    label: 'Correo',
    value: ['Próximamente'],
  },
]

export default function Ubicacion() {
  return (
    <section
      id="ubicacion"
      className="relative overflow-hidden bg-gradient-to-b from-obsidian via-charcoal/30 to-obsidian py-28 sm:py-32 lg:py-40"
    >
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="eyebrow">Ubicación</span>
          <h2 className="mt-6 section-title">
            Encuéntrenos en el <span className="text-gold-gradient">corazón de la ciudad</span>
          </h2>
          <p className="mt-6 font-body text-base leading-relaxed text-soft-gray/90 sm:text-lg">
            Nuestras oficinas se encuentran ubicadas estratégicamente en una de las zonas más
            emblemáticas de la Ciudad de México.
          </p>
        </motion.div>

        <div className="mt-14">
          <SectionDivider />
        </div>

        {/* Map + info grid */}
        <div className="mt-16 grid gap-10 lg:grid-cols-5 lg:gap-12">
          {/* Map (3/5) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-3"
          >
            <div className="luxury-edge relative overflow-hidden rounded-sm border border-gold/15 bg-charcoal/40 shadow-gold">
              {/* Corner brackets */}
              <span className="pointer-events-none absolute left-3 top-3 z-10 h-6 w-6 border-l border-t border-gold/60" />
              <span className="pointer-events-none absolute right-3 top-3 z-10 h-6 w-6 border-r border-t border-gold/60" />
              <span className="pointer-events-none absolute bottom-3 left-3 z-10 h-6 w-6 border-b border-l border-gold/60" />
              <span className="pointer-events-none absolute bottom-3 right-3 z-10 h-6 w-6 border-b border-r border-gold/60" />

              {/* Google Maps embed — replace `q=` value with the exact street address when you have it */}
              <iframe
                title="Ubicación Notaría Pública 322"
                src="https://www.google.com/maps?q=Colonia+Del+Valle+Benito+Juarez+CDMX+03103&output=embed"
                className="aspect-[4/3] w-full grayscale-[0.4] contrast-[0.95]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </motion.div>

          {/* Info card (2/5) */}
          <motion.aside
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="lg:col-span-2"
          >
            <div className="glass-strong relative h-full rounded-sm p-8 lg:p-10">
              <h3 className="font-display text-2xl tracking-wide text-ivory">
                Notaría Pública <span className="text-gold">322</span>
              </h3>
              <p className="mt-2 font-body text-xs uppercase tracking-[0.3em] text-gold">
                Información de contacto
              </p>

              <div className="mt-8 gold-divider" />

              <ul className="mt-8 space-y-6">
                {INFO.map(({ icon: Icon, label, value }) => (
                  <li key={label} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-gold/30 bg-obsidian/40 text-gold">
                      <Icon size={16} strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="font-body text-[10px] uppercase tracking-[0.3em] text-silver">
                        {label}
                      </p>
                      <div className="mt-1 font-body text-sm leading-relaxed text-ivory">
                        {value.map((v) => (
                          <div key={v}>{v}</div>
                        ))}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <a
                href="https://www.google.com/maps?q=Colonia+Del+Valle+Benito+Juarez+CDMX+03103"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline mt-10 w-full !text-xs"
              >
                Cómo llegar
              </a>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  )
}
