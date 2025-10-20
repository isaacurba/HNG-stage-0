document.addEventListener("DOMContentLoaded", () => {
  const timeElement = document.getElementById("user-time");

  const updateTime = () => {
    timeElement.textContent = `Current Time: ${Date.now()} ms`;
  };

  updateTime(); // show immediately
  setInterval(updateTime, 1000); // update every second
});
