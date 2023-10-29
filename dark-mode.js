<script>
  const themeToggle = document.getElementById("theme-toggle");
  const lightStylesheet = document.getElementById("light-stylesheet");
  const darkStylesheet = document.getElementById("dark-stylesheet");
  let isDarkMode = false;

  themeToggle.addEventListener("click", () => {
    if (isDarkMode) {
      lightStylesheet.disabled = false;
      darkStylesheet.disabled = true;
    } else {
      lightStylesheet.disabled = true;
      darkStylesheet.disabled = false;
    }

    isDarkMode = !isDarkMode;
  });
</script>
