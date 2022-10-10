let form = document.querySelector("form");
let input = document.querySelector("input");
let result = document.querySelector("#result");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    result.textContent = fizBuzz(input.value);
    input.value = "";
})


function fizBuzz(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        return "FizzBuzz";
    } else if (number % 3 === 0) {
        return "Fizz";
    } else if (number % 5 === 0) {
        return "Buzz";
    } else {
        return `${number} can not be divided by 3 or 5.`
    }
}