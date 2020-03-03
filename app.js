//Destructuring objects
let persona={
    nombre:'Jaime',
    ocupacion:'Backend Developer',
    domicilo:'ciudad1'
}
let {nombre}=persona
let {ocupacion}=persona
console.log(nombre)
console.log(ocupacion)

//Destructuring an object with objects inside of it

let student={
    nombre:'Raul',
    education:{
        middleSchool:{
            name:'COLEXAMPLE',
            location:'EL Salvador',
            sections:12,
            ranking:20
        }
        ,university:{
            name:'UEXAMPLE',
            location:'El Salvador',
            Pregades:20,
            students:2000,
            ranking:12
        }
    }
}
//getting an object inside an object... pay attention to the syntaxis
let {education: {middleSchool}}=student

console.log(middleSchool.name)

//Destructuring arrays
let cities=['Tokyo','New York','Miami','San Salvador','San Jose']
//Get first city
let [city]=cities
console.log(city)

//Get some cities ... both one inmediately after another
let [city1,city2]=cities
console.log(`city 1 is: ${city1} and city 2 is: ${city2}`)

//Getting a specific city
//As you can see you need to put "," to indicate the other values in order to be able to get 
//the city at a specific position where you write the name of the variable that you want
let [,,specificCity,]=cities
console.log(specificCity)