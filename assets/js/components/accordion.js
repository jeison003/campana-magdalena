export function initAccordion() {
    const triggers = document.querySelectorAll(".accordion-trigger");

    if (!triggers.length) return;

    triggers.forEach((trigger) => {
        trigger.addEventListener("click", () => {
            const item = trigger.closest(".accordion-item");
            if (!item) return;

            item.classList.toggle("is-open");
        });
    });
}