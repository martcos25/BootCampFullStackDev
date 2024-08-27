//Botones
const add_first = document.getElementById('add-first')
const add_last = document.getElementById('add-last')
const del_first = document.getElementById('del-first')
const del_last = document.getElementById('del-last')

const nameEl = document.getElementById("person")
const ageEl = document.getElementById("age")

class Person {
  constructor(name,  age, interest=[]) {
    this.name = name;
    this.age = age;
    this.interest = interest
  }
  addInterest() {
    checkMessage()  
  }
  removeInterest() {
    return this.interest.pop()
  }
}

let Person1 = new Person("Johnathan Fernandez", 45, []);
nameEl.innerHTML = "Nombre: " + Person1.name
ageEl.innerHTML = `Edad: ${Person1.age} años`