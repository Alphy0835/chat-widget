Status: draft
Source of truth: yes
Update together with: docs/README.md
Update trigger: изменение состава обязательных документов на уровне зрелости

<!-- maturity-levels.md — описание стадий разработки и что конкретно необходимо на каждом этапе -->
# Maturity Levels

## MVP Required
<!-- Минимум, без которого нельзя начинать разработку. -->

## Beta Required
<!-- Документы, нужные перед первыми пользователями. -->

## Production Required
<!-- Документы, нужные перед стабильным публичным использованием. -->

## Enterprise / Regulated Required
<!-- Документы для B2B, персональных данных, compliance, высокой ответственности. -->

| File | MVP | Beta | Production | Enterprise / Regulated |
|---|---:|---:|---:|---:|
| `docs/project/product-requirements.md` | required | required | required | required |
| `docs/project/roadmap.md` | required | required | required | required |
| `docs/project/user-flow.md` | required | required | required | required |
| `docs/project/user-roles.md` | optional | required | required | required |
| `docs/project/terminology.md` | optional | required | required | required |
| `docs/features/feature-template.md` | required | required | required | required |
| `docs/architecture/system-overview.md` | required | required | required | required |
| `docs/architecture/data-model.md` | required | required | required | required |
| `docs/architecture/api-contracts.md` | required | required | required | required |
| `docs/architecture/integrations.md` | optional | required if integrations | required | required |
| `docs/frontend/*` | optional | required if frontend | required if frontend | required if frontend |
| `docs/backend/*` | optional | required if backend | required if backend | required if backend |
| `docs/quality/testing-strategy.md` | optional | required | required | required |
| `docs/quality/release-checklist.md` | optional | required | required | required |
| `docs/quality/test-matrix.md` | optional | optional | required if many features | required |
| `docs/quality/performance-requirements.md` | optional | optional | required if load matters | required |
| `docs/security/security-overview.md` | optional | required | required | required |
| `docs/security/auth-and-access-control.md` | required if auth | required if auth | required if auth | required |
| `docs/security/data-classification.md` | optional | required if user data | required | required |
| `docs/security/secrets-management.md` | required | required | required | required |
| `docs/security/threat-model.md` | optional | required if sensitive data/payments | required | required |
| `docs/operations/environments.md` | optional | required | required | required |
| `docs/operations/deployment.md` | optional | required | required | required |
| `docs/operations/monitoring-and-alerts.md` | optional | optional | required | required |
| `docs/operations/rollback.md` | optional | required | required | required |
| `docs/operations/backup-and-restore.md` | optional | optional | required if data stored | required |

## Отложенные домены

Следующие домены и расширенные файлы не входят в текущий шаблон и создаются тим лидом только при достижении уровня Beta/Production, когда проект реально в них упирается:

- `marketing/` — рынок, продвижение, позиционирование, каналы привлечения
- `legal/` — юридическая готовность продукта (terms, privacy, DPA)
- `support/` — поддержка пользователей: runbook, типовые проблемы, эскалации
- `product/` — продуктовые гипотезы, метрики, pricing, launch readiness
- расширенные security-файлы: `audit-logging.md`, `risk-register.md`, `privacy-and-compliance.md`, `vulnerability-management.md`, `data-retention.md`, `abuse-and-fraud.md`, `access-review.md`, `compliance-controls.md`
- расширенные operations-файлы: `service-levels.md`, `incident-levels.md`, `incident-response.md`, `incident-notification.md`, `postmortem-template.md`, `disaster-recovery.md`

Исходники этих файлов можно взять из `docs-archive/`.
