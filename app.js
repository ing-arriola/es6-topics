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

//Getting data from an array inside a object ... inside another object :)

let customer={
    type:'premium',
    credit:5000,
    data:{
        name:'peter',
        surname:'clark',
        location:{
            city:'Texas'
        },
        movements:['12-2-2019','23-10-2018','14-08-2017']

    },
    credits:['tv','house','car']
}

let {type,credit,data}=customer
let [,uno,]=data.movements
console.log(uno)

let {credits:[one]}=customer
console.log(one)

//function with default values
//With the addition of {} in the parameter of the object it is possible 
//get only one parameter from the user
function reservation(complete,{paid='cash',amount=0}={}){
    console.log(`amount is:${amount}`)
}

reservation(true)

//Regular expressions (RE)
//Declaring a RE for numbers
let reg=/0-9/
let reg2=/a-z/
//To check a date
let reg3=/\d\d-\d\d-\d\d\d\d/ //So in this example the date could be DD-MM-YYYY or MM-DD-YYYY
let reg4=/\d\d-\D\D\D-\d\d\d\d/ //But in this case it has to be DD-MMM-YYYY to make sense
console.log(reg.test('a'))
console.log(reg2.test('A'))
console.log(reg3.test('15-10-2019'))
console.log(reg3.test('hola mundo'))
console.log('Esta es la ExpReg4: '+reg4.test('12-JAN-2020'))

//checkin numbers or letters in a string
let regNumLet=/\w+/
console.log(regNumLet.test('3st4 3s 1 C4d3na c0n Num3r0s y leTr4s'))//As you can see this RegExp allows the blanks spaces :(
