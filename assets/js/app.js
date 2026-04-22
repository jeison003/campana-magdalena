import { markActiveNav } from "./router.js";
import { initMobileMenu } from "./components/nav.js";
import { showToast } from "./components/toast.js";
import { initAccordion } from "./components/accordion.js";
import { siteConfig } from "./data.js";

document.addEventListener("DOMContentLoaded", () => {
  markActiveNav();
  initMobileMenu();
  initAccordion();

  const demoSubmitButton = document.getElementById("demoSubmitButton");

  if (demoSubmitButton) {
    demoSubmitButton.addEventListener("click", () => {
      showToast(siteConfig.toastSubmitMessage);
    });
  }

  window.appToast = showToast;
});