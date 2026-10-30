import { useTranslation } from "react-i18next";

export function Toggle({ className = "" }) {
  const { i18n, t } = useTranslation();
  const isEnglish = i18n.resolvedLanguage === "en";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isEnglish}
      aria-label={isEnglish ? t("language.switchToFrench") : t("language.switchToEnglish")}
      title={isEnglish ? t("language.switchToFrench") : t("language.switchToEnglish")}
      onClick={() => i18n.changeLanguage(isEnglish ? "fr" : "en")}
      className={`inline-flex h-8 w-14 shrink-0 items-center rounded-full  p-0.5 shadow-inner transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-600 ${
        isEnglish ? "border-slate-900 bg-black" : "bg-slate-200"
      } ${className}`}
    >
      <span
        className={`flex h-6 w-6 items-center justify-center rounded-full bg-white text-[8px] font-semibold text-slate-700 shadow-sm transition-transform ${
          isEnglish ? "translate-x-6" : "translate-x-0"
        }`}
      >
        {isEnglish ? t("language.english") : t("language.french")}
      </span>
    </button>
  );
}
