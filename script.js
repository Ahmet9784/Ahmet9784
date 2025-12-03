const searchBox = document.querySelector(".search-box");
const searchIcon = document.querySelector(".search-icon");
const searchInput = document.querySelector(".search-input");

searchIcon.addEventListener("click", () => {
  searchBox.classList.toggle("active");

  if (searchBox.classList.contains("active")) {
    searchInput.focus();
  }
});
