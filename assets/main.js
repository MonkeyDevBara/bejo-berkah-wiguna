(() => {
  const btn = document.querySelector(".menu-btn");
  const nav = document.getElementById("nav");
  if (!btn || !nav) return;

  const setOpen = (open) => {
    btn.setAttribute("aria-expanded", String(open));
    btn.setAttribute("aria-label", open ? "Tutup menu" : "Buka menu");
    nav.classList.toggle("open", open);
  };

  btn.addEventListener("click", () => setOpen(btn.getAttribute("aria-expanded") !== "true"));
  nav.addEventListener("click", (e) => { if (e.target.closest("a")) setOpen(false); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") setOpen(false); });
  window.matchMedia("(min-width: 960px)").addEventListener("change", (e) => { if (e.matches) setOpen(false); });

  // Tandai menu aktif sesuai seksi yang sedang terlihat.
  const links = [...nav.querySelectorAll('.nav-links a[href^="#"]')];
  const byId = new Map(links.map((a) => [a.getAttribute("href").slice(1), a]));
  const sections = [...byId.keys()].map((id) => document.getElementById(id)).filter(Boolean);
  if (!("IntersectionObserver" in window)) return;

  const io = new IntersectionObserver((entries) => {
    for (const en of entries) {
      if (!en.isIntersecting) continue;
      links.forEach((a) => a.removeAttribute("aria-current"));
      byId.get(en.target.id)?.setAttribute("aria-current", "true");
    }
  }, { rootMargin: "-40% 0px -55% 0px" });
  sections.forEach((s) => io.observe(s));
})();
