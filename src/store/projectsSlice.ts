import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface Project {
  id: string;
  name: string;
  media: string[];
  stack: string;
  role: string;
  url: string;
  githubUrl: string;
  addInfo?: string;
}

interface ProjectsState {
  list: Project[];
  currentId: string | null;
}

const initialState: ProjectsState = {
  list: [
    {
      id: "rest client",
      name: "Rest Client - приложение для работы с запросами к REST API",
      media: ["rest.mp4", "restApi.jpg", "restApi2.jpg", "restApi3.jpg", "restApi4.jpg"],
      stack:
        "React, TypeScript, Next.js, Prisma, SQLite(для deploy переезд на PostgreSQL), Tailwind CSS, Zod, Vitest, i18n, ESLint",
      role: "Frontend-разработчик — Реализовал Backend-часть (Next.js API Routes) для работы с Prisma (SQLite/PostgreSQL), а также авторизацию и историю запросов. ",
      url: "https://rest-client-app-zeta.vercel.app/",
      githubUrl: "https://github.com/Viktor1905/rest-client-app",
      addInfo:
        "Приложение для работы с запросами к REST API: аутентификация, история запросов, валидация и обработка ошибок.",
    },
    {
      id: "zoo shop",
      name: "Zoo shop - Интернет-магазин",
      media: ["shop.mp4", "zooShop.jpg", "zooShop1.jpg", "zooShop2.jpg"],
      stack:
        "React, TypeScript, React Router, Redux, Redux toolkit, Tailwind CSS, Next.js, Zod, Vitest, ESLint. ",
      role: "Тимлид и Frontend-разработчик — распределял задачи, контролировал код-ревью, занимался архитектурой глобального состояния с использованием Redux Toolkit, авторизацией, фильтрами, сортировкой и страницей каталога в целом. ",
      url: "https://friendlycoding.netlify.app/",
      githubUrl: "https://github.com/Viktor1905/eCommerce",
      addInfo:
        "Интернет-магазин с интеграцией CommerceTools(проект демонстрирует работу с внешней API, функционал временно ограничен из-за прекращения тестового периода). Аутентификация, товары, фильтрация, сортировка товаров, добавление в корзину, промокод – на стороне CommerceTools. ",
    },
    {
      id: "api queries",
      name: "API queries. Приложение работающее по REST API",
      media: ["queries.mp4", "querie.jpg", "querie2.jpg"],
      stack:
        "React, Redux Toolkit (RTK), TypeScript, REST API, Suspense / lazy, Error Boundary, Vite, ESLint, CSS",
      role: "Индивидуальный проект",
      url: "https://viktor1905-api-queries.netlify.app/",
      githubUrl: "https://github.com/Viktor1905/React_RS/tree/api-queries",
      addInfo:
        "Приложение работающее по REST API с поддержкой глобального состояния через Redux Toolkit. Особенности: асинхронные API-запросы, управление глобальным состоянием, обработка ошибок с помощью Error Boundary, lazy-loading компонентов, переключение темы интерфейса.",
    },
    {
      id: "nonograms",
      name: "Nonograms - японская игра-головоломка",
      media: ["nonograms.mp4", "nonograms.jpg", "nonograms1.jpg", "nonograms2.jpg"],
      stack: "JavaScript, Webpack, CSS, ESLint",
      role: "Индивидуальный проект",
      url: "https://viktor1905.github.io/Nonograms/",
      githubUrl: "https://github.com/Viktor1905/Nonograms/",
      addInfo:
        "Японская игра-головоломка. Мини-игра для демонстрации логики и работы с DOM без фреймворков ",
    },
    {
      id: "checkers",
      name: "Checkers - классические шашки с ботом",
      media: ["checkers.mp4", "checkers.jpg", "checkers1.jpg"],
      stack: "JavaScript (ES6), HTML, CSS",
      role: "Индивидуальный проект",
      url: "https://viktor-checkers.netlify.app/",
      githubUrl: "https://github.com/Viktor1905/checkers",
      addInfo:
        "Игра в шашки с реализованным ботом-оппонентом. Автоматические ходы бота, валидация, работа с DOM, обработка пользовательских событий. ",
    },
  ],
  currentId: "rest client",
};
const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setProjects: (state, action: PayloadAction<Project[]>) => {
      state.list = action.payload;
      if (!state.currentId && action.payload.length) {
        state.currentId = action.payload[0].id;
      }
    },
    setCurrentProject: (state, action: PayloadAction<string>) => {
      state.currentId = action.payload;
    },
  },
});

export const { setProjects, setCurrentProject } = projectsSlice.actions;
export default projectsSlice.reducer;
