let btn = document.getElementById('btn')
let output = document.getElementById('outputtext')

function getRandomWord() {
    var words = ["rock", "paper", "scissors"];
    var randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  }
  
  // Example usage
  var randomWord = getRandomWord();

  btn.addEventListener('click', function() {
    let input1 = document.getElementById('userInput').value;
    let input = input1.toLowerCase();
    if(input == randomWord) {
        output.innerHTML = "Draw!"
    } else {
        if(input == "paper") {
            if(randomWord == "scissors") {
                output.innerHTML = "You lost! The computer played " + randomWord
            } else if(randomWord == "rock") {
                output.innerHTML = "You won! The computer played " + randomWord 
            }
        } else if(input  == "rock") {
            if(randomWord == "paper") {
                output.innerHTML = "You lost! The computer played " + randomWord
            } else if(randomWord == "scissors") {
                output.innerHTML = "You won! The computer played " + randomWord 
            }
        } else if(input == "scissors") {
            if(randomWord == "rock") {
                output.innerHTML = "You lost! The computer played " + randomWord
            } else if(randomWord == "paper") {
                output.innerHTML = "You won! The computer played " + randomWord 
            }
        }
    }
});
  
