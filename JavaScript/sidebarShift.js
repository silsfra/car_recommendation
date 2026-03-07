const menuButton = document.getElementById("menu-button");
const sidebar = document.getElementById("sidebar");
const mainContent = document.getElementById("main-content");

menuButton.addEventListener("click", () => {

    sidebar.classList.toggle("open");
    mainContent.classList.toggle("shift");

});