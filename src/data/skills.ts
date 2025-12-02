export const skills = {
  frontend: [
    {
      name: "HTML",
      bullets: [
        "Семантическая разметка",
        "Accessibility базовый уровень (alt, labels)",
        "Работа с формами",
      ],
      level: 85,
    },
    {
      name: "CSS",
      bullets: [
        "Flexbox, Grid",
        "Адаптивная и мобильная верстка",
        "Transitions, animations",
        "Переменные",
      ],
      level: 80,
    },
    {
      name: "JavaScript (ES6+)",
      bullets: [
        "Event Loop, microtasks",
        "Async/await, Promises",
        "Деструктуризация, spread/rest",
        "Fetch API, работа с DOM",
        "Modules, import/export",
        "Классы, замыкания, прототипы",
      ],
      level: 80,
    },
    {
      name: "TypeScript",
      bullets: [
        "Typed React Components",
        "Interfaces & types",
        "Generics",
        "Utility Types (Partial, Pick, Omit)",
        "Narrowing, guards",
      ],
      level: 70,
    },
    {
      name: "React",
      bullets: [
        "Hooks: useState/useEffect/useMemo/useCallback и другие",
        "Композиция компонентов",
        "Контролируемые/неконтролируемые формы",
        "Code splitting, lazy loading",
        "Client-side routing",
      ],
      level: 80,
    },
    {
      name: "React Router",
      bullets: [
        "Nested routes",
        "Layout-routes",
        "SPA навигация без перезагрузки",
        "Защищённые маршруты",
      ],
      level: 85,
    },
    {
      name: "React Hook Form",
      bullets: [
        "Контроль и оптимизация ререндеров",
        "CSS-и библиотечная валидация",
        "Работа с нестандартными полями",
        "Ошибки, кастомные резолверы",
      ],
      level: 75,
    },
    {
      name: "Zod",
      bullets: ["Schema-based валидация", "Совместимость с React Hook Form", "Модели данных API"],
      level: 65,
    },
    {
      name: "Tailwind CSS",
      bullets: ["Utility-first подход", "Responsive breakpoints", "Flex/Grid layout"],
      level: 85,
    },
  ],

  stateManagement: [
    {
      name: "Redux Toolkit",
      bullets: ["Slices", "Селекторы и мемоизация", "RTK Query первичный опыт"],
      level: 75,
    },
    {
      name: "Redux",
      bullets: ["Reducer/action архитектура", "Middleware", "DevTools"],
      level: 65,
    },
  ],

  backendIntegration: [
    {
      name: "REST API",
      bullets: [
        "CRUD операции",
        "Обработка ошибок API",
        "Кеширование, повторные запросы",
        "Пагинация, сортировка, фильтрация",
      ],
      level: 85,
    },
  ],

  tooling: [
    {
      name: "Vite",
      bullets: ["Dev server + production build", "Alias, env переменные", "Tree shaking"],
      level: 70,
    },
    {
      name: "Webpack (базово)",
      bullets: [
        "Loaders & plugins понимание",
        "Entry/output концепты",
        "Code splitting на уровне концепции",
      ],
      level: 50,
    },
  ],

  testing: [
    {
      name: "Vitest",
      bullets: ["Юнит-тесты", "Mocking базовый", "Snapshot тестирование"],
      level: 60,
    },
    {
      name: "React Testing Library",
      bullets: [
        "User-Event",
        "Тестирование взаимодействий",
        "Тестирование UI без деталей реализации",
      ],
      level: 60,
    },
  ],

  collaboration: [
    {
      name: "Git",
      bullets: [
        "Feature-ветвление",
        "Pull Requests и Code review",
        "Resolve конфликтов",
        "Работа с GitHub",
      ],
      level: 75,
    },
    {
      name: "Deployment",
      bullets: ["Netlify", "SPA redirects", "CI сборки", "Оптимизация production"],
      level: 60,
    },
  ],
};
