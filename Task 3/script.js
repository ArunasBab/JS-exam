// 2 Taškai

/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

async function fetchAndDisplayUsers() {
  try {
    const response = await fetch(ENDPOINT);
    if (!response.ok) {
      throw new Error("Nepavyko gauti duomenų iš API");
    }

    const users = await response.json();
    const output = document.getElementById("output");
    console.log(users);

    output.innerHTML = "";

    users.forEach((user) => {
      const userCard = document.createElement("div");
      userCard.classList.add("userCard");
      userCard.style.border = "1px solid #ccc";
      userCard.style.borderRadius = "5px";
      userCard.style.padding = "10px";
      userCard.style.width = "350px";
      userCard.style.textAlign = "center";

      userCard.innerHTML = `
          <img src="${user.avatar_url}" alt="${user.login}" style="width: 100%; border-radius: 50%; margin-bottom: 10px;">
          <p><strong>${user.login}</strong></p>
          <p><strong>${user.avatar_url}</strong></p>
        `;

      output.appendChild(userCard);
    });

    const messageElement = document.getElementById("message");
    if (messageElement) {
      messageElement.style.display = "none";
    }
  } catch (error) {
    console.error("Klaida:", error);
    alert("Įvyko klaida gaunant duomenis. Bandykite dar kartą.");
  }
}

document.getElementById("btn").addEventListener("click", fetchAndDisplayUsers);
