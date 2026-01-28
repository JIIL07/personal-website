document.addEventListener("DOMContentLoaded", () => {
  // Плавная прокрутка по меню и кнопке
  const navLinks = document.querySelectorAll('.main-nav a[href^="#"]');
  const scrollButtons = document.querySelectorAll("[data-scroll-target]");

  const scrollToTarget = (targetSelector) => {
    const target = document.querySelector(targetSelector);
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");
      if (!href || !href.startsWith("#")) return;
      event.preventDefault();
      scrollToTarget(href);
    });
  });

  scrollButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      const targetSelector = button.getAttribute("data-scroll-target");
      if (!targetSelector) return;
      scrollToTarget(targetSelector);
    });
  });

  // Валидация email в форме
  const form = document.getElementById("contact-form");
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("email-error");
  const successMessage = document.getElementById("form-success");

  if (form && emailInput && emailError && successMessage) {
    form.addEventListener("submit", (event) => {
      const emailValue = (emailInput.value || "").trim();
      emailError.textContent = "";
      successMessage.textContent = "";
      emailInput.classList.remove("input-error");

      const hasAt = emailValue.includes("@");
      const looksValid =
        hasAt &&
        emailValue.indexOf("@") > 0 &&
        emailValue.indexOf("@") < emailValue.length - 1;

      if (!looksValid) {
        event.preventDefault();
        emailInput.classList.add("input-error");
        emailError.textContent = "Пожалуйста, укажите корректный email с символом «@».";
        return;
      }

      event.preventDefault();
      successMessage.textContent = "Сообщение условно отправлено. Спасибо за обращение!";
      form.reset();
    });
  }
});

