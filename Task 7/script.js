// 1 Taškas

/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją showObjectKeys, kuri kaip argumentą priims objectą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
  make: "audi",
  model: "A6",
  year: 2005,
  color: "white",
};

// Funkcija, kuri grąžina visus objekto "key" kaip masyvą
function showObjectKeys(obj) {
  return Object.keys(obj);
}

const keys = showObjectKeys(audi);
console.log(keys);
