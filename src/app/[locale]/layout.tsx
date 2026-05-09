import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n/request';
import { ThemeProvider } from 'next-themes';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import '../globals.css';
import ParticlesBackground from '@/components/ParticlesBackground';
import AosInit from '@/components/AosInit';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: 'Richard Alfaro | Ingeniero de Sistemas',
  description: 'Dual Systems Engineering & Full-Stack Automation expert.',
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  if (!locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${inter.variable} font-sans scroll-smooth`} suppressHydrationWarning>
      <head>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
      </head>
      <body className="antialiased min-h-screen selection:bg-[hsl(var(--primary))] selection:text-white pb-20 md:pb-0">
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
            <ParticlesBackground />
            <AosInit />
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
        <Script src="https://kit.fontawesome.com/a152c0e72a.js" crossOrigin="anonymous" strategy="lazyOnload" />
      </body>
    </html>
  );
}
