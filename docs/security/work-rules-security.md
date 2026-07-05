Status: draft
Source of truth: yes
Update together with: docs/README.md
Update trigger: изменение состава файлов раздела security

<!-- work-rules-security — правила ведения security-документации. Что размещается: какие security-файлы обязательны, когда обновлять, как фиксировать риски и проверки. Структура состоит из файлов:
security-overview.md — общая картина безопасности проекта: что защищаем, какие зоны критичны, какие базовые принципы безопасности используются.
threat-model.md — модель угроз: кто может атаковать систему, какие сценарии опасны, какой ущерб возможен и какие меры защиты нужны.
auth-and-access-control.md — правила входа в систему и доступа: роли, permissions, admin-доступ, login/session/JWT/OAuth и запрещенные действия.
data-classification.md — классификация данных: публичные, внутренние, персональные, конфиденциальные и критичные данные, правила хранения и доступа.
secrets-management.md — правила работы с секретами: API keys, токены, пароли, .env, ключи внешних сервисов, запреты на хранение и логирование.

Чеклист безопасности перед релизом ведёт скил /security (.claude/skills/security/SKILL.md), а не отдельный файл в этой папке. Расширенные security-домены (audit-logging, risk-register, incident-response, privacy-and-compliance, vulnerability-management, data-retention, abuse-and-fraud, access-review, compliance-controls) создаются тим лидом при переходе на соответствующий maturity-уровень — см. docs/maturity-levels.md. -->
<!-- Папка может содержать не все элементы, описанные сейчас, а также иметь дополнения и расширения в зависимости от специфики проекта -->
