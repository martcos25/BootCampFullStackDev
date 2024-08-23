//Botones
const add_first = document.getElementById('add-first')
const add_last = document.getElementById('add-last')
const del_first = document.getElementById('del-first')
const del_last = document.getElementById('del-last')


let intlist = document.getElementById('intlist')
let inter = document.getElementById('new-inter')

//Clase de Personas con propiedades de nombre, edad e intereses
class Person {
  constructor(name, age, interest=[]) {
    this.name = name;
    this.age = age;
    this.interest = interest;
    //interest sera un array de strings
  }
  //Metodo para añadir interes
  addInterest() {

  }
  //Metodo para borrar interes
  deleteInterest(interest) {
    return interest.pop()
  }
  //Metodo para formatear intereses
  showInterests(interest) {

  }
  //Metodo para mostrar toda la informacion 
  showInfo() {
    
  }
}

let someone = new Person("John Wilson", 50 )
console.log(someone.name);