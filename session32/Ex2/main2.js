let count = 0;
const button = document.getElementById('click-count');
const displayCount = document.getElementById('count');

button.onclick = function() {
    count++;
    displayCount.textContent = count;
};