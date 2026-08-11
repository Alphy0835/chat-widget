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
Related data model: `window.ChatWidgetQA` (`widget/data/qa-data.js`, team/DECISIONS.md D-008, D-009)
Related security: —
Related tests: team/reports/TASK-007-report.md, team/reports/TASK-008-report.md
Update trigger: изменение сценария (шаги приветствие → категории → вопросы → ответ, текстовый поиск) или формата данных qa-data.js

## Purpose

Дать посетителю сайта-клиента протестировать переписку в чат-виджете без реального ИИ и без бэкенда: получить готовый справочный ответ на распространённый вопрос через выбор из списка, а не через свободный ввод текста.

## Description

Поверх области сообщений виджета (`.cw-messages`) реализован кнопочный сценарный движок. Данные вопрос-ответ подключаются на странице сайта-клиента отдельным `<script>`-тегом (`widget/data/qa-data.js`) до `widget.js`, который присваивает их глобальной переменной `window.ChatWidgetQA` (формат — team/DECISIONS.md D-008). Движок реализован в `widget/src/widget.js`, стили реплик и кнопок — в `widget/src/widget.css`.

Если `window.ChatWidgetQA` не подключён или имеет некорректный формат (нет массивов `categories`/`questions`) — виджет молча деградирует до прежней статичной заглушки-плейсхолдера, без ошибок в консоли.

Поверх кнопочной навигации (D-008) поле ввода в футере активировано и работает как альтернативный путь к тем же данным (team/DECISIONS.md D-009): посетитель может напечатать вопрос текстом вместо клика по кнопкам. По отправке (Enter или кнопка) выполняется нечёткий поиск (fuzzy-search) библиотекой Fuse.js по `questions[].question` и опциональному `questions[].keywords` — результат не подставляется автоматически, а показывается 2–4 кнопками-кандидатами («Возможно, вы имели в виду:»); клик по кандидату работает как обычный клик по вопросу. Если релевантных совпадений нет — сообщение «Точный вопрос не найден» и кнопка возврата к категориям.

## User Flow

См. FLOW-001 в `docs/project/user-flow.md`.

## Related Systems

- `widget/src/widget.js` — логика движка (рендер сообщений, кнопок, переходы между экранами, текстовый поиск).
- `widget/src/widget.css` — стили реплик пользователя/бота, кнопок-чипов, поля ввода, адаптация под мобильную ширину.
- `widget/data/qa-data.js` — данные диалога (реальный контент — TASK-006; все вопросы дополнены полем `keywords` для поиска — TASK-008, TASK-009).
- `widget/vendor/fuse.min.js` — вендоренная локально библиотека нечёткого поиска Fuse.js (без CDN, D-009).
- `demo.html` — подключает `qa-data.js` и `vendor/fuse.min.js` перед `loader.js` для локальной проверки.

## Implementation Links

- `widget/src/widget.js` — функции `getQaData`, `startDialogIfNeeded`, `showCategories`, `showQuestions`, `showAnswer`, `appendButtons`, `appendMessage`, `getFuse`, `showSearchResults`, `handleSearchSubmit`.
- `widget/src/widget.css` — классы `.cw-messages-chat`, `.cw-msg`, `.cw-msg-bot`, `.cw-msg-user`, `.cw-msg-note`, `.cw-buttons`, `.cw-chip-btn`, `.cw-input`, `.cw-send-btn`.
- team/DECISIONS.md — D-008 (формат данных и кнопочный сценарий), D-009 (текстовый поиск через Fuse.js).

## Security Impact

Данные из `window.ChatWidgetQA` выводятся через `textContent` (не `innerHTML`) — исключён риск инъекции разметки через содержимое вопросов/ответов, включая текст, введённый посетителем в поле поиска. Fuse.js и данные полностью локальные (файлы на странице клиента), запросов к серверу нет.

## Acceptance Criteria

См. критерии приёмки в `team/tasks/TASK-007.md` (кнопочный сценарий) и `team/tasks/TASK-008.md` (текстовый поиск).

## Test Notes

Ручная проверка через `python3 -m http.server` + `demo.html` и через открытие `demo.html` напрямую как `file://`: happy path (приветствие → категория → вопрос → ответ → возврат), текстовый поиск (релевантный запрос с опечаткой/синонимом → кандидаты, нерелевантный запрос → «не найдено»), деградация без `window.ChatWidgetQA`, изоляция от «кривых» стилей хоста, мобильная ширина ~375px. Подробности и результаты — `team/reports/TASK-007-report.md`, `team/reports/TASK-008-report.md`.

## Release Notes

Прототип без ИИ и без бэкенда — вопросы и ответы статичные. Поверх кнопочной навигации доступен текстовый ввод с нечётким поиском (без ИИ/NLP) по готовой базе вопросов; результат поиска — всегда список кандидатов, а не автоматический ответ.
