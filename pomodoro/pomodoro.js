const isRunning = false; // Tracks if timer is currently running
let timeLeft; // Remaining time in seconds
const workTime = 25; // Work duration in minutes
const breakTime = 5; // Break duration in minutes
const isWorkTime = true; // Tracks if we're working or in break mode

const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");
const workTimeInput = document.getElementById("work-time");
const breakTimeInput = document.getElementById("break-time");
const statusDisplay = document.getElementById("status");
const progressBar = document.getElementById("progress");
