// 1 Taškas

/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

function convertWeight(e) {
  e.preventDefault();

  const kg = parseFloat(document.getElementById("search").value);

  if (isNaN(kg) || kg <= 0) {
    alert("Prašome įvesti teisingą teigiamą skaičių!");
    return;
  }

  const lb = kg * 2.2046;
  const g = kg / 0.001;
  const oz = kg * 35.274;

  // Rodyti rezultatus
  const output = document.getElementById("output");
  output.classList.add("outPut");
  output.innerHTML = `
      <div class="result">Svarai: ${lb.toFixed(2)} lb</div>
      <div class="result">Gramai: ${g.toFixed(2)} g</div>
      <div class="result">Uncijos: ${oz.toFixed(2)} oz</div>
    `;
}

document.getElementById("submit-btn").addEventListener("click", convertWeight);
