(() => {
  const footer = document.querySelector("[data-site-footer]");
  if (!footer) return;

  const rooms = [
    {
      href: "/observations/",
      label: "Observations",
      icon: '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M6 27 12 15m14 12-6-12M8 22h16M11 13l12-7 2 4-12 7z"/><circle cx="12" cy="15" r="2"/></svg>',
    },
    {
      href: "/projects/",
      label: "Projects",
      icon: '<svg viewBox="0 0 32 32" aria-hidden="true"><rect x="4" y="6" width="24" height="17" rx="1.5"/><path d="M12 27h8m-4-4v4"/></svg>',
    },
    {
      href: "/logbook/",
      label: "Logbook",
      icon: '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M2 17h6l3-10 5 20 4-14 3 7h7"/></svg>',
    },
    {
      href: "/archive/",
      label: "Archive",
      icon: '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M8 4h15l3 3v21H8z"/><path d="M23 4v5h-5V4M12 10h8m-8 4h8m-8 4h5"/></svg>',
    },
    {
      href: "/experiments/",
      label: "Experiments",
      icon: '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M13 4h6m-4 0v8L8 27h16l-7-15V4"/><path d="M11 22h10"/></svg>',
    },
  ];

  const currentPath = window.location.pathname;
  const roomLinks = rooms
    .map(({ href, label, icon }) => {
      const current = currentPath.startsWith(href) ? ' aria-current="page"' : "";
      return `<a class="footer-room" href="${href}"${current}><span class="footer-room-icon">${icon}</span><span>${label}</span></a>`;
    })
    .join("");

  footer.innerHTML = `
    <a class="footer-id" href="/">james.bregenzer.dev</a>
    <nav class="footer-rooms" aria-label="Observatory navigation">${roomLinks}</nav>
    <nav class="footer-external" aria-label="External links">
      <a class="footer-icon" href="https://github.com/jamesbregenzer" aria-label="GitHub" title="GitHub">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49v-1.92c-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .08 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.66.35-1.12.64-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.35 9.35 0 0 1 12 6.93a9.3 9.3 0 0 1 2.5.35c1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.35 4.8-4.58 5.05.36.32.68.94.68 1.9v2.81c0 .27.18.59.69.49A10.25 10.25 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z"/></svg>
      </a>
      <a class="footer-icon" href="https://make.wordpress.org/" aria-label="WordPress" title="WordPress">
        <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9.2"/><path d="M5.6 8.2h3.7M14.8 8.2h3.6M7.1 8.2l3.3 9.1 2.1-6.1M15.8 8.2l-3.3 9.1M16.3 6.2c1.5.4 2.4 1.4 2.4 3.2 0 1.2-.4 2.5-1.1 4.1l-1.4 3.4"/></svg>
      </a>
      <a class="footer-icon" href="/feed.xml" aria-label="RSS" title="RSS">
        <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="5.2" cy="18.8" r="1.8"/><path d="M4 11.2a8.8 8.8 0 0 1 8.8 8.8M4 5.2A14.8 14.8 0 0 1 18.8 20"/></svg>
      </a>
      <a class="footer-icon" href="mailto:james@bregenzer.dev" aria-label="Email" title="Email">
        <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2.8" y="5.2" width="18.4" height="13.6" rx="1.8"/><path d="m4 7 8 6.3L20 7"/></svg>
      </a>
    </nav>`;
})();
