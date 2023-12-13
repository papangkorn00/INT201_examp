class Person {
  constructor(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
  }
  getFullname() {
    return `${this.lastName} ${this.firstName}`;
  }
  getAge() {
    const milliToday = Date.now();
    const milliBirthdate = this.dateOfBirth.getTime();
    const diffMilli = milliToday - milliBirthdate;
    const dateOfDiffMilli = new Date(diffMilli);
    return dateOfDiffMilli.getFullYear() - 1970;
  }
  isEqual(anotherPerson) {
    return (
      this.firstName?.toLowerCase() ===
        anotherPerson?.firstName?.toLowerCase() &&
      this.lastName?.toLowerCase() === anotherPerson?.lastName?.toLowerCase()
    );
  }
  toString() {
    return `${this.getFullname()}, ${this.getAge()}`;
  }
}

const me = new Person("Papangkorn", "Kijsakulrat", new Date(2000, 2, 13));
console.log(me.getAge()); 