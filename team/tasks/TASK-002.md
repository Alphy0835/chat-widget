# TASK-002: Полная миграция остатка docs-шаблона в docs-archive/

| Поле | Значение |
|---|---|
| Статус | DONE |
| Роль | docs (без роль-скила — работай по разделу «Правила исполнителей» из `team/PROTOCOL.md`) |
| Модель | Sonnet — механический перенос по точному списку с однотипными правками |
| Ветка | task/TASK-002 |
| Зависит от | TASK-001 (принята) |
| Создана | 2026-07-06 |

## Контекст

Внешняя папка `G:\Мой диск\docs шаблон` будет удалена пользователем — всё, что не вошло в активный слой `docs/` при TASK-001, нужно сохранить внутри проекта. Основание — решение **D-003** в `team/DECISIONS.md` (прочитай его, а также D-001 и D-002).

Исходную папку `G:\Мой диск\docs шаблон` **не изменять и не удалять** — только читать. Удалит её пользователь сам после приёмки.

## Задание

### 1. Создай `docs-archive/` в корне проекта и перенеси туда ровно 53 файла

Из `G:\Мой диск\docs шаблон\docs\` перенеси все `.md`-файлы, которых нет в `docs/`, **с сохранением относительных путей** (например, `project/design-guide/pages-map.md` → `docs-archive/project/design-guide/pages-map.md`):

- `sync-checklist.md`
- `architecture/architecture-decisions/work-rules-architecture-decisions.md`
- `legal/` — 5 файлов: data-processing-agreement, legal-readiness, privacy-policy-notes, terms-notes, work-rules-legal
- `marketing/` — 6 файлов: acquisition-channels, competitive-landscape, gtm-manifesto, icp-profile, positioning, work-rules-marketing
- `operations/` — 5 файлов: disaster-recovery, incident-levels, incident-notification, postmortem-template, service-levels
- `product/` — 6 файлов: assumptions-and-validation, feedback-and-insights, launch-readiness, metrics-and-analytics, pricing-and-packaging, work-rules-product
- `project/design-guide/` — 10 файлов: pages-map, work-rules-design-guide; `design-system-format/`: colors, components-guidelines, page-layout-rules, typography, ui-kit, work-rules-design-system-format; `design-system-preview/`: design-system-preview, work-rules-design-system-preview
- `quality/` — 5 файлов: acceptance-criteria, accessibility-checklist, bug-report-template, definition-of-done, severity-matrix
- `security/` — 10 файлов: abuse-and-fraud, access-review, audit-logging, compliance-controls, data-retention, incident-response, privacy-and-compliance, risk-register, security-checklist, vulnerability-management
- `support/` — 4 файла: common-issues, escalation-rules, support-runbook, work-rules-support

`desktop.ini` не переносить нигде.

Самопроверка полноты: объединение списков `.md`-файлов в `docs/` и `docs-archive/` (без учёта нового README архива) должно покрывать все 90 `.md`-файлов исходника — ни один файл исходника не должен остаться неперенесённым.

### 2. В каждом перенесённом файле — паспорт из 4 полей и опечатки

- Паспорт сократи до 4 полей по D-002 (`Status: draft`, `Source of truth`, `Update together with`, `Update trigger`); поля `Doc ID`, `Owner`, `Related docs`, `Review required`, `Maturity` удали. Идентификаторы внутри шаблонов (например, номер бага в bug-report-template) — не паспорт, их не трогай.
- Исправь опечатки исходника («неймнга», «зафисимости», «стадиц», «процес» и подобные).
- **Ссылки внутри архивных файлов НЕ чини** — файлы неактивны, ссылки адаптируются при переносе файла в `docs/` (так решено в D-003).

### 3. Создай `docs-archive/README.md`

Коротко (до 30 строк): назначение архива; правило активации («тим лид переносит файл в `docs/`, чинит в нём ссылки по таблице замен из D-001 и добавляет строку в maturity-таблицу; паспорт уже сокращён»); два списка:

- **Отложенные** (активируются при достижении maturity-уровня): `marketing/`, `legal/`, `support/`, `product/`, расширенные security- и operations-файлы.
- **Заменённые механизмами команды** (не активируются, лежат как справка; источник правды — `team/` и скилы, см. D-001): `sync-checklist.md`, `quality/acceptance-criteria.md`, `quality/definition-of-done.md`, `quality/bug-report-template.md`, `security/security-checklist.md`, `architecture/architecture-decisions/`, `project/design-guide/` (справочный материал для `/designer`).

### 4. Обнови ссылку на источник в `docs/maturity-levels.md`

В разделе «Отложенные домены» замени упоминание `G:\Мой диск\docs шаблон` на `docs-archive/` (исходная папка удаляется).

### Границы задачи (что НЕ входит)

- Не менять другие файлы `docs/` (кроме maturity-levels.md по п. 4), скилы, `team/` (кроме своего статуса, отчёта и беклога).
- Не заполнять архивные каркасы содержимым.
- Не изменять и не удалять исходную папку `G:\Мой диск\docs шаблон`.

## Критерии приёмки

- [ ] В `docs-archive/` ровно 54 `.md`-файла (53 перенесённых + README.md), структура повторяет исходник, `desktop.ini` нет, пустых папок нет
- [ ] Полнота: каждый `.md` исходника присутствует либо в `docs/`, либо в `docs-archive/` (все 90)
- [ ] `grep -rl "Owner:\|Review required:\|Related docs:" docs-archive/` пуст; `grep -rl "Doc ID:" docs-archive/` пуст
- [ ] `grep -ri "зафисимост\|неймнг\|стадиц" docs-archive/` пуст
- [ ] `docs-archive/README.md` содержит правило активации и оба списка (отложенные / заменённые)
- [ ] `docs/maturity-levels.md` больше не упоминает `G:\Мой диск` и указывает на `docs-archive/`
- [ ] Работа в ветке `task/TASK-002`, отчёт в `team/reports/TASK-002-report.md`, статус задачи и беклога — REVIEW

## Замечания по доработке

(заполняет тим лид при возврате задачи со статусом REWORK)
