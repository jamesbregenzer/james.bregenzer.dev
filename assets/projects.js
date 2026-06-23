(() => {
  const list = document.querySelector("[data-project-list]");
  if (!list) return;

  const icons = {
    radar:
      '<svg viewBox="0 0 80 80" aria-hidden="true"><circle cx="40" cy="40" r="29"/><circle cx="40" cy="40" r="19"/><circle cx="40" cy="40" r="5"/><path d="M40 40 62 21M40 11v58M11 40h58"/><circle cx="57" cy="25" r="3"/></svg>',
    reviews:
      '<svg viewBox="0 0 80 80" aria-hidden="true"><path d="M12 15h56v39H35L22 66V54H12z"/><path d="m26 29 3 6 7 .9-5 4.8 1.2 7-6.2-3.3-6.2 3.3 1.2-7-5-4.8 7-.9zm27 0 3 6 7 .9-5 4.8 1.2 7-6.2-3.3-6.2 3.3 1.2-7-5-4.8 7-.9z"/></svg>',
  };

  const statusClass = (status) => status.toLowerCase().replace(/\s+/g, "-");

  fetch("/content/projects/projects.json")
    .then((response) => {
      if (!response.ok) throw new Error("Project data unavailable");
      return response.json();
    })
    .then((projects) => {
      list.innerHTML = projects
        .sort((a, b) => a.order - b.order)
        .map(
          (project) => `
          <article class="project-record">
            <div class="project-glyph">${icons[project.icon] || icons.radar}</div>
            <div class="project-record-body">
              <div class="project-heading">
                <h2>${project.title}</h2>
                <span class="project-status status-${statusClass(project.status)}">${project.status}</span>
              </div>
              <p>${project.description}</p>
              <ul class="project-tags" aria-label="${project.title} technologies">
                ${project.tags.map((tag) => `<li>${tag}</li>`).join("")}
              </ul>
            </div>
            <a class="project-link" href="/projects/${project.slug}/">View Project <span aria-hidden="true">→</span></a>
          </article>`,
        )
        .join("");
    })
    .catch(() => {
      list.innerHTML = '<p class="project-error">Project records are temporarily unavailable.</p>';
    });
})();
