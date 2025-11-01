const clockElement = document.getElementById('clock');
const selectTimeZona = document.getElementById('timeZona')
const local_timeZone = document.getElementById('local_timeZone')

//function updateClock (time) {
function updateClock () {
    const now = new Date();

    const timeZona = parseInt(selectTimeZona.value, 10)

    const hours = String(now.getUTCHours() + timeZona).padStart(2, '0');
    const minutes = String(now.getUTCMinutes()).padStart(2, '0');
    const seconds = String(now.getUTCSeconds()).padStart(2, '0');

    clockElement.textContent = `${hours}:${minutes}:${seconds}`;

    local_timeZone.textContent = Intl.DateTimeFormat().resolvedOptions().timeZone;
}


setInterval(updateClock, 1000);
selectTimeZona.addEventListener('change', updateClock)