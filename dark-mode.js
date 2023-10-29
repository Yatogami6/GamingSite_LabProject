<script>
  const themeToggle = document.getElementById("theme-toggle");
  const themeStylesheet = document.getElementById("theme-stylesheet");

  themeToggle.addEventListener("click", () => {
    if (themeStylesheet.getAttribute("href") === "light.css") {
      themeStylesheet.href = "dark.css";
    } else {
      themeStylesheet.href = "light.css";
    }
  });
</script>
