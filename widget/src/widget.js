/*
 * Рендер UI-оболочки чат-виджета внутри переданного Shadow DOM.
 * Загружается динамически из loader.js. Реальной логики отправки
 * сообщений нет — это отдельный, более поздний этап.
 */
(function () {
  "use strict";

  var ICON_CHAT =
    '<svg class="cw-icon-chat" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
    '<path d="M4 4h16v12H7l-3 3V4z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>' +
    "</svg>";

  var ICON_CLOSE_SMALL =
    '<svg class="cw-icon-close" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
    '<path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>' +
    "</svg>";

  var ICON_CLOSE =
    '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
    '<path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>' +
    "</svg>";

  var ICON_SEND =
    '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
    '<path d="M3 11l18-7-7 18-2-8-9-3z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>' +
    "</svg>";

  function escapeHtml(value) {
    var div = document.createElement("div");
    div.textContent = String(value == null ? "" : value);
    return div.innerHTML;
  }

  function mount(shadowRoot, config) {
    var position = config.position === "bottom-left" ? "bottom-left" : "bottom-right";

    var root = document.createElement("div");
    root.className = "cw-root";
    root.setAttribute("data-position", position);
    if (config.primaryColor) {
      root.style.setProperty("--cw-primary", config.primaryColor);
    }
    if (config.widgetId) {
      root.setAttribute("data-widget-id", escapeHtml(config.widgetId));
    }

    root.innerHTML =
      '<button type="button" class="cw-button" aria-label="Открыть чат" aria-expanded="false">' +
      ICON_CHAT +
      ICON_CLOSE_SMALL +
      "</button>" +
      '<section class="cw-panel" role="dialog" aria-label="Чат" aria-hidden="true">' +
      '<header class="cw-header">' +
      '<div class="cw-header-title">' +
      '<span class="cw-header-icon">●</span>' +
      "<span>Чат с поддержкой</span>" +
      "</div>" +
      '<button type="button" class="cw-close-btn" aria-label="Закрыть чат">' +
      ICON_CLOSE +
      "</button>" +
      "</header>" +
      '<div class="cw-messages">' +
      '<p class="cw-placeholder">Чат скоро заработает. Совсем скоро здесь можно будет пообщаться с нами.</p>' +
      "</div>" +
      '<div class="cw-input-row">' +
      '<input class="cw-input" type="text" placeholder="Введите сообщение…" disabled />' +
      '<button type="button" class="cw-send-btn" disabled aria-label="Отправить">' +
      ICON_SEND +
      "</button>" +
      "</div>" +
      "</section>";

    shadowRoot.appendChild(root);

    var button = root.querySelector(".cw-button");
    var panel = root.querySelector(".cw-panel");
    var closeBtn = root.querySelector(".cw-close-btn");

    function setOpen(isOpen) {
      root.classList.toggle("cw-open", isOpen);
      button.setAttribute("aria-expanded", String(isOpen));
      panel.setAttribute("aria-hidden", String(!isOpen));
      button.setAttribute("aria-label", isOpen ? "Закрыть чат" : "Открыть чат");
    }

    function toggle() {
      setOpen(!root.classList.contains("cw-open"));
    }

    button.addEventListener("click", toggle);
    closeBtn.addEventListener("click", function () {
      setOpen(false);
    });

    return {
      open: function () {
        setOpen(true);
      },
      close: function () {
        setOpen(false);
      },
    };
  }

  window.ChatWidget = window.ChatWidget || {};
  window.ChatWidget.mount = mount;
})();
