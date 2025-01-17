// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = 'computadora';

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 155;

// Crea una variable booleana:
const nuevoBool = false;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
  return str
  
}

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  let resultado = x + y;
  return resultado
}
suma(5,6)

function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  let resultado = x - y
  return resultado
}
resta(10, 5)

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  let resultado = x * y
  return resultado
}
multiplica(2, 5)

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  let resultadoDivision = x / y
  return resultadoDivision  
}
divide(15, 3)



function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  var iguales = Boolean;
  iguales = (x == y);
 return iguales 
}
sonIguales(5, "chau")

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  var longitud = Boolean;
  longitud = str1.length == str2.length;
  return longitud 
}
tienenMismaLongitud("hola", "chau")

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  var resultado = Boolean;
  resultado = num < 90;
  return resultado
}
menosQueNoventa(50)

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  var mayor = Boolean;
  mayor = num > 50;
  return mayor
}
mayorQueCincuenta(40)

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  var resto = x % y;
  return resto
}
obtenerResto(10,3)

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  var par = Boolean;
  par = (num % 2 == 0);
  return par
}
esPar(4)

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  var impar = Boolean;
  impar = (num % 2 != 0);
  return impar
}
esImpar(5)

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  var cuadrado = Math.pow(num, 2);
  return cuadrado
}
elevarAlCuadrado(5)

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  var elevadoCubo = Math.pow(num,3);
  return elevadoCubo
}
elevarAlCubo(3)

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  var resultado = num ** exponent;
  return resultado
}
elevar(5, 3)

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  var resultado = Math.round(num);
  return resultado
}
redondearNumero(16.6)

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  var haciaArriba = Math.ceil(num);
  return haciaArriba
}
redondearHaciaArriba(10.55)

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  var numero = Math.random(0, 1)
  return numero
}

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  if (numero > 0 )
    return("Es positivo");
  else if (numero < 0){
    return("Es negativo");
  }
  else 
    return (numero != 0)
}
esPositivo(10)


function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  var exclamacion = "!"
  var sumar = str + exclamacion
  return sumar 
}
agregarSimboloExclamacion("hola")

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  var resultado = nombre.concat(' ', apellido);
  return resultado
}
combinarNombres("cristian", "fernandez")

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  return `Hola ${nombre}!`
}
obtenerSaludo("cristian")

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  var area = alto * ancho;
  return area  
}
obtenerAreaRectangulo(10, 50)


function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  var calcularPerimetro = lado *4;
  return calcularPerimetro
}
retornarPerimetro(2)


function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
  var permiteroTriangulo = (base * altura)/2;
  return permiteroTriangulo;
}
areaDelTriangulo(10, 4)


function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  const dolares = 1.20
  var cambio = dolares * euro
  return cambio 
}
deEuroAdolar(15)


function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
  if (letra.length === 1){
    if (letra === "a"|| letra === "e" || letra ==="i" || letra === "o" || letra === "u" ){
      return ("Es vocal")
    }
    else if ( letra.length != 1) {
      return ("Dato incorrecto")
    }
    else {
      return ("Dato incorrecto")
    }
  }
}
esVocal("oiouue")


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
