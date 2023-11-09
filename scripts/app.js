

// ! Elements
// .current-score (this will be the span tracking current score made)
// .progress ( i will try add a level count))
// .amount-life-remaining (span that tracks the amount left life)
// button (start the game)
// obstacle for the frogger pass
// transition for the elements that need to have as obstacle


// ! Variables
// score amount (number) - every time he pass a level, he get 100 points
// lives - will have just 3 lives per game (every time something hit, he lose's a life)

// completion (number) - the final score from the user (alert windown)

// ! Grid
// * Making a grid in JS

// This function will create all of the grid cells and append them to the existing grid

// Set width and height of the div cells, grid will 6 rows for the levels

// will be a grid without cell number visible, for track if he still can go up, left, down

// obstacle in 3 different lines are my plan, for be more interesting

// i will also add 2 lines that he can wait for the best moment to cross.


// ! Executions


// function for make he lost one life when he hit something 

// On keypress (up, down, left, right) update frogger position

// when the botton start be clicked, the game will start
// life is set in 3 and score on 0
// function for clean the lives

// player will be able to move for sides, up and down

// the obstacle will start to run, no limite time will have for he complete it

// use classes for make the function

// storage in array (numbers)
// watch the videos from mole.

// every time he pass a level, uptade the screen with 100 points

// if he pass without be hited, he go to next level, 
// else, he lose a life if be hit

// wait stage is for he wait for he go for his second move

// he can move for any direction to found the best gap 
// (need to have second in space between the obstacules for he be able to pass it)

// if he  hit the final stage, he go to the next level.
// else he system check if he still have lifes
// if yes, he continue the game
// else he lose and game finish
// window will pop up and inform that the game finished

// update the currentlevel to reflect the new level reached value


// ! Events
// Keypress events


// ! Elements
// #start
const startBtn = document.getElementById('start')

// #lives-display
const livesDisplay = document.getElementById('lives-display')
// #score-display
const scoreDisplay = document.getElementById('score-display')
// High score
const highScoreDisplay = document.querySelector('.high-score')

const grid = document.querySelector('.grid')
const cells = []
const car = ['car']


// ! Variables
const startPos = 94
let currentPos = startPos
let lives = 3
let score = 0
let gameInterval
let gameActive = false
let moveCars
let removeCar
let checkCollisions

const width = 10 // this is both the width and height of our board
const cellCount = width * width // this variable represents the number of cells in our grid
const carImage = '<img class="car" src="./assets/car.png">'
const carSpeed = 200 // Adjust the speed as needed
const carPositions = [19, 39, 69, 89]
const carEndPosition = [10, 30, 60, 80]


let carInterval
const carDirection = -1  // 1 for right, -1 for left


function resetVariables() {
  clearInterval(gameInterval)
  removeCars() // Change from removeCar to removeCars
  score = 0
  scoreDisplay.innerText = score
  lives = 3
  livesDisplay.innerText = '❤️❤️❤️'
}


function playAudio() {
  const audio = document.createElement('audio')
  audio.src = 'cowboy.mp3'
  audio.play()
}

function startGame(evt) {
  if (!gameActive) {
    resetVariables()
    gameActive = true
    playAudio()
    removeCar()
    addCars()
    moveCar()
    gameInterval = setInterval(() => {
      const crash = true // Add logic to determine if frog was crashvby car
      if (crash) {
        lives--
        livesDisplay.innerText = lives ? '❤️'.repeat(lives) : '💔'
        if (lives === 0) {
          endGame()
        } else {
          addFrog(startPos)
        }
      }
    }, 1) 
  }
}


function addCars() {
  carPositions.forEach((carPositions) => {
    cells[carPositions].classList.add('car')
  })
}

const carStartPosition = [19, 39, 69, 89]
function removeCars() {
  carPositions.forEach((position, index) => {
    // Remove the 'car' class from the current position
    cells[position].classList.remove('car')

    // Check if the car has reached its end position
    if (position === carEndPosition[index]) {
      // If so, reset the car to its starting position
      carPositions[index] = carStartPosition[index]
    } else {
      const randomiseCarMovements = Math.floor(Math.random() * 2)
      if (randomiseCarMovements === 0){
        carPositions[index] += carDirection
      }
      // Otherwise, move the car one step forward (you need to define carDirection)
      
    }

    // Add the 'car' class to the new position
    cells[carPositions[index]].classList.add('car')
  })
}



function moveCar() {
  carInterval = setInterval(() => {
    removeCars()
    addCars()
  }, carSpeed)
}

function checkForCollision() {
  carPositions.forEach(position => {
    if (position === currentPos) {
      // Collision detected
      removeFrog()
      lives--
      livesDisplay.innerText = lives ? '❤️'.repeat(lives) : '💔'
      if (lives === 0) {
        endGame()
      } else {
        addFrog(startPos)
      }
    }
  })
}



// This function will create all of the grid cells and append them to the existing grid
function createGrid() {
  for (let i = 0; i < cellCount; i++) {
    const cell = document.createElement('div')
    cell.id = i
    cell.style.width = `${100 / width}%`
    grid.append(cell)
    cells.push(cell)
  }
  addFrog(startPos)
  addCars() // Add cars as obstacles
}



// ! Executions
const frogImage = '<img class="frog" src="./assets/froggy.png">'
console.log(frogImage)

function addFrog() {
  cells[currentPos].classList.add('frog')
  
  // Check for collision with a car
  if (cells[currentPos].classList.contains('car')) {
    // Remove a life
    lives -= 1
    livesDisplay.innerText = lives ? '❤️'.repeat(lives) : '💔'
    if (lives === 0) {
      endGame()
    }
  }
  
  // Check for crossing the street
  if (currentPos < width) {
    // Increase the score when the frog crosses the street
    score += 100
    scoreDisplay.innerText = score
    removeFrog()
  
    // Check for the high score and update it if necessary
    const currentHighScore = parseInt(localStorage.getItem('high-score')) || 0
    if (score > currentHighScore) {
      localStorage.setItem('high-score', score)
      highScoreDisplay.innerText = score
    }
  
    // Reset the frog's position
    currentPos = startPos
  }
}


function removeFrog() {
  const cell = cells[currentPos] // Assuming cells is an array of HTML elements
  cell.innerHTML = cell.innerHTML.replace(frogImage, '')
  cell.classList.remove('frog') // Remove the 'frog' class
}

// On keypress update cat position
function keyPress(evt) {
  const key = evt.code

  removeFrog()

  if (key === 'ArrowUp' && currentPos >= width) {
    currentPos -= width
  } else if (key === 'ArrowDown' && currentPos + width < cellCount) {
    currentPos += width
  } else if (key === 'ArrowLeft' && currentPos % width !== 0) {
    currentPos--
  } else if (key === 'ArrowRight' && currentPos % width !== width - 1) {
    currentPos++
  }

  addFrog()
}



function endGame() {
  // Clear gameInterval
  clearInterval(gameInterval)

  // Alert game over
  setTimeout(() => {
    alert(`GAME OVER!!!!\nYou scored ${score} points!`)
    removeFrog()
    // Set game to inactive
    gameActive = false
  })
}


// ! Events
// Keypress events
// These events happen on the document rather than on an element

document.addEventListener('keydown', keyPress)
startBtn.addEventListener('click', startGame)



// ! Page Load
createGrid()
moveCar()

