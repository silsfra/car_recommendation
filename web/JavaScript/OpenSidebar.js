const menuButton = document.getElementById("menu-button");
const filterButton = document.getElementById("sidebar-icon-toggle");
const sidebar = document.getElementById("sidebar");
const mainContent = document.getElementById("main-content");

menuButton.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    mainContent.classList.toggle("shift");
});

filterButton.addEventListener("click", () => {
    sidebar.classList.remove("open");
    mainContent.classList.remove("shift");
});