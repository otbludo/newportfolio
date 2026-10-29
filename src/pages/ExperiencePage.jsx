import { Fragment } from "react";
import {
  CalendarDays,
  ExternalLink,
  FolderKanban,
  Image,
  Workflow,
} from "lucide-react";

const experiences = [
  {
    period: "Oct. 2025 — Juil. 2026",
    role: "Lead Développeur Full-Stack & IA",
    company: "ONUtech",
    logo: "/logoSkills/logo_onutech.png",
    highlights: [
      <>
        <strong>IA & Search :</strong> création de l’agent <strong>ONUtech RAG</strong>{" "}
        (FastAPI, ChromaDB), réduisant de <strong>60 %</strong> le temps d’accès aux
        documents.
      </>,
      <>
        <strong>Automation :</strong> ingestion et traitement automatisés de flux avec
        la WhatsApp Business API et des workflows n8n.
      </>,
      <>
        <strong>Architecture :</strong> direction technique et supervision de
        pipelines de données.
      </>,
    ],
    architectureSections: [
      {
        afterHighlight: 2,
        title: "Architecture du pipeline",
        image: "/imgexperience/rag.png",
      },
    ],
  },
  {
    period: "Nov. 2025 — Jan. 2026",
    role: "Stagiaire IA & Automation",
    company: "Colorix",
    logo: "/logoSkills/logo_colorix2.png",
    highlights: [
      <>
        <strong>Devis intelligent :</strong> conception d’un agent IA sur mesure,
        réduisant de <strong>80 %</strong> le délai de traitement manuel.
      </>,
    ],
    architectureSections: [
      {
        afterHighlight: 0,
        title: "Architecture du pipeline",
        image: "/imgexperience/devis.png",
      },
    ],
  },
  {
    period: "Mai 2025 — Sep. 2025",
    role: "Stagiaire Big Data & OCR",
    company: "BUNEC",
    logo: "/logoSkills/logo_bunec.jpeg",
    highlights: [
      <>
        <strong>Pipeline OCR :</strong> développement d’un modèle CNN-BiLSTM-CTC pour
        la transcription automatique de registres.
      </>,
      <>
        <strong>Pipeline ETL :</strong> double stockage (staging brut et production
        normalisée), gestion dynamique des schémas CSV, génération d’un identifiant
        unique composite (<em>uniqueid</em>) et synchronisation sécurisée avec
        PostgreSQL.
      </>,
    ],
    architectureSections: [
      {
        afterHighlight: 0,
        title: "Architecture du pipeline OCR",
        image: "/imgexperience/ocr.png",
      },
      {
        afterHighlight: 1,
        title: "Architecture du pipeline ETL",
        image: "/imgexperience/etl.png",
      },
    ],
  },
];

const projects = [
  {
    year: "2026",
    title: "DREP by AHAVYA",
    description: "Application de santé mobile multiplateforme.",
    technologies: ["FastAPI", "React Native", "PostgreSQL", "Redis", "NotchPay", "Stripe", "OVH VPS"],
    image: "/projets/drepbyhavavya.png",
    mobileImage: "/projets/drepbyahavyaphone.png",
    link: "https://drepbyahava.com/",
  },
  {
    year: "2026",
    title: "AELI Services",
    description: "Plateforme e-commerce de mise en relation et de services dédiée à l'entrepreneuriat féminin.",
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "NotchPay", "OVH VPS"],
    image: "/projets/aeliservice.png",
    mobileImage: "/projets/aeliservicephone.png",
    link: "https://aeliservices.com/",
  },
];

