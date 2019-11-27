var imageWrapper = document.querySelector('.carousel-image-wrapper');
var images = document.querySelectorAll('.images');
var leftArrow = document.querySelector('#left-arrow img');
var rightArrow = document.querySelector('#right-arrow img');
var dots = document.querySelector('.dots');
var dot1 = document.querySelector('#dot1');
var dot2 = document.querySelector('#dot2');
var dot3 = document.querySelector('#dot3');

var index = 0;
var WIDTH = 960;




var transitionSlideRight = function(indexStart){
	var slidePixel = indexStart * WIDTH;
	var innerInterval = setInterval(function(){
		if (slidePixel > (images.length) * WIDTH){
			index = 0;
			imageWrapper.style.left = -index * WIDTH + 'px';
			clearInterval(innerInterval);
		}
		else if (slidePixel <= (indexStart + 1) * WIDTH){
			imageWrapper.style.left = -slidePixel + 'px';
			slidePixel += 5;
		}
	});
	index++;
	// if (slidePixel === images.length * WIDTH){
	// 	clearInterval(innerInterval);
	// 	index = -1;
	// 	imageWrapper.style.left = -index * WIDTH + 'px';
	// }
	// clearInterval(innerInterval);
};

var transitionSlideLeft = function(indexStart){
	var slidePixel = indexStart * WIDTH;
	setInterval(function(){
		if (slidePixel >= (indexStart - 1) * WIDTH){
			imageWrapper.style.left = -slidePixel + 'px';
			slidePixel -= 10;
		}
	});
	index--;
};

setInterval(function () {
	if (index < images.length) {
			// imageWrapper.style.left = -index * WIDTH + 'px';
			transitionSlideRight(index);
			// index++;
	}
	if (index > images.length - 1) {
			index = 0;
			imageWrapper.style.left = -index * WIDTH + 'px';
	}
},4000);


leftArrow.onclick = function () {
    if (index > 0) {
        // index--;
				// imageWrapper.style.left = -index * WIDTH + 'px';
				transitionSlideLeft(index);
    }
    else if (index === 0) {
        index = images.length -1;
        imageWrapper.style.left = -index * WIDTH + 'px';
    }
};

rightArrow.onclick = function () {
    if (index < (images.length - 1)) {
        // index++;
				// imageWrapper.style.left = -index * WIDTH + 'px';
				transitionSlideRight(index);
    }
    else if (index === (images.length - 1)) {
        index = 0;
				imageWrapper.style.left = -index * WIDTH + 'px';
				// transitionSlide(index);
    }
};



dots.style.position = 'absolute';
dots.style.bottom = '10px';
dots.style.left = '480px';


// images.forEach(function (value,index) {
//     var dot = document.createElement('div');
//     dot.setAttribute('class','dot' + index);
//     dot.style.width = '10px';
//     dot.style.height = '10px';
//     dot.style.border = '1px solid white';
//     dot.style.borderRadius = '100%';
//     dot.style.background = 'crimson';
//     dot.style.float = 'left';
//     dot.style.marginRight = '5px';
//     dots.appendChild(dot);
// });


dot1.onclick = function(){
    index = 0;
        imageWrapper.style.left = -index * WIDTH + 'px';
};

dot2.onclick = function(){
    index = 1;
        imageWrapper.style.left = -index * WIDTH + 'px';
};

dot3.onclick = function(){
    index = 2;
        imageWrapper.style.left = -index * WIDTH + 'px';
};