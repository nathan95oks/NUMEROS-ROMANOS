import sumar from "./sumador";
import convertir from "./conversor"

const first = document.querySelector("#primer-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const numeroEnRomano = convertir(firstNumber);
  div.innerHTML = "<p>" + numeroEnRomano + " en romano</p>";  
});
