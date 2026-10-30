import { useTranslation } from "react-i18next";

export function ContactFooter() {
  const { t } = useTranslation();

  return (
    <footer className="mx-auto flex w-full max-w-5xl items-end justify-between gap-6 px-4 pb-8 pt-10 md:px-6">
      <div>
        <p className="text-[10px] text-slate-500">{t("footer.eyebrow")}</p>
        <h2 className="mt-2 text-[22px] font-medium leading-[1.25] tracking-[-0.01em] md:text-[24px]">
          {t("footer.line1")}
          <br />
          {t("footer.line2")}
        </h2>
      </div>
      <a
        href="https://github.com/otbludo"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t("footer.github")}
        className="mb-1 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-black text-white shadow-lg shadow-slate-900/20 transition-transform duration-150 ease-out hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-slate-900/20"
      >
        <svg
          aria-hidden="true"
          className="h-8 w-8"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.68-3.76-1.32-3.76-1.32-.5-1.3-1.24-1.65-1.24-1.65-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.76 2.26 3.62 1.61.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.11-1.45 3.05-1.15 3.05-1.15.61 1.53.23 2.67.11 2.95.72.78 1.15 1.78 1.15 3 0 4.29-2.61 5.23-5.1 5.5.4.35.75 1.02.75 2.06v3.05c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
        </svg>
      </a>
    </footer>
  );
}
