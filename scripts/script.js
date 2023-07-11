// elements
let playButton = document.getElementById("Play-button")
let container = document.getElementById("Center")
let oneButton = document.getElementById("one-button")
let oneButton1 = document.getElementById("one-button1")
let oneButton2 = document.getElementById("one-button2")
let choose = document.getElementById("choose")
let figureJumping = document.getElementById("figure-jumping")
let kb = document.getElementById("keyboard")
let countDown = document.getElementById("count-down")
let startCount = document.getElementById("start-count")
let worDdiv = document.getElementById("worddiv")
let gameEl = document.getElementById("game")
let highScore = document.getElementById("high-score")
let infoText = document.getElementById("info-text")
let input = document.getElementById("input")
let scoreEl = document.getElementById("score")
let timeEl = document.getElementById("time")
let gameOver = document.getElementById("game-over")
let menu = document.getElementById("menu")
let finalScore = document.getElementById("final-score")
let backButton = document.getElementById('backButton');
let backContainer = document.getElementById('backContainer');





///events
playButton.addEventListener("click", startGame)
oneButton.addEventListener("click", keyboardPart)
oneButton1.addEventListener("click", gamePart)
oneButton2.addEventListener("click", informationPart)
kb.addEventListener("click", keyboardPart)
menu.addEventListener("click", gameOverpart)
backButton.addEventListener('click', goBack);




function startGame() {
	container.style.display = "none"
	choose.style.display = "block"
    backContainer.style.display = "block"
} 
function back() {
	location.reload()
	backContainer.style.display = "block"
}

  
function goBack() {
	window.location.href = document.referrer;
  }
  
  
  
  
function keyboardPart() {
	let falseEl;
	choose.style.display = "none"
	figureJumping.style.display = "none"
	kb.style.display = "block"
	backContainer.style.display = "block"

     let oneLetter = randomLetter()
     let letterEl = document.getElementById(oneLetter)
     letterEl.classList.add("selected")
   
document.addEventListener("keyup", function(e){
	if(falseEl){
		setTimeout(() =>falseEl.classList.remove("hit"),50)
		
	}
	if(e.code == oneLetter){
		letterEl.classList.remove("selected")
		oneLetter = randomLetter()
		letterEl = document.getElementById(oneLetter)
	    letterEl.classList.add("selected")
   
	} else {
       falseEl = document.getElementById(e.code)
	   falseEl.classList.add("hit")
	}
})

}

function randomLetter() {
	let index = Math.floor(Math.random() * letter.length)
	return letter[index]
}
function gamePart() {
	choose.style.display = "none"
	figureJumping.style.display = "none"
	countDown.style.display = "block"
	worDdiv.style.display = "none"
let id=setInterval(function time(){ 
	if (startCount.innerHTML == 0) {
		worDdiv.style.display = "block"
		startCount.style.display = "none"
		clearInterval(id);
		countDown.style.display = "none"
		game()
		backContainer.style.display = "block"
        } else {
		startCount.innerHTML = startCount.innerHTML - 1;
         }
   }, 1000)	
}

function game() {
	let time = 5;
	let oneWord;
	let score = 0;
	let hScore;
	let num = setInterval


	if (!localStorage.score) {
		localStorage.score = 0
	}
	let id = setInterval(function () {
		if (time > 0) {
			time--
			if(time>=0)
			timeEl.innerHTML = time
		} else {
			clearInterval(num)
				gameOverpart()
		}
	}, 1000)
	hScore = localStorage.score
	oneWord = randomWord()
	infoText.innerHTML = oneWord
	highScore.innerHTML = localStorage.score
	input.onchange = function () {
		if (input.value == oneWord) {
			score++;
			time += 6
			timeEl.innerHTML = time
			if (score >= hScore) {
				console.log(highScore)
				hScore = score
				localStorage.score = hScore
				highScore.innerHTML = hScore
			}
			scoreEl.innerHTML = score
			input.value = ""
			oneWord = randomWord()
			infoText.innerHTML = oneWord
		} else {
			input.value = ""
			oneWord = randomWord()
			infoText.innerHTML = oneWord
			time -= 2
			if(time>=0)
			timeEl.innerHTML = time

		}
	}

	function randomWord() {
		let i = Math.floor(Math.random() * words.length)
		return words[i]


	}
}
function gameOverpart() {
	choose.style.display = "none"
	figureJumping.style.display = "none"
	gameOver.style.display = "block"
	worDdiv.style.display = "none"
	backContainer.style.display = "block"
	finalScore.innerHTML = scoreEl.innerHTML
}

function informationPart(){
	choose.style.display = "none"
	figureJumping.style.display = "none"
	countDown.style.display = "none"
	worDdiv.style.display = "block"
	backContainer.style.display = "block"
	let time = 0;
	let oneWord;
	let score2 = 0;
	let hScore;
	timeEl.innerHTML = time;

	if (!localStorage.score2 ) {
		localStorage.score2 = 0
	}
	let id = setInterval(function () {
		if (time < 60 ) {
			time++
			timeEl.innerHTML = time;
		} else if (time == 60) {
			clearInterval(id)
				gameOverpart()
		}
	}, 1000)
	hScore = localStorage.score2
	oneWord = randomWord()
	infoText.innerHTML = oneWord
	highScore.innerHTML = localStorage.score2
	input.onchange = function () {
		if (input.value == oneWord) {
			timeEl.innerHTML = time
			if (input.value == oneWord) {
				score2++; 
				scoreEl.innerHTML = score2;
			}
			if (score2 >= hScore) {
				console.log(highScore)
				hScore = score2
				localStorage.score2 = hScore
				highScore.innerHTML = hScore
			}
			scoreEl.innerHTML = score2
			input.value = ""
			oneWord = randomWord()
			infoText.innerHTML = oneWord
		} else {
			input.value = ""
			oneWord = randomWord()
			infoText.innerHTML = oneWord
			timeEl.innerHTML = time

		}
	
	}
}


function randomWord() {
	let i = Math.floor(Math.random() * words.length)
	return words[i]
}

