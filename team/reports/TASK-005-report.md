# Отчёт по TASK-005

| Поле | Значение |
|---|---|
| Роль | frontend |
| Ветка | task/TASK-005 |
| Дата | 2026-08-11 |

## Что сделано

Перенесены значения из `team/design/design-system.md` (§1, §2, §5, §6) в продуктовый код:

1. `widget/src/widget.css`: `--cw-primary` сменён с `#2563eb` на `#ff4800`.
2. `widget/src/widget.css`: `font-family` в `.cw-root, .cw-root *` заменён на `"Roboto Condensed", "Arial Narrow", Arial, sans-serif`.
3. `widget/src/widget.css`: добавлены `filter: brightness(90%)` на `:hover` и `filter: brightness(85%)` на `:active` для `.cw-button` и `.cw-send-btn` (у `.cw-send-btn` раньше не было hover-правила вообще — добавлено как заготовка на будущее).
4. `demo.html`: `data-primary-color` в примере сниппета сменён с `#2563EB` на `#FF4800` — новая дефолтная тема видна «из коробки».
5. `docs/frontend/frontend-docs.md`: раздел Design System Usage дополнен ссылкой на D-006/D-007 и `team/design/design-system.md` (без дублирования hex/px).

Разметка `widget/src/widget.js` не менялась — не требовалось (дизайнер явно подтвердил это в TASK-004/design-system.md §6). Геометрия, радиусы, тени, breakpoint 480px не трогались.

## Как проверить

1. Из корня репозитория: `python3 -m http.server 4173`.
2. Открыть `http://localhost:4173/demo.html`.
3. Должна появиться оранжевая (`#FF4800`) плавающая кнопка в правом нижнем углу без ручной правки атрибутов.
4. Навести курсор на кнопку — цвет чуть темнеет (`brightness(90%)`), при зажатии — темнее (`brightness(85%)`).
5. Кликнуть по кнопке — открывается панель чата: оранжевая шапка, текст-заглушка, поле ввода и disabled-кнопка отправки, шрифт с признаками condensed-начертания (fallback `Arial Narrow`/`Arial`, т.к. Google Fonts не подключается — по дизайну).
6. В `demo.html` временно поменять `data-primary-color="#FF4800"` на `data-primary-color="#2563EB"`, перезагрузить страницу — кнопка и шапка становятся синими: конфигурируемость не сломана. Вернуть обратно на `#FF4800`.
7. Сузить окно браузера до <480px (или Chrome DevTools mobile emulation) — панель разворачивается почти на весь экран с отступом 8px и радиусом 12px, кнопка уменьшается до 56×56px с отступом 16px — без регрессий.

## Самопроверка по критериям приёмки

- [x] `widget/src/widget.css`: дефолт `--cw-primary` = `#ff4800` — проверено чтением файла и `getComputedStyle` в браузере (`rgb(255, 72, 0)`)
- [x] `widget/src/widget.css`: `font-family` = `"Roboto Condensed", "Arial Narrow", Arial, sans-serif` применён — проверено чтением файла
- [x] Hover/active `filter: brightness()` добавлены для `.cw-button` и `.cw-send-btn`, визуально проверено в браузере (открытие `demo.html`, наведение курсора) — проверено скриншотом и `getComputedStyle`/`matches(':hover')` после наведения (`filter: brightness(0.9)`)
- [x] `demo.html` открывается и по умолчанию показывает оранжевую тему без ручной правки атрибутов — проверено скриншотом
- [x] Смена `data-primary-color` на другой цвет (синий) в `demo.html` по-прежнему работает — проверено скриншотом, затем значение возвращено на `#FF4800`
- [x] Мобильная адаптивность (<480px) не изменилась и не отрегрессировала — проверено визуально при ширине 375px (панель почти во весь экран, кнопка 56×56px)
- [x] Разметка `widget.js` не менялась — изменений в файл не вносилось
- [x] `docs/frontend/frontend-docs.md` обновлён — раздел Design System Usage

## Замечания для тим лида

Нет.
