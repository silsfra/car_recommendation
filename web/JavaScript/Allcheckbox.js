const allCheckboxes = document.querySelectorAll(".check-all");

allCheckboxes.forEach(allBox => {

    const group = allBox.closest(".filter-group");
    const checkboxes = group.querySelectorAll("input[type='checkbox']");

    // ตอนเริ่มต้น
    allBox.checked = true;
    checkboxes.forEach(box => {
        box.checked = true;
    });

    // ตอนกด All
    allBox.addEventListener("change", () => {

        if(allBox.checked){
            checkboxes.forEach(box => {
                box.checked = true;
            });
        }

    });

});