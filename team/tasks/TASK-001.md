# TASK-001: Перенос и адаптация docs-шаблона в проект

| Поле | Значение |
|---|---|
| Статус | DONE |
| Роль | docs (без роль-скила — работай по разделу «Правила исполнителя» из `team/PROTOCOL.md`) |
| Модель | Sonnet — механический перенос и правка файлов по точному списку, творческих решений не требуется |
| Ветка | task/TASK-001 |
| Зависит от | — |
| Создана | 2026-07-06 |

## Контекст

В шаблон команды добавляется слой документации о продукте. Источник — внешний шаблон `G:\Мой диск\docs шаблон\docs\` (91 файл). Переносим только ядро (~37 файлов), потому что полный набор рассчитан на продуктовую компанию и конфликтует с механизмами команды. Основания: решения **D-001** и **D-002** в `team/DECISIONS.md` — прочитай их перед началом, они определяют, что источник правды при конфликтах — `team/`, и какой паспорт должен быть у файлов.

Исходную папку `G:\Мой диск\docs шаблон` **не изменять** — только читать.

## Задание

### 1. Создай структуру `docs/` в корне проекта и перенеси файлы ядра

Перенеси из `G:\Мой диск\docs шаблон\docs\` ровно эти файлы (адаптируя содержимое по правилам из пунктов 2–4):

- Корень: `README.md`, `work-rules-docs.md`, `maturity-levels.md`
- `project/`: `work-rules-project.md`, `product-requirements.md`, `roadmap.md`, `user-flow.md`, `user-roles.md`, `terminology.md`
- `architecture/`: `work-rules-architecture.md`, `system-overview.md`, `data-model.md`, `api-contracts.md`, `integrations.md`
- `features/`: `work-rules-features.md`, `feature-template.md`
- `backend/`: `work-rules-backend.md`, `backend-docs.md`
- `frontend/`: `work-rules-frontend.md`, `frontend-docs.md`
- `quality/`: `work-rules-quality.md`, `testing-strategy.md`, `release-checklist.md`, `test-matrix.md`, `performance-requirements.md`
- `security/`: `work-rules-security.md`, `security-overview.md`, `threat-model.md`, `auth-and-access-control.md`, `data-classification.md`, `secrets-management.md`
- `operations/`: `work-rules-operations.md`, `environments.md`, `deployment.md`, `rollback.md`, `backup-and-restore.md`, `monitoring-and-alerts.md`

**НЕ переносить** (и не создавать пустые папки под них): `marketing/`, `legal/`, `support/`, `product/`, `project/design-guide/`, `architecture/architecture-decisions/`, `sync-checklist.md`, `desktop.ini` (везде); из `quality/`: `acceptance-criteria.md`, `definition-of-done.md`, `bug-report-template.md`, `severity-matrix.md`, `accessibility-checklist.md`; из `security/`: `security-checklist.md`, `audit-logging.md`, `incident-response.md`, `risk-register.md`, `privacy-and-compliance.md`, `vulnerability-management.md`, `data-retention.md`, `abuse-and-fraud.md`, `access-review.md`, `compliance-controls.md`; из `operations/`: `service-levels.md`, `incident-levels.md`, `incident-notification.md`, `postmortem-template.md`, `disaster-recovery.md`.

### 2. В каждом перенесённом файле сократи паспорт до 4 полей (D-002)

```
Status: draft
Source of truth: yes / no
Update together with:
Update trigger:
```

Поля `Doc ID`, `Owner`, `Related docs`, `Review required`, `Maturity` — удалить. Исключение: в `features/feature-template.md` внутри шаблона фичи можно оставить `Doc ID: FEAT-...` — он используется как идентификатор фичи в ссылках.

### 3. Почини ссылки на невзятые файлы

Во всех перенесённых файлах найди упоминания файлов из списка «НЕ переносить» и замени по таблице соответствий (или удали упоминание, если аналога нет):

| Ссылка на | Заменить на |
|---|---|
| `acceptance-criteria.md`, `definition-of-done.md` | `team/PROTOCOL.md` (раздел приёмки) и критерии приёмки в файлах задач `team/tasks/` |
| `bug-report-template.md` | формат BUG-N из скила `/qa` (`.claude/skills/qa/SKILL.md`) |
| `architecture-decisions/` | `team/DECISIONS.md` |
| `design-guide/`, `pages-map.md`, `design-system-*` | `team/design/` (дизайн-система и макеты дизайнера) |
| `security-checklist.md` | чеклист скила `/security` (`.claude/skills/security/SKILL.md`) |
| `sync-checklist.md` | поле `Update together with` в паспорте файла |
| остальные невзятые (`marketing/*`, `legal/*` и т.д.) | удалить упоминание либо пометить «создаётся при переходе на соответствующий maturity-уровень» |

После этого ни одна ссылка в `docs/` не должна вести на несуществующий файл.

### 4. Обнови содержимое трёх корневых файлов docs/

- `docs/README.md` — перепиши список разделов под фактическую структуру (только перенесённые папки), добавь абзац о разделении слоёв: процесс — в `team/`, знания о продукте — в `docs/`.
- `docs/work-rules-docs.md` — паспорт из 4 полей (см. п. 2); убери упоминание sync-checklist и правило нейминга `TYPE-DOMAIN-NAME/NUMBER` (файлы ему не следуют) — вместо него правило «имена файлов — kebab-case на английском». Исправь опечатки исходника («неймнга», «зафисимости», «процес» и др.) — во всех переносимых файлах, не только в этом.
- `docs/maturity-levels.md` — из таблицы убери строки про невзятые файлы; добавь в конец раздел «Отложенные домены»: `marketing/`, `legal/`, `support/`, `product/` и расширенные security/operations-файлы создаются тим лидом только при достижении уровня Beta/Production (указать, что исходники можно взять из `G:\Мой диск\docs шаблон`).

### 5. Интегрируй docs/ в правила команды

- В `CLAUDE.md` (корень проекта) добавь короткий пункт: в `docs/` — документация о продукте; исполнитель обязан обновить затронутые docs-файлы в той же ветке, что и код (сверяясь с `Update together with` в паспорте).
- В `team/PROTOCOL.md` добавь раздел «Документация» (3–5 строк): то же правило + «обновлённые docs-файлы проверяются тим лидом при приёмке».

### Границы задачи (что НЕ входит)

- Не заполнять содержимое docs-файлов данными — переносим каркасы.
- Не менять скилы в `.claude/skills/`.
- Не трогать `team/templates/`, `team/BACKLOG.md` (кроме своего статуса), `team/DECISIONS.md`.
- Не изменять исходную папку `G:\Мой диск\docs шаблон`.

## Критерии приёмки

- [ ] `docs/` содержит ровно 37 файлов из списка п. 1, лишних файлов и пустых папок нет, `desktop.ini` нет ни одного
- [ ] В каждом файле `docs/` паспорт — ровно 4 поля из D-002 (проверка: `grep -rl "Doc ID:" docs/` пуст, кроме `feature-template.md`; `grep -rl "Owner:" docs/` пуст)
- [ ] `grep -ri "sync-checklist\|architecture-decisions\|design-guide\|bug-report-template\|definition-of-done\|acceptance-criteria.md\|security-checklist" docs/` не находит ссылок на невзятые файлы (упоминания заменены на team/-аналоги по таблице п. 3)
- [ ] Все относительные ссылки/пути в `docs/` ведут на существующие файлы проекта
- [ ] `docs/maturity-levels.md` не содержит строк про невзятые файлы и содержит раздел «Отложенные домены»
- [ ] В `CLAUDE.md` и `team/PROTOCOL.md` есть правило об обновлении docs/ в рамках задач
- [ ] Опечатки исходника исправлены в перенесённых файлах («неймнга», «зафисимости», «процес», «стадиц» не встречаются: `grep -ri "зафисимост\|неймнг\|стадиц" docs/` пуст)
- [ ] Работа в ветке `task/TASK-001`, отчёт в `team/reports/TASK-001-report.md`, статус задачи и беклога — REVIEW

## Замечания по доработке

(заполняет тим лид при возврате задачи со статусом REWORK)
