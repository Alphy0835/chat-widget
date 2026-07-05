# Отчёт по TASK-001: Перенос и адаптация docs-шаблона в проект

## Что сделано

1. Создана структура `docs/` в корне проекта, перенесены ровно 37 файлов ядра из `G:\Мой диск\docs шаблон\docs\` по списку из задания (корень + `project/`, `architecture/`, `features/`, `backend/`, `frontend/`, `quality/`, `security/`, `operations/`). Исходная папка-шаблон не изменялась.
2. Во всех перенесённых файлах паспорт сокращён до 4 полей по D-002: `Status`, `Source of truth`, `Update together with`, `Update trigger`. Поля `Doc ID`, `Owner`, `Related docs`, `Review required`, `Maturity` удалены — кроме `docs/features/feature-template.md`, где `Doc ID: FEAT-...` оставлен внутри шаблона фичи как есть в задании.
3. Ссылки на невзятые файлы заменены по таблице соответствий из задания:
   - `acceptance-criteria.md` / `definition-of-done.md` → `team/PROTOCOL.md` (раздел приёмки) и `team/tasks/`
   - `bug-report-template.md` / `security-checklist.md` → упомянуты как зона ответственности скилов `/qa` и `/security` (без прямых markdown-ссылок на файлы скилов, т.к. задание требовало лишь замену упоминания)
   - `architecture-decisions/` → `team/DECISIONS.md`
   - `design-guide/*`, `pages-map.md`, `design-system-*` → `team/design/`
   - `sync-checklist.md` → удалено, заменено на использование поля `Update together with`
   - Остальные невзятые домены (`marketing/*`, `legal/*`, `support/*`, `product/*`, расширенные security/operations-файлы) — перечислены в новом разделе «Отложенные домены» в `docs/maturity-levels.md`, из таблицы зрелости убраны.
4. Обновлены три корневых файла:
   - `docs/README.md` — переписан список разделов под фактическую структуру, добавлен абзац о разделении слоёв (`team/` — процесс, `docs/` — продукт).
   - `docs/work-rules-docs.md` — паспорт из 4 полей, убрано упоминание sync-checklist и правило `TYPE-DOMAIN-NAME/NUMBER`, добавлено правило kebab-case.
   - `docs/maturity-levels.md` — убраны строки про невзятые файлы, добавлен раздел «Отложенные домены» со ссылкой на исходный шаблон.
   - Опечатки исходника («неймнга», «зафисимости», «процес», «стадиц») исправлены во всех перенесённых файлах.
5. `CLAUDE.md` и `team/PROTOCOL.md` дополнены правилом об обновлении `docs/` в рамках задач исполнителем и проверке тим лидом при приёмке.

## Как проверить

```
find docs -type f | wc -l                                    # ожидается 37
grep -rl "Doc ID:" docs/                                      # только docs/features/feature-template.md
grep -rl "Owner:" docs/                                        # пусто
grep -ri "sync-checklist\|architecture-decisions\|design-guide\|bug-report-template\|definition-of-done\|acceptance-criteria.md\|security-checklist" docs/   # пусто
grep -ri "зафисимост\|неймнг\|стадиц" docs/                    # пусто
```

Все относительные ссылки внутри `docs/` (на `docs/...` и `team/...`) проверены вручную — ведут на существующие файлы. Единственное исключение — `team/design/`, который пока не существует как папка: это осознанный форвард-референс на будущий вывод дизайнера, прямо предписанный таблицей соответствий в задании (design-guide → team/design/).

## Замечания для тим лида

- `team/design/` ещё не создан — появится, когда за работу возьмётся `/designer`. Ссылки на него в `docs/frontend/frontend-docs.md` и `docs/security/auth-and-access-control.md` (через user-roles.md) — по замыслу задания, но формально это ссылка на несуществующий путь до первого запуска дизайнера.
- Ссылки на форматы `/qa` и `/security` в `docs/quality/*` и `docs/security/work-rules-security.md` даны текстовым упоминанием скила, без прямой markdown-ссылки на файл `.claude/skills/.../SKILL.md` — задание не требовало прямых ссылок, только замену упоминания.

## Вопросы, требующие решения человека

Нет.
