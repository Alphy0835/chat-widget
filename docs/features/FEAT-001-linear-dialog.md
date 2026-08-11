Status: active
Source of truth: yes
Update together with: docs/features/work-rules-features.md
Update trigger: изменение сценария линейного диалога или формата данных вопрос-ответ

# Линейный (сценарный) диалог виджета

Doc ID: FEAT-001
Status: active
Related requirements: —
Related user flows: FLOW-001
Related API: —
Related data model: `window.ChatWidgetQA` (`widget/data/qa-data.js`, team/DECISIONS.md D-008)
Related security: —
Related tests: team/reports/TASK-007-report.md
Update trigger: изменение сценария (шаги приветствие → категории → вопросы → ответ) или формата данных qa-data.js

## Purpose

Дать посетителю сайта-клиента протестировать переписку в чат-виджете без реального ИИ и без бэкенда: получить готовый справочный ответ на распространённый вопрос через выбор из списка, а не через свободный ввод текста.

## Description

Поверх области сообщений виджета (`.cw-messages`) реализован кнопочный сценарный движок. Данные вопрос-ответ подключаются на странице сайта-клиента отдельным `<script>`-тегом (`widget/data/qa-data.js`) до `widget.js`, который присваивает их глобальной переменной `window.ChatWidgetQA` (формат — team/DECISIONS.md D-008). Движок реализован в `widget/src/widget.js`, стили реплик и кнопок — в `widget/src/widget.css`.

Если `window.ChatWidgetQA` не подключён или имеет некорректный формат (нет массивов `categories`/`questions`) — виджет молча деградирует до прежней статичной заглушки-плейсхолдера, без ошибок в консоли.

## User Flow

См. FLOW-001 в `docs/project/user-flow.md`.

## Related Systems

- `widget/src/widget.js` — логика движка (рендер сообщений, кнопок, переходы между экранами).
- `widget/src/widget.css` — стили реплик пользователя/бота, кнопок-чипов, адаптация под мобильную ширину.
- `widget/data/qa-data.js` — данные диалога (сейчас тестовая заглушка на 5 пар, реальный контент — TASK-006).
- `demo.html` — подключает `qa-data.js` перед `loader.js` для локальной проверки.

## Implementation Links

- `widget/src/widget.js` — функции `getQaData`, `startDialogIfNeeded`, `showCategories`, `showQuestions`, `showAnswer`, `appendButtons`, `appendMessage`.
- `widget/src/widget.css` — классы `.cw-messages-chat`, `.cw-msg`, `.cw-msg-bot`, `.cw-msg-user`, `.cw-msg-note`, `.cw-buttons`, `.cw-chip-btn`.
- team/DECISIONS.md — D-008 (формат данных и сценарий).

## Security Impact

Данные из `window.ChatWidgetQA` выводятся через `textContent` (не `innerHTML`) — исключён риск инъекции разметки через содержимое вопросов/ответов. Данные локальные (обычный JS-файл на странице клиента), запросов к серверу нет.

## Acceptance Criteria

См. критерии приёмки в `team/tasks/TASK-007.md`.

## Test Notes

Ручная проверка через `python3 -m http.server` + `demo.html`: happy path (приветствие → категория → вопрос → ответ → возврат), деградация без `window.ChatWidgetQA`, изоляция от «кривых» стилей хоста, мобильная ширина ~375px. Подробности и результаты — `team/reports/TASK-007-report.md`.

## Release Notes

Прототип без ИИ и без бэкенда — вопросы и ответы статичные, свободный текстовый ввод не поддерживается (поле ввода остаётся disabled).
