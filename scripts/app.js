

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
const livesDisplay = document.getElementById('lives-display')
const scoreDisplay = document.getElementById('score-display')
const highScoreDisplay = document.querySelector('.high-score')
const grid = document.querySelector('.grid')
const cells = []




// ! Variables
const startPos = 94
let currentPos = startPos
let live = 1
let score = 0
let gameInterval
let level = 1
const maxLevels = 5

let gameActive = false
let moveCars
let removeCar
let checkCollisions
let audio

const width = 10 // this is both the width and height of our board
const cellCount = width * width // this variable represents the number of cells in our grid
const carImage = '<img class="car" src="./assets/car.png">'
const carSpeed = 200 // Adjust the speed as needed
const carPositions = [19, 39, 69, 89]
const carEndPosition = [10, 30, 60, 80]
let hitByCar = false

let carInterval
const carDirection = -1  // 1 for right, -1 for left

function resetGame() {
  clearInterval(gameInterval)
  clearInterval(carInterval)
  removeFrog()
  removeCars()
  score = 0
  scoreDisplay.innerText = score
  live = 1
  livesDisplay.innerText = '❤️'
  level = 1 // Reset the level
  gameActive = false
}

// i added a loop for the music dont stop during the game and stop when the player win or lose
function playAudio() {
  audio = new Audio('cowboy.mp3')
  audio.loop = true // Set loop to true to make the music play continuously
  audio.play()
}

// i added a function for the start button be inative while the player is playing
function updateStartButton() {
  startBtn.disabled = gameActive
}

function startGame() {
  if (!gameActive) {
    // Disable the start button
    startBtn.disabled = true
    resetGame()
    gameActive = true
    playAudio()
    addFrog(startPos)
    moveCar()
    gameInterval = setInterval(() => {
      checkForCollision()
      if (currentPos < width) {
        if (level >= maxLevels) {
          endGame(true) // End the game with a victory message
        } else {
          alert(`Level ${level} passed!, You got 100 points extra`)
          level++
          score += 100 // Increment the score by 100
          scoreDisplay.innerText = score
          removeFrog()
          currentPos = startPos
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
    if (position === currentPos && !hitByCar) {
      hitByCar = true // Flag that the frog has been hit by a car
      removeFrog()
      live--
      livesDisplay.innerText = '❤️'.repeat(live) + '💔' // Update the lives display
      if (live === 0) {
        endGame(false) // Indicate game over (not a victory)
      } else {
        addFrog(startPos)
      }
    }
  })
  hitByCar = false // Reset the flag after the move
}



function createGrid() {
  for (let i = 0; i < cellCount; i++) {
    const cell = document.createElement('div')
    cell.id = i
    cell.style.width = `${100 / width}%`
    grid.append(cell)
    cells.push(cell)
  }
}

let currentHighScore

// ! Executions
const frogImage = '<img class="frog" src="./assets/froggy.png">'
console.log(frogImage)


function addFrog() {
  if (gameActive) {
    cells[currentPos].classList.add('frog')

    if (currentPos < width) {
      if (level >= maxLevels) {
        endGame(true) // End game with a victory message
        if (score > currentHighScore) {
          localStorage.setItem('high-score', score)
          highScoreDisplay.innerText = score
        }
      }
    }
  }
}



function removeFrog() {
  const cell = cells[currentPos] 
  cell.innerHTML = cell.innerHTML.replace(frogImage, '')
  cell.classList.remove('frog') // Remove the 'frog' class
}

// On keypress update cat position, remove the frog before the game start
function keyPress(evt) {
  if (gameActive) {
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
}

//  end game now with alert for when the player go to the level 5
function endGame(isVictory = false) {
  clearInterval(gameInterval)
  clearInterval(carInterval)
  removeFrog()
  gameActive = false

  startBtn.disabled = false

  // Stop the audio
  if (audio) {
    audio.pause()
  }

  if (isVictory) {
    alert(`Congratulations! You've reached level 5 and you smashed my game with a score of ${score} points!`)
  } else {
    alert(`GAME OVER! Your score: ${score} points`)
  }

  resetGame()
}



// ! Events
// Keypress events
// These events happen on the document rather than on an element

document.addEventListener('keydown', keyPress)
startBtn.addEventListener('click', startGame)



// ! Page Load
createGrid()
highScoreDisplay.innerText = localStorage.getItem('high-score')