export function ExperiencePage() {
  return (
    <div className="min-h-full bg-slate-50 px-4 py-8 text-slate-900 sm:px-6 md:px-10 md:py-12">
      <main className="mx-auto max-w-5xl">
        <header className="mb-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
            <span className="h-1.5 w-1.5 rounded-full bg-slate-600" />
            Parcours professionnel
          </span>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Expériences professionnelles
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-500">
            Des projets en développement full-stack, intelligence artificielle,
            automatisation et ingénierie des données.
          </p>
        </header>

        <section aria-labelledby="experiences-heading">
          <h2 id="experiences-heading" className="sr-only">
            Expériences professionnelles
          </h2>
          <div className="space-y-5">
            {experiences.map((experience) => (
              <article
                key={experience.company}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <div className="p-5 sm:p-6">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-slate-100 bg-white p-2">
                      <img
                        src={experience.logo}
                        alt={`Logo ${experience.company}`}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                        <div>
                          <h3 className="text-lg font-semibold leading-snug text-slate-900">
                            {experience.role}
                          </h3>
                          <p className="mt-1 text-sm font-medium text-slate-700">
                            {experience.company}
                          </p>
                        </div>
                        <span className="inline-flex w-fit shrink-0 items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                          <CalendarDays className="h-3.5 w-3.5" />
                          {experience.period}
                        </span>
                      </div>

                      <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-slate-600">
                        {experience.highlights.map((highlight, index) => (
                          <Fragment key={index}>
                            <li className="flex gap-2.5">
                              <span
                                aria-hidden="true"
                                className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-slate-600"
                              />
                              <span>{highlight}</span>
                            </li>
                            {experience.architectureSections
                              ?.filter((section) => section.afterHighlight === index)
                              .map((section) => (
                                <li key={section.title} className="list-none">
                                  <ArchitecturePlaceholder
                                    company={experience.company}
                                    title={section.title}
                                    image={section.image}
                                  />
                                </li>
                              ))}
                          </Fragment>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="projects-heading" className="mt-12">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
              <FolderKanban className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-slate-700">
                Sélection
              </p>
              <h2
                id="projects-heading"
                className="text-xl font-semibold tracking-tight text-slate-900"
              >
                Projets clés à forte valeur
              </h2>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="flex flex-col items-stretch overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm sm:flex-row"
              >
                <div className="min-w-0 flex-1 p-5 sm:p-6">
                  <p className="text-xs font-semibold tracking-wide text-slate-700">
                    {project.year}
                  </p>
                  <h3 className="mt-2 text-base font-semibold text-slate-900">
                    {project.title}
                  </h3>
                  <p className="mt-1.5 truncate text-sm leading-relaxed text-slate-600">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
                  >
                    Voir le projet
                    <ExternalLink aria-hidden="true" className="h-4 w-4" />
                  </a>
                </div>
                {project.image ? (
                  <picture className="order-first h-40 w-full shrink-0 border-b border-slate-200 sm:order-last sm:h-auto sm:w-36 sm:border-b-0 sm:border-l">
                    {project.mobileImage && (
                      <source
                        media="(max-width: 639px)"
                        srcSet={project.mobileImage}
                      />
                    )}
                    <img
                      src={project.image}
                      alt={`Aperçu du projet ${project.title}`}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </picture>
                ) : (
                  <div
                    role="img"
                    aria-label={`Emplacement réservé à une photo de ${project.title}`}
                    className="order-first flex h-40 w-full shrink-0 flex-col items-center justify-center gap-1.5 border-b border-slate-200 bg-slate-100 px-2 text-slate-400 sm:order-last sm:h-auto sm:w-36 sm:border-b-0 sm:border-l"
                  >
                    <Image aria-hidden="true" className="h-5 w-5" />
                    <span className="text-[10px]">Photo du projet</span>
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

function ArchitecturePlaceholder({ company, title, image }) {
  return (
    <div className="my-4 rounded-xl ">
      <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
        <Workflow className="h-4 w-4 text-slate-600" />
        {title}
      </div>
      {image ? (
        <img
          src={image}
          alt={`${title} — ${company}`}
          loading="lazy"
          className="mt-3 h-auto w-full rounded-lg bg-white object-contain"
        />
      ) : (
        <div
          aria-label={`Emplacement réservé au schéma d’architecture ${title} ${company}`}
          className="mt-3 flex min-h-28 items-center justify-center rounded-lg border border-dashed border-slate-300 bg-white/80 px-4 py-6 text-center text-xs text-slate-400"
        >
          Espace réservé — ajoutez ici le schéma d’architecture
        </div>
      )}
    </div>
  );
}
