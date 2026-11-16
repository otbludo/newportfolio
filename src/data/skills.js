import { BrainCircuit, Code2, Database, Layers, Wrench } from "lucide-react";

export const skillsData = {
  filters: [
    { id: "all", label: "All skills", Icon: Layers },
    { id: "data", label: "Data & machine learning", Icon: BrainCircuit },
    { id: "engineering", label: "Data engineering & AI", Icon: Database },
    { id: "dev", label: "Development & deployment", Icon: Code2 },
    { id: "tools", label: "Project management & languages", Icon: Wrench },
  ],
  // Chaque badge doit avoir son logo dans logoMap.
  columns: [
    [
      {
        id: "dataAi",
        category: "data",
        badges: ["Python", "SQL", "Pandas", "NumPy", "Scikit-learn", "PyTorch"],
      },
      {
        id: "analytics",
        category: "data",
        badges: ["Power BI", "Tableau", "Streamlit"],
      },
      {
        id: "vision",
        category: "data",
        badges: ["OpenCV", "PyTorch", "Python"],
      },
    ],
    [
      {
        id: "genAi",
        category: "engineering",
        badges: ["Gemini", "OpenAI", "FastAPI", "Python"],
      },
      {
        id: "dataEng",
        category: "engineering",
        badges: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "n8n"],
      },
      {
        id: "backend",
        category: "dev",
        badges: ["FastAPI", "Node.js", "Docker", "TypeScript", "Linux", "Bash"],
      },
    ],
    [
      {
        id: "frontend",
        category: "dev",
        badges: ["React", "TypeScript", "Figma"],
      },
      {
        id: "project",
        category: "tools",
        badges: ["Git", "GitHub", "Jira"],
      },
      {
        id: "languages",
        category: "tools",
        badges: [],
      },
    ],
  ],
  logoMap: {
    react: "/logoSkills/logo_react.png",
    typescript: "/logoSkills/logo_ts.png",
    "node.js": "/logoSkills/logo_nodejs.png",
    fastapi: "/logoSkills/logo_fastapi.png",
    postgresql: "/logoSkills/logo_postgres.png",
    mongodb: "/logoSkills/logo_mongodb.png",
    mysql: "/logoSkills/logo_mysql.png",
    git: "/logoSkills/logo_git.png",
    docker: "/logoSkills/logo_docker.png",
    n8n: "/logoSkills/logo_n8n.png",
    python: "/logoSkills/logo_python.png",
    numpy: "/logoSkills/logo_numpy.png",
    pandas: "/logoSkills/logo_pandas.png",
    opencv: "/logoSkills/logo_opencv.png",
    pytorch: "/logoSkills/logo_pytorch.png",
    "scikit-learn": "/logoSkills/logo_sklearn.png",
    "power bi": "/logoSkills/logo_powerbi.png",
    tableau: "/logoSkills/logo_tableau.png",
    figma: "/logoSkills/logo_figma.png",
    sql: "/logoSkills/logo_sql.svg",
    streamlit: "/logoSkills/logo_streamlit.svg",
    redis: "/logoSkills/logo_redis.svg",
    linux: "/logoSkills/logo_linux.svg",
    bash: "/logoSkills/logo_bash.svg",
    jira: "/logoSkills/logo_jira.svg",
    github: "/logoSkills/logo_github.svg",
    gemini: "/logoSkills/logo_gemini.svg",
    openai: "/logoSkills/logo_openai.svg",
  },
};
