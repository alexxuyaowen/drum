const map = new Map([
  ['w', "sounds/tom-1.mp3"],
  ['a', "sounds/tom-2.mp3"],
  ['s', "sounds/tom-3.mp3"],
  ['d', "sounds/tom-4.mp3"],
  ['j', "sounds/snare.mp3"],
  ['k', "sounds/crash.mp3"],
  ['l', "sounds/kick-bass.mp3"]
]);

// interactions
const interact = key => {
  new Audio(map.get(key)).play();
  let curr = document.getElementsByClassName(key)[0].classList;
  curr.toggle("pressed");
  setTimeout(()=> curr.toggle("pressed"), 100);
}

// interact with mouse-click
for (let d of document.querySelectorAll(".drum")) d.addEventListener("click", function() {interact(this.textContent);});

// interact with keystrokes
document.addEventListener("keydown", e => interact(e.key));




// for (let d of document.querySelectorAll(".drum")) d.addEventListener("click", function() {
//   new Audio(map.get(this.textContent)).play();
// });
//
// document.addEventListener("keydown", event => new Audio(map.get(event.key)).play());


// Array.from(document.querySelectorAll(".drum")).reduce((a,b,i) => {
//   if (i===1) a.addEventListener("click", () => alert("hi"));
//   b.addEventListener("click", () => alert("hi"));
//   console.log(i);
// })

// new Audio("sounds/tom-1.mp3").play();
