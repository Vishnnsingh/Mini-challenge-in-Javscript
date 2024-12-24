const password = document.querySelector("#password");
const [upper, lower, symbol, number] = ["#upper", "#lower", "#Symbol", "#number"].map(id => document.querySelector(id));
const [colorDiv, numLength, strength] = [".color", "#num", "#st"].map(sel => document.querySelector(sel));

password.addEventListener("input", e => {

  const val = e.target.value, len = val.length;
  numLength.textContent = len;

  const tests = [/\d/, /[a-z]/, /[A-Z]/, /[^a-zA-Z0-9]/];
  const elements = [number, lower, upper, symbol];

  let score = tests.reduce((s, test, i) => (elements[i].style.color = test.test(val) ? "green" : "gray", s + test.test(val)), 0);

  if (len > 8) score++;
  colorDiv.style.backgroundColor = score >= 5 ? "green" : score >= 2 ? "orange" : score ? "red" : "gray";
  strength.textContent = score >= 5 ? "Head" : score >= 2 ? "Medium" : "Weak";
  colorDiv.style.width = (score * 20) + "%";
});


// const password = document.querySelector("#password");
// const [upper, lower, symbol, number] = ["#upper", "#lower", "#Symbol", "#number"].map(id => document.querySelector(id));
// const [colorDiv, numLength, strength] = [".color", "#num", "#st"].map(sel => document.querySelector(sel));

// password.addEventListener("input", e => {
//   const val = e.target.value, len = val.length;
//   numLength.textContent = len;
//   let score = 0;

//   const hasNumber = val.split('').some(char => !isNaN(char));
//   const hasLowerCase = val.split('').some(char => char >= 'a' && char <= 'z');
//   const hasUpperCase = val.split('').some(char => char >= 'A' && char <= 'Z');
//   const hasSymbol = val.split('').some(char => !(char >= 'a' && char <= 'z') && !(char >= 'A' && char <= 'Z') && isNaN(char));

//   number.style.color = hasNumber ? "green" : "gray";
//   lower.style.color = hasLowerCase ? "green" : "gray";
//   upper.style.color = hasUpperCase ? "green" : "gray";
//   symbol.style.color = hasSymbol ? "green" : "gray";

//   score += hasNumber + hasLowerCase + hasUpperCase + hasSymbol;
//   if (len > 8) score++;

//   colorDiv.style.backgroundColor = score >= 5 ? "green" : score >= 2 ? "orange" : score ? "red" : "gray";
//   strength.textContent = score >= 5 ? "Head" : score >= 2 ? "Medium" : "Weak";
//   colorDiv.style.width = (score * 20) + "%";
// });
