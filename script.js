/* Edit this file */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
let decrement=skipButtons[0];
let increment=skipButtons[1];
let sound=ranges[0];
let speed=ranges[1];
console.log(sound);
toggle.addEventListener("click",()=>{
    if(toggle.textContent=="►"){
       
     video.play();
      toggle.textContent="||"
    }
   else{
     video.pause();
         toggle.textContent="►";
        
    }
});

video.volume=0;
sound.addEventListener("change",()=>{
video.volume=sound.value;
console.log(video.volume);
});

video.playbackRate=0.5;
speed.addEventListener("change",()=>{
  video.playbackRate=speed.value;
  console.log(video.playbackRate);
});

decrement.addEventListener("click",()=>{
  video.currentTime-=10;
});

increment.addEventListener("click",()=>{
  video.currentTime+=25;
});
