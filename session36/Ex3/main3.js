document.body.style.backgroundColor = localStorage.getItem("backgroundColor") || "white";
const buttons = document.querySelectorAll(".color-btn");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const selectedColor = button.getAttribute("data-color");
        document.body.style.backgroundColor = selectedColor; 
        localStorage.setItem("backgroundColor", selectedColor); 
    });
});