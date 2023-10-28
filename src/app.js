/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  function generateExcuse() {
    let who = ["The dog", "My grandma", "His turtle", "My bird"];
    let action = ["ate", "peed", "crushed", "broke"];
    let what = ["my homework", "the keys", "the car"];
    let when = [
      "before the class",
      "right on time",
      "when i finished",
      "during my lunch",
      "while i was praying"
    ];

    let randomWho = who[Math.floor(Math.random() * who.length)];
    let randomAction = action[Math.floor(Math.random() * action.length)];
    let randomWhat = what[Math.floor(Math.random() * what.length)];
    let randomWhen = when[Math.floor(Math.random() * when.length)];

    let excuse =
      randomWho + " " + randomAction + " " + randomWhat + " " + randomWhen;
    return excuse;
  }
  let boton = document.getElementById("nuevaExcusa");
  let excuseElement = document.getElementById("excuse");
  boton.addEventListener("click", function() {
    let randomExcuse = generateExcuse();
    excuseElement.innerHTML = randomExcuse;
  });
};
