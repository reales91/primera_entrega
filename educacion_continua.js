let cursos = {
	curso_1: {
		id: 101,
		nombre: 'Excel Avanzado',
		duracion: '40 horas',
		valor: '$ 120,000'
	},
	curso_2: {
		id: 102,
		nombre: 'Introducción a PHP',
		duracion: '70 horas',
		valor: '$ 150,000'
	},
	curso_3: {
		id: 103,
		nombre: 'Administración De Servidores Linux',
		duracion: '100 horas',
		valor: '$ 230,000'
	}
};

let detallesCurso1 = () =>{
	let informacion = "curso 1. \nId: " + cursos.curso_1.id + "\nNombre: " + cursos.curso_1.nombre + "\nDuración: " + cursos.curso_1.duracion + "\nValor: " + cursos.curso_1.valor + '\n';
	return informacion;
}

let detallesCurso2 = () =>{
	let informacion = "curso 2. \nId: " + cursos.curso_2.id + "\nNombre: " + cursos.curso_2.nombre + "\nDuración: " + cursos.curso_2.duracion + "\nValor: " + cursos.curso_2.valor + '\n';
	return informacion;
}

let detallesCurso3 = () =>{
	let informacion = "curso 3. \nId: " + cursos.curso_3.id + "\nNombre: " + cursos.curso_3.nombre + "\nDuración: " + cursos.curso_3.duracion + "\nValor: " + cursos.curso_3.valor + '\n';
	return informacion;
}

let listarCurso1 = (callback) =>{
	setTimeout(function(){
	let informacion = detallesCurso1();
	callback (informacion);
},0);
}

let listarCurso2 = (callback) =>{
	setTimeout(function(){
	let informacion = detallesCurso2();
	callback (informacion);
},2000);
}

let listarCurso3 = (callback) =>{
	setTimeout(function(){
	let informacion = detallesCurso3();
	callback (informacion);
},4000);
}

let listarCursos = () => {
	listarCurso1(function(informacion){
	console.log(informacion);
	})

	listarCurso2(function(informacion){
	console.log(informacion);
	})

	listarCurso3(function(informacion){
	console.log(informacion);
	})
}

module.exports = {
	cursos,
	listarCursos,
	detallesCurso1,
	detallesCurso2,
	detallesCurso3
};
