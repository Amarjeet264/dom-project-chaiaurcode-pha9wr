let randomnum=parseInt(Math.random()*100+1);

const submit=document.querySelector('#subt');
const userinput=document.querySelector('#guessField');
const guessslot=document.querySelector('.guesses');
const remaining=document.querySelector('.lastResult');
const loworhi=document.querySelector('.lowOrHi');
const startover=document.querySelector('.resultParas');

const p=document.createElement('p');

let prevguess=[];
let numguess=1;

let playgame=true;

if(playgame){
  submit.addEventListener('click',function(e){
    e.preventDefault();
    const guess=parseInt(userinput.value);
    // console.log(guess);
    validateguess(guess);
  })
}
function validateguess(guess){
  if(isNaN(guess)||guess<1||guess>100){
    alert('Please enter a valid number between 1 and 100');
  }
  else{
    prevguess.push(guess);
    if(numguess===11){
      displayguess(guess);
      displaymessage(`Game Over. Random number was ${randomnum}`);
      endgame();
    }
    else{
      displayguess(guess);
      checkguess(guess);
    }
  }
}

function checkguess(guess){
  if(guess===randomnum){
    displaymessage(`You guessed it right`);
    endgame();
  }
  else if(guess<randomnum){
    displaymessage(`Number is too low`);
  }
  else if(guess>randomnum){
    displaymessage(`Number is too high`);
  }
}

function displayguess(guess){
  userinput.value='';
  guessslot.innerHTML+=`${guess}, `;
  numguess++;
  remaining.innerHTML=`${11-numguess}`
}
function displaymessage(message){
  loworhi.innerHTML=`<h2>${message}</h2>`
}
function endgame(){
  userinput.value='';
  userinput.setAttribute('disabled','');
  p.classList.add('button');
  p.inerHTML=`<h2 id="newgame">start new game</h2>`;
  startover.appendChild(p);
  playgame=false;
  newgame();
}
function newgame(){
  const newgamebutton=document.querySelector('#newgame')
  newgamebutton.addEventListener('click',function(e){
    randomnum=parseInt(Math.random()*100+1);
    prevguess=[];
    numguess=1;
    guessslot.innerHTML='';
    remaining.innerHTML=`${11-numguess}`
    userinput.removeAttribute('disabled');
    startover.removeChild(p);
    playgame=true;
  })
}





