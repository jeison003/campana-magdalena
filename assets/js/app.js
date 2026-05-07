import { markActiveNav } from "./router.js";
import { initMobileMenu } from "./components/nav.js";
import { showToast } from "./components/toast.js";
import { initAccordion } from "./components/accordion.js";
import { initScrollAnimations } from "./components/animations.js";
import { siteConfig } from "./data.js";

document.addEventListener("DOMContentLoaded", () => {
  markActiveNav();
  initMobileMenu();
  initAccordion();
  initScrollAnimations();

  const demoSubmitButton = document.getElementById("demoSubmitButton");

  if (demoSubmitButton) {
    demoSubmitButton.addEventListener("click", () => {
      showToast(siteConfig.toastSubmitMessage);
    });
  }

  window.appToast = showToast;
});