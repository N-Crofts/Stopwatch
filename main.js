let h1 = document.getElementsByTagName('h1')[0],
    start = document.getElementById('start'),
    stop = document.getElementById('stop'),
    clear = document.getElementById('clear'),
    miliseconds = "00",
    seconds = "00",
    minutes = "00",
    t;

function add() {
    miliseconds++
    if (miliseconds <= 9) {
        miliseconds = ("0" + miliseconds)
    } 
    if (miliseconds >= 60) {
        miliseconds = ("0" + 0)
        seconds++
        if (seconds <= 9) {
            seconds = ("0" + seconds) 
        }
        if (seconds >= 60) {
            seconds = ("0" + 0)
            minutes++
            if (minutes <= 9) {
                minutes = ("0" + minutes)
            }
        }
                 
    }        
    h1.textContent = (minutes + ":" + seconds + ":" + miliseconds)
    timer()
}

function timer() {
    t = setTimeout(add, 10)
}

start.onclick = timer;
timer()

stop.onclick = function() {
    clearTimeout(t)
}

clear.onclick = function() {
    h1.textContent = "00:00:00";
    miliseconds = ("0" + 0);
    seconds = ("0" + 0);
    minutes = ("0" + 0);
}