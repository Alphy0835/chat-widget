# docs-archive

Заготовки из внешнего docs-шаблона, не вошедшие в активный слой `docs/` (см. D-001, D-003 в `team/DECISIONS.md`). Это не рабочая документация — файлы не активны и не читаются агентами в рамках текущих задач.

## Правило активации

Тим лид переносит нужный файл из `docs-archive/` в `docs/`, чинит в нём ссылки по таблице замен из D-001 и добавляет строку в таблицу зрелости в `docs/maturity-levels.md`. Паспорт файла уже сокращён до 4 полей (D-002) — переносить как есть, значения полей заполняются при активации.

## Отложенные (активируются при достижении maturity-уровня)

- `marketing/`
- `legal/`
- `support/`
- `product/`
- расширенные security-файлы: `abuse-and-fraud.md`, `access-review.md`, `audit-logging.md`, `compliance-controls.md`, `data-retention.md`, `incident-response.md`, `privacy-and-compliance.md`, `risk-register.md`, `vulnerability-management.md`
- расширенные operations-файлы: `disaster-recovery.md`, `incident-levels.md`, `incident-notification.md`, `postmortem-template.md`, `service-levels.md`
- расширенные quality-файлы: `quality/accessibility-checklist.md`, `quality/severity-matrix.md`

## Заменённые механизмами команды (не активируются, справочно)

Источник правды для них — `team/` и скилы ролей (D-001):

- `sync-checklist.md`
- `quality/acceptance-criteria.md`
- `quality/definition-of-done.md`
- `quality/bug-report-template.md`
- `security/security-checklist.md`
- `architecture/architecture-decisions/`
- `project/design-guide/` — справочный материал для `/designer`
