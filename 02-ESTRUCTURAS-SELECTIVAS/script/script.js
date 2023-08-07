/*
3.1 Realice un algoritmo para determinar si una persona puede votar 
con base en su edad en las próximas elecciones. Construya el diagrama de flujo,
el pseudocódigo y el diagrama N/S.
*/

const eleccionVotacion =  () => {
    let edad = + prompt('Ingrese su edad :'); 
    if(edad>18){
        alert(`Tiene ${edad} años, es mayor de edad y puede votar`);
    } else{
        alert(`Tiene ${edad} años, es menor de edad y no puede votar`);
    }    
}

//eleccionVotacion();

/*
3.2 Realice un algoritmo para determinar el sueldo semanal de un trabajador 
con base en las horas trabajadas y el pago por hora, considerando que después 
de las 40 horas cada hora se considera como excedente y se paga el doble. 
Construya el diagrama de flujo, el pseudocódigo y el diagrama N/S.
*/

const sueldoSemanal = () => {
    let horasTrabajadas = + prompt('Ingrese la cantidad de horas trabajadas :'); 
    let pagoHora = + prompt('Ingrese el pago por hora trabajada :'); 

    if(horasTrabajadas<=40){
        totalSueldo = horasTrabajadas*pagoHora;
    } else{
        totalSueldo = 40*pagoHora + (horasTrabajadas - 40)*pagoHora*2;
    }
    alert(`Las horas trabajadas fueron ${horasTrabajadas} y el pago por hora es ${pagoHora}, por lo que, el sueldo total es: ${totalSueldo}`);
}

//sueldoSemanal();

/*
3.3 El 14 de febrero una persona desea comprarle un regalo al ser querido que más 
aprecia en ese momento, su dilema radica en qué regalo puede hacerle, las 
alternativas que tiene son las siguientes:

Regalo          Costo
Tarjeta         $10.00 o menos
Chocolates      $11.00 a $100.00
Flores          $101.00 a $250.00
Anillo          Más de $251.00 

Se requiere un diagrama de flujo con el algoritmo que ayude a determinar qué regalo 
se le puede comprar a ese ser tan especial por el día del amor y la amistad.
*/

const determinarRegalo = () => {
    let efectivo = + prompt('Ingrese la cantidad de dinero con que cuenta :'); 
    let regalo = '';

    if(efectivo<= 10){
        regalo = 'Tarjeta';
    } else if(efectivo<= 100){
        regalo = 'Chocolates';
    } else if(efectivo<= 250){
        regalo = 'Flores';
    } else{
        regalo = 'Anillo';
    }
    alert(`Con ${efectivo} dólares se puede comprar ${regalo}`);
}

//determinarRegalo(); 

/*
3.4 El dueño de un estacionamiento requiere un diagrama de flujo con 
el algoritmo que le permita determinar cuánto debe cobrar por el 
uso del estacionamiento a sus clientes. Las tarifas que se tienen son 
las siguientes:

Las dos primeras horas a $5.00 c/u.
Las siguientes tres a $4.00 c/u.
Las cinco siguientes a $3.00 c/u.
Después de diez horas el costo por cada una es de dos pesos
*/

const determinarCostoEstacionemiento = () => {
    let horasEstacionadas = + prompt('Ingrese la cantidad de horas estacionadas :'); 
    let costoTotal = 0;

    if(horasEstacionadas<= 2){
        costoTotal = horasEstacionadas*5;
    } else if(horasEstacionadas<= 5){
        costoTotal = 10 + (horasEstacionadas-2)*4;
    } else if(horasEstacionadas<= 10){
        costoTotal = 10 + 12 + (horasEstacionadas-5)*3;
    } else{
        costoTotal = 10 + 12 + 15 + (horasEstacionadas-10)*0.059;
    }
    alert(`Por ${horasEstacionadas} horas estacionadas se debe cobrar ${costoTotal}`);
}

//determinarCostoEstacionemiento ();

/*
3.5 Se tiene el nombre y la edad de tres personas. Se desea saber el 
nombre y la edad de la persona de menor edad. Realice el algoritmo 
correspondiente y represéntelo con un diagrama de flujo, pseudocódigo y diagrama N/S.
*/

const determinarMenorEdad = () => {
    let nombre1 = 'A'//+ prompt('Ingrese el nombre de la primera persona :'); 
    let edad1 = 5//+ prompt('Ingrese la edad de la primera persona :'); 
    
    let nombre2 = 'B'//+ prompt('Ingrese el nombre de la segunda persona :'); 
    let edad2 = 8//+ prompt('Ingrese la edad de la segunda persona :'); 

    let nombre3 = 'C'//+ prompt('Ingrese el nombre de la tercera persona :'); 
    let edad3 = 10 //+ prompt('Ingrese la edad de la tercera persona :'); 

    let nombreMenorEdad = '';
    let edadMenorEdad = 0;

    if(edad1<edad2){
        if(edad1<edad3){
            nombreMenorEdad = nombre1;
            edadMenorEdad = edad1;
        }        
    } else if(edad2<edad3){
        nombreMenorEdad = nombre2;
        edadMenorEdad = edad2;
    } else {
        nombreMenorEdad = nombre3;
        edadMenorEdad = edad3;
    } 
    alert(`La persona menor de edad es ${nombreMenorEdad} con ${edadMenorEdad}`);
}

