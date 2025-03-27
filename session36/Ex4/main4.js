let dark_mode = document.getElementsByClassName("dark-mode-toggle")[0];
let icon = document.getElementById("mode-icon");

let isDarkMode = localStorage.getItem("darkMode") === "true";

function applyDarkMode() {
    document.body.classList.add("dark-mode");
    icon.src = "https://cdn-icons-png.flaticon.com/512/169/169367.png";
    localStorage.setItem("darkMode", "true");
}

function applyLightMode() {
    document.body.classList.remove("dark-mode");
    icon.src = "https://img.icons8.com/ios-filled/50/sun.png";
    localStorage.setItem("darkMode", "false");
}

if (isDarkMode) {
    applyDarkMode();
} else {
    applyLightMode();
}

dark_mode.addEventListener("click", function () {
    isDarkMode = !isDarkMode;
    if (isDarkMode) {
        applyDarkMode();
    } else {
        applyLightMode();
    }
});