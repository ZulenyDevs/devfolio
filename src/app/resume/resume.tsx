import { getTranslations } from 'next-intl/server';
import { Download, ExternalLink } from 'lucide-react';

export default async function Resume() {
    const t = await getTranslations('resume');
    const tCommon = await getTranslations('common');

    const cards = [
        {
            title: t('technicalSkills.title'),
            description: t('technicalSkills.description'),
        },
        {
            title: t('experience.title'),
            description: t('experience.description'),
        },
        {
            title: t('projects.title'),
            description: t('projects.description'),
        },
    ];

    return (
        <section className="min-h-screen flex items-center justify-center px-6 sm:px-8 pt-16">
            <div className="max-w-4xl mx-auto w-full">
                <h1 className="text-5xl sm:text-6xl font-bold text-[#64ffda] mb-6 text-center">
                    {t('title')}
                </h1>
                <p className="text-[#8892b0] text-lg mb-12 text-center max-w-2xl mx-auto">
                    {t('description')}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                    <button className="flex items-center justify-center gap-2 px-6 py-3 bg-[#64ffda] text-[#0a0a0a] font-medium rounded hover:bg-[#52e8c4] transition-colors">
                        <Download className="w-5 h-5" />
                        {tCommon('downloadResume')}
                    </button>
                    <button className="flex items-center justify-center gap-2 px-6 py-3 border border-[#64ffda] text-[#64ffda] rounded hover:bg-[#64ffda]/10 transition-colors">
                        <ExternalLink className="w-5 h-5" />
                        {tCommon('viewExperienceOnline')}
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {cards.map((card, idx) => (
                        <div
                            key={idx}
                            className="bg-[#112240] p-6 rounded-lg border border-[#233554]"
                        >
                            <h3 className="text-xl font-semibold text-[#64ffda] mb-3">
                                {card.title}
                            </h3>
                            <p className="text-[#8892b0]">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}