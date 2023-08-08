const toggleNavBtn = document.querySelector(".toggle-nav-btn");
const headerNavEl = document.querySelector(".header-nav");

toggleNavBtn.addEventListener("click", handleToggleNavBtnClick);

function handleToggleNavBtnClick() {
  headerNavEl.classList.toggle("hidden");
}
