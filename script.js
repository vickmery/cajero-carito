// 1. Escribir una lista de usuarios con los siguientes dados: nombre, número
// de documento, contraseña y tipo de usuario. El tipo de usuario será: 1:
// administrador, 2: cliente. Guardarla en un array de objetos.
// 2. Realizar un programa que al inicio solicite ingresar documento y contraseña,
//  si el usuario no existe debe indicar que no existe y volver a preguntar usuario y
//  contraseña, si el usuario es administrador, debe permitir cargar el cajero de la siguiente
//   manera: 
// 3. Solicitar la cantidad de billetes de 5, 10, 20, 50 y 100 mil pesos COP.
// 4. Almacenar esta información en un array de objetos. 
// 5. Una vez tenga la información,
//  debe mostrar en consola la suma por cada denominación y el total general.
// 6. Una vez el cajero esté cargado, debe volver a solicitar usuario y
// contraseña, si es administrador, se repite el mismo proceso, sumar a la cantidad actual, 
// si es cliente debe proseguir de la siguiente manera: 
// 7. Si el cajero no tiene dinero cargado@debe 
// aparecer un mensaje en consola: "Cajero en mantenimiento, vuelva pronto." Y reiniciar desde el inicio.
// 8. Si el cajero ya tiene dinero cargado, debe preguntar la cantidad deseada a retirar.
//  Una vez obtenida la información, debe indicar cuánto dinero puede entregar basado en la 
//  cantidad disponible y los tipos de billetes. Luego debe mostrar en consola cuántos billetes
//   de cada denominación entregó. Priorizando siempre las denominaciones más altas para valores
//    altos y redondeando a la cifra más cercana menor a la solicitada.
// 9. Posteriormente, debe aparecer en consola, el dinero restante en el cajero, por cada denominación.



//Cree lista de usuario, declarando la Variable con Const y Cada una le asigne un Valor Inicial 
// como Persona, ObjetoPersona, Lista, ObjetoPersonaLista, Person, ObjetoPerson, usuario1.. 
// Son los Datos que se le solicitara al cliente para ingresar al cajero.

const dineroSacado = []

const users = [  //se crea un array de objetos  dentro de ellos tengo propiedades.
	{
		name: "carolina",
		documento: "0000",
		password: "12345",
		tipoUsuario: 1,
	},
	{
		name: "esteban",
		documento: "1234",
		password: "123",
		tipoUsuario: 2,
	},
];

const dineroEnCajero = [ //cree una lista con la denominacion de cada billete que necesitare/ 
	{
		denominacion: 100000,
		cantidad: 0,
	},
	{
		denominacion: 50000,
		cantidad: 2,
	},
	{
		denominacion: 20000,
		cantidad: 2,
	},
	{
		denominacion: 10000,
		cantidad: 3,
	},
	{
		denominacion: 5000,
		cantidad: 2,
	},
];

//comenzare validando los Datos ingresados por el usuario.
const inicioCajero = () => { //iniciaremos el cajero con un array vacio
	const numeroDocumento = prompt("Por favor ingrese su número de documento"); //le pido al usuario su numero de doc
	const password = prompt("Por favor ingrese su contraseña"); //le solicito al usuario su contarseña//
	validateUser(
		numeroDocumento,
		password,
	);
};
const depositarDinero = () => {
	alert("Vamos a depositar dinero");
	let totalDineroEnCajero = 0;
	dineroEnCajero.forEach((billete) => {
		const cantidadDepositada1 = prompt( // declaro variable , prompt muestra en pantalla
			`Por favor ingrese la cantidad de billetes de ${billete.denominacion} a depositar`
		);
		const cantidadDepositada = Number(cantidadDepositada1);
		billete.cantidad += cantidadDepositada; //suma acumulada
		const sumaDenominacion = billete.denominacion * billete.cantidad;
		totalDineroEnCajero += sumaDenominacion;
		alert(
			`Hay ${sumaDenominacion} en billetes de ${billete.denominacion}`
		);
	});

	console.log("Dinero en cajero por denominación", dineroEnCajero);
	console.log("Total de dinero en el cajero", totalDineroEnCajero);
	inicioCajero()
};

const Retornarsaldo = () => { //recorro el saldo del cajero
	let monto = 0;
	dineroEnCajero.forEach(item => {
		monto = monto + Number(item.denominacion) * Number(item.cantidad);

	})
	return monto
}
const retirarDinero = () => { //declarar funcion



	const retirarDinero = prompt("Cuanto desea Retirar") //recibir del usuario la info
	const totalDinero = Retornarsaldo()
	if (totalDinero < retirarDinero) {
		alert("Cajero en mantenimiento, vuelva pronto");
		inicioCajero()
	}
	else if (totalDinero >= retirarDinero) {    //let cambio = totalDinero - retiro;
		dineroEnCajero.forEach(element => {
			const billetesNecesarios = Math.floor(retirarDinero / element.denominacion)
			if (billetesNecesarios <= element.cantidad) {
				const billetes = { denominacion: element.denominacion, cantidad: billetesNecesarios }
				dineroSacado.push(billetes);
				element.cantidad -= billetesNecesarios;

			}

		})
		alert ("dinero entregado")
		console.log("arrey de billetes entregado..",dineroSacado)
		console.log("arrey de billetes del cajero..",dineroEnCajero)
		//inicioCajero()
	}
};
const validateUser = (numeroDocumento, password) => { // creo una variable llamada valideUser, que sera para validar si la info es correcta//

	//Buscamos al usuario iniciado en nuestro arrays de usuarios registrados o existente
	let usuarioValido = users.find( //utilizo el find para buscar //userFound Usuario encontrado
		user =>
			user.documento == numeroDocumento && //=== saber si el objeto es exactamente el mismo &&
			user.password == password
	);
	console.log(usuarioValido)
	//Se valida que mientras el usuario que inició no existe, debe volver a ejecutar la función de inicio.
	if (!usuarioValido) { //si el usuario no es valido me arroja alert
		//sino es verdadeda cree una alert para que le avise al usuario que los datos ingresados están incorrectos//
		alert("Los datos del usuario ingresado están incorrectos");
		//y se le vuelven a pedir los datos al usuario
		inicioCajero()
	}
	else if (usuarioValido.tipoUsuario == 1) { depositarDinero() }
	else if (usuarioValido.tipoUsuario == 2) { retirarDinero() }
};

inicioCajero()






