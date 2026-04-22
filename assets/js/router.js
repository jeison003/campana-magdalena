export function markActiveNav() {
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const links = document.querySelectorAll(".nav-link");

  links.forEach((link) => {
    const href = link.getAttribute("href");
    const normalizedHref = href.split("/").pop();

    if (normalizedHref === currentPath) {
      link.classList.add("is-active");
    } else {
      link.classList.remove("is-active");
    }
  });
}