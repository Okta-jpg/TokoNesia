function startCountdown(duration, displays) {
    var timer = duration, hours, minutes, seconds;
    setInterval(function () {
        hours = parseInt(timer / 3600, 10);
        minutes = parseInt((timer % 3600) / 60, 10);
        seconds = parseInt(timer % 60, 10);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        var timeString = hours + " : " + minutes + " : " + seconds;
        
        // Update all display elements
        displays.forEach(function(display) {
            display.textContent = timeString;
        });

        if (--timer < 0) {
            timer = 0; // Stop at 00:00:00
        }
    }, 1000);
}

window.onload = function () {
    var twoHours = 60 * 60 * 2; // 2 hours in seconds
    var displays = [
        document.querySelector('#countdown'),
        document.querySelector('#countdown1')
    ];
    startCountdown(twoHours, displays);
};