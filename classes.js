//Classes-its blueprint to create new object, encapsulate data and helps to work on that.
//constructor to store the properties, super methods help to invoke properties of parent
//extends allow to extend the parent class properties and method

class person {
  constructor(fname, lname) {
    this.firstname = fname;
    this.lastname = lname;
  }


  getfullname() {
    return `First Name:-${this.firstname} Last Name:- ${this.lastname}`;
  }
}
// const output = new person("Yasin", "M");
// console.log(output.getfullname());

class address extends person {
  constructor(fname, lname, city, country) {
    super(fname, lname);
    this.city = city;
    this.country = country;
  }
  getaddress() {
    return `City-${this.city} Country ${this.country}`;
  }
}
// const secondoutput = new address("Yasin", "M", "nanded", "India");
// console.log(secondoutput.getfullname());
// console.log(secondoutput.getaddress());
// console.log(secondoutput);

class fulldetails extends address {
  constructor(fname, lname, city, country, phone) {
    super(fname, lname, city, country);
    this.phone = phone;
  }
  getphone() {
    return `phone- ${this.phone} `;
  }
}
const fulloutput = new fulldetails("Y", "M", "Nanded", "India", "9999");
console.log(fulloutput.getphone());
