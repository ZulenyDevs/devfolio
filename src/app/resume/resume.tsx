import { getTranslations, getLocale } from 'next-intl/server';
import Link from 'next/link';
import { EyeIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { resumeLinks } from '@/lib/constants';

export default async function Resume() {
    const t = await getTranslations('resume');
    const tCommon = await getTranslations('common');
    const locale = await getLocale();

    return (
        <section className="min-h-screen flex items-center justify-center py-20 px-8 md:px-12">
            <div className="max-w-4xl mx-auto w-full">
                <h1 className="text-5xl sm:text-6xl font-bold text-[#64ffda] mb-6 text-center">
                    {t('title')}
                </h1>
                <p className="text-[#8892b0] text-lg mb-12 text-center max-w-2xl mx-auto">
                    {t('description')}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                    <a
                        href={resumeLinks[locale as keyof typeof resumeLinks] || resumeLinks.en}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-[#64ffda] text-[#0a0a0a] font-medium rounded hover:bg-[#52e8c4] transition-colors cursor-pointer"
                    >
                        <EyeIcon className="w-5 h-5" />
                        {tCommon('viewResume')}
                    </a>
                    <Link href={`/${locale}/experience`} className="flex items-center justify-center gap-2 px-6 py-3 border border-[#64ffda] text-[#64ffda] rounded hover:bg-[#64ffda]/10 transition-colors cursor-pointer">
                        <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                        {tCommon('viewExperienceOnline')}
                    </Link>
                </div>
            </div>
        </section>
    );
}