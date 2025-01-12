const isRunning = false; //tracks if timer is currently running
let timeleft ; //remaining time in seconds
const workTime = 25;
const breakTime = 5;
const isWorkTime = true; //checks if we are working or in break

// const mins = document.getElementById -this is one way to get make a variable in JavaScript..here it is a const so you can only define it one way
// let mins = document.getElementById - another way
// var mins = document.getElementById - the third way but very old wau
// so keywords in javascript are const, let and var

const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");
const workTimeinput = document.getElementById("work_time");
const breakTimeinput = document.getElementById("break_time");
const statusDisplay = document.getElementById("status");
const progressBar = document.getElementById("progress");

