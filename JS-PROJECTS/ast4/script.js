(function () {
	function CarGame() {
		var carLane = document.querySelector('.road');
		var carLaneWrapper = document.querySelector('.gamebox');
		var car = document.querySelector('.myCar');
		var that = this;
		this.move = -500;
		this.left = 66;
		car.style.left = this.left + 'px';
		

		this.moveLane = function () {
			carLane.style.position = 'absolute';
			carLane.style.top = this.move + 'px';
			carLane.style.left = '0px';

			setInterval(function () {
				// console.log(that.move);
				that.move++;
				carLane.style.top = that.move + 'px';
				if (that.move >= -255) {
					that.move = -500;
				}
			}, 10);

		}
		window.addEventListener('keydown', function (e) {
			// console.log(e);
			// console.log(e.keyCode);
			if (e.keyCode === 37) {
				// console.log(car.style.left);
				if(that.left > 5){
					that.left -= 61;
					car.style.left = that.left + 'px';
				}
			}
			else if (e.keyCode === 39){
				if(that.left <127){
					that.left += 61; 
					car.style.left = that.left + 'px';
				}
			}
		});
	}
	var game = new CarGame();
	game.moveLane();
}
)();