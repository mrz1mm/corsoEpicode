// dati API
const BASE_URL = "https://striveschool-api.herokuapp.com/api/product/";
const psw =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNkYzg4MDgxODQ0MjAwMTUzNzU4NmYiLCJpYXQiOjE3MTUzMjUwNTYsImV4cCI6MTcxNjUzNDY1Nn0.MCUI-oek95AJfdVLgwDEB8ymzx5qRTUNHniZvfuE1Yw";

// variabile globale
let slave;

// year copyright
const getYear = function () {
  const year = new Date().getFullYear();
  const yearCopyright = document.getElementById("yearCopyright");
  yearCopyright.innerText = year;
};

// recupero id
const addressBarContent = new URLSearchParams(location.search);
const id = addressBarContent.get("id");

// content recovery
const getData = function () {
  fetch(`${BASE_URL}${id}`, {
    headers: {
      Authorization: psw,
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Errore nel recupero dei dettagli dell'evento");
      }
    })
    .then((data) => {
      slave = data;
      document.getElementById("name").innerText = slave.name;
      document.getElementById("description").innerText = slave.description;
      document.getElementById("brand").innerText = slave.brand;
      document.getElementById("imgSlave").src = slave.imageUrl;
      document.getElementById("price").innerText = slave.price + ",00€";
    })
    .catch((err) => {
      console.log("ERRORE", err);
    });
};

// form's content recovery
const getFormData = function () {
  document.getElementById("nameForm").value = slave.name;
  document.getElementById("descriptionForm").value = slave.description;
  document.getElementById("brandForm").value = slave.brand;
  document.getElementById("imageUrlForm").value = slave.imageUrl;
  document.getElementById("priceForm").value = slave.price;
};

const modalLauncher = document.getElementById("modalLauncher");
modalLauncher.addEventListener("click", () => {
  getFormData();
});

// funzione modifica
const updateData = function () {
  const newData = {
    name: document.getElementById("nameForm").value,
    description: document.getElementById("descriptionForm").value,
    brand: document.getElementById("brandForm").value,
    imageUrl: document.getElementById("imageUrlForm").value,
    price: document.getElementById("priceForm").value,
  };

  const confirmed = window.confirm("Vuoi davvero aggiornare questo elemento?");
  if (confirmed) {
    fetch(`${BASE_URL}${id}`, {
      method: "PUT",
      body: JSON.stringify(newData),
      headers: {
        "Content-type": "application/json",
        Authorization: psw,
      },
    })
      .then((response) => {
        if (response.ok) {
          alert("RISORSA MODIFICATA");
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
        console.log("ERR", err);
      });
  }
};

const alterateButton = document.getElementById("alterateButton");
alterateButton.addEventListener("click", () => {
  updateData();
});

// funzione elimina
const deleteData = function () {
  const confirmed = window.confirm("Vuoi davvero eliminare questo elemento?");
  if (confirmed) {
    fetch(`${BASE_URL}${id}`, {
      method: "DELETE",
      headers: {
        Authorization: psw,
      },
    })
      .then((response) => {
        if (response.ok) {
          alert("RISORSA ELIMINATA");
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
        console.log("ERR", err);
      });
  }
};

const deleteButton = document.getElementById("deleteButton");
deleteButton.addEventListener("click", () => {
  deleteData();
});

// onload
document.addEventListener("DOMContentLoaded", (event) => {
  getYear();
  getData();
});
