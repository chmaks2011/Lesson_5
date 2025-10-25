function updateClock (time) {
    const now = new Date();
    const hours = String(now.getUTCHours() + 2).padStart(2, '0');
    const minutes = String(now.getUTCMinutes()).padStart(2, '0');
    const seconds = String(now.getUTCSeconds()).padStart(2, '0');

    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;

    //console.log(`${hours}:${minutes}:${seconds}`);

    const selectTimeZona = document.getElementById('timeZona')
    timeZona = parseInt(selectTimeZona.value, 10);
    //selectTimeZona.textContent = timeZona;
    selectTimeZona.addEventListener('change', updateClock(timeZona))

}



//console.log(new Date());
//console.log(new Date().getUTCHours() + 2);
//console.log(new Date().getUTCMinutes());
//console.log(new Date().getUTCSeconds());

let timeZona;
timeZona = Intl.DateTimeFormat().resolvedOptions().timeZone;
let different_time_UTC = new Date().getTimezoneOffset() /60;

//console.log(timeZona);
//console.log(different_time_UTC);





//updateClock(timeZona);

//updateClock(2);
//setInterval(updateClock(2), 1000);
//setInterval(updateClock(timeZona), 1000);
setInterval(updateClock, 1000);