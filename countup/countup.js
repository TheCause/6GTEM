var elements = document.getElementById('s');
var elementm = document.getElementById('m');
var elementh = document.getElementById('h');
var elementd = document.getElementById('d');

var seconds = new ProgressBar.Circle(elements, {
    duration: 200,
    color: "#DC242F",
    trailColor: "#ddd",
    strokeWidth: 5,
    trailWidth: 3
});
var minutes = new ProgressBar.Circle(elementm, {
    duration: 200,
    color: "#7FD0E5",
    trailColor: "#ddd",
    strokeWidth: 5,
    trailWidth: 3
});
var hours = new ProgressBar.Circle(elementh, {
    duration: 200,
    color: "#F5BB6A",
    trailColor: "#ddd",
    strokeWidth: 5,
    trailWidth: 3
});
var days = new ProgressBar.Circle(elementd, {
    duration: 200,
    color: "#4598C9",
    trailColor: "#ddd",
    strokeWidth: 5,
    trailWidth: 3
});

shortcode_date = '2017-05-07T20:00:00'
 
setInterval(function() {
    now = new Date(); 
    countTo = new Date(shortcode_date);
    difference = (now-countTo);
    var second = Math.floor((((difference%(60*60*1000*24))%(60*60*1000))%(60*1000))/1000*1);
    seconds.animate(second / 60, function() {
        seconds.setText("<span class=\"number\">" + second + "</span>" + "<span class=\"label\">Secondes</span>");
    });
}, 1000);
setInterval(function() {
    now = new Date(); 
    countTo = new Date(shortcode_date);
    difference = (now-countTo);
    var minute = Math.floor(((difference%(60*60*1000*24))%(60*60*1000))/(60*1000)*1);
    minutes.animate(minute / 60, function() {
        minutes.setText("<span class=\"number\">" + minute + "</span>" + "<span class=\"label\">Minutes</span>");
    });
}, 1000);
setInterval(function() {
    now = new Date(); 
    countTo = new Date(shortcode_date);
    difference = (now-countTo);
    var hour = Math.floor((difference%(60*60*1000*24))/(60*60*1000)*1);
    hours.animate(hour / 24, function() {
        hours.setText("<span class=\"number\">" + hour + "</span>" + "<span class=\"label\">Heures</span>");
    });
}, 1000);
setInterval(function() {
    now = new Date(); 
    countTo = new Date(shortcode_date);
    difference = (now-countTo);
    var day = Math.floor(difference/(60*60*1000*24)*1);
    days.animate(day / (day + 5), function() {
        days.setText("<span class=\"number\">" + day + "</span>" + "<span class=\"label\">Jours</span>");
    });
}, 1000);
