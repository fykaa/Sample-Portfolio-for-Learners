document.getElementById("search").addEventListener("keypress", (e) => {
<<<<<<< HEAD
    if (e.key == "Enter") window.find(e.target.value);
});
=======
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
>>>>>>> a2faec26c9f0a6bcb1d8934941272149949b9092
