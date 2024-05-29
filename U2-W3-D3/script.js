const createCard = (array) => {
  const row = document.querySelector(".row");
  array.forEach((element) => {
    const card = `
    <div class="col">
      <div class="card" style="width: 18rem;">
        <img src=${element.img} class="card-img-top" alt="">
        <div class="card-body">
          <h5 class="card-title">${element.title}</h5>
          <p class="card-text">${element.price}</p>
          <a href="#" class="btn btn-primary discardButton">Scarta</a>
          <a href="#" class="btn btn-primary buyNowButton">Compra ora</a>
        </div>
      </div>
    </div>
  `;
    row.insertAdjacentHTML("beforeend", card);
  });
};

const attachAddEventListner = () => {
  const discardButtons = document.querySelectorAll(".discardButton");
  discardButtons.forEach((discardButton) => {
    discardButton.addEventListener("click", () => {
      const cardWrapper = discardButton.closest(".col");
      cardWrapper.remove();
    });
  });

  const buyNowButtons = document.querySelectorAll(".buyNowButton");
  buyNowButtons.forEach((buyNowButton) => {
    buyNowButton.addEventListener("click", () => {
      const cardWrapper = buyNowButton.closest(".card");
      const title = cardWrapper.querySelector(".card-title").textContent;
      const price = cardWrapper.querySelector(".card-text").textContent;
      const img = cardWrapper.querySelector(".card-img-top").src;

      const cartItem = { title, price, img };
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push(cartItem);
      localStorage.setItem("cart", JSON.stringify(cart));

      const cardWrapperToCart = cardWrapper.cloneNode(true);
      const ul = document.querySelector("ul");
      const li = document.createElement("li");
      ul.classList.add("list-unstyled");
      ul.appendChild(li);
      li.appendChild(cardWrapperToCart);

      // Rimuovi il secondo bottone
      const secondButton = li.querySelector(".buyNowButton");
      secondButton.remove();

      // Modifica il testo del primo bottone
      const removeFromCart = li.querySelector(".discardButton");
      removeFromCart.innerText = "Rimuovi dal carrello";

      // Rimuovi dal carrello
      removeFromCart.addEventListener("click", () => {
        const cardWrapper = removeFromCart.closest(".card");
        cardWrapper.remove();
        localStorage.removeItem("cardWrapperToCart");
      });
    });
  });
};

const getLibrary = () => {
  fetch("https://striveschool-api.herokuapp.com/books")
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
      createCard(array);
      attachAddEventListner();
    })
    .catch((err) => {
      console.log("Errore:", err);
    });
};

const loadCartItems = () => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const ul = document.querySelector("ul");
  ul.classList.add("list-unstyled");

  cart.forEach((cartItem, index) => {
    const li = document.createElement("li");
    ul.appendChild(li);

    const cardWrapperToCart = document.createElement("div");
    cardWrapperToCart.classList.add("card");
    cardWrapperToCart.style.width = "18rem";
    li.appendChild(cardWrapperToCart);

    const { img, title, price } = cartItem;

    cardWrapperToCart.innerHTML = `
      <img src="${img}" class="card-img-top" alt="">
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${price}</p>
        <a href="#" class="btn btn-primary discardButton">Rimuovi dal carrello</a>
      </div>
    `;

    const discardButton = cardWrapperToCart.querySelector(".discardButton");
    discardButton.addEventListener("click", () => {
      cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      li.remove();
    });
  });
};

document.addEventListener("DOMContentLoaded", () => {
  getLibrary();
  loadCartItems();
});
