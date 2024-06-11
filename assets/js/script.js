class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  compareAge(ageToCompare) {
    if (this.age > ageToCompare.age) {
      console.log(`${this.firstName} (${this.age}) is older than ${ageToCompare.firstName} (${ageToCompare.age})`);
    } else if (this.age < ageToCompare.age) {
      console.log(`${this.firstName} (${this.age}) is younger than ${ageToCompare.firstName} (${ageToCompare.age})`);
    } else {
      console.log(`${this.firstName} (${this.age}) and ${ageToCompare.firstName} (${ageToCompare.age}) are the same age`);
    }
  }

  static compareAgeStatic(user1, user2) {
    if (user1.age > user2.age) {
      console.log(`STATIC - ${user1.firstName} (${user1.age}) is older than ${user2.firstName} (${user2.age})`);
    } else if (user1.age < user2.age) {
      console.log(`STATIC - ${user1.firstName} (${user1.age}) is younger than ${user2.firstName} (${user2.age})`);
    } else {
      console.log(`STATIC - ${user1.firstName} (${user1.age}) and ${user2.firstName} (${user2.age}) are the same age`);
    }
  }
}

const samviseGamgee = new User("Samvise", "Gamgee", 38, "The Shire");
const theodenEdnew = new User("Theoden", "Ednew", 71, "Rohan");
const gandalfTheGrey = new User("Gandalf", "The Grey", 2000, "Minas Tirith");
const sarumanTheWhite = new User("Saruman", "The White", 2000, "Isengard");

console.log(samviseGamgee);
console.log(theodenEdnew);
console.log(gandalfTheGrey);
console.log(sarumanTheWhite);

samviseGamgee.compareAge(theodenEdnew);
theodenEdnew.compareAge(samviseGamgee);
gandalfTheGrey.compareAge(sarumanTheWhite);

User.compareAgeStatic(samviseGamgee, theodenEdnew);
User.compareAgeStatic(theodenEdnew, samviseGamgee);
User.compareAgeStatic(gandalfTheGrey, sarumanTheWhite);

/* CLASS PETS */

class Pets {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  isSameOwner(ownerToCompare) {
    if (this.ownerName === ownerToCompare.ownerName) {
      return `${this.petName} e ${ownerToCompare.petName} hanno lo stesso padrone: ${this.ownerName}`;
    } else {
      return `${this.petName} e ${ownerToCompare.petName} non hanno lo stesso padrone`;
    }
  }

  static isSameOwnerStatic(pet1, pet2) {
    if (pet1.ownerName === pet2.ownerName) {
      return `STATIC - ${pet1.petName} e ${pet2.petName} hanno lo stesso padrone: ${pet1.ownerName}`;
    } else {
      return `STATIC - ${pet1.petName} e ${pet2.petName} non hanno lo stesso padrone`;
    }
  }
}

const form = document.querySelector("form");
const petNameForm = document.getElementById("petName");
const ownerNameForm = document.getElementById("ownerName");
const speciesForm = document.getElementById("species");
const breedForm = document.getElementById("breed");
const tableBody = document.querySelector("tbody");
const table = document.querySelector("table");
const registerContainer = document.getElementById("registerContainer");
const compareContainer = document.getElementById("compareContainer");
const compareForm = document.querySelector("#compareContainer form");
const firstPetCompare = document.getElementById("firstPetCompare");
const secondPetCompare = document.getElementById("secondPetCompare");
const compareBtn = document.getElementById("compareBtn");
const compareBtnStatic = document.getElementById("compareBtnStatic");
const comparationResult = document.getElementById("comparationResult");

const arrayPets = [];

form.onsubmit = function (event) {
  event.preventDefault();
  // istanzio un nuovo oggetto con i valori passati dal form
  const pet = new Pets(petNameForm.value, ownerNameForm.value, speciesForm.value, breedForm.value);

  // variabile flag
  let isDuplicate = false;

  // per ogni elemento di arrayPets: se l'oggetto appena istanziato esiste già non si potrà continuare (questo permette di avere animali con lo stesso nome, verosimilmente avranno padroni diversi)
  arrayPets.forEach((currentPet) => {
    if (currentPet.petName === pet.petName && currentPet.ownerName === pet.ownerName && currentPet.species === pet.species && currentPet.breed === pet.breed) {
      isDuplicate = true;
      window.alert("You have already registered your pet");
    }
  });

  // se l'oggetto appena istanziato è nuovo, viene aggiunto all'array
  if (!isDuplicate) {
    arrayPets.push(pet);
  }

  // rendo visibile la tabella
  table.classList.remove("d-none");

  // pulisco il tbody per evitare di avere piu volte gli stessi oggetti
  tableBody.innerHTML = "";

  //per ogni elemento dell'array creo una <tr>
  arrayPets.forEach((pet, index) => {
    const petDetails = document.createElement("tr");
    petDetails.innerHTML = `
      <th scope="row">${index + 1}</th>
      <td>${pet.petName}</td>
      <td>${pet.ownerName}</td>
      <td>${pet.species}</td>
      <td>${pet.breed}</td>`;
    tableBody.appendChild(petDetails);
  });

  // quando vengono registrati almeno due animali il form per confrontare i padroni diventa visibile
  if (arrayPets.length > 1) {
    compareContainer.classList.remove("d-none");
    firstPetCompare.innerHTML = "";
    secondPetCompare.innerHTML = "";

    // crea opzioni di scelta degli animali nel form di confronto padroni con i nomi degli animali
    arrayPets.forEach((pet, index) => {
      const firstPetOption = document.createElement("option");
      firstPetOption.setAttribute("value", index);
      firstPetOption.innerText = pet.petName;
      firstPetCompare.appendChild(firstPetOption);

      const secondPetOption = document.createElement("option");
      secondPetOption.setAttribute("value", index);
      secondPetOption.innerText = pet.petName;
      secondPetCompare.appendChild(secondPetOption);
    });
  }
  form.reset();
};

const compareOwnerFunction = (pet1, pet2) => {
  // se gli animali selezionati sono gli stessi darà errore
  if (pet1 === pet2) {
    window.alert("Choose two different pets to continue");
  } else {
    // se gli animali selezionati sono diversi mostra a schermo il risultato della comparazione
    comparationResult.innerText = arrayPets[pet1].isSameOwner(arrayPets[pet2]);
  }
};

const compareOwnerStaticFunction = (pet1, pet2) => {
  // se gli animali selezionati sono gli stessi darà errore
  if (pet1 === pet2) {
    window.alert("Choose two different pets to continue");
  } else {
    // se gli animali selezionati sono diversi mostra a schermo il risultato della comparazione
    comparationResult.innerText = Pets.isSameOwnerStatic(arrayPets[pet1], arrayPets[pet2]);
  }
};

// aggiungo gli eventListener ai bottoni
compareBtn.addEventListener("click", (event) => {
  compareOwnerFunction(firstPetCompare.value, secondPetCompare.value);
});

compareBtnStatic.addEventListener("click", (event) => {
  compareOwnerStaticFunction(firstPetCompare.value, secondPetCompare.value);
});
