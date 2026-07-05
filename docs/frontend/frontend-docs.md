Status: draft
Source of truth: yes
Update together with: docs/architecture/api-contracts.md
Update trigger: изменение frontend-структуры проекта

<!-- frontend-docs.md — общий индекс frontend-структуры проекта. Файл описывает страницы, routes, компоненты, state management, API usage, формы, auth states, loading/empty/error states, дизайн-систему и accessibility. Не дублируем user-flow и дизайн-систему, а ссылаемся на user-flow.md и team/design/. -->

# Frontend Docs

## Purpose

<!-- Кратко: за что отвечает frontend, какие пользовательские сценарии реализует, какие платформы поддерживает: web, mobile web, desktop, app. -->

## Frontend Scope

| Area | Included | Notes | Related Docs |
|---|---|---|---|
| Pages / routes | yes / no | public / app / admin | team/design/ |
| Components | yes / no | shared UI, feature components | team/design/ |
| State management | yes / no | local / global / server state |  |
| API usage | yes / no | REST / GraphQL / RPC | docs/architecture/api-contracts.md |
| Auth states | yes / no | guest, user, admin, expired session | docs/security/auth-and-access-control.md |
| Forms | yes / no | validation, errors, submit states |  |
| Accessibility | yes / no | keyboard, focus, contrast, screen readers |  |

## Pages / Routes

| Page / Route | Purpose | User Flow | Required Role | Related Feature |
|---|---|---|---|---|
|  |  | FLOW-... | guest / user / admin | FEAT-... |

## Components

| Component | Purpose | Used On | States | Related Design Docs |
|---|---|---|---|---|
|  |  |  | default / hover / loading / disabled / error | team/design/ |

## State Management

<!-- Что хранится локально, что приходит с API, что кэшируется, что сбрасывается при logout/session expire. -->

| State Area | Source | Owner | Persistence | Notes |
|---|---|---|---|---|
|  | local / API / global store |  | none / session / local storage |  |

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

<!-- Какие правила дизайна обязательны для frontend. Детали в team/design/ (дизайн-система дизайнера). -->

## Accessibility Notes

<!-- Keyboard navigation, focus states, contrast, screen reader labels, error messages. -->

## Related Docs

- docs/project/user-flow.md
- docs/architecture/api-contracts.md
- docs/security/auth-and-access-control.md
- team/design/

<!-- Файл может содержать не все элементы, описанные сейчас, а также иметь дополнения и расширения в зависимости от специфики проекта -->
