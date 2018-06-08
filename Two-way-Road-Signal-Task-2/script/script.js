var hstartInterval;
var vstartInterval; 

$(document).ready(function(){
	$("#vericalroad").css("height", $(window).height());
});

$(document).ready(function(){
	$("#horizantalroad").css("width", $(window).innerWidth);
});

function hstop() // Stop the Interval
{
    clearInterval(hstartInterval);
}

function vstop() // Stop the Interval
{
    clearInterval(vstartInterval);
}



//JQuery for Red Signal Button
$(document).ready(function ($) {
    $("#btnred").click(function () {
        hstop();
        $("#TrafficSignal").attr("src", "images/Red-Signal.jpg");
        
    });
});



//JQuery for Green Signal Button
$(document).ready(function ($) {
    $("#btngreen").click(function () {
        hstop();
        $("#TrafficSignal").attr("src", "images/Green-Signal.jpg");
        var car = document.getElementById("horizantalcar");
        var leftOffset = 0;
        function move() {
            car.style.marginLeft = leftOffset + "px";
            leftOffset += 2;
            
            if (leftOffset > window.innerWidth) {
                leftOffset = 0;
            }

        };
        hstartInterval = setInterval(move, 1);
    }); 
});

//JQuery for Yellow Signal Button
$(document).ready(function ($) {
    $("#btnyellow").click(function () {
        hstop();
        $("#TrafficSignal").attr("src", "images/Yellow-Signal.jpg");
        
        var car = document.getElementById("horizantalcar");
        var leftOffset = 0;
        function move() {
            car.style.marginLeft = leftOffset + "px";
            leftOffset += 2;
            if (leftOffset > window.innerWidth) {
                leftOffset = 0;
            }
        };
        hstartInterval = setInterval(move, 20);
    });
});

//JQuery for Red Signal Button
$(document).ready(function ($) {
    $("#sbtnred").click(function () {
        vstop();
        $("#TrafficSignals").attr("src", "images/Red-Signal.jpg");
    });
});



//JQuery for Green Signal Button
$(document).ready(function ($) {
    $("#sbtngreen").click(function () {
        vstop();
        $("#TrafficSignals").attr("src", "images/Green-Signal.jpg");
        var car = document.getElementById("vericalcar");
        
        var leftOffset = 0;
        function move() {
            car.style.marginTop = leftOffset + "px";
            leftOffset += 2;
          
                      

             if (leftOffset > window.innerHeight) {
                leftOffset = 0;
             }
        };
        vstartInterval = setInterval(move,5);

        


    }); 
});

//JQuery for Yellow Signal Button
$(document).ready(function ($) {
    $("#sbtnyellow").click(function () {
       vstop();
        $("#TrafficSignals").attr("src", "images/Yellow-Signal.jpg");
        
        var car = document.getElementById("vericalcar");
        var leftOffset = 0;
        function move() {
            car.style.marginTop = leftOffset + "px";
            leftOffset += 2;
          
                      

             if (leftOffset > window.innerHeight) {
                leftOffset = 0;
             }
        };
        vstartInterval = setInterval(move, 20);


    }); 
});