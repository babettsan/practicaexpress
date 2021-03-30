const express = require('express')
const app= express()


app.get('/', (req,res) => {
	
	res.send('<p> HOLA, soy la ruta / <p/>')
})

// // solo un res.send por request
// // usar return para terminar la ejecucion

// app.get('/comida/:nombre?', (req,res) => {

// 	// :nombre? si el parametro es opcional
// 	const {nombre, tipo} = req.params

// 	if(!nombre){
// 		return res.status(404).send(`no éxiste`);
// 	}else{
// 		return res.send(`comida:${nombre}`)
// 		//no poner etiquetas html porque ${} no lo toma

// 	}	
// })


// app.get('/animal', (req,res) => {

// 	// :nombre? si el parametro es opcional
// 	const {nombre, tipo} = req.query
// 	//query se usa para pasar objetos por parametro
// 	//ejemplo
// 	// /localhost:3000/animal?nombre=perro&tipo=labrador
// 	// devuelve perro y labrador

// 	if(!nombre){
// 		return res.status(404).send(`no éxiste`);
// 	}else{
// 		return res.send(`nombre:${nombre} tipo:${tipo}`)
// 		//no poner etiquetas html porque ${} no lo toma

// 	}	
// })

// esto sirve para definir resp a toda ruta que no existe
// app.get('*', (req,res) => {

// 	return res.status(404).send(`no éxiste`);
// })

////////////////METODOS 
//consejo: no usar comillas invertidas en el texto 
//porque tira errores raros
// app.get('/foto', (req,res) => {

// 	res.send('obtengo foto');
// })

// app.post('/foto', (req,res) => {

// 	res.send('creo foto');
// })

// app.put('/foto', (req,res) => {

// 	res.send('actualizo foto');
// })

// app.delete('/foto', (req,res) => {

// 	res.send('elimino foto');
// })

// req.body = extension bodyparser para recibir 
//datos por formulario






app.listen(4000)