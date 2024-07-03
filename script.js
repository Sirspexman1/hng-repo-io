const displayTime = document.getElementById("currentTimeUTC");
const displayDay = document.getElementById("currentDay");

function updateTime() {
  const date = new Date();
  const formattedTime = date.toLocaleTimeString("en-GB", { timeZone: "UTC" });
  const day = date.toLocaleDateString("en-US", { weekday: "long" });

  document.getElementById("time").textContent = formattedTime;
  document.getElementById("day").textContent = day;
}

setInterval(updateTime, 1000);