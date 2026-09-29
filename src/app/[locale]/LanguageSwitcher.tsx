// src/app/[locale]/LanguageSwitcher.tsx
import { Link } from "@/src/i18n/navigation";

export default function LanguageSwitcher() {
  return (
    <div>
      <Link href="/" locale="en">
        English
      </Link>
      {" | "}
      <Link href="/" locale="fr">
        Français
      </Link>
      {" | "}
      <Link href="/" locale="ar">
        العربية
      </Link>
    </div>
  );
}
