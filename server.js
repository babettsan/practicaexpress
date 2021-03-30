const express = require('express')
const app= express()
const bodyParser = require('body-parser')



//definir constante donde estara los datos
//arreglo
const datosArreglo= [];
//objetos
const datosObj = [
    {
        id:1,
        nombre: 'perro',
        tipo: 'caniche'
    },
    {
        id:1,
        nombre: 'gato',
        tipo: 'burmilla'
    }
]
//trabajar con obj json
// https://www.youtube.com/watch?v=YiBDvtEP88M 



//estructura express 
// info en https://www.youtube.com/watch?v=BBHcB43JEMc&list=PLszQ8j80Pxih_SqEuOW8o8kpvBG8U4GE7
app.get('/', (req,res) => {
	
	res.send('<p> HOLA, soy la ruta / <p/>')
})

// solo un res.send por request
// usar return para terminar la ejecucion

app.get('/comida/:nombre?', (req,res) => {

	// :nombre? si el parametro es opcional
	const {nombre, tipo} = req.params

	if(!nombre){
		return res.status(404).send(`no éxiste`);
	}else{
		return res.send(`comida:${nombre}`)
		//no poner etiquetas html porque ${} no lo toma

	}	
})


app.get('/animal', (req,res) => {

	// :nombre? si el parametro es opcional
	const {nombre, tipo} = req.query
	//query se usa para pasar objetos por parametro
	//ejemplo
	// /localhost:3000/animal?nombre=perro&tipo=labrador
	// devuelve perro y labrador

	if(!nombre){
		return res.status(404).send(`no éxiste`);
	}else{
		return res.send(`nombre:${nombre} tipo:${tipo}`)
		//no poner etiquetas html porque ${} no lo toma

	}	
})

// esto sirve para definir resp a toda ruta que no existe
app.get('*', (req,res) => {

	return res.status(404).send(`no éxiste`);
})


////////////////METODOS Express
// toda la info de express en https://expressjs.com/es/4x/api.html


app.get('/foto', (req,res) => {

	res.send('obtengo foto');
})

app.post('/foto', (req,res) => {

	res.send('creo foto');
})

app.put('/foto', (req,res) => {

	res.send('actualizo foto');
})

app.delete('/foto', (req,res) => {

	res.send('elimino foto');
})

// req.body de la extension bodyparser para recibir 
//datos por formulario y procesarolos
// app.use(bodyParser.urlencoded())
// app.use(bodyParser.json())



app.listen(4000)

//////// CHEATSHEET SOBRE METODOS DE ARRAY

// Accessing Elements I
// a1.concat(a2):
// Return new array by joining arrays a1 and a2 together
// a1.join(separator): 
// Join all elements of array a1 into a string separated by separator arg
// a1.slice(start, end):
// Extract a section from start to end of array a1 and return a new array
// a1.indexOf(obj):
// Return first index of obj within array a1
// a1.lastIndexOf(obj):
// Return last index of obj within array a1

// Iterating I
// a1.forEach(fn) Calls function fn for each element in the array a1
// a1.every(fn) Return true if every element in array a1 satisfies provided testing function fn
// a1.some(fn) Return true if at least one element in array a1 satisfies provided testing function fn
// a1.filter(fn) Create a new array with all elements of array a1 which pass the filtering function fn

// Iterating II
// a1.map(fn)Create a new array with results of calling function fn on every element in array a1
// a1.reduce(fn)Apply a function fn against an accumulator and each value (from left to right) of the array as to reduce it to a single value
// a1.reduceRight(fn)Apply a function fn against an accumulator and each value (from right to left) of the array as to reduce it to a single value

// Mutating I
// a1.pop()Remove and return last element from array a1
// a1.push(obj)Add obj to end of array a1 and return new length
// a1.reverse()Reverse order of elements of array a1 in place
// a1.sort()Sort the elements of array a1 in place
// a1.splice(start, deleteCount, items)Change content of array a1 by removing existing elements and/or adding new elements
// a1.unshift(obj)Add obj to start of array a1 and return new length

// General I
// a1.toString()Return a string representing array a1 and its elements (same as a1. join(','))
// a1.toLocaleString()Return a localized string representing array a1 and its elements (similar to a1.join(','))
// Array.isArray(var)Return true if var is an array
// a1.lengthReturn length of array a1
// a1[0]Access first element of array a1


////// PROMISES
// https://www.freecodecamp.org/news/learn-promise-async-await-in-20-minutes/