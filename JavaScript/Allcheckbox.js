const allCheckboxes = document.querySelectorAll(".check-all");

allCheckboxes.forEach(allBox => {

    allBox.addEventListener("change", () => {

        if(allBox.checked){

            const group = allBox.closest(".filter-group");
            const checkboxes = group.querySelectorAll("input[type='checkbox']");

            checkboxes.forEach(box => {
                box.checked = true;
            });

        }

    });

});