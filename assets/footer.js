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
    <nav class="footer-rooms" aria-label="Observatory navigation">${roomLinks}</nav>
    <p class="footer-protocol">Observatory Protocol v1.1</p>`;
})();
