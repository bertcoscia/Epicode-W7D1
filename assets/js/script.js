class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  compareAge(ageToCompare) {
    if (this.age > ageToCompare.age) {
      console.log(`${this.firstName} (${this.age}) è più grande di ${ageToCompare.firstName} (${ageToCompare.age})`);
    } else if (this.age < ageToCompare.age) {
      console.log(`${this.firstName} (${this.age}) è più giovane di ${ageToCompare.firstName} (${ageToCompare.age})`);
    } else {
      console.log(`${this.firstName} (${this.age}) e ${ageToCompare.firstName} (${ageToCompare.age}) hanno la stessa età`);
    }
  }

  static compareAgeStatic(user1, user2) {
    if (user1.age > user2.age) {
      console.log(`STATIC - ${user1.firstName} (${user1.age}) è più grande di ${user2.firstName} (${user2.age})`);
    } else if (user1.age < user2.age) {
      console.log(`STATIC - ${user1.firstName} (${user1.age}) è più giovane di ${user2.firstName} (${user2.age})`);
    } else {
      console.log(`STATIC - ${user1.firstName} (${user1.age}) e ${user2.firstName} (${user2.age}) hanno la stessa età`);
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
