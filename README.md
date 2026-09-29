# Next.js 16 i18n Template

This is a minimal Next.js 16 App Router template using `next-intl` for three locales:

- French: `/fr`
- English: `/en`
- Arabic: `/ar`

It is meant as a small learning template for localized public pages with proper locale routing, translated messages, and RTL support for Arabic.

## What Is Included

- `src/app/[locale]/layout.tsx` sets the document language, direction, and `NextIntlClientProvider`.
- `src/app/[locale]/page.tsx` reads translated text with `getTranslations()`.
- `src/app/[locale]/LanguageSwitcher.tsx` switches between `/fr`, `/en`, and `/ar`.
- `src/i18n/routing.ts` defines the supported locales.
- `src/i18n/request.ts` loads the correct message file for the current locale.
- `src/i18n/navigation.ts` exports locale-aware navigation helpers.
- `src/proxy.ts` enables locale detection/routing for a `src/app` project.
- `messages/*.json` contains the translation strings.

## Run Locally

```bash
pnpm install
pnpm dev
```

Open:

```txt
http://localhost:3000/fr
http://localhost:3000/en
http://localhost:3000/ar
```

## Add Translations

Add the same key to each message file:

```json
{
  "hello": "Hello"
}
```

Then read it in a Server Component:

```tsx
import { getTranslations } from "next-intl/server";

export default async function Page() {
  const t = await getTranslations();

  return <h1>{t("hello")}</h1>;
}
```

## Notes

Because this project uses `src/app`, the proxy file belongs at `src/proxy.ts`.

Arabic pages use `dir="rtl"` automatically from the locale layout.