//determinarMenorEdad ();

/*
3.6 Realice el diagrama de flujo, el pseudocódigo y el diagrama N/S que 
muestren el algoritmo para determinar el costo y el descuento que 
tendrá un artículo. Considere que si su precio es mayor o igual a 
$200 se le aplica un descuento de 15%, y si su precio es mayor a $100 
pero menor a $200, el descuento es de 12%, y si es menor a $100, 
sólo 10%.
*/

/*
3.7 El presidente de la república ha decidido estimular a todos los estudiantes de una universidad mediante la asignación de becas 
mensuales, para esto se tomarán en consideración los siguientes 
criterios:
Para alumnos mayores de 18 años con promedio mayor o igual a 
9, la beca será de $2000.00; con promedio mayor o igual a 7.5, de 
$1000.00; para los promedios menores de 7.5 pero mayores o iguales a 6.0, de $500.00; a los demás se les enviará una carta de invitación incitándolos a que estudien más en el próximo ciclo escolar.
A los alumnos de 18 años o menores de esta edad, con promedios 
mayores o iguales a 9, se les dará $3000; con promedios menores a 
9 pero mayores o iguales a 8, $2000; para los alumnos con promedios menores a 8 pero mayores o iguales a 6, se les dará $100, y a los 
alumnos que tengan promedios menores a 6 se les enviará carta de 
invitación. Realice el algoritmo correspondiente y represéntelo con 
un diagrama de flujo.
*/

/*
3.8 Cierta empresa proporciona un bono mensual a sus trabajadores, el 
cual puede ser por su antigüedad o bien por el monto de su sueldo 
(el que sea mayor), de la siguiente forma:
Cuando la antigüedad es mayor a 2 años pero menor a 5, se otorga 
20 % de su sueldo; cuando es de 5 años o más, 30 %. Ahora bien, el 
bono por concepto de sueldo, si éste es menor a $1000, se da 25 % 
de éste, cuando éste es mayor a $1000, pero menor o igual a $3500, 
se otorga 15% de su sueldo, para más de $3500. 10%. Realice el 
algoritmo correspondiente para calcular los dos tipos de bono, 
asignando el mayor, y represéntelo con un diagrama de flujo y pseudocódigo.
*/

/*
3.9 Una compañía de seguros para autos ofrece dos tipos de póliza: 
cobertura amplia (A) y daños a terceros (B). Para el plan A, la cuota 
base es de $1,200, y para el B, de $950. A ambos planes se les carga 
10% del costo si la persona que conduce tiene por hábito beber alcohol, 
5% si utiliza lentes, 5% si padece alguna enfermedad –como deficiencia 
cardiaca o diabetes–, y si tiene más de 40 años, se le carga 
20%, de lo contrario sólo 10%. Todos estos cargos se realizan sobre el 
costo base. Realice diagrama de flujo y diagrama N/S que represente el 
algoritmo para determinar cuánto le cuesta a una persona contratar una póliza
*/

/*
3.10 Represente un algoritmo mediante un diagrama de flujo y el pseudocódigo 
para determinar a qué lugar podrá ir de vacaciones una persona, considerando 
que la línea de autobuses “La tortuga” cobra por kilómetro recorrido. Se debe 
considerar el costo del pasaje tanto de ida, como de vuelta; los datos que 
se conocen y que son fijos son: México, 750 km; P.V., 800 km; Acapulco, 
1200 km, y Cancún, 1800 km. También se debe considerar la posibilidad de tener 
que quedarse en casa.
*/

/*
3.11 Se les dará un bono por antigüedad a los empleados de una tienda. 
Si tienen un año, se les dará $100; si tienen 2 años, $200, y así 
sucesivamente hasta los 5 años. Para los que tengan más de 5, el 
bono será de $1000. Realice un algoritmo y represéntelo mediante 
el diagrama de flujo, el pseudocódigo y diagrama N/S que permita 
determinar el bono que recibirá un trabajador
*/

/*
3.12 Realice un algoritmo que permita determinar el sueldo semanal de 
un trabajador con base en las horas trabajadas y el pago por hora, 
considerando que a partir de la hora número 41 y hasta la 45, cada 
hora se le paga el doble, de la hora 46 a la 50, el triple, y que trabajar 
más de 50 horas no está permitido. Represente el algoritmo mediante el 
diagrama de flujo, el pseudocódigo y el diagrama N/S.
*/

/*
3.13 Los alumnos de una escuela desean realizar un viaje de estudios, 
pero requieren determinar cuánto les costará el pasaje, considerando 
que las tarifas del autobús son las siguientes: si son más de 100 
alumnos, el costo es de $20; si son entre 50 y 100, $35; entre 20 y 
49, $40, y si son menos de 20 alumnos, $70 por cada uno. Realice 
el algoritmo para determinar el costo del pasaje de cada alumno. 
Represente el algoritmo mediante el diagrama de flujo, el pseudocódigo 
y el diagrama N/S.
*/

/*
3.14 Realice un algoritmo que, con base en una calificación 
proporcionada (0-10), indique con letra la calificación que le 
corresponde: 10 es “A”, 9 es “B”, 8 es “C”, 7 y 6 son “D”, y de 5 a 0 son “F”. 
Represente el diagrama de flujo, el pseudocódigo y el diagrama N/S correspondiente.
*/

