document.getElementById('startBtn').addEventListener('click', function() {

    let userName = prompt("Будь ласка, введіть ваше ім’я:", "Гість");
    
    if (userName !== null && userName.trim() !== "") {
        alert(`Привіт, ${userName}! Раді вас бачити.`);
    } else {
        alert("Привіт, Незнайомцю!");
    }
});