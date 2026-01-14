const toggleBtn = document.getElementById("themeToggle");

// Helper to update button text/icon based on state
function updateButtonText(isDark) {
  // Simple text swap with emoji for a polished feel
  toggleBtn.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
}

function setTheme(theme) {
  if (theme === "dark") {
    document.body.classList.add("dark");
    updateButtonText(true);
  } else {
    document.body.classList.remove("dark");
    updateButtonText(false);
  }
  localStorage.setItem("theme", theme);
}

// Check saved theme on load
const savedTheme = localStorage.getItem("theme");
const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Determine initial state: Saved > System Preference > Default Light
if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
  setTheme("dark");
} else {
  setTheme("light");
}

// Event Listener
toggleBtn.addEventListener("click", () => {
  const isDark = document.body.classList.contains("dark");
  // Toggle the opposite of current state
  setTheme(isDark ? "light" : "dark");
});