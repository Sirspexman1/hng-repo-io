function updateTimeAndDay() {
    const timeElement = document.getElementById('time');
    const dayElement = document.getElementById('day');
    const now = new Date();
    const hours = String(now.getUTCHours()).padStart(2, '0');
    const minutes = String(now.getUTCMinutes()).padStart(2, '0');
    const seconds = String(now.getUTCSeconds()).padStart(2, '0');
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDay = days[now.getUTCDay()];

    timeElement.textContent = `${hours}:${minutes}:${seconds}`;
    dayElement.textContent = currentDay;
}

// Update the time and day every second
setInterval(updateTimeAndDay, 1000);

// Initial call to set the time and day immediately on load
updateTimeAndDay();