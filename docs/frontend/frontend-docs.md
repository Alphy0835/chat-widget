Status: draft
Source of truth: yes
Update together with: docs/architecture/api-contracts.md
Update trigger: изменение frontend-структуры проекта

<!-- frontend-docs.md — общий индекс frontend-структуры проекта. Файл описывает страницы, routes, компоненты, state management, API usage, формы, auth states, loading/empty/error states, дизайн-систему и accessibility. Не дублируем user-flow и дизайн-систему, а ссылаемся на user-flow.md и team/design/. -->

# Frontend Docs

## Purpose

Frontend проекта — встраиваемый чат-виджет для сторонних сайтов: плавающая кнопка и панель чата, монтируются на странице сайта-клиента через один `<script>`-тег. Платформы — desktop и mobile web, современные evergreen-браузеры. На текущем этапе (TASK-003) реализована только визуальная оболочка (UI-shell) без реальной логики общения; переписка через ИИ-агента/менеджера — отдельный более поздний этап.

## Frontend Scope

| Area | Included | Notes | Related Docs |
|---|---|---|---|
| Pages / routes | no | виджет не имеет своих страниц/роутов, встраивается в чужую страницу | — |
| Components | yes | плавающая кнопка, панель чата (шапка, область сообщений, поле ввода) | team/design/, team/DECISIONS.md (D-005) |
| State management | yes | только локальное UI-состояние (открыта/закрыта панель), без server state | — |
| API usage | no | реальных запросов к серверу нет — этап только визуальной оболочки | — |
| Auth states | no | авторизации на этом этапе нет | — |
| Forms | yes | поле ввода сообщения — на этом этапе неактивно (disabled), без валидации | — |
| Accessibility | yes | aria-атрибуты на кнопках и панели, фокусируемые интерактивные элементы | — |

## Pages / Routes

| Page / Route | Purpose | User Flow | Required Role | Related Feature |
|---|---|---|---|---|
|  |  | FLOW-... | guest / user / admin | FEAT-... |

## Components

| Component | Purpose | Used On | States | Related Design Docs |
|---|---|---|---|---|
| Floating button (`.cw-button`, widget/src/widget.js) | Открывает/закрывает панель чата | Любая страница сайта-клиента | default / hover / open (иконка меняется на крестик) | team/DECISIONS.md (D-005) |
| Chat panel (`.cw-panel`) | Окно чата: шапка, сообщения, ввод | Раскрывается по клику на кнопку | closed / opening / open (CSS-переход) | team/DECISIONS.md (D-005) |
| Message placeholder | Заглушка вместо реальной переписки | Внутри области сообщений панели | static (текст "Чат скоро заработает") | — |
| Input row (input + send button) | Заготовка под будущий ввод сообщений | Низ панели чата | disabled (неактивно на этом этапе) | — |

## State Management

<!-- Что хранится локально, что приходит с API, что кэшируется, что сбрасывается при logout/session expire. -->

| State Area | Source | Owner | Persistence | Notes |
|---|---|---|---|---|
| Панель открыта/закрыта | local | widget.js (замыкание `mount`) | none (сбрасывается при перезагрузке страницы) | CSS-класс `cw-open` на корневом элементе внутри Shadow DOM |
| Конфигурация (widgetId, position, primaryColor) | local | loader.js, читается из `data-*` атрибутов `<script>` | none | Задаётся один раз при загрузке сайта-хоста |

## API Usage

<!-- Не дублировать контракты. Здесь только какие страницы/компоненты используют какие API. -->

| Page / Component | API Contract | Trigger | Loading State | Error State |
|---|---|---|---|---|
|  | API-... | on load / submit / action |  |  |

## Forms And Validation

| Form | Fields | Frontend Validation | Backend Validation | Error Behavior |
|---|---|---|---|---|
|  |  |  |  |  |

## Auth States

<!-- Что видит гость, авторизованный пользователь, пользователь без доступа, админ, пользователь с истекшей сессией. -->

| State | UI Behavior | Redirect / Action | Related Docs |
|---|---|---|---|
| Guest |  |  |  |
| Authenticated |  |  |  |
| No permission |  |  |  |
| Session expired |  |  |  |

## Loading / Empty / Error States

| Area | Loading State | Empty State | Error State | Retry |
|---|---|---|---|---|
|  |  |  |  | yes / no |

## Design System Usage

Готового брендбука на старте нет. Визуальный паттерн виджета (плавающая кнопка → панель чата, размеры, отступы, стартовая цветовая схема) зафиксирован в `team/DECISIONS.md` (D-005) и реализован в `widget/src/widget.css`. Позиция и основной цвет настраиваются через `data-*` атрибуты loader-скрипта (`data-position`, `data-primary-color`) — детали дизайна здесь не дублируются.

## Accessibility Notes

<!-- Keyboard navigation, focus states, contrast, screen reader labels, error messages. -->

## Related Docs

- docs/project/user-flow.md
- docs/architecture/api-contracts.md
- docs/security/auth-and-access-control.md
- team/design/

<!-- Файл может содержать не все элементы, описанные сейчас, а также иметь дополнения и расширения в зависимости от специфики проекта -->
