/*
4.1 Un profesor tiene un salario inicial de $1500, y recibe un incremento de 10 % 
anual durante 6 años. ¿Cuál es su salario al cabo de 6 años? ¿Qué salario ha 
recibido en cada uno de los 6 años? Realice el algoritmo y represente la 
solución mediante el diagrama de flujo, el pseudocódigo y el diagrama N/S, 
utilizando el ciclo apropiado
*/

const determinarSalario = () => {
    let sueldo = 1500;
    const incremento = 0.1;   

    for(i=0;i<6;i++){
        sueldo = sueldo + sueldo*incremento;
        console.log(`En el Año ${i+1} su sueldo es ${sueldo.toFixed(2)}`);
    }    
}

//determinarSalario();

/*
4.2 “El náufrago satisfecho” ofrece hamburguesas sencillas (S), dobles 
(D) y triples (T), las cuales tienen un costo de $20, $25 y $28 respectivamente. 
La empresa acepta tarjetas de crédito con un cargo 
de 5 % sobre la compra. Suponiendo que los clientes adquieren N 
hamburguesas, las cuales pueden ser de diferente tipo, realice un 
algoritmo para determinar cuánto deben pagar. Represéntelo en 
diagrama de flujo, pseudocódigo y diagrama N/S. 
*/

const determinarPagoHamburguesas = () => {
    let cantHambSencilla = + prompt('Ingrese la cantidad de hamburquesas sencilla :');    
    let cantHambDoble = + prompt('Ingrese la cantidad de hamburquesas doble :');    
    let cantHambTriple = + prompt('Ingrese la cantidad de hamburquesas triple :');

    let pagaTarjeta = prompt('Paga con Tarjeta(SI/NO) :');

    total = cantHambSencilla*20 + cantHambDoble*25 + cantHambTriple*28;
    
    if(pagaTarjeta.toUpperCase() === 'SI')
    {
        total = total + total*0.05;
    } 
    
    console.log(`El monto total es ${total} por ${cantHambSencilla} Hamburguesas sencillas; ${cantHambDoble} Hamburguesas dobles; ${cantHambTriple} Hamburguesas triples`);
}

determinarPagoHamburguesas();

/*
4.3 Se requiere un algoritmo para determinar, de N cantidades, cuántas 
son cero, cuántas son menores a cero, y cuántas son mayores a cero. 
Realice el diagrama de flujo, el pseudocódigo y el diagrama N/S para 
representarlo, utilizando el ciclo apropiado.
*/

/*
4.4 Una compañía fabrica focos de colores (verdes, blancos y rojos). Se 
desea contabilizar, de un lote de N focos, el número de focos de cada 
color que hay en existencia. Desarrolle un algoritmo para determinar esto 
y represéntelo mediante el diagrama de flujo, el pseudocódigo y el 
diagrama N/S, utilizando el ciclo apropiado.
*/

/*
4.5 Se requiere un algoritmo para determinar cuánto ahorrará en pesos 
una persona diariamente, y en un año, si ahorra 3¢ el primero de 
enero, 9¢ el dos de enero, 27¢ el 3 de enero y así sucesivamente 
todo el año. Represente la solución mediante el diagrama de flujo, 
el pseudocódigo y el diagrama N/S, utilizando el ciclo apropiado.
*/

/*
4.6 Resuelva el problema 4.1, mediante: a) un ciclo Repite y b) un ciclo 
Desde.
*/

/*
4.7 Resuelva el problema 4.2, mediante: a) un ciclo Mientras y b) un 
ciclo Desde
*/

/*
4.8 Realice el algoritmo para determinar cuánto pagará una persona que 
adquiere N artículos, los cuales están de promoción. Considere que 
si su precio es mayor o igual a $200 se le aplica un descuento de 15%, 
y si su precio es mayor a $100 pero menor a $200, el descuento es de 
12%; de lo contrario, sólo se le aplica 10%. Se debe saber cuál es el 
costo y el descuento que tendrá cada uno de los artículos y finalmente cuánto 
se pagará por todos los artículos obtenidos. Represente la 
solución mediante el diagrama de flujo, el pseudocódigo y el diagrama N/S.
*/

/*
4.9 Un cliente de un banco deposita equis cantidad de pesos cada mes 
en una cuenta de ahorros. La cuenta percibe un interés fijo durante 
un año de 10 % anual. Realice un algoritmo para determinar el total 
de la inversión final de cada año en los próximos N años. Represente la 
solución mediante el diagrama de flujo, el pseudocódigo y 
diagrama N/S.
*/