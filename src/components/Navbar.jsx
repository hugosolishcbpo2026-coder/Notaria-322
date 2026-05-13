import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Ubicación', href: '#ubicacion' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')

  // Add backdrop / shadow once the page has scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // IntersectionObserver to highlight the currently visible section in the nav
  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.getElementById(l.href.slice(1))).filter(Boolean)
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )
    sections.forEach((s) => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  // Smooth-scroll handler — works for both desktop links and the mobile drawer
  const handleNav = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'border-b border-gold/15 bg-obsidian/85 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          {/* Logo / brand */}
          <a
            href="#inicio"
            onClick={(e) => handleNav(e, '#inicio')}
            className="group flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-gold/60 bg-obsidian/40 transition-all duration-300 group-hover:border-gold group-hover:shadow-gold">
              <span className="font-display text-sm font-semibold text-gold-gradient">N</span>
            </div>
            <div className="hidden flex-col leading-tight sm:flex">
              <span className="font-display text-base font-medium tracking-widest text-ivory">
                NOTARÍA <span className="text-gold">322</span>
              </span>
              <span className="font-body text-[10px] uppercase tracking-[0.3em] text-silver">
                Seguridad Jurídica
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.slice(1)
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNav(e, link.href)}
                    className="relative px-4 py-2 font-body text-sm font-medium tracking-wide text-ivory/85 transition-colors duration-300 hover:text-gold"
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute inset-x-3 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-gold to-transparent"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              )
            })}
          </ul>

          {/* Desktop CTA */}
          <a
            href="#contacto"
            onClick={(e) => handleNav(e, '#contacto')}
            className="hidden lg:inline-flex btn-gold !px-6 !py-2.5 !text-xs"
          >
            Agendar Consulta
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            aria-label="Abrir menú"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-sm border border-gold/30 text-gold transition-colors hover:border-gold lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-obsidian/70 backdrop-blur-md"
              onClick={() => setOpen(false)}
            />
            {/* Panel */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-x-0 top-[72px] mx-4 overflow-hidden rounded-sm border border-gold/15 bg-charcoal/95 backdrop-blur-xl"
            >
              <ul className="flex flex-col divide-y divide-gold/10 p-2">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => handleNav(e, link.href)}
                      className="block px-4 py-4 font-display tracking-widest text-ivory transition-colors hover:text-gold"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
                <li className="p-4">
                  <a
                    href="#contacto"
                    onClick={(e) => handleNav(e, '#contacto')}
                    className="btn-gold w-full"
                  >
                    Agendar Consulta
                  </a>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
