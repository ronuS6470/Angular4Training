var browserSize = 0;
var Interval;

function stop()
{
    clearInterval(Interval);
}

//JQuery for Green Signal
$(document).ready(function () {
    $("#green").click(function () {
        stop();
        $("#signalAction").attr("src", "images/Green-Signal.jpg");
        //var $car = $('#car').val();
        //alert($car);
        var car = document.getElementById("car");
        var leftOffset = 0;
        function move() {
            car.style.marginLeft = leftOffset + "px";
            leftOffset += 2;

            if (leftOffset > window.innerWidth) {
                leftOffset = 0;
            }

        };
        Interval = setInterval(move, 5);
    });
});

//JQuery for Yellow Signal
$(document).ready(function () {
    $("#yellow").click(function () {
        stop();
        $("#signalAction").attr("src", "images/Yellow-Signal.jpg");
        var car = document.getElementById("car");
        var leftOffset = 0;
        function move() {
            car.style.marginLeft = leftOffset + "px";
            leftOffset += 2;
            if (leftOffset > window.innerWidth) {
                leftOffset = 0;
            }
        };
        Interval = setInterval(move, 25);
    });
});

//JQuery for Red Signal
$(document).ready(function () {
    $("#red").click(function () {
        stop();
        $("#signalAction").attr("src", "images/Red-Signal.jpg");
    });
});

