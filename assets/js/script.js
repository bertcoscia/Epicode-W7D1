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
    return this.ownerName === ownerToCompare.ownerName;
  }

  static isSameOwnerStatic(pet1, pet2) {
    return pet1.ownerName === pet2.ownerName;
  }
}

const form = document.querySelector("form");
const petNameForm = document.getElementById("petName");
const ownerNameForm = document.getElementById("ownerName");
const speciesForm = document.getElementById("species");
const breedForm = document.getElementById("breed");
const tableBody = document.querySelector("tbody");
const table = document.querySelector("table");

const arrayPets = [];

form.onsubmit = function (event) {
  event.preventDefault();
  // istanzio un nuovo oggetto con i valori passati dal form
  const pet = new Pets(petNameForm.value, ownerNameForm.value, speciesForm.value, breedForm.value);
  // pusho l'oggetto nell'array
  arrayPets.push(pet);
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
  form.reset();
};
