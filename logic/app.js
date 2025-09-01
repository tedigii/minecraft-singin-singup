const mainDiv = document.getElementById("bc");
const button = document.getElementById("change");
let showingLoginForm = true;
button.addEventListener("click", () => {
    if (showingLoginForm) {
        fetch("./register/register.html")
            .then((response) => response.text())
            .then((html) => {
                mainDiv.innerHTML = html;
                showingLoginForm = false;
                toggleBtn();
            });
    } else {
        fetch("./singin.html")
            .then((response) => response.text())
            .then((html) => {
                mainDiv.innerHTML = html;
                showingLoginForm = true;
                toggleBtn();
            });
    }
});
function toggleBtn() {
    const toggle = document.getElementById("change");
    if (toggle) {
        toggle.addEventListener("click", () => {
            button.click();
        });
    }
}
