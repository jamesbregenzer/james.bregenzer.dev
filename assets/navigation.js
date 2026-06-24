(() => {
  const destinations = [
    ["/observations/", "Observations"],
    ["/projects/", "Projects"],
    ["/logbook/", "Logbook"],
    ["/archive/", "Archive"],
    ["/experiments/", "Experiments"],
  ];

  const shell = document.createElement("div");
  shell.className = "terminal-navigation";
  shell.innerHTML = `
    <button class="terminal-toggle" type="button" aria-expanded="false" aria-controls="terminal-menu" aria-label="Open observatory menu">
      <span></span><span></span><span></span>
    </button>
    <div class="terminal-backdrop" data-terminal-close></div>
    <aside class="terminal-panel" id="terminal-menu" aria-hidden="true" aria-label="Observatory terminal menu">
      <a class="terminal-brand" href="/">james.bregenzer.dev</a>
      <nav aria-label="Observatory destinations">
        ${destinations.map(([href, label]) => `<a href="${href}">${label}</a>`).join("")}
      </nav>
      <p>Terminal ready<br><span aria-hidden="true">_</span></p>
    </aside>`;
  document.body.append(shell);

  const toggle = shell.querySelector(".terminal-toggle");
  const panel = shell.querySelector(".terminal-panel");
  const backdrop = shell.querySelector(".terminal-backdrop");
  const focusable = () => [...panel.querySelectorAll("a[href]")];
  let previousFocus = null;

  function openMenu() {
    previousFocus = document.activeElement;
    document.body.classList.add("terminal-open");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close observatory menu");
    panel.setAttribute("aria-hidden", "false");
    focusable()[0]?.focus();
  }

  function closeMenu() {
    document.body.classList.remove("terminal-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open observatory menu");
    panel.setAttribute("aria-hidden", "true");
    previousFocus?.focus();
  }

  toggle.addEventListener("click", () => {
    document.body.classList.contains("terminal-open") ? closeMenu() : openMenu();
  });
  backdrop.addEventListener("click", closeMenu);
  document.addEventListener("keydown", (event) => {
    if (!document.body.classList.contains("terminal-open")) return;
    if (event.key === "Escape") {
      closeMenu();
      return;
    }
    if (event.key !== "Tab") return;
    const items = focusable();
    const first = items[0];
    const last = items.at(-1);
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
})();
