//Clase de Personas con propiedades de nombre, edad e intereses
class Person {
  constructor(name, age, interest) {
    this.name = name;
    this.age = age;
    this.interest = interest;
    //interest sera un array de strings
  }
  //Metodo para añadir interes
  addInterest(interest) {
    return interest.push();
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

let someone = new Person("John Wilson", 50, ["Sleep", "Food", "Games"])
console.log(someone.interest);