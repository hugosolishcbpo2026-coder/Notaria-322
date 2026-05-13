import { motion } from 'framer-motion'

/**
 * Ornamental gold divider with optional center diamond/seal.
 * Used between sections for a "luxury legal seal" feel.
 */
export default function SectionDivider({ withSeal = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto flex max-w-3xl items-center justify-center py-2"
    >
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/60 to-gold/40" />
      {withSeal && (
        <span className="mx-4 flex h-3 w-3 rotate-45 items-center justify-center bg-gold shadow-gold" />
      )}
      <span className="h-px flex-1 bg-gradient-to-l from-transparent via-gold/60 to-gold/40" />
    </motion.div>
  )
}
