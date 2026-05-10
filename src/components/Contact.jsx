import { useState } from 'react';
import SectionWrapper from './SectionWrapper.jsx';

const initialForm = { name: '', email: '', business: '', message: '' };

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const errors = {
    name: submitted && form.name.trim().length < 2,
    email: submitted && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email),
    business: submitted && form.business.trim().length < 2,
    message: submitted && form.message.trim().length < 10
  };

  const hasErrors = Object.values(errors).some(Boolean);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const submit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const info = [
    ['fa-solid fa-envelope', 'Email', 'hello@viralcraftmedia.com'],
    ['fa-solid fa-phone', 'Phone', '+91 98765 43210'],
    ['fa-brands fa-whatsapp', 'WhatsApp', '+91 98765 43210'],
    ['fa-solid fa-location-dot', 'Location', 'India, serving brands globally']
  ];

  return (
    <SectionWrapper id="contact" eyebrow="Contact" title="Ready to turn attention into growth?" animation="fade-up">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr]">
        <form onSubmit={submit} className="glass-panel rounded-3xl p-6 sm:p-8" noValidate>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Name" name="name" value={form.name} error={errors.name} message="Enter your name." onChange={updateField} />
            <Field label="Email" name="email" type="email" value={form.email} error={errors.email} message="Enter a valid email." onChange={updateField} />
            <Field label="Business type" name="business" value={form.business} error={errors.business} message="Tell us your business type." onChange={updateField} />
            <label className="sm:col-span-2">
              <span className="font-heading text-sm text-slate-200">Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={updateField}
                rows="5"
                className={`mt-2 w-full rounded-2xl border bg-white/5 px-4 py-3 text-white outline-none transition focus:border-electric ${errors.message ? 'border-red-400' : 'border-white/10'}`}
                aria-invalid={errors.message}
                aria-describedby="message-error"
              />
              {errors.message && <span id="message-error" className="mt-2 block text-sm text-red-300">Write at least 10 characters.</span>}
            </label>
          </div>
          <button type="submit" className="glow-button mt-6 w-full sm:w-auto">Send Message <i className="fa-solid fa-paper-plane" aria-hidden="true" /></button>
          {submitted && !hasErrors && <p className="mt-4 rounded-2xl border border-electric/30 bg-electric/10 p-4 text-electric">Your message is ready. Connect this form to your preferred backend to receive leads.</p>}
        </form>

        <div className="grid gap-4">
          {info.map(([icon, label, value]) => (
            <div key={label} className="glass-panel rounded-2xl p-5">
              <i className={`${icon} text-2xl text-electric`} aria-hidden="true" />
              <h3 className="mt-3 font-heading text-xl text-white">{label}</h3>
              <p className="mt-1 text-slate-300">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

function Field({ label, name, value, onChange, error, message, type = 'text' }) {
  return (
    <label>
      <span className="font-heading text-sm text-slate-200">{label}</span>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className={`mt-2 w-full rounded-2xl border bg-white/5 px-4 py-3 text-white outline-none transition focus:border-electric ${error ? 'border-red-400' : 'border-white/10'}`}
        aria-invalid={error}
        aria-describedby={`${name}-error`}
      />
      {error && <span id={`${name}-error`} className="mt-2 block text-sm text-red-300">{message}</span>}
    </label>
  );
}

export default Contact;
