const resultSec = document.querySelector(".result-section");

fetch("../browser-extensions-manager-ui-main/data.json").then((response) =>
  response
    .json()
    .then((data) => {
      data.forEach((item) => {
        const card = document.createElement("div");
        card.classList.add(".card");

        const resImage = document.createElement("img");
        resImage.src = item.logo;

        const resTilte = document.createElement("h3");
        resTilte.innerHTML = item.name;

        const resDesc = document.createElement("p");
        resDesc.innerHTML = item.description;

        card.appendChild(resImage);
        card.appendChild(resTilte);
        card.appendChild(resDesc);

        resultSec.appendChild(card);
      });
    })
    .catch((error) => console.log(error))
);
