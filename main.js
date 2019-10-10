
window.addEventListener('load', init);
// Variables
let time = 5;
let score = 0;
let isPlaying;

const word = document.querySelector('#word');
const word_input = document.querySelector('#word_input');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const seconds = document.querySelector('#seconds');
const message = document.querySelector('#message');

seconds.innerHTML = time;

const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition'
  ];




  function init(){  
    //Show the random words in the box
    showWord(words);
    word_input.addEventListener('input', startGame);
    //sets an interval for 1 second 
    setInterval(countdown, 1000);
    setInterval(checkGameStatus, 50);

  }


  function showWord(words){
    word.innerHTML = words[Math.floor(Math.random() * words.length)]
  }



  //Count down the seconds
  function countdown(){

    if(time > 0){
        time--;
    }else if(time === 0){
        isPlaying = false;
    }

    // display time on the screen
    timeDisplay.innerHTML = time;

  }

  //Checks the status of the game if the game is over or not
  function checkGameStatus(){
      if(!isPlaying && time === 0){
          message.innerHTML = "<span class='gameOver'>Game Over!!!</span>";
          score = -1;
      }
  }


  //Start Game
  function startGame(){
    if(checkWord() == true){
        isPlaying = true;
        time = 6;
        showWord(words);
        word_input.value = '';
        score++;
    }
    scoreDisplay.innerHTML = score;
  }

  //Check if the word input is correct
  function checkWord(){
    if(word_input.value === word.innerHTML){
        message.innerHTML = "<span class='correct'>Correct!!!</span>";
        return true;
    }else{
        message.innerHTML = '';
        return false;
    }

  }