(() => {
  const list = document.querySelector("[data-project-list]");
  if (!list) return;

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
            <a class="project-link" href="${project.url || `/projects/${project.slug}/`}">View Project <span aria-hidden="true">→</span></a>
          </article>`,
        )
        .join("");
    })
    .catch(() => {
      list.innerHTML = '<p class="project-error">Project records are temporarily unavailable.</p>';
    });
})();
