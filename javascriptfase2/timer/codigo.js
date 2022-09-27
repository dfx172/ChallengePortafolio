// const uno= setInterval(() => {                   esto hace lo que esta en la mitad cada segundo     
//     console.log("ha pasado un segundo");
// }, 1000);

// setTimeout(() => {                               esto hace lo ue esta adentro una sola vez
//     console.log("han pasado 3 segundos");
//     clearInterval(uno)                           esto borra la funcion interval
// }, 3000);


let secondsSpan = document.querySelector("#seconds");
let minutesSpan = document.querySelector("#minutes");
const timerbutton = document.querySelector("#timer__button");
const hero=document.querySelector("#principal");
let secondsValue=0;
let minutesValue=0;
let currentInterval;
let currentButton;

function startChronometer() {
    currentButton=event.target;
    currentButton.disabled=true;
    currentInterval = setInterval(() => {
        secondsValue +=1;
        if (secondsValue ===60){
            secondsValue=0;
            minutesValue+=1;
            minutesSpan.textContent=formatValue(minutesValue);};
        secondsSpan.textContent=formatValue(secondsValue);
    }, 1000);
   }

function formatValue(value){
    return ("0"+value).slice(-2);
}

function stopChronometer(){
    if (currentButton){
        currentButton.dsabled=false
    }
    clearInterval(currentInterval);
}

function resetChronometer(){
    secondsValue=0;
    minutesValue=0;
    secondsSpan.textContent="00";
    minutesSpan.textContent="00";
}

function executeChronometer(){
    clearInterval(currentInterval);
    hero.innerHTML=`<h1 class="hero__tittle">Chronometer</h1>
    <div class="hero__time">
        <p id="time"><span id="minutes">00</span>: <span id="seconds">00</span></p>
    </div>
    <div class="hero__buttons">
        <button onclick="startChronometer()" class="button hero__button" type="button">Start</button>
        <button onclick="stopChronometer()" class="button hero__button" type="button">Stop</button>
        <button onclick="resetChronometer()" class="button hero__button" type="button">Reset</button>
    </div>`;
    secondsSpan = document.querySelector("#seconds");
    minutesSpan = document.querySelector("#minutes");
}

function startTimer(){
    clearInterval(currentInterval);
    currentButton=event.target;
    currentButton.disabled=true;
        event.preventDefault();
        const minutes = parseInt(event.target.minutes.value);
        const seconds = parseInt(event.target.seconds.value);
        console.log(minutes,seconds);

        minutesSpan.textContent= minutes;
        secondsSpan.textContent= seconds;
        secondsValue = seconds;
        minutesValue=minutes;
        
        currentInterval=setInterval(() => {
            secondsValue-=1
            if(secondsValue===-1){
                secondsValue=59;
                minutesValue-=1;
            }
            if(minutesValue===0 && secondsValue===0){
                const container = document.querySelector(".hero_time")
                const title= document.createElement("h2");
                title.textContent="El timer ha terminado";
                container.appendChild(title);
                clearInterval(currentInterval)
            }
            minutesSpan.textContent= formatValue(minutesValue);
            secondsSpan.textContent= formatValue(secondsValue);
        }, 1000);
}

function executetimer(){
    clearInterval(currentInterval);
     hero.innerHTML = `
     <h1 class="hero__tittle">Timer</h1>
            <div class="hero__time">
                <p id="time"><span id="minutes">00</span>: <span id="seconds">00</span></p>
            </div>
            <div class="hero__buttons">
              <form onsubmit="startTimer()">
              <input type="number" class="timer__button" placeholder="Minutos" id="minutesInput" name="minutes">
              <input type="number" class="timer__button" placeholder="Segundos" id="secondsInput" name="seconds">
              <br>
              <button type="submit">Start</button>
              <button onclick="stopChronometer()" class="button hero__button" type="button">Stop</button>
              <button onclick="resetChronometer()" class="button hero__button" type="button">Reset</button>
              </form>
            </div>`;
            secondsSpan = document.querySelector("#seconds");
            minutesSpan = document.querySelector("#minutes");
}


function executePomodoro(){
     clearInterval(currentInterval);
    hero.innerHTML = `
    <h1 class="hero__tittle">Pomodoro</h1>
           <div class="hero__time">
               <p id="time"><span id="minutes">00</span>: <span id="seconds">00</span></p>
           </div>
           <div class="hero__buttons">
             <button type="button" onclick="startPomodoro()">start</button>
           </div>`;
           secondsSpan = document.querySelector("#seconds");
           minutesSpan = document.querySelector("#minutes");
}

function startPomodoro(){
  secondsValue= 0;
  minutesValue=25;
    currentInterval=setInterval(() => {
           secondsValue-=1
            if(secondsValue===-1){
                secondsValue=59;
                minutesValue-=1;
            }
            if(minutesValue===0 && secondsValue===0){
                const container = document.querySelector(".hero_time")
                const title= document.createElement("h2");
                title.textContent="Pomodoro ha terminado";
                container.appendChild(title);
                clearInterval(currentInterval)
            }
            minutesSpan.textContent= formatValue(minutesValue);
            secondsSpan.textContent= formatValue(secondsValue);
    }, 1000);
}