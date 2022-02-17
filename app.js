let display = document.querySelector(".displayEntry");
const AC = document.querySelector(".AC");
const plusMinus = document.querySelector(".plusMinus");
const percent = document.querySelector(".percent");
const division = document.querySelector(".division");
const numbers7 = document.querySelector(".numbers7");
const numbers8 = document.querySelector(".numbers8");
const numbers9 = document.querySelector(".numbers9");
const multiply = document.querySelector(".multiply");
const numbers4 = document.querySelector(".numbers4");
const numbers5 = document.querySelector(".numbers5");
const numbers6 = document.querySelector(".numbers6");
const minus = document.querySelector(".minus");
const numbers1 = document.querySelector(".numbers1");
const numbers2 = document.querySelector(".numbers2");
const numbers3 = document.querySelector(".numbers3");
const addition = document.querySelector(".addition");
const numbers0 = document.querySelector(".numbers0");
const coma = document.querySelector(".coma");
const equal = document.querySelector(".equal");
const numberArray = [
  numbers0,
  numbers1,
  numbers2,
  numbers3,
  numbers4,
  numbers5,
  numbers6,
  numbers7,
  numbers8,
  numbers9,
];

function addingNum(item) {
  if (display.textContent === "0") {
    display.textContent = item.textContent;
  } else {
    display.textContent += item.textContent;
    firstNumber = parseFloat(display.textContent).toLocaleString();
  }
}

// Adding Event listeners to numbers and other buttons

for (let i = 0; i < numberArray.length; i++) {
  numberArray[i].addEventListener("click", () => {
    addingNum(numberArray[i]);
  });
}

// dot

coma.addEventListener("click", () => {
  if (!display.textContent.includes(".")) {
    display.textContent += ".";
  }
});

// AC

AC.addEventListener("click", (e) => {
  display.textContent = "0";
});

// Adding or removing negative sign
plusMinus.addEventListener("click", () => {
  let displayNumber = parseFloat(display.textContent);

  if (displayNumber > 0) {
    display.textContent = "-" + display.textContent;
  } else if (displayNumber == 0) {
    return;
  } else {
    display.textContent = display.textContent.replace("-", "");
  }

  /* if (!display.textContent.includes("-")) {
    display.textContent = "-" + display.textContent;
  } else {
    display.textContent = display.textContent.replace("-", "");
  } */
});
// percentage symbol
percent.addEventListener("click", () => {
  display.textContent = parseFloat(display.textContent) / 100;
});

// addition Symbol

let valueInStorage = null;
let operatorInStorage = null;
addition.addEventListener("click", () => {
  if (valueInStorage == null) {
    valueInStorage = parseFloat(display.textContent);
    operatorInStorage = "+";
    display.textContent = "0";
  } else {
    valueInStorage += parseFloat(display.textContent);
    display.textContent = parseFloat(valueInStorage);
  }
});

// ----------------------------  setting Time
// ------------------------------------------
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const updateTime = () => {
  let currentTime = new Date();
  let currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();
  if (currentHour > 12) {
    currentHour -= 12;
  }
  hour.textContent = currentHour.toString();
  minute.textContent = currentMinute.toString().padStart(2, "0");
};

setInterval(updateTime, 1000);
updateTime();
// finish of setting Time
