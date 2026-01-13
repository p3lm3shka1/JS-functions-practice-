//1 number count 1ver
const didinimas = document.getElementById("didinimas");
const action = document.getElementById("action");
const countSpan = document.getElementById("count");

let numBer = 0;

didinimas.addEventListener("click", function () {
  if (numBer >= 0) {
    numBer += 1;
    countSpan.textContent = numBer;
  }
  if (numBer < 10) {
    action.textContent = "Pradžia";
    action.style.background = "rgb(255, 255, 255)";
  } else if (numBer < 20) {
    action.textContent = "10! GREIČIAU!";
    action.style.background = "rgb(255,164,0)";
  } else if (numBer < 30) {
    action.textContent = "20! DAR GREIČIAU!";
    action.style.background = "rgb(254,80,0)";
  } else if (numBer < 40) {
    action.textContent = "30! DAR GREEEIČIAU!";
    action.style.background = "rgb(225,6,0)";
  } else {
    action.textContent = "40+ PRALAIMEJAI!";
    action.style.background = "rgb(205,0,26)";
  }
});

//2 even and odd numbers
const numeris = document.getElementById("numeris");
const lygusNeLygus = document.getElementById("lygusNelygus");
const iveskSkaiciu = document.getElementById("iveskSkaiciu");

iveskSkaiciu.addEventListener("click", function () {
  const value = Number(numeris.value);
  if (value % 2 === 0) {
    lygusNeLygus.textContent = `${value} Lyginis skaičius`;
    lygusNeLygus.style.background = "rgb(0,135,62)";
  } else {
    lygusNeLygus.textContent = `${value} Nelyginis skaičius`;
    lygusNeLygus.style.background = "rgb(205,0,26)";
  }
});

//3 number count 2ver
const count2 = document.getElementById("count2");
const pirmyn = document.getElementById("pirmyn");
const atgal = document.getElementById("atgal");

let pliusMinus = 1;

pirmyn.addEventListener("click", () => {
  if (pliusMinus === 5) {
    pliusMinus = 1;
    count2.textContent = pliusMinus;
  } else {
    pliusMinus += 1;
    count2.textContent = pliusMinus;
  }
});

atgal.addEventListener("click", () => {
  if (pliusMinus === 1) {
    pliusMinus = 5;
    count2.textContent = pliusMinus;
  } else {
    pliusMinus -= 1;
    count2.textContent = pliusMinus;
  }
});

//4 simple BMI calc
const skaiciuoti = document.getElementById("skaiciuoti");
const svorisInput = document.getElementById("svorisInput");
const ugisInput = document.getElementById("ugisInput");
const rezultatas = document.getElementById("rezultatas");

skaiciuoti.addEventListener("click", function () {
  const ugisCm = ugisInput.value;
  const svorisKg = svorisInput.value;

  if (!ugisCm || !svorisKg) {
    rezultatas.textContent = `Pradziai ivesk kazka!`;
    rezultatas.style.background = "red";
    return;
  }

  const ugisM = ugisCm / 100;
  const bmi = (svorisKg / (ugisM * ugisM)).toFixed(1);

  if (bmi < 18.5) {
    rezultatas.textContent = `Jusu BMI ${bmi} Sveriate per mazai`;
    rezultatas.style.background = "yelllow";
  } else if (bmi < 25) {
    rezultatas.textContent = `Jusu BMI ${bmi} Sveriate gerai`;
    rezultatas.style.background = "green";
  } else {
    rezultatas.textContent = `Jusu BMI ${bmi} Nutukimas`;
    rezultatas.style.background = "red";
  }
});

//5 text zoom
const visiTekstai = document.querySelectorAll(".didelisTekstas");
const btn = document.getElementById("didinimoBtn");

let isBig = false;

btn.addEventListener("click", () => {
  visiTekstai.forEach((el) => {
    el.style.fontSize = isBig ? "1rem" : "2.5rem";
  });
  isBig = !isBig;
});

//6 font style changer
const inputNumber = document.getElementById("inputNumber");
const normalBtn = document.getElementById("normalBtn");
const boldBtn = document.getElementById("boldBtn");
const italicBtn = document.getElementById("italicBtn");
const text = document.querySelector(".ptext p");

inputNumber.addEventListener("input", () => {
  if (inputNumber.value === "") return;
  text.style.fontSize = inputNumber.value + "px";
});
function setActive(btn) {
  buttons.forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
}

normalBtn.addEventListener("click", () => {
  text.style.fontWeight = "normal";
  text.style.fontStyle = "normal";
  setActive(normalBtn);
});

boldBtn.addEventListener("click", () => {
  text.style.fontWeight = "bold";
  text.style.fontStyle = "normal";
  setActive(boldBtn);
});

italicBtn.addEventListener("click", () => {
  text.style.fontStyle = "italic";
  text.style.fontWeight = "normal";
  setActive(italicBtn);
});

//7 dark/light mode
const darkMode = document.getElementById("dark-mode");
const purpleMode = document.getElementById("purple-mode");
const modeChanger = document.getElementById("modeChanger");
const toggle = document.getElementById("themeToggle");

// 1st option
modeChanger.addEventListener("click", function () {
  let element = document.body;
  element.classList.toggle("dark-mode");
});

//2nd option
// const body = document.body;
// let mode = 0;
// modeChanger.addEventListener("click", () => {
//   body.classList.remove("dark-mode", "purple-mode");
//   if (mode === 0) {
//     body.classList.add("dark-mode");
//     mode = 1;
//   } else if (mode === 1) {
//     body.classList.add("purple-mode");
//     mode = 2;
//   } else {
//     mode = 0;
//   }
// });

//3rd  switcher
//toggle.addEventListener("change", () => {
//document.body.classList.toggle("dark-mode", toggle.checked);
});
