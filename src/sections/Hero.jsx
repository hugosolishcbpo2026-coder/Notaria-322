import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  const scrollTo = (href) => (e) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-obsidian"
    >
      {/* ============== BACKGROUND LAYER ============== */}
      {/*
        Drop a video at /public/hero.mp4 (and optional /public/hero-poster.jpg).
        The site works fine without one — the layered gradient + image fallback render below.
      */}
      <video
        className="hero-video hidden md:block"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/hero-poster.jpg"
        aria-hidden="true"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Mobile / fallback: luxury layered gradient */}
      <div
        aria-hidden
        className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_rgba(200,169,107,0.18),transparent_55%),radial-gradient(ellipse_at_bottom_right,_rgba(15,92,77,0.12),transparent_55%),linear-gradient(180deg,#050505_0%,#0a0a0a_50%,#050505_100%)]"
      />

      {/* Subtle architectural pattern overlay */}
      <div
        aria-hidden
        className="absolute inset-0 z-[1] opacity-[0.06] [background-image:linear-gradient(90deg,rgba(200,169,107,1)_1px,transparent_1px),linear-gradient(rgba(200,169,107,1)_1px,transparent_1px)] [background-size:60px_60px]"
      />

      {/* Cinematic dark overlay */}
      <div
        aria-hidden
        className="absolute inset-0 z-[2] bg-gradient-to-b from-obsidian/85 via-obsidian/65 to-obsidian"
      />

      {/* Noise texture for filmic grain */}
      <div className="noise-overlay absolute inset-0 z-[3]" />

      {/* ============== CONTENT ============== */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 pt-24 text-center">
        {/* Eyebrow */}
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          animate="show"
          className="eyebrow"
        >
          Ciudad de México · Notaría Pública
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          custom={1}
          initial="hidden"
          animate="show"
          className="mt-8 font-display text-5xl font-medium leading-[1.05] tracking-wide text-ivory sm:text-6xl md:text-7xl lg:text-[5.5rem]"
        >
          NOTARÍA <br className="sm:hidden" />
          <span className="text-gold-gradient animate-shimmer">PÚBLICA 322</span>
        </motion.h1>

        {/* Animated divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 flex w-full max-w-xl items-center justify-center"
        >
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/70 to-gold" />
          <span className="mx-3 h-2 w-2 rotate-45 bg-gold shadow-gold" />
          <span className="h-px flex-1 bg-gradient-to-l from-transparent via-gold/70 to-gold" />
        </motion.div>

        {/* Subheadline */}
        <motion.p
          variants={fadeUp}
          custom={4}
          initial="hidden"
          animate="show"
          className="mt-8 max-w-2xl font-body text-base font-light leading-relaxed text-soft-gray sm:text-lg md:text-xl"
        >
          <span className="italic text-ivory">Seguridad Jurídica y Confianza.</span>
          <br className="hidden sm:block" />
          Servicios notariales de excelencia en el corazón de la Ciudad de México.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          custom={5}
          initial="hidden"
          animate="show"
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:gap-6"
        >
          <a href="#contacto" onClick={scrollTo('#contacto')} className="btn-gold">
            Agendar Consulta
          </a>
          <a href="#servicios" onClick={scrollTo('#servicios')} className="btn-outline">
            Nuestros Servicios
          </a>
        </motion.div>

        {/* Trust marks */}
        <motion.div
          variants={fadeUp}
          custom={6}
          initial="hidden"
          animate="show"
          className="mt-16 grid grid-cols-3 gap-x-8 gap-y-4 text-center sm:gap-x-16"
        >
          {[
            { k: 'Atención', v: 'Profesional' },
            { k: 'Asesoría', v: 'Especializada' },
            { k: 'Confianza', v: 'Institucional' },
          ].map((item) => (
            <div key={item.k}>
              <p className="font-display text-xs uppercase tracking-widest text-gold sm:text-sm">
                {item.k}
              </p>
              <p className="mt-1 font-body text-[10px] uppercase tracking-[0.25em] text-silver sm:text-xs">
                {item.v}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#nosotros"
        onClick={scrollTo('#nosotros')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-gold/80 transition-colors hover:text-gold"
        aria-label="Desplazar hacia abajo"
      >
        <span className="font-body text-[10px] uppercase tracking-[0.4em]">Descubrir</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} />
        </motion.span>
      </motion.a>
    </section>
  )
}
