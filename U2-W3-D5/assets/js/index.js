// dati API
const BASE_URL = "https://striveschool-api.herokuapp.com/api/product/";
const psw =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNkYzg4MDgxODQ0MjAwMTUzNzU4NmYiLCJpYXQiOjE3MTUzMjUwNTYsImV4cCI6MTcxNjUzNDY1Nn0.MCUI-oek95AJfdVLgwDEB8ymzx5qRTUNHniZvfuE1Yw";

// year copyright
const getYear = function () {
  const year = new Date().getFullYear();
  const yearCopyright = document.getElementById("yearCopyright");
  yearCopyright.innerText = year;
};

// clear della row
const clearProductsRow = () => {
  const productsRow = document.getElementById("productsRow");
  productsRow.innerHTML = "";
};

// generate cards
const generateCards = function (array) {
  clearProductsRow();
  const row = document.getElementById("productsRow");
  array.forEach((slave) => {
    const col = document.createElement("div");
    col.classList.add("col");
    col.innerHTML = `
      <div class="card d-flex flex-column customShadow">
        <img src="${slave.imageUrl}" class="card-img-top" alt="${
      slave.name
    }'s picture">
        <div class="card-body d-flex flex-column justify-content-around bg-dark text-secondary">
          <h5 class="card-title mb-0">${slave.name}</h5>
          <p class="card-text mb-0">${slave.description}</p>
          <p class="card-text mb-0">${slave.brand}</p>
          <p class="card-text mb-0">${parseFloat(slave.price).toFixed(2)}€</p>
          <div class="d-flex justify-content-between">
            <a href="details.html?id=${
              slave._id
            }" class="btn btn-info">More info</a>
          </div>
        </div>
      </div>
    `;
    row.appendChild(col);
  });
};

// content recovery
const getCards = function () {
  fetch(BASE_URL, {
    headers: {
      "Content-type": "application/json",
      Authorization: psw,
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        switch (response.status) {
          case 400:
            throw new Error(
              "La richiesta non può essere soddisfatta a causa di errori di sintassi"
            );
          case 401:
            throw new Error("Non autorizzato");
          case 402:
            throw new Error("Pagamento richiesto");
          case 403:
            throw new Error("Accesso vietato");
          case 404:
            throw new Error("La risorsa richiesta non è stata trovata");
          case 405:
            throw new Error("Metodo non consentito");
          case 406:
            throw new Error("Contenuto non accettabile");
          case 407:
            throw new Error("Autenticazione del proxy richiesta");
          case 408:
            throw new Error("Timeout della richiesta");
          case 409:
            throw new Error("Conflitto");
          case 410:
            throw new Error("Risorsa non disponibile");
          case 411:
            throw new Error("Lunghezza richiesta richiesta");
          case 412:
            throw new Error("Fallimento della precondizione");
          case 413:
            throw new Error("Entità della richiesta troppo grande");
          case 414:
            throw new Error("URI della richiesta troppo lungo");
          case 415:
            throw new Error("Tipo di media non supportato");
          case 416:
            throw new Error("Intervallo richiesto non soddisfacibile");
          case 417:
            throw new Error("Fallimento dell'aspettativa");
          case 418:
            throw new Error("Sono una teiera");
          case 420:
            throw new Error("Migliora la tua calma");
          case 422:
            throw new Error("Entità non elaborabile");
          case 426:
            throw new Error("Aggiornamento richiesto");
          case 429:
            throw new Error("Troppe richieste");
          case 431:
            throw new Error("Intestazioni della richiesta troppo grandi");
          case 449:
            throw new Error("Riprova con");
          case 451:
            throw new Error("Non disponibile per motivi legali");
          case 500:
            throw new Error("Errore interno del server");
          case 501:
            throw new Error("Non implementato");
          case 502:
            throw new Error("Gateway non valido");
          case 503:
            throw new Error("Servizio non disponibile");
          case 504:
            throw new Error("Timeout del gateway");
          case 505:
            throw new Error("Versione HTTP non supportata");
          case 509:
            throw new Error("Limite di banda superato");
          default:
            throw new Error("Errore non gestito: " + response.status);
        }
      }
    })
    .then((array) => {
      console.log(array);
      generateCards(array);
    })
    .catch((err) => {
      console.log("ERRORE!", err);
    });
};

// onload
document.addEventListener("DOMContentLoaded", (event) => {
  getYear();
  showSpinner();
  getCards();
});

const showSpinner = function () {
  const spinnerHTML = `
  <div class="spinner-border text-secondary" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
`;
  document.getElementById("productsRow").innerHTML = spinnerHTML;
};
