(() => {
  const scene = document.querySelector(".observatory-scene");
  const objects = [...document.querySelectorAll(".scene-object")];
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
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

  if (scene && !reducedMotion.matches) {
    scene.addEventListener("pointermove", (event) => {
      const bounds = scene.getBoundingClientRect();
      const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 7;
      const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 5;
      scene.style.setProperty("--scene-shift-x", `${x}px`);
      scene.style.setProperty("--scene-shift-y", `${y}px`);
    });

    scene.addEventListener("pointerleave", () => {
      scene.style.setProperty("--scene-shift-x", "0px");
      scene.style.setProperty("--scene-shift-y", "0px");
    });
  }

  objects.forEach((object) => {
    object.addEventListener("click", () => object.classList.add("is-active"));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && document.activeElement?.classList.contains("scene-object")) {
      document.activeElement.blur();
    }
  });
})();
