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