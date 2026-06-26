(() => {
  const targets = document.querySelectorAll("[data-last-updated]");
  if (!targets.length) return;

  const modified = new Date(document.lastModified);
  if (Number.isNaN(modified.getTime())) return;

  const formatted = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  }).format(modified).toUpperCase();

  targets.forEach((target) => {
    target.textContent = `LAST UPDATED: ${formatted}`;
  });
})();
