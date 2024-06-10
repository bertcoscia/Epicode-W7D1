class User {
  constructor(fisrtName, lastName, age, location) {
    this.firstName = fisrtName;
    this.lastName = lastName;
    this.age = age;
    this.location = locations;
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
}
