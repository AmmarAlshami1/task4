var operator = "+";
document.addEventListener("DOMContentLoaded", (e) => {
  var sign = document.getElementById("signOfOprator");
  sign.addEventListener("change", (e) =>
    document.getElementById("calculate-button").classList.remove("hide")
  );
  const allButtons = document.querySelectorAll(".buttons-wrapper button");
  allButtons.forEach((el) => {
    const handleButtonClick = (e) => {
      allButtons.forEach((button) => {
        // button.className = "";
        button.classList.remove("selected");
      });
      const buttonClick = e.target;
      buttonClick.classList.add("selected");
      document.getElementById("signOfOprator").innerHTML = operator;
      const buttonId = buttonClick.id;
      if (buttonId === "addButton") {
        operator = "+";
      } else if (buttonId === "subtractButton") {
        operator = "-";
      } else if (buttonId === "multipleButton") {
        operator = "*";
      } else if (buttonId === "divisionButton") {
        operator = "/";
      }
      document.getElementById("signOfOprator").value = operator;

      document.getElementById("calculate-button").classList.remove("hide");
    };

    el.addEventListener("click", handleButtonClick);
  });

  const calculateButton = document.getElementById("calculate-button");
  var sign = document.getElementById("signOfOprator");
  const handleCalculate = (e) => {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    let result;
    if (sign === "+") {
      result = num1 + num2;
    } else if (sign === "-") {
      result = num1 - num2;
    } else if (sign === "*") {
      result = num1 * num2;
    } else if (sign === "/") {
      result = num1 / num2;
    } else {
      document.getElementById("signOfOprator").innerHTML = operator;
      result = "Invalid operator";
    }
    document.getElementById("result").innerHTML = "Result: " + result;
  };

  calculateButton.addEventListener("click", handleCalculate);
});
