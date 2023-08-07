/*
2.1 Realice un diagrama de flujo y pseudocódigo que representen el algoritmo 
para obtener el área de un triángulo.
*/

const obtenerAreaTriangulo = () => {
    let base = + prompt('Ingrese la base del Triángulo :');
    let altura = + prompt('Ingrese la altura del Triángulo :');   
    let areaTriangulo = (base*altura)/2;    
    alert(`El área del triangulo es: ${areaTriangulo}`);
}

//obtenerAreaTriangulo();

/*
2.2 Una empresa importadora desea determinar cuántos dólares puede 
adquirir con equis cantidad de dinero mexicano. Realice un diagrama 
de flujo y pseudocódigo que representen el algoritmo para tal fin.
*/

const convertirMoneda = () => {
    let pesoMexicano = + prompt('Ingrese la cantidad de pesos mexicano :');       
    let Dolares = pesoMexicano*0.059;
    alert(`El total de dólares es: ${Dolares}`);
}

//convertirMoneda();

/*
2.3 Una empresa que contrata personal requiere determinar la edad de 
las personas que solicitan trabajo, pero cuando se les realiza la 
entrevista sólo se les pregunta el año en que nacieron. Realice el diagrama 
de flujo y pseudocódigo que representen el algoritmo para solucionar 
este problema.
*/

const calcularEdad = () => {
    let anioNacimiento = + prompt('Ingrese el año de nacimiento :'); 
    let hoy = new Date();      
    let edad = hoy.getFullYear() - anioNacimiento;
    alert(`La edad del personal es: ${edad}`);
}

//calcularEdad();

/*
2.4 Un estacionamiento requiere determinar el cobro que debe aplicar a 
las personas que lo utilizan. Considere que el cobro es con base en las 
horas que lo disponen y que las fracciones de hora se toman como 
completas y realice un diagrama de flujo y pseudocódigo que representen 
el algoritmo que permita determinar el cobro.
*/

const calcularCostoEstacionamiento = () => {
    let horas = + prompt('Ingrese la cantidad de horas estacionadas :'); 
    let costo = + prompt('Ingrese el costo por hora de estacionamiento :'); 
    let totalMonto = Math.ceil(horas)*costo;
    alert(`El costo Total es: ${totalMonto}`);
}

//calcularCostoEstacionamiento();

/*
2.5 Pinturas “La brocha gorda” requiere determinar cuánto cobrar por 
trabajos de pintura. Considere que se cobra por m2 y realice un diagrama 
de flujo y pseudocódigo que representen el algoritmo que le 
permita ir generando presupuestos para cada cliente
*/

const calcularCostoPintado = () => {
    let totalMetrosCuadrados = + prompt('Ingrese la cantidad de metros cuadrados :'); 
    let costo = + prompt('Ingrese el costo por metro cuadrado :'); 
    let totalMonto = totalMetrosCuadrados*costo;
    alert(`El costo Total es: ${totalMonto}`);
}

//calcularCostoPintado();

/*
2.6 Se requiere determinar la hipotenusa de un triángulo rectángulo. 
¿Cómo sería el diagrama de flujo y el pseudocódigo que representen 
el algoritmo para obtenerla? Recuerde que por Pitágoras se tiene 
que: C2 = A2 + B2.
*/

const calcularHipotenusaTriangulo = () => {
    let a = + prompt('Ingrese la medida del primer lado del triángulo: ');
    let b = + prompt('Ingrese la medida del segundo lado del triángulo: ');
    let hipotenusa = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
    alert(`Si el primer lado es ${a} y el segundo lado es ${b} entonces la hipotenusa del triángulo es ${hipotenusa}`);
}

//calcularHipotenusaTriangulo();

/*
2.7 La compañía de autobuses “La curva loca” requiere determinar el costo 
que tendrá el boleto de un viaje sencillo, esto basado en los kilómetros por 
recorrer y en el costo por kilómetro. Realice un diagrama de 
flujo y pseudocódigo que representen el algoritmo para tal fin.
*/

const calcularCostoViaje = () => {
    let totalKm = + prompt('Ingrese los Kilometros a recorrer: ');
    let costo = + prompt('Ingrese el costo por Kilómetro: ');
    let costoTotal = totalKm*costo;
    alert(`El costo total del Viaje es: ${costoTotal}`);    
}

// calcularCostoViaje();

/*
2.8 Se requiere determinar el tiempo que tarda una persona en llegar de 
una ciudad a otra en bicicleta, considerando que lleva una velocidad 
constante. Realice un diagrama de flujo y pseudocódigo que representen el 
algoritmo para tal fin.
*/



/*
2.9 Se requiere determinar el costo que tendrá realizar una llamada telefónica 
con base en el tiempo que dura la llamada y en el costo por minuto. Realice 
un diagrama de flujo y pseudocódigo que representen el algoritmo para tal fin.
*/

/*
2.10 La CONAGUA requiere determinar el pago que debe realizar una 
persona por el total de metros cúbicos que consume de agua. Realice un diagrama 
de flujo y pseudocódigo que representen el algoritmo que permita determinar ese pago
*/

/*
2.11 La compañía de luz y sombras (CLS) requiere determinar el pago 
que debe realizar una persona por el consumo de energía eléctrica, 
la cual se mide en kilowatts (KW). Realice un diagrama de flujo y 
pseudocódigo que representen el algoritmo que permita determinar ese pago.
*/

/*
2.12 Realice un diagrama de flujo y pseudocódigo que representen el 
algoritmo para determinar cuánto pagará finalmente una persona 
por un artículo equis, considerando que tiene un descuento de 20%, 
y debe pagar 15% de IVA (debe mostrar el precio con descuento y el 
precio final).
*/

/*
2.13 Realice un diagrama de flujo y pseudocódigo que representen el 
algoritmo para determinar cuánto dinero ahorra una persona en un 
año si considera que cada semana ahorra 15% de su sueldo (
*/

/*
2.14 Una empresa desea determinar el monto de un cheque que debe 
proporcionar a uno de sus empleados que tendrá que ir por equis 
número de días a la ciudad de Monterrey; los gastos que cubre la 
empresa son: hotel, comida y 100.00 pesos diarios para otros gastos. 
El monto debe estar desglosado para cada concepto. Realice un 
diagrama de flujo y pseudocódigo que representen el algoritmo 
que determine el monto del cheque.
*/