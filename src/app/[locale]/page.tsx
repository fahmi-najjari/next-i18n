import { getTranslations } from "next-intl/server";
import LanguageSwitcher from "./LanguageSwitcher";
export default async function Home() {
  const t = await getTranslations();

  return (
    <main>
      <h1>{t("hello")}</h1>
      <LanguageSwitcher />
    </main>
  );
}
