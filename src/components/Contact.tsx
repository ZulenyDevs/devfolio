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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-6 sm:px-8">
      <div className="max-w-2xl mx-auto">
        <p className="text-[#64ffda] text-sm mb-4">{t('whatsNext')}</p>
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          {t('getInTouch')}
        </h2>
        <p className="text-[#8892b0] mb-12 text-lg">
          {t('contactDescription')}
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              name="name"
              placeholder={t('name')}
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-[#112240] border border-[#233554] rounded text-white placeholder-[#8892b0] focus:outline-none focus:border-[#64ffda] transition-colors"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder={t('email')}
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-[#112240] border border-[#233554] rounded text-white placeholder-[#8892b0] focus:outline-none focus:border-[#64ffda] transition-colors"
            />
          </div>
          <div>
            <textarea
              name="message"
              placeholder={t('message')}
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 bg-[#112240] border border-[#233554] rounded text-white placeholder-[#8892b0] focus:outline-none focus:border-[#64ffda] transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            className="px-8 py-3 border border-[#64ffda] text-[#64ffda] rounded hover:bg-[#64ffda]/10 transition-colors"
          >
            {t('sayHello')}
          </button>
        </form>
      </div>
    </section>
  );
}

