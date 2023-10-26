// JavaScript to toggle between light and dark mode
document.getElementById("lightMode").addEventListener("click", function() {
    document.body.classList.add("light-mode");
    document.getElementById("lightMode").style.display = "none";
    document.getElementById("darkMode").style.display = "block";
});

document.getElementById("darkMode").addEventListener("click", function() {
    document.body.classList.remove("light-mode");
    document.getElementById("darkMode").style.display = "none";
    document.getElementById("lightMode").style.display = "block";
});
