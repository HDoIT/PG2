/**
 * @author le huu do
 */
(function ($) {
    "use strict";
      $('.sakura-falling').sakura();
})(jQuery);
// $(".dialog-cr").css({display: "none"});

$(document).on('click', function(){
    document.getElementById("my_audio").play();
});
$(".btn-yes").on( "click", function() {
    // $(".dialog-cr").show();
    $(".btn-no").hide();
    $(".y11").hide();
    $(".y12").show();
    window.location.href = "https://youaremine0710.netlify.app/"
} );


// btnNo.onclick = () => {
//     btnNo.style.top = 100 + "px";
//     btnYes.style.top = 280 + "px";
//   };

//   btnNo.onmouseover = (e) => {
//     var x = Math.random() * e.relatedTarget.clientHeight * 0.9;
//     var y = Math.random() * e.relatedTarget.clientWidth * 0.9;
//     btnNo.style.top = x + "px";
//     btnNo.style.right = y + "px";
//   };

$(".btn-no").on( "click", function() {
    $(".btn-no").offset().top = 100 + "px";
    // btnYes.style.top = 280 + "px";
} );

$(".btn-no").on( "mouseover", function(e) {
    var x = Math.random() * e.relatedTarget.clientHeight * 0.9;
    var y = Math.random() * e.relatedTarget.clientWidth * 0.9;
    console.log(x);
    
    $(".btn-no").css("top", x + "px");
    $(".btn-no").css("right", y + "px");
} );
// Set the date we're counting down to
var countDownDate = new Date("Feb 30, 2024 18:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // // Output the result in an element with id="demo"
    // document.getElementById("time").innerHTML = "<div class='container'><div class='days block'>"+ days + "<br>Days</div>" + "<div class='hours block'>" + hours + "<br>Hours</div>" + "<div class='minutes block'>" + minutes + "<br>Minutes</div>" + "<div class='seconds block'>" + seconds + "<br>Seconds</div></div>";
    document.getElementById("time").innerHTML = "This is a contract only!";
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("time").innerHTML = "This is a contract only!";
    }
}, 1000);

// being a bit cool :p  
var styles = [
    'background: linear-gradient(#D33106, #571402)'
    , 'border: 4px solid #3E0E02'
    , 'color: white'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 0.3)'
    , 'box-shadow: 0 2px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
    , 'line-height: 40px'
    , 'text-align: center'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

var styles1 = [
    'color: #FF6C37'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)'
    , 'line-height: 40px'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

var styles2 = [
    'color: teal'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)'
    , 'line-height: 40px'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');


$(function() {
	var numberOfStars = 200;
	
	for (var i = 0; i < numberOfStars; i++) {
	  $('.congrats').append('<div class="blob fa fa-star ' + i + '"></div>');
	}	

	animateText();
	
	animateBlobs();
});

$('.congrats').click(function() {
	reset();
	
	animateText();
	
	animateBlobs();
});

function reset() {
	$.each($('.blob'), function(i) {
		TweenMax.set($(this), { x: 0, y: 0, opacity: 1 });
	});
	
	TweenMax.set($('h1'), { scale: 1, opacity: 1, rotation: 0 });
}

function animateText() {
		TweenMax.from($('h1'), 0.8, {
		scale: 0.4,
		opacity: 0,
		rotation: 15,
		ease: Back.easeOut.config(4),
	});
}
	
function animateBlobs() {
	
	var xSeed = _.random(350, 380);
	var ySeed = _.random(120, 170);
	
	$.each($('.blob'), function(i) {
		var $blob = $(this);
		var speed = _.random(1, 5);
		var rotation = _.random(5, 100);
		var scale = _.random(0.8, 1.5);
		var x = _.random(-xSeed, xSeed);
		var y = _.random(-ySeed, ySeed);

		TweenMax.to($blob, speed, {
			x: x,
			y: y,
			ease: Power1.easeOut,
			opacity: 0,
			rotation: rotation,
			scale: scale,
			onStartParams: [$blob],
			onStart: function($element) {
				$element.css('display', 'block');
			},
			onCompleteParams: [$blob],
			onComplete: function($element) {
				$element.css('display', 'none');
			}
		});
	});
}