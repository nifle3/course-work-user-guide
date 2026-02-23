import { defineConfig } from "vitepress";

export default defineConfig({
  srcDir: "docs",
  base: "/course-work-user-guide/",

  title: "User guide ",
  description: "User guide for course work ",
  themeConfig: {
    nav: [{ text: "Home", link: "/" }],

    sidebar: [
      {
        text: "Руководство пользователя",
        items: [
          { text: "Начало", link: "/1-getting-started" },
          { text: "Регистрация и вход", link: "/2-registration-and-login" },
          { text: "Прохождение интервью", link: "/3-passing-interview" },
          {
            text: "Результат прохождения интервью",
            link: "/4-results-and-report",
          },
          {
            text: "Прогресс и достижения",
            link: "/5-progress-and-achievements",
          },
          { text: "Работа со сценарием", link: "/6-working-with-scenarios" },
          { text: "Администрирование", link: "/7-administration" },
          { text: "FAQ", link: "8-user-faq" },
          { text: "Руководство по базе данных", link: "9-database-guide" },
          { text: "Руководство программиста", link: "10-developer-guide" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
