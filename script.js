// Glocal Constants
const nextClueWaitTime = 1000; // how long to wait before starting playback of the clue
const patternLength = 10;
var minClueHoldTime = 150; // how long to hold each clue's light/sound
var minCluePauseTime = 50; // how long to pause in between clues

// Global Variables
var pattern = [1];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.3; // must be between 0.0 and 1.0
var guessCounter = 0;
var mistakes = 0;
var clueHoldTime = 500; // how long to hold each clue's light/sound
var cluePauseTime = 300; // how long to pause in between clues
var modeIsInfinity = false;

function startGame() {
  // create the pattern
  createPattern(); // console.log("pattern: " + pattern);
  // initialize game variables
  progress = 0;
  gamePlaying = true;
  mistakes = 0;
  clueHoldTime = 500;
  cluePauseTime = 300;
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame() {
  gamePlaying = false;
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

function normalMode() {
  // swap the normalMode and infMode buttons
  document.getElementById("infMode").classList.remove("hidden");
  document.getElementById("normalMode").classList.add("hidden");
  modeIsInfinity = true;
  console.log("infin?: " + modeIsInfinity);
}

function infMode() {
  // swap the infMode and normalMode buttons
  document.getElementById("infMode").classList.add("hidden");
  document.getElementById("normalMode").classList.remove("hidden");
  modeIsInfinity = false;
  console.log("infin?: " + modeIsInfinity);
}

function createPattern() {
  pattern = [];
  for (var i = 0; i < patternLength; i++) {
    pattern.push(Math.floor(Math.random() * 9)+1);
  }
}

function lightButton(btn) {
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn) {
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  guessCounter = 0;
  let delay = nextClueWaitTime; // set delay to initial wait time
  
  clueHoldTime = clueHoldTime-(clueHoldTime*4/(10*(1+progress)));
  cluePauseTime = cluePauseTime-(cluePauseTime*4/(10*(1+progress)));
  // Capping the speed (minimum)
  if (clueHoldTime <= minClueHoldTime)
    clueHoldTime = minClueHoldTime;
  if (clueHoldTime <= minClueHoldTime)
    clueHoldTime = minClueHoldTime;
  
  for (let i = 0; i <= progress; i++) { // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue, delay, pattern[i]) // set a timeout play that clue
    delay += clueHoldTime
    delay += cluePauseTime;
  }
}

function loseGame() {
  stopGame();
  alert("Game Over. Your score: " + progress);
}
function winGame() {
  stopGame();
  alert("You win!!!");
}

function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }
  
  // game logic
  if (pattern[guessCounter] == btn) { // guess was correct
    if (guessCounter == progress) {
      if (progress == pattern.length - 1 && !modeIsInfinity) { // finished whole pattern
        winGame();
      } else { // correct sequence, show next sequence
        progress++;
        playClueSequence();
        if (modeIsInfinity)
          pattern.push(Math.floor(Math.random() * 9)+1);
      }
    } else {
      // correct guess, continue checking
      guessCounter++;
    }
  } else { // guess was incorrect
    mistakes++;
    if (mistakes == 3)
      loseGame();
    else {
      alert("Wrong button, " + (3-mistakes) + " tries left.");
      guessCounter = 0;
    }
  }
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 294,
  3: 329.6,
  4: 392,
  5: 494,
  6: 523,
  7: 587,
  8: 659,
  9: 698
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)