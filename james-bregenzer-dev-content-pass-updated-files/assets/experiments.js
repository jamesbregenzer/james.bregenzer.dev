(() => {
  const list = document.querySelector("[data-experiment-list]");
  if (!list) return;
  list.dataset.recordSource = "/content/experiments/experiments.json";
  list.dataset.recordLabel = "Experiment";
  list.dataset.recordAction = "Open Experiment";
  list.setAttribute("data-record-list", "");
})();
