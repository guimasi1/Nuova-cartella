const numberInputs = Array.from(document.getElementsByClassName("numbers"));
const modeInputs = Array.from(document.getElementsByClassName("mode"));

const easyMode = modeInputs[0];
const mediumMode = modeInputs[1];
const hardMode = modeInputs[2];

let mode = "";
const selectMode = (e) => {
  mode = e.target.value;
  localStorage.setItem("mode", mode);
  console.log(mode);
};
easyMode.addEventListener("click", selectMode);
mediumMode.addEventListener("click", selectMode);
hardMode.addEventListener("click", selectMode);

let numberOfQuests = 0;
const selectNumberOfQuests = (e) => {
  numberOfQuests = e.target.value;
  console.log(numberOfQuests);
  localStorage.setItem("numberOfQuests", numberOfQuests);
};

for (let i = 0; i < numberInputs.length; i++) {
  numberInputs[i].addEventListener("click", selectNumberOfQuests);
}

// questionsToShow = [];

//per buttare fuori dall'array casualmente useremo sempre
// for (let i =0; i < questions.length - numberOfQuests; i++)
// questions.splice(Math.floor(Math.random()*questions.length),1);
// numberOfQuests andrà prima richiamato con localStorage.getItem('numberOfQuests')

// per scegliere la mode
// for (let i = 0; i < questions.length; i++) {
//   if (mode !== questions[i].difficulty) {
//     questions.splice(i, 1);
//   }
// }
