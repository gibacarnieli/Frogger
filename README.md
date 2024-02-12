# Frogger


## Sections
Description:

Frogger is an arcade game where the objective is to navigate through traffic without being hit by obstacles. If you are fortunate enough to reach the final destination, where the winners are, you will score 100 points for each successful attempt, until you exhaust your lives.

## Deployment Link
[GitHub Pages](https://gibacarnieli.github.io/Frogger/).

## Timeframe & Working Team

I had one week to build this grid-based game using JavaScript, HTML, and CSS. I chose to create the standard version of Frogger without altering the characters of the game. I worked on it independently, and my version of the game doesn't have levels; instead, it relies on accumulating points.
To navigate through the game, you must use the keyboard arrow buttons while crossing the street.

## Technologies Used

HTML
Grid with 100 cells, 10 rows and 10 columns.
‘Start’ button for game start and the audio start.
Audio Element for background music.

CSS
Grid using flex-box

JavaScript
keyUp event to move the characters.
Interval to move obstacles.
Click events to start the game.

## Brief

The brief from GA was to build a game, able to move around the grid and able to score points. Could it be 1 player or more. We had a list of alternatives and I chose the frogger.
The requirements to the game should be playable for one player at least, and have obstacles that will be auto generated. 
The main difficulty here was to animate the obstacles and detect the collisions. I was able to do it using the tools that I had learned in Javascript to detect and also change the directions while you are playing.

## Planning
<img width="652" alt="github" src="https://github.com/gibacarnieli/Frogger/assets/113900097/d7fd35ac-ec18-41ca-b8e0-1aa3e782ccf7">

### Pseudocode

 ! Elements
 current-score (this will be the span tracking current score made)
 progress ( i will try add a level count))
 amount-life-remaining (span that tracks the amount left life)
 button (start the game)
 obstacle for the frogger pass
 transition for the elements that need to have as obstacle


 ! Variables
 score amount (number) - every time he passes a level, he get 100 points
 lives - will have just 3 lives per game (every time something hit, he loses a life)


completion (number) - the final score from the user (alert window)


! Grid
* Making a grid in JS


 This function will create all the grid cells and append them to the existing grid


 Set width and height of the div cells, grid will 6 rows for the levels


 will be a grid without cell number visible, for track if he still can go up, left, down


 obstacle in 3 different lines are my plan, for be more interesting

 I will also add 2 lines that he can wait for the best moment to cross.

 ## Build / Code Process

 Day 1 – I began by contemplating how to approach my project and worked on creating my wireframe. I searched for and downloaded the sound and images I wanted for my background while also identifying potential challenges that I might encounter during the project development.
 
Day 2 – I initiated the development of my grid using flexbox and incorporated the frog and roads to get an idea of how my layout would look. By the end of the day, I also implemented the keyUp function to enable the movement of the frog within the grid.

<img width="429" alt="Screenshot 2024-02-09 at 12 07 13" src="https://github.com/gibacarnieli/Frogger/assets/113900097/6d6ed0a8-9cdb-46d4-87e0-a5b3ac068249">


Day 3 – I introduced the obstacles and began contemplating the movement using setInterval for speed control. Initially, I implemented a regular movement, but with a bit of assistance, I incorporated random movement for the obstacles, which significantly enhanced the overall appearance and gameplay of the game.

Day 4 – I incorporated background music, addressed a few bugs in my game, and introduced a level system. In this setup, the user has only one life and needs to complete five levels to emerge victorious in the game.

<img width="604" alt="Screenshot 2024-02-09 at 12 07 49" src="https://github.com/gibacarnieli/Frogger/assets/113900097/1251cc87-5df3-4462-b09a-4f9c206dbb64">


Day 5 – I completed my game to prepare for presentation and corrected the collision detection, resolving an issue in detecting when the cars approached from the sides to hit my frog.

<img width="603" alt="Screenshot 2024-02-09 at 12 07 57" src="https://github.com/gibacarnieli/Frogger/assets/113900097/8837145d-1324-40b2-b70e-5ed3af24a799">


## Challenges

I had many challenges during my project. Till the last minute before delivering the project to my lectures, I had to deal with some issues with my code, but I didn’t stop to think that I would find a solution for my problems, and I did. 

I couldn’t see where I was doing wrong, so I decided to print a few parts of my code and then I saw that I was calling the same function at different times and with different names. 

I printed to be better visually as my code wasn’t long so I could do it. I searched for functions that I could use in my code, and I found it.

## Wins

My achievement in this project was resolving all the problems I encountered in one night. I didn't believe it would be possible, not even for a second. + Tell us how you did it.

I also enjoyed the part of my code where the car should pass, start, and finish, and the ability to have a random movement instead of a linear one.

<img width="350" alt="Screenshot 2024-02-09 at 12 09 02" src="https://github.com/gibacarnieli/Frogger/assets/113900097/f945710d-b8c9-4d1d-9d52-381d1ec48155">


## Key Learnings

I learned how to create a loop for continuous music playback.
I learned how to use the play() function to control audio.
I gained proficiency in using Flexbox.
I learned how to implement randomness for moving the obstacles.

## Bugs

I didn't observe any bugs but I would like to continue working on it to enhance the visual appeal of my game.

## Improvements

I would like to add more functionalities to my game, such as pop-ups, crash sounds, and victory sounds.




