
; (function () {
	function Box(parentElement) {
		this.x = 10;
		this.y = 10;
		this.speedx = 10;
		this.speedy = 10;
		this.width = 40;
		this.height = 40;
		this.element = null;
		this.parentElement = parentElement;
		var that = this;

		this.init = function () {
			var box = document.createElement('div');
			box.style.height = this.height + 'px';
			box.style.width = this.width + 'px';
			box.classList.add('box');
			this.parentElement.appendChild(box);
			this.element = box;
			this.element.onclick = this.boxClicked.bind(this);
			this.draw();

			return this;
		}

		this.setPostion = function (x, y) {
			this.x = x;
			this.y = y;
		}

		this.boxClicked = function () {
			console.log('boxClicked', this.width);
		}

		this.draw = function () {
			this.element.style.left = this.x + 'px';
			this.element.style.top = this.y + 'px';
		}

		this.move = function () {
			this.x += this.speedx;
			this.y += this.speedy;
			this.draw();
		}

		this.checkCollision = function (boxes) {
			// this.boxes = boxes;
			// console.log('inside checkdollision');
			if(this.x > 500 - this.width){
				this.speedx *= -1;
			}
			if(this.y > 500 - this.height){
				// this.speed = -this.speed;
				this.speedy *= -1 ;
			}
			if(this.x < 0){
				this.speedx *= -1;
			}
			if(this.y < 0){
				this.speedy *= -1;
			}
			this.move();
			
			

			for (var j = 0; j < boxes.length; j++) {
				if (this !== boxes[j]) {
					if (this.x < boxes[j].x + boxes[j].width &&
						this.x + this.width > boxes[j].x &&
						this.y < boxes[j].y + boxes[j].height &&
						this.y + this.height > boxes[j].y) {
						console.log('collision detected', j);
						// return true;
						this.speedx *= -1;
						this.speedy *= -1;
						this.move();
					}
					
				}
			}
			return true;
		}
	}

	function getRandomArbitrary(min, max) {
		return Math.random() * (max - min) + min;
	}

	function Game(parentElement, boxCount) {
		var boxes = [];
		gamethat = this;
		var MAX_WIDTH = 500 - 40;
		var MAX_HEIGHT = 500 - 40;
		this.parentElement = parentElement;
		this.boxCount = boxCount || 10;

		this.startGame = function () {
			for (var i = 0; i < this.boxCount; i++) {
				var box = new Box(parentElement).init();
				box.setPostion(
					getRandomArbitrary(0, MAX_WIDTH),
					getRandomArbitrary(0, MAX_HEIGHT)
				)
				box.draw();
				boxes.push(box);
			}

			setInterval(this.moveBoxes.bind(this), 100);
		}

		this.moveBoxes = function () {
			for (var i = 0; i < this.boxCount; i++) {
				// boxes[i].move();
				boxes[i].checkCollision(boxes);
			}
		}
	}

	var parentElement = document.getElementById('app');

	new Game(parentElement).startGame();
})();