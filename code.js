const spanMenu = document.querySelectorAll("section[data-purpose='sidebar'] div.ud-btn");
spanMenu.forEach((section) => {
    const isClosed = section.parentElement.querySelector("span").getAttribute("data-checked") !== "checked";
    if (isClosed) section.click();
});
const checkboxes = document.querySelectorAll("input[type='checkbox']");
checkboxes.forEach((checkbox) => {
    if (!checkbox.checked) {
        checkbox.removeAttribute("disabled");
        checkbox.click();
    }
})
