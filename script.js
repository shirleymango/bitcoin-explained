const input1 = document.querySelector("#q1");
const input2 = document.querySelector("#q2");
const input3 = document.querySelector("#q3");

let completed = 0;

input1.addEventListener("change", (e) =>{
  let userResponse = input1.value;
  input1.value = "";
  let userAnswer = document.querySelector("#userAnswer1");
  userAnswer.innerHTML += "Your Answer: " + userResponse;
  document.querySelector("#providedAnswer1").classList.remove("hidden");
  completed++;
  if (completed == 3) {
    revealDoor();
  }
});

input2.addEventListener("change", (e) =>{
  let userResponse = input2.value;
  input2.value = "";
  let userAnswer = document.querySelector("#userAnswer2");
  userAnswer.innerHTML += "Your Answer: " + userResponse;
  document.querySelector("#providedAnswer2").classList.remove("hidden");
  completed++;
  if (completed == 3) {
    revealDoor();
  }
});

input3.addEventListener("change", (e) =>{
  let userResponse = input3.value;
  input3.value = "";
  let userAnswer = document.querySelector("#userAnswer3");
  userAnswer.innerHTML += "Your Answer: " + userResponse;
  document.querySelector("#providedAnswer3").classList.remove("hidden");
  completed++;
  if (completed == 3) {
    revealDoor();
  }
});

const revealDoor = () => {
  document.querySelector("#door").classList.remove("hidden");
  document.querySelector("#doorButton").classList.remove("hidden");
}
