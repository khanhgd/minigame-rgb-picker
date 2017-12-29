var squares = document.querySelectorAll(".square");
var btnReplay = document.querySelector("#replay");
var msg = document.querySelector("#msg");
var pColor= document.querySelector("#pColor");
var banner = document.querySelector("#banner");
var urPoints = document.querySelector("#points");
// var btnEasy = document.querySelector("#btnEasy");
// var btnHard = document.querySelector("#btnHard");


//BTN replay
btnReplay.addEventListener("click",function(){
	location.reload();
});
btnReplay.addEventListener("mouseover",function(){
	btnReplay.style.background = "#337ab7";
});
btnReplay.addEventListener("mouseout",function(){
	btnReplay.style.background = "#eff4fc";
});

// //BTN easy
// btnEasy.addEventListener("click",function(){
// 	this.classList.add("selected");
// 	btnHard.classList.remove("selected");
// 	play(6);
// });
// //BTN hard
// btnHard.addEventListener("click",function(){
// 	this.classList.add("selected");
// 	btnEasy.classList.remove("selected");
// 	play(6);
// });

//squares
function play(gamelvl){
	var colors = generateRandColors(gamelvl);
	var pickedColor  = colors[randomInt(0,gamelvl-1)];
	pColor.textContent = pickedColor;

	for (var i = 0; i < colors.length; i++) {
		if(colors[i]){
			squares[i].style.background = colors[i];
		}else{
			squares[i].style.display = "none";
		}

		squares[i].addEventListener("click",function(){
			var checkedColor = this.style.background;

			if(checkedColor === pickedColor){
				msg.textContent = "BINGO!";
				changeAllColor(pickedColor);
				setTimeout(function(){ location.reload(); }, 3000);
			}else{
				this.style.background = "#232323";
				msg.textContent = "Wrong..!";
			}
		});
	};
}


function changeAllColor(color){
	//loop all squares,change color
	banner.style.background = color;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = color;
	};
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function generateRandColors(num){
	//gen arr
	var arr = [];
	//add rand color->arr
	for (var i = 0; i < num; i++) {
		var r = randomInt(0,255);
		var g = randomInt(0,255);
		var b = randomInt(0,255);
		randCorlor = "rgb("+r+", "+g+", "+b+")";
		arr[i] = randCorlor;
	};
	//return arr
	console.log(arr);
	return arr;
}

play(6);