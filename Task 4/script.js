// 2 Taškai

/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";

async function fetchAndDisplayCars() {
  try {
    const response = await fetch(ENDPOINT);
    if (!response.ok) {
      throw new Error("Nepavyko gauti duomenų");
    }

    const cars = await response.json();
    const carCardsContainer = document.getElementById("output");
    carCardsContainer.innerHTML = "";

    cars.forEach((car) => {
      const carCard = document.createElement("div");
      carCard.style.border = "1px solid #ccc";
      carCard.style.borderRadius = "8px";
      carCard.style.padding = "15px";
      carCard.style.marginBottom = "20px";
      carCard.style.textAlign = "center";
      carCard.style.backgroundColor = "#f9f9f9";

      // Sukuriame gamintojo pavadinimą
      const brandName = document.createElement("h2");
      brandName.textContent = car.brand;
      carCard.appendChild(brandName);

      // Sukuriame modelių sąrašą
      const modelList = document.createElement("ul");
      car.models.forEach((model) => {
        const listItem = document.createElement("li");
        listItem.textContent = model;
        modelList.appendChild(listItem);
      });
      carCard.appendChild(modelList);

      carCardsContainer.append(carCard);
    });
  } catch (error) {
    console.error("Klaida:", error);
    alert("Įvyko klaida gaunant duomenis");
  }
}

fetchAndDisplayCars();
