class Utente {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }

  confronto(Utente2) {
    if (this.age < Utente2.age) {
      return `${this.firstName} è più giovane di ${Utente2.firstName}`;
    } else if (this.age > Utente2.age) {
      return `${this.firstName} è più anziano di ${Utente2.firstName}`;
    } else {
      return `${this.firstName} e ${Utente2.firstName} hanno la stessa età`;
    }
  }
}

const utente1 = new Utente("Giggino", "Esposto", 25, "Napoli");
const utente2 = new Utente("Mario", "Rossi", 28, "Milano");

console.log(utente1.confronto(utente2));

class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }

  sameOwner(Pet2) {
    if (this.ownerName === Pet2.ownerName) {
      this.applySameOwnerStyle();
      return true;
    }
  }
}

const buttonSave = document.querySelector("button");
const petNameInput = document.getElementById("petNameInput");
const ownerNameInput = document.getElementById("ownerNameInput");
const speciesInput = document.getElementById("speciesInput");
const breedInput = document.getElementById("breedInput");
const petWrapper = document.querySelector(".petWrapper");

buttonSave.addEventListener("click", (e) => {
  e.preventDefault();
  let newDiv = document.createElement("div");
  newDiv.classList.add("col-12");
  petWrapper.appendChild(newDiv);

  let newP = document.createElement("p");
  newP.textContent = petNameInput.value;
  newDiv.appendChild(newP);

  let newP2 = document.createElement("p");
  newP2.classList.add("owner");
  newP2.textContent = ownerNameInput.value;
  newDiv.appendChild(newP2);

  let newP3 = document.createElement("p");
  newP3.textContent = speciesInput.value;
  newDiv.appendChild(newP3);

  let newP4 = document.createElement("p");
  newP4.textContent = breedInput.value;
  newDiv.appendChild(newP4);
});

const owners = document.querySelectorAll(".owner");
if (owners.length > 2) {
  owners.forEach((owner) => {
    owner.classList.add("text-danger");
  });
}
