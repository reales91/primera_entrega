const opcionesMenu = {
	opcion: {
		demand: true,
		alias: 'o'
	},
	id_curso: {
		demand: true,
		alias: 'i'
	},
	nombre_interesado: {
		demand: true,
		alias: 'n'
	},
	cedula_interesado: {
		demand: true,
		alias: 'c'
	}
}
const opcionesInscriccion = {
	id_curso: {
		demand: true,
		alias: 'i'
	},
	nombre_interesado: {
		demand: true,
		alias: 'n'
	},
	cedula_interesado: {
		demand: true,
		alias: 'c'
	}
}

const educacion_continua1 = require ('./educacion_continua');
const fs = require('fs');
const argv = require('yargs')
			.command ('opciones', 'Menu: \no = 1 --- lista cursos.\no = 2 --- informacion curso del valor de i. \no = 3 --- generar archivo. \no = 4 --- no estoy interesado. \no = inscribir --- proceso de Inscricción.', opcionesMenu)
			.argv

console.log(argv);

let generarArchivo = (texto) =>{

	fs.writeFile('informacionCurso.txt', texto, (err) => {
		if (err) throw (err);
		console.log('Se Ha Creado El Archivo')
	});
}

if (argv.o == 1) 
{
	console.log(educacion_continua1.listarCursos());
}
else if(argv.o == 2)
{
	if (argv.i == educacion_continua1.cursos.curso_1.id) 
	{
		console.log(educacion_continua1.detallesCurso1());
	}
	else if(argv.i == educacion_continua1.cursos.curso_2.id)
	{
		console.log(educacion_continua1.detallesCurso2());
	}
	else if(argv.i == educacion_continua1.cursos.curso_3.id)
	{
		console.log(educacion_continua1.detallesCurso3());
	}
	else
	{
	console.log('Id Del Curso No Se Encuentra Registrado.')
	}
}
else if (argv.o == 3) 
{
	if (argv.i == educacion_continua1.cursos.curso_1.id) 
	{
		texto = 'Nombre Del Interesado: ' + argv.n + '\n' +
				'Cedula Del Interesado: ' + argv.c + '\n' +
				'Id Curso De Interes: ' + argv.i + '\n' +
				'Nombre Del Curso: ' + educacion_continua1.cursos.curso_1.nombre + '\n' +
				'Durabilidad Del Curso: ' + educacion_continua1.cursos.curso_1.duracion + '\n' +
				'Valor Del Curso: ' + educacion_continua1.cursos.curso_1.valor + '\n';
		generarArchivo(texto);
	}
	else if(argv.i == educacion_continua1.cursos.curso_2.id)
	{	
		texto = 'Nombre Del Interesado: ' + argv.n + '\n' +
				'Cedula Del Interesado: ' + argv.c + '\n' +
				'Id Curso De Interes: ' + argv.i + '\n' +
				'Nombre Del Curso: ' + educacion_continua1.cursos.curso_2.nombre + '\n' +
				'Durabilidad Del Curso: ' + educacion_continua1.cursos.curso_2.duracion + '\n' +
				'Valor Del Curso: ' + educacion_continua1.cursos.curso_2.valor + '\n';
		generarArchivo(texto);
	}
	else if(argv.i == educacion_continua1.cursos.curso_3.id)
	{
		texto = 'Nombre Del Interesado: ' + argv.n + '\n' +
				'Cedula Del Interesado: ' + argv.c + '\n' +
				'Id Curso De Interes: ' + argv.i + '\n' +
				'Nombre Del Curso: ' + educacion_continua1.cursos.curso_3.nombre + '\n' +
				'Durabilidad Del Curso: ' + educacion_continua1.cursos.curso_3.duracion + '\n' +
				'Valor Del Curso: ' + educacion_continua1.cursos.curso_3.valor + '\n';
		generarArchivo(texto);
	}
	else
	{
		console.log('Id Del Curso No Se Encuentra Registrado.')
	}
}
else if (argv.o == 4)
{
	console.log(educacion_continua1.listarCursos());
}
else if (argv.o == 'inscribir') 
{
	console.log('\nProceso de Inscricción');
}


