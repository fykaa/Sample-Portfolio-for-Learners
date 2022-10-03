document.getElementById("search").addEventListener("keypress", (e) => {
  if (e.key == "Enter") window.find(e.target.value);
});

function handleMenu() {
  
  let nav = document.getElementById("mobile-nav-display");

  nav.classList.toggle("mobile-nav-display");
}
