//src\app\[locale]\layout.tsx
import "@/src/app/globals.css";
import { NextIntlClientProvider } from "next-intl";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/src/i18n/routing";

type Props = {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = (await import(`../../../messages/${locale}.json`)).default;

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
