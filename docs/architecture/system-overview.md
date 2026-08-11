Status: draft
Source of truth: yes
Update together with: docs/architecture/data-model.md, docs/architecture/api-contracts.md
Update trigger: изменение крупных частей системы, архитектурных границ или главных связей между модулями

<!-- system-overview.md — для чего: общая карта системы. Что размещается: основные модули, кто за что отвечает, как frontend/backend/database/внешние сервисы связаны между собой, общий стек, схема потоков данных. -->
<!-- Файл может содержать не все элементы, описанные сейчас, а также иметь дополнения и расширения в зависимости от специфики проекта -->
# System Overview

## Purpose
<!-- Общая задача системы и границы продукта. -->

## System Context
<!-- Кто взаимодействует с системой: пользователи, админы, внешние сервисы, API-клиенты. -->

## Main Modules
| Module | Responsibility | Related Docs |
|---|---|---|
| Widget loader (`widget/src/loader.js`) | Единственный файл, который подключает сайт-клиент через `<script>`-тег; читает `data-*` конфигурацию, создаёт контейнер и монтирует Shadow DOM | docs/frontend/frontend-docs.md, team/DECISIONS.md (D-004) |
| Widget UI (`widget/src/widget.js`, `widget/src/widget.css`) | Рендер и поведение UI-оболочки виджета (кнопка, панель чата, открытие/закрытие) внутри Shadow DOM | docs/frontend/frontend-docs.md, team/DECISIONS.md (D-005) |
| Backend (ИИ-агент, менеджер, Битрикс24) | Не реализован — отдельный более поздний этап | team/DECISIONS.md |

## Data Flow
На текущем этапе обмена данными с сервером нет: виджет — чисто клиентский рендер внутри Shadow DOM на странице сайта-хоста. Конфигурация (`data-widget-id`, `data-position`, `data-primary-color`) приходит из атрибутов `<script>`-тега на сайте-клиенте и используется только локально в браузере; никуда не отправляется и нигде не сохраняется. Реальный обмен сообщениями (посетитель ↔ ИИ-агент ↔ менеджер, включая Битрикс24) появится отдельным более поздним этапом — архитектура будет зафиксирована в `team/DECISIONS.md`, когда до него дойдёт очередь.

## External Dependencies
Нет. Виджет реализован на чистом JavaScript и CSS без фреймворков и сторонних библиотек, без шага сборки (см. team/DECISIONS.md D-004).

## Architecture Notes
<!-- Важные ограничения и принципы устройства системы. -->

## Related Decisions
<!-- Ссылки на team/DECISIONS.md. -->
