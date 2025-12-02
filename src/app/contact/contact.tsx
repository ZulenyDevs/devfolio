'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function Contact() {
  const t = useTranslations('common');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' }); // Reset form
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-8 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[var(--color-accent)] text-base font-mono mb-4">
              <span className="font-mono">06.</span> {t('whatsNext')}
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--color-text-white)] mb-6">
              {t('getInTouch')}
            </h2>
            <p className="text-[var(--color-text-secondary)] text-lg max-w-xl mx-auto leading-relaxed">
              {t('contactDescription')}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="group">
              <label htmlFor="name" className="block text-[var(--color-text-primary)] mb-2 font-medium">
                {t('name')}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder={t('name')}
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 bg-[var(--color-primary-light)] border-2 border-[var(--color-border)] rounded-lg text-[var(--color-text-white)] placeholder-[var(--color-text-secondary)] focus:outline-none focus:border-[var(--color-accent)] focus:bg-[var(--color-bg-hover)] transition-all duration-300"
              />
            </div>

            <div className="group">
              <label htmlFor="email" className="block text-[var(--color-text-primary)] mb-2 font-medium">
                {t('email')}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder={t('email')}
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 bg-[var(--color-primary-light)] border-2 border-[var(--color-border)] rounded-lg text-[var(--color-text-white)] placeholder-[var(--color-text-secondary)] focus:outline-none focus:border-[var(--color-accent)] focus:bg-[var(--color-bg-hover)] transition-all duration-300"
              />
            </div>

            <div className="group">
              <label htmlFor="message" className="block text-[var(--color-text-primary)] mb-2 font-medium">
                {t('message')}
              </label>
              <textarea
                id="message"
                name="message"
                placeholder={t('message')}
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-5 py-4 bg-[var(--color-primary-light)] border-2 border-[var(--color-border)] rounded-lg text-[var(--color-text-white)] placeholder-[var(--color-text-secondary)] focus:outline-none focus:border-[var(--color-accent)] focus:bg-[var(--color-bg-hover)] transition-all duration-300 resize-none"
              />
            </div>

            <div className="text-center pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-10 py-4 border-2 border-[var(--color-accent)] text-[var(--color-accent)] rounded-lg hover:bg-[var(--color-accent-dim)] transition-all duration-300 font-medium text-lg hover:transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none cursor-pointer"
              >
                {isSubmitting ? t('sending') : t('sayHello')}
              </button>

              {/* Feedback Messages */}
              {submitStatus === 'success' && (
                <p className="mt-4 text-green-500 font-medium">
                  {t('messageSent')}
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="mt-4 text-red-500 font-medium">
                  {t('messageFailed')}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

