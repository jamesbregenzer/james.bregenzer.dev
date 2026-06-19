(() => {
  const scene = document.querySelector(".observatory-scene");
  const objects = [...document.querySelectorAll(".scene-object")];
  const mobile = window.matchMedia("(max-width: 900px)");

  function syncObjectNavigation() {
    objects.forEach((object) => {
      if (mobile.matches) {
        object.tabIndex = -1;
        object.setAttribute("aria-hidden", "true");
      } else {
        object.removeAttribute("tabindex");
        object.removeAttribute("aria-hidden");
      }
    });
  }

  syncObjectNavigation();
  mobile.addEventListener("change", syncObjectNavigation);

  objects.forEach((object) => {
    object.addEventListener("click", () => object.classList.add("is-active"));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && document.activeElement?.classList.contains("scene-object")) {
      document.activeElement.blur();
    }
  });
})();
