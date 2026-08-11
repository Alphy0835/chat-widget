/*
 * Loader встраиваемого чат-виджета.
 * Это единственный файл, который подключает сайт-клиент через <script>-тег.
 * Он читает свои data-* атрибуты, создаёт контейнер на странице и монтирует
 * в него Shadow DOM с виджетом (widget.js + widget.css), изолированный
 * от стилей и скриптов сайта-хоста в обе стороны.
 */
(function () {
  "use strict";

  var currentScript = document.currentScript;
  if (!currentScript) {
    return;
  }

  var baseUrl = new URL(".", currentScript.src).href;

  var config = {
    widgetId: currentScript.getAttribute("data-widget-id") || "chat-widget",
    position: currentScript.getAttribute("data-position") || "bottom-right",
    primaryColor: currentScript.getAttribute("data-primary-color") || "",
  };

  function init() {
    var host = document.createElement("div");
    host.id = "cw-host-" + config.widgetId;
    document.body.appendChild(host);

    var shadowRoot = host.attachShadow({ mode: "open" });

    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = baseUrl + "widget.css";
    shadowRoot.appendChild(link);

    var widgetScript = document.createElement("script");
    widgetScript.src = baseUrl + "widget.js";
    widgetScript.onload = function () {
      window.ChatWidget.mount(shadowRoot, config);
    };
    document.head.appendChild(widgetScript);
  }

  if (document.body) {
    init();
  } else {
    document.addEventListener("DOMContentLoaded", init);
  }
})();
