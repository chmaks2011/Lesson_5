function updateClock (time) {
    const now = new Date();
    const hours = String(now.getUTCHours() + time);
    const minutes = String(now.getUTCMinutes());
    const seconds = String(now.getUTCSeconds());


    console.log(`${hours}:${minutes}:${seconds}`);
}



//console.log(new Date());
//console.log(new Date().getUTCHours() + 2);
//console.log(new Date().getUTCMinutes());
//console.log(new Date().getUTCSeconds());

let timeZona;
timeZona = Intl.DateTimeFormat().resolvedOptions().timeZone;
let different_time_UTC = new Date().getTimezoneOffset() /60;

console.log(timeZona);
console.log(different_time_UTC);





updateClock(timeZona);
//updateClock(2);
//setInterval(updateClock(2), 1000);