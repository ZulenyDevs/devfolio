import '../globals.css';
import { setRequestLocale } from 'next-intl/server';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Header from '@/app/dashboard/header';
import Footer from '@/app/dashboard/footer';
import SidebarLeft from '@/app/dashboard/sidebar-left';
import SidebarRight from '@/app/dashboard/sidebar-right';

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <html className="h-full" lang={locale}>
      <body className="min-h-screen flex flex-col">
        <NextIntlClientProvider>
          {/* Header - Fixed at top */}
          <Header />

          {/* Main Layout Grid - Flex container starting after sticky header */}
          <div className="flex flex-1">
            {/* Left Sidebar - Sticky Column */}
            <SidebarLeft />

            {/* Main Content - Takes remaining width */}
            <main className="flex-1 min-w-0">
              {children}
            </main>

            {/* Right Sidebar - Sticky Column */}
            <SidebarRight />
          </div>

          {/* Footer - At bottom */}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}