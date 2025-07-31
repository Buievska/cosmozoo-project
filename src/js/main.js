// src/js/main.js
import { loadComponent } from "./component-loader.js";

// 1. Завжди завантажуємо хедер і футер
loadComponent("/partials/header.html", "header-placeholder");
loadComponent("/partials/footer.html", "footer-placeholder");

// 2. Запускаємо логіку для конкретних сторінок
document.addEventListener("DOMContentLoaded", () => {
  initPortfolio(); // Запускаємо скрипт для портфоліо
  initShoots(); // Запускаємо скрипт для окремої роботи (без аргументів)
});
