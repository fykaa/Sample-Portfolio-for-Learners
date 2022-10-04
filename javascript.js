document.getElementById("search").addEventListener("keypress", (e) => {
  if (e.key == "Enter") window.find(e.target.value);
});

function handleMenu() {
  window.addEventListener("click", function (e) {
    let nav = document.getElementById("mobile-nav-display");
    if (document.getElementById("menu").contains(e.target)) {
      nav.classList.remove("mobile-nav-display");
    } else {
      nav.classList.add("mobile-nav-display");
    }
  });
}
