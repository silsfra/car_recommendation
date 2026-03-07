const menuIcon = document.getElementById("menu-icon");
const sidebar = document.getElementById("sidebar");
const main = document.getElementById("main-content");

menuIcon.addEventListener("click", () => {

    sidebar.classList.toggle("open");
    main.classList.toggle("shift");

});