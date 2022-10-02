document.getElementById("search").addEventListener("keypress", (e) => {
  if (e.key == "Enter") window.find(e.target.value);
});
