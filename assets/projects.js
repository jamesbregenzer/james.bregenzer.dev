(() => {
  const list = document.querySelector("[data-project-list]");
  if (!list) return;
  list.dataset.recordSource = "/content/projects/projects.json";
  list.dataset.recordLabel = "Project";
  list.dataset.recordAction = "Open Project";
  list.setAttribute("data-record-list", "");
})();
