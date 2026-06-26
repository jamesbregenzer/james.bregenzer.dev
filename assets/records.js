(() => {
  const lists = document.querySelectorAll("[data-record-list]");
  if (!lists.length) return;

  const statusClass = (status) => status.toLowerCase().replace(/\s+/g, "-");

  lists.forEach((list) => {
    const source = list.dataset.recordSource;
    const label = list.dataset.recordLabel || "Record";
    const action = list.dataset.recordAction || "Open Record";
    if (!source) return;

    fetch(`${source}?v=records`)
      .then((response) => {
        if (!response.ok) throw new Error(`${label} data unavailable`);
        return response.json();
      })
      .then((records) => {
        list.innerHTML = records
          .sort((a, b) => a.order - b.order)
          .map((record) => {
            const destination = record.url || record.repo || "#";
            const external = destination.startsWith("http");
            return `
              <article class="project-record">
                <div class="project-record-body">
                  <div class="project-heading">
                    <h2>${record.title}</h2>
                    <span class="project-status status-${statusClass(record.status)}">${record.status}</span>
                  </div>
                  <p>${record.description}</p>
                  <ul class="project-tags" aria-label="${record.title} technologies">
                    ${record.tags.map((tag) => `<li>${tag}</li>`).join("")}
                  </ul>
                </div>
                <a class="project-link" href="${destination}"${external ? ' target="_blank" rel="noreferrer"' : ""}>${action} <span aria-hidden="true">→</span></a>
              </article>`;
          })
          .join("");
      })
      .catch(() => {
        list.innerHTML = `<p class="project-error">${label} records are temporarily unavailable.</p>`;
      });
  });
})();
