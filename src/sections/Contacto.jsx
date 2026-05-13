import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { User, Mail, Phone, MessageSquare, Send, CheckCircle2 } from 'lucide-react'
import SectionDivider from '../components/SectionDivider'

const INITIAL = { nombre: '', email: '', telefono: '', mensaje: '' }

export default function Contacto() {
  const [form, setForm] = useState(INITIAL)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
  }

  const validate = () => {
    const e = {}
    if (!form.nombre.trim()) e.nombre = 'Ingrese su nombre completo.'
    if (!form.email.trim()) e.email = 'Ingrese su correo electrónico.'
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Correo electrónico no válido.'
    if (!form.mensaje.trim() || form.mensaje.trim().length < 10)
      e.mensaje = 'Su mensaje debe contener al menos 10 caracteres.'
    return e
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }
    setSubmitting(true)
    // Placeholder — wire this to your backend / Formspree / EmailJS later.
    await new Promise((r) => setTimeout(r, 900))
    setSubmitting(false)
    setSent(true)
    setForm(INITIAL)
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-obsidian py-28 sm:py-32 lg:py-40"
    >
      {/* Background flourishes */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-32 h-96 w-96 rounded-full bg-gold/8 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-emerald/8 blur-3xl"
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
          <span className="eyebrow">Contacto</span>
          <h2 className="mt-6 section-title">
            Agende su <span className="text-gold-gradient">consulta</span>
          </h2>
          <p className="mt-6 font-body text-base leading-relaxed text-soft-gray/90 sm:text-lg">
            Atendemos cada solicitud con la confidencialidad y la diligencia que distinguen a
            nuestra notaría. Complete el formulario y nuestro equipo se pondrá en contacto a la
            brevedad.
          </p>
        </motion.div>

        <div className="mt-14">
          <SectionDivider />
        </div>

        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9 }}
          className="relative mx-auto mt-16 max-w-3xl"
        >
          <div className="glass-strong relative overflow-hidden rounded-sm p-8 shadow-gold sm:p-12">
            {/* Decorative corner brackets */}
            <span className="pointer-events-none absolute left-3 top-3 h-6 w-6 border-l border-t border-gold/60" />
            <span className="pointer-events-none absolute right-3 top-3 h-6 w-6 border-r border-t border-gold/60" />
            <span className="pointer-events-none absolute bottom-3 left-3 h-6 w-6 border-b border-l border-gold/60" />
            <span className="pointer-events-none absolute bottom-3 right-3 h-6 w-6 border-b border-r border-gold/60" />

            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gold bg-gold/10 text-gold shadow-gold">
                    <CheckCircle2 size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-6 font-display text-2xl tracking-wide text-ivory">
                    Mensaje recibido
                  </h3>
                  <p className="mt-3 max-w-md font-body text-sm leading-relaxed text-soft-gray">
                    Le agradecemos su confianza. Nuestro equipo le contactará en breve para
                    atender su consulta de manera personalizada.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={onSubmit}
                  noValidate
                  className="grid gap-6 sm:grid-cols-2"
                >
                  <Field
                    icon={User}
                    label="Nombre completo"
                    name="nombre"
                    value={form.nombre}
                    onChange={onChange}
                    error={errors.nombre}
                    placeholder="Su nombre"
                  />
                  <Field
                    icon={Mail}
                    label="Correo electrónico"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={onChange}
                    error={errors.email}
                    placeholder="correo@ejemplo.com"
                  />
                  <Field
                    icon={Phone}
                    label="Teléfono"
                    name="telefono"
                    type="tel"
                    value={form.telefono}
                    onChange={onChange}
                    placeholder="(opcional)"
                    className="sm:col-span-2"
                  />
                  <Field
                    icon={MessageSquare}
                    label="Mensaje"
                    name="mensaje"
                    value={form.mensaje}
                    onChange={onChange}
                    error={errors.mensaje}
                    placeholder="Describa brevemente su consulta…"
                    textarea
                    className="sm:col-span-2"
                  />

                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn-gold w-full disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {submitting ? (
                        'Enviando…'
                      ) : (
                        <>
                          Enviar mensaje <Send size={16} />
                        </>
                      )}
                    </button>
                    <p className="mt-4 text-center font-body text-[11px] uppercase tracking-widest text-silver">
                      Su información será tratada con estricta confidencialidad
                    </p>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* -------------------- Reusable field -------------------- */
function Field({
  icon: Icon,
  label,
  name,
  value,
  onChange,
  error,
  placeholder,
  type = 'text',
  textarea = false,
  className = '',
}) {
  const id = `field-${name}`
  const baseInput =
    'peer w-full rounded-sm border bg-obsidian/60 px-4 py-3.5 pl-11 font-body text-sm text-ivory placeholder-silver/40 outline-none transition-all duration-300 focus:bg-obsidian/80'
  const inputClasses = error
    ? `${baseInput} border-ruby/70 focus:border-ruby focus:shadow-[0_0_18px_rgba(122,30,44,0.3)]`
    : `${baseInput} border-gold/20 focus:border-gold/70 focus:shadow-[0_0_18px_rgba(200,169,107,0.18)]`

  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="mb-2 block font-body text-[11px] uppercase tracking-[0.25em] text-gold"
      >
        {label}
      </label>
      <div className="relative">
        <Icon
          size={16}
          strokeWidth={1.5}
          className="pointer-events-none absolute left-4 top-4 text-gold/80"
        />
        {textarea ? (
          <textarea
            id={id}
            name={name}
            rows={5}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`${inputClasses} resize-none pt-3.5`}
          />
        ) : (
          <input
            id={id}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={inputClasses}
          />
        )}
      </div>
      {error && (
        <p className="mt-2 font-body text-xs text-ruby/90">{error}</p>
      )}
    </div>
  )
}
