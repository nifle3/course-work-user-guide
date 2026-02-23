# 9. Работа с базой данных

Раздел описывает структуру и особенности работы с PostgreSQL для системы Interview Master AI.

---

## 9.1 Пользователи и роли

- **Users** — центральная таблица, хранит данные всех участников.
  - ID — уникальный идентификатор
  - FullName — имя и фамилия
  - Email, Password_Hash — учетные данные
  - RoleID — ссылка на роль
  - XP — опыт
  - CurrentStreak — текущий стрик
  - LastActivityDate — дата последней активности

- **Roles** — таблица ролей
  - ID
  - Name — Admin, Expert, Candidate

---

## 9.2 Сценарии и критерии

- **Categories** — категории интервью (IT, Маркетинг и т.д.)
- **Scenarios** — конкретные темы интервью
  - CategoryID — принадлежность к категории
  - ExpertID — автор сценария
  - Title — название
  - Context — контекст интервью
- **Scenario_Criteria** — экспертные критерии
  - ScenarioID
  - TypeID — тип критерия
  - Content — текст критерия
- **ScenarioCriteriaType** — типы критериев
  - Name — описание типа
- **QuestionTemplates** — примеры вопросов
  - ScenarioID
  - Text — текст вопроса

---

## 9.3 Сессии интервью

- **InterviewSessions** — данные каждой попытки
  - SessionID, UserID, ScenarioID
  - Status, FinalScore, ExpertFeedback
  - StartedAt, FinishedAt
- **Chat_Messages** — история диалога
  - SessionID, IsAI, MessageText, AnalysisNote

---

## 9.4 Достижения

- **Achievements** — справочник наград
  - Name, Description, IconURL
- **User_Achievements** — связи многие-ко-многим
  - UserID, AchievementID, AwardedAt

---

## 9.5 Транзакции и кэширование

- Завершение сессии обрабатывается в транзакции: фиксируется балл, начисляется XP, обновляется стрик, проверяются достижения.
- Redis используется для кэширования часто используемых данных и временных состояний сессий.
