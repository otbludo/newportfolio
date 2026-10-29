import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const MARQUEE_TEXT = "Full-Stack & IA / Big Data —";

export function HomePage({ onProjectsClick }) {
  const reduceMotion = useReducedMotion();

  return (
    <main className="relative min-h-[min(100svh,900px)] w-full overflow-hidden bg-white text-slate-900">
      <header className="relative z-30 flex justify-end px-5 pt-5 sm:px-8 sm:pt-6 lg:px-12 lg:pt-8">
        <div className="max-w-[min(100%,36rem)] text-right">
          <h1 className="text-xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-2xl lg:text-3xl">
            Salut, je suis Ludovic OTABELA, <br />mais vous pouvez m’appeler OT.
          </h1>
          <p className="mt-3 text-sm font-medium text-slate-700 sm:text-base">
            Développeur Full-Stack &amp; IA / Big Data
          </p>
          <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm">
            Je conçois et développe des applications multiplateforme modernes et des
            solutions intelligentes en IA et Big Data.
          </p>
          <nav
            aria-label="Réseaux sociaux"
            className="mt-5 flex justify-end gap-4 text-slate-500"
          >
            <a
              href="https://github.com/otbludo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub — otbludo (ouvre un nouvel onglet)"
              className="rounded transition-colors hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-600"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.835 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.467-1.334-5.467-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 6.006 0c2.29-1.552 3.296-1.23 3.296-1.23.655 1.652.243 2.873.12 3.176.77.84 1.233 1.911 1.233 3.221 0 4.61-2.807 5.628-5.479 5.921.43.372.823 1.102.823 2.222 0 1.604-.015 2.896-.015 3.286 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/ludovic-otabela-035187317/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn — Ludovic Otabela (ouvre un nouvel onglet)"
              className="rounded transition-colors hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-600"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </nav>
        </div>
      </header>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex justify-center">
        <img
          src="/profile.png"
          alt="Portrait d’Otabela"
          className="h-[66svh] w-auto max-w-none object-cover object-top sm:h-[76svh] lg:h-[84svh]"
          style={{
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 85% at 50% 60%, #000 60%, transparent 100%)",
            maskImage:
              "radial-gradient(ellipse 70% 85% at 50% 60%, #000 60%, transparent 100%)",
          }}
        />
      </div>

      <button
        type="button"
        aria-label="Voir mes projets"
        onClick={onProjectsClick}
        className="group absolute right-5 top-[38%] z-30 flex h-12 w-12 items-center justify-center rounded-full border border-slate-900/60 transition-colors duration-200 hover:bg-slate-900 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 sm:right-[18%] sm:h-16 sm:w-16 lg:right-[30%] lg:h-20 lg:w-20"
      >
        <ArrowUpRight
          aria-hidden="true"
          className="h-5 w-5 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:h-7 sm:w-7"
          strokeWidth={1.25}
        />
      </button>

      <div
        className="absolute inset-x-0 bottom-[14%] z-20 overflow-hidden sm:bottom-[12%] lg:bottom-[10%]"
        aria-label={MARQUEE_TEXT}
      >
        <motion.div
          className="flex w-max whitespace-nowrap"
          animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }}
          transition={{ duration: 22, ease: "linear", repeat: Infinity }}
          aria-hidden="true"
        >
          {[0, 1].map((index) => (
            <span
              key={index}
              className="pr-[0.3em] text-[24vw] font-normal leading-none tracking-tight sm:text-[17vw] lg:text-[13vw]"
            >
              {MARQUEE_TEXT}
            </span>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
