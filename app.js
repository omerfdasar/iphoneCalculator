let display = document.querySelector(".displayEntry");
const AC = document.querySelector(".AC");
const plusMinus = document.querySelector(".plusMinus");
const percent = document.querySelector(".percent");
const dividing = document.querySelector(".division");
const numbers7 = document.querySelector(".numbers7");
const numbers8 = document.querySelector(".numbers8");
const numbers9 = document.querySelector(".numbers9");
const multiplying = document.querySelector(".multiply");
const numbers4 = document.querySelector(".numbers4");
const numbers5 = document.querySelector(".numbers5");
const numbers6 = document.querySelector(".numbers6");
const substracting = document.querySelector(".minus");
const numbers1 = document.querySelector(".numbers1");
const numbers2 = document.querySelector(".numbers2");
const numbers3 = document.querySelector(".numbers3");
const adding = document.querySelector(".addition");
const numbers0 = document.querySelector(".numbers0");
const coma = document.querySelector(".coma");
const equals = document.querySelector(".equal");
const lowerhalf = document.getElementsByClassName("lower_half")[0];
let operatorDisplay = document.getElementsByClassName("operatorDisplay")[0];
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

// variables
let valueInStrMemory = null;
let operatorMemory = null;
// --------------Functions--------
//-- Adding Button
function addingNum(item) {
  if (display.textContent === "0") {
    display.textContent = item.textContent;
  } else {
    display.textContent += item.textContent;
  }
}
function addingMoreNum(item) {
  if (valueInStorage1 != "0" && valueInStorage2 == "") {
    display.textContent = item.textContent;
  }
}
//-- accessing content of the display
const getValueAsStr = () => {
  return display.textContent;
};
const getValueAsNum = () => {
  return parseFloat(display.textContent);
};

// There are two types of number : number in memory and current number

// operators function

const getResultStr = () => {
  const valueNumInMemory = parseFloat(valueInStrMemory);
  const currentValueNum = getValueAsNum();
  let newValueNum;
  if (operatorMemory === "addition") {
    newValueNum = valueNumInMemory + currentValueNum;
  } else if (operatorMemory === "substraction") {
    newValueNum = valueNumInMemory - currentValueNum;
  } else if (operatorMemory === "multiplication") {
    newValueNum = valueNumInMemory * currentValueNum;
  } else if (operatorMemory === "division") {
    newValueNum = valueNumInMemory / currentValueNum;
  }
  return newValueNum.toString();
};

const handleOperatorClick = (operation) => {
  const currentValueStr = getValueAsStr();

  if (!valueInStrMemory) {
    valueInStrMemory = currentValueStr;
    operatorMemory = operation;
    display.textContent = "0";
    return;
  }
  valueInStrMemory = getResultStr();
  operatorMemory = operation;
  display.textContent = "0";
};

// --------Event Listerners--------
//-- AC button
AC.addEventListener("click", (e) => {
  display.textContent = "0";
  valueInStrMemory = null;
  operatorMemory = null;
});
//-- Adding or removing negative sign
plusMinus.addEventListener("click", () => {
  let displayNumber = parseFloat(display.textContent);

  if (displayNumber > 0) {
    display.textContent = "-" + display.textContent;
  } else if (displayNumber == 0) return;
  else {
    display.textContent = display.textContent.replace("-", "");
  }
});
//-- percentage button
percent.addEventListener("click", () => {
  display.textContent = parseFloat(display.textContent) / 100;
  valueInStrMemory = null;
  operatorMemory = null;
});
//-- decimal dot
coma.addEventListener("click", () => {
  if (!display.textContent.includes(".")) {
    display.textContent += ".";
  }
});
//-- Adding Event listeners to numbers and other buttons
for (let i = 0; i < numberArray.length; i++) {
  numberArray[i].addEventListener("click", () => {
    addingNum(numberArray[i]);
  });
}

// ---------Adding event listeners to operators
adding.addEventListener("click", (e) => {
  handleOperatorClick("addition");
});
substracting.addEventListener("click", (e) => {
  handleOperatorClick("substraction");
});
dividing.addEventListener("click", (e) => {
  handleOperatorClick("division");
});
multiplying.addEventListener("click", (e) => {
  handleOperatorClick("multiplication");
});
equals.addEventListener("click", (e) => {
  if (valueInStrMemory) {
    display.innerText = getResultStr();
    valueInStrMemory = null;
    operatorMemory = null;
    console.log(getValueAsNum());
    // console.log(currentValueStr);
  }
});

// ----------------------------  setting Time
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
