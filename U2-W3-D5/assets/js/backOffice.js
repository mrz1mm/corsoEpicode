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

class Slaves {
  constructor(_name, _description, _brand, _imageUrl, _price) {
    this.name = _name;
    this.description = _description;
    this.brand = _brand;
    this.imageUrl = _imageUrl;
    this.price = _price;
  }
}

// validazione form
function validateForm() {
  let productName = document.getElementById("name").value;
  let productDescription = document.getElementById("description").value;
  let brand = document.getElementById("brand").value;
  let imageUrl = document.getElementById("imageUrl").value;
  let productPrice = document.getElementById("price").value;

  // ulteriore check di tutti i campi
  if (
    productName == "" ||
    productDescription == "" ||
    brand == "" ||
    imageUrl == "" ||
    productPrice == ""
  ) {
    alert("Per favore compila tutti i campi.");
    return false;
  }

  // check price
  if (isNaN(productPrice) || parseFloat(productPrice) <= 0) {
    alert("Il prezzo deve essere un numero positivo.");
    return false;
  }

  return true;
}

// submit del form
const submitEvent = function (e) {
  e.preventDefault();

  if (!validateForm()) return;

  const nameInput = document.getElementById("name");
  const descriptionInput = document.getElementById("description");
  const brandInput = document.getElementById("brand");
  const imageUrlInput = document.getElementById("imageUrl");
  const priceInput = document.getElementById("price");

  const slaveFromForm = new Slaves(
    nameInput.value,
    descriptionInput.value,
    brandInput.value,
    imageUrlInput.value,
    priceInput.value
  );

  fetch(BASE_URL, {
    method: "POST",
    body: JSON.stringify(slaveFromForm),
    headers: {
      "Content-type": "application/json",
      Authorization: psw,
    },
  })
    .then((response) => {
      if (response.ok) {
        alert(`Schiavo inserito con successo!`);
        location.assign("index.html");
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
    .catch((err) => {
      console.log("ERRORE", err);
      alert(err);
    });
};

document
  .getElementsByTagName("form")[0]
  .addEventListener("submit", submitEvent);

// onload
document.addEventListener("DOMContentLoaded", (event) => {
  getYear();
});
