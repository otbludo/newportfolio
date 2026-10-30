import { Fragment } from "react";
import {
  CalendarDays,
  ExternalLink,
  FolderKanban,
  Image,
  Workflow,
} from "lucide-react";
import { Trans, useTranslation } from "react-i18next";

import { Toggle } from "../components/ui/toggle.jsx";

const experiences = [
  {
    id: "onutech",
    company: "ONUtech",
    logo: "/logoSkills/logo_onutech.png",
    highlights: [0, 1, 2],
    architectureSections: [
      {
        afterHighlight: 2,
        titleKey: "architecture.pipeline",
        image: "/imgexperience/rag.png",
      },
    ],
  },
  {
    id: "colorix",
    company: "Colorix",
    logo: "/logoSkills/logo_colorix2.png",
    highlights: [0],
    architectureSections: [
      {
        afterHighlight: 0,
        titleKey: "architecture.pipeline",
        image: "/imgexperience/devis.png",
      },
    ],
  },
  {
    id: "bunec",
    company: "BUNEC",
    logo: "/logoSkills/logo_bunec.jpeg",
    highlights: [0, 1],
    architectureSections: [
      {
        afterHighlight: 0,
        titleKey: "architecture.ocr",
        image: "/imgexperience/ocr.png",
      },
      {
        afterHighlight: 1,
        titleKey: "architecture.etl",
        image: "/imgexperience/etl.png",
      },
    ],
  },
];

const projects = [
  {
    id: "drep",
    year: "2026",
    title: "DREP by AHAVYA",
    technologies: ["FastAPI", "React Native", "PostgreSQL", "Redis", "NotchPay", "Stripe", "OVH VPS"],
    image: "/projets/drepbyhavavya.png",
    mobileImage: "/projets/drepbyahavyaphone.png",
    link: "https://drepbyahava.com/",
  },
  {
    id: "aeli",
    year: "2026",
    title: "AELI Services",
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "NotchPay", "OVH VPS"],
    image: "/projets/aeliservice.png",
    mobileImage: "/projets/aeliservicephone.png",
    link: "https://aeliservices.com/",
  },
];

export function ExperiencePage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-full bg-slate-50 px-4 py-8 text-slate-900 sm:px-6 md:px-10 md:py-12">
      <main className="mx-auto max-w-5xl">
        <header className="mb-10">
          <div className="flex items-center justify-between gap-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-200 px-3 py-1 text-xs font-medium text-slate-800">
              <span className="h-1.5 w-1.5 rounded-full bg-slate-700" />
              {t("experience.category")}
            </span>
            <Toggle />
          </div>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            {t("experience.pageTitle")}
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-500">
            {t("experience.intro")}
          </p>
        </header>

        <section aria-labelledby="experiences-heading">
          <h2 id="experiences-heading" className="sr-only">
            {t("experience.entriesLabel")}
          </h2>
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            {experiences.map((experience) => (
              <article
                key={experience.company}
                className="border-b border-dashed border-slate-200 p-5 last:border-b-0 sm:p-6"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-slate-100 bg-white p-2">
                    <img
                      src={experience.logo}
                      alt={t("experience.logo", { company: experience.company })}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                      <div>
                        <h3 className="text-lg font-semibold leading-snug text-slate-900">
                          {t(`experience.entries.${experience.id}.role`)}
                        </h3>
                        <p className="mt-1 text-sm font-medium text-slate-700">
                          {experience.company}
                        </p>
                      </div>
                      <span className="inline-flex w-fit shrink-0 items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                        <CalendarDays className="h-3.5 w-3.5" />
                        {t(`experience.entries.${experience.id}.period`)}
                      </span>
                    </div>

                    <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-slate-600">
                      {experience.highlights.map((index) => (
                        <Fragment key={index}>
                          <li className="flex gap-2.5">
                            <span
                              aria-hidden="true"
                              className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-slate-600"
                            />
                            <span>
                              <Trans
                                i18nKey={`experience.entries.${experience.id}.highlights.${index}`}
                                components={{
                                  strong: <strong />,
                                  em: <em />,
                                }}
                              />
                            </span>
                          </li>
                          {experience.architectureSections
                            ?.filter((section) => section.afterHighlight === index)
                            .map((section) => (
                              <li key={section.titleKey} className="list-none">
                                <ArchitecturePlaceholder
                                  company={experience.company}
                                  title={t(
                                    `experience.entries.${experience.id}.${section.titleKey}`,
                                  )}
                                  image={section.image}
                                />
                              </li>
                            ))}
                        </Fragment>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="projects-heading" className="mt-12">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-200 text-slate-800">
              <FolderKanban className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-slate-700">
                {t("experience.selection")}
              </p>
              <h2
                id="projects-heading"
                className="text-xl font-semibold tracking-tight text-slate-900"
              >
                {t("experience.projectsTitle")}
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
                    {t(`experience.projects.${project.id}.description`)}
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
                    {t("experience.viewProject")}
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
                      alt={t("experience.projectPreview", { title: project.title })}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </picture>
                ) : (
                  <div
                    role="img"
                    aria-label={t("experience.projectPhotoPlaceholder", {
                      title: project.title,
                    })}
                    className="order-first flex h-40 w-full shrink-0 flex-col items-center justify-center gap-1.5 border-b border-slate-200 bg-slate-100 px-2 text-slate-400 sm:order-last sm:h-auto sm:w-36 sm:border-b-0 sm:border-l"
                  >
                    <Image aria-hidden="true" className="h-5 w-5" />
                    <span className="text-[10px]">
                      {t("experience.projectPhoto")}
                    </span>
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
  const { t } = useTranslation();

  return (
    <div className="my-4 rounded-xl ">
      <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
        <Workflow className="h-4 w-4 text-slate-600" />
        {title}
      </div>
      {image ? (
        <img
          src={image}
          alt={t("experience.architectureImage", { title, company })}
          loading="lazy"
          className="mt-3 h-auto w-full rounded-lg bg-white object-contain"
        />
      ) : (
        <div
          aria-label={t("experience.architectureDiagram", { title, company })}
          className="mt-3 flex min-h-28 items-center justify-center rounded-lg border border-dashed border-slate-300 bg-white/80 px-4 py-6 text-center text-xs text-slate-400"
        >
          {t("experience.architecturePlaceholder")}
        </div>
      )}
    </div>
  );
}
