<script>
  const themeToggle = document.getElementById("theme-toggle");
  const themeStylesheet = document.getElementById("theme-stylesheet");

  themeToggle.addEventListener("click", () => {
    if (themeStylesheet.getAttribute("href") === "MainLight.css") {
      themeStylesheet.href = "mainDark.css";
    } else {
      themeStylesheet.href = "MainLight.css";
    }
  });
</script>
