const Prando = require('prando');


function getNearestMonday() {
    const currentDate = new Date();
    var day = currentDate.getDay()
    var diff = currentDate.getDate() - day + (day == 0 ? -6:1); // adjust when day is sunday
    const nearestMonday  = new Date(currentDate.setDate(diff));
    var dd = nearestMonday.getDate();
    var mm = nearestMonday.getMonth() + 1;
    var yyyy = nearestMonday.getFullYear();
    return toddMMYYYY(dd,mm,yyyy);
}

function toddMMYYYY(dd,mm,yyyy){
    if(dd<10) 
    {
        dd='0'+dd;
    } 

    if(mm<10) 
    {
        mm='0'+mm;
    } 
    return dd+'/'+mm+'/'+yyyy;
}


function getNearestSunday(d) {
    d = new Date();
    var day = d.getDay(),
        diff = d.getDate() - day
    var sunday = new Date(d.setDate(diff));

    var dd = sunday.getDate();

    var mm = sunday.getMonth() + 1;

    var yyyy = sunday.getFullYear();

    return toddMMYYYY(dd,mm,yyyy);
}

function deterministicShuffle(arr,rng){
    for(let i = 0 ; i < arr.length ; i++){
        const j = rng.nextInt(0,i+1)
        const temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
    return arr
} 

module.exports = {
    getNearestMonday,
    getNearestSunday,
    deterministicShuffle
}