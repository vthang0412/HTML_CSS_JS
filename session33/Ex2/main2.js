const textarea = document.querySelector("textarea");
const checkCount = document.getElementById("checkCount");
const button = document.getElementById("click");

button.addEventListener("click", () => {
    const textLength = textarea.value.length;
    checkCount.textContent = textLength;
});