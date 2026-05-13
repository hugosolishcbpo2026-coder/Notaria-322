import { motion } from 'framer-motion'

const QUICK_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Ubicación', href: '#ubicacion' },
  { label: 'Contacto', href: '#contacto' },
]

const SERVICES = [
  'Escrituras',
  'Testamentos',
  'Poderes',
  'Constitución de Sociedades',
  'Compraventa de Inmuebles',
  'Fe de Hechos',
]

export default function Footer() {
  const handleNav = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <footer className="relative overflow-hidden border-t border-gold/15 bg-obsidian">
      {/* Decorative gold halo */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[80%] -translate-x-1/2 rounded-full bg-gold/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="grid gap-12 md:grid-cols-2 lg:grid-cols-4"
        >
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-sm border border-gold/60 bg-obsidian/40">
                <span className="font-display text-lg font-semibold text-gold-gradient">N</span>
              </div>
              <div>
                <p className="font-display text-lg tracking-widest text-ivory">
                  NOTARÍA <span className="text-gold">322</span>
                </p>
                <p className="font-body text-[10px] uppercase tracking-[0.3em] text-silver">
                  Seguridad Jurídica y Confianza
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-md font-body text-sm leading-relaxed text-soft-gray/80">
              Atendemos a particulares, empresas e instituciones con la precisión, discreción y
              prestigio que exige un servicio notarial de excelencia en la Ciudad de México.
            </p>

            <div className="mt-8 gold-divider w-24" />
            <p className="mt-4 font-body text-xs uppercase tracking-widest text-silver">
              Col. Del Valle, Benito Juárez
              <br />
              Ciudad de México · C.P. 03103
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-widest text-gold">
              Navegación
            </h4>
            <ul className="mt-5 space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNav(e, link.href)}
                    className="font-body text-sm text-ivory/70 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-widest text-gold">
              Servicios
            </h4>
            <ul className="mt-5 space-y-3">
              {SERVICES.map((s) => (
                <li
                  key={s}
                  className="font-body text-sm text-ivory/70 transition-colors hover:text-gold"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <div className="mt-16 gold-divider" />

        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <p className="font-body text-xs uppercase tracking-widest text-silver">
            © {new Date().getFullYear()} Notaría Pública 322 — Todos los derechos reservados
          </p>
          <p className="font-body text-xs uppercase tracking-widest text-silver">
            Aviso de Privacidad · Términos
          </p>
        </div>
      </div>
    </footer>
  )
}
