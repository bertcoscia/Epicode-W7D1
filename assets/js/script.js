class User {
  constructor(fisrtName, lastName, age, location) {
    this.firstName = fisrtName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  compareAge(ageToCompare) {
    if (this.age > ageToCompare.age) {
      console.log(`${this.firstName} è più grande di ${ageToCompare.firstName}`);
    } else if (this.age < ageToCompare.age) {
      console.log(`${ageToCompare.firstName} è più grande di ${this.firstName}`);
    } else {
      console.log(`${this.firstName} e ${ageToCompare.firstName} hanno la stessa età`);
    }
  }

  static compareAgeStatic(user1, user2) {
    if (user1.age > user2.age) {
      console.log(`${user1.firstName} è più grande di ${user2.firstName}`);
    } else if (user1.age < user2.age) {
      console.log(`${user2.firstName} è più grande di ${user1.firstName}`);
    } else {
      console.log(`${user1.firstName} e ${user2.firstName} hanno la stessa età`);
    }
  }
}
