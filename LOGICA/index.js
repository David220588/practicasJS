//console.log("hello")

//ejercicio 1
// function cantLetras(cadena=""){
//     if(!cadena){ 
//  console.warn("no ingresaste nada")
//     } else {   
//     console.log("la cadena" ,cadena ,"tiene en total de",cadena.length)
// }
     
// }
// cantLetras("renata")

//ejercicio 2

// const contarCaracteres = (cadena="",longitud=undefined) =>
//     (!cadena)   
//     ? console.warn("no ingresaste nada")
//     :(longitud=== undefined) 
//     ? console.warn("no ingresaste posicion")
//     : console.info(cadena.slice(0,longitud));

// contarCaracteres("ddada",)

//ejercisio 3

// const separa = (cadena="",separador = undefined) =>
//     (!cadena)   
//         ? console.warn("no ingresaste nada")
//         :(separador=== undefined) 
//         ? console.warn("no ingresaste posicion")
//         : console.info(cadena.split(separador));


//         separa("lorem jajajja ijefiwjfdia nfd",",")
//         separa("renata es mi hija",".");

//ejercicio 4

// function repetir(texto="",cantidad=undefined){
//     if (!texto) console.warn("debes ingresar un texto");
//     if (cantidad=== undefined) console.warn("debes ingresar una cantidad")
//     if (Math.sign(cantidad)=== -1) console.error("ingresa un numero positivo")
//     for(i=1; i<=cantidad;i++)console.info(texto, i) 
//     }
// repetir("gloria a dios ",10)

//ejercicio 5 Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

// const voltear = (palabra="") =>
//     (!palabra)
//     ? console.warn("ingresa una palabra")
//     : console.log(palabra.split("").reverse().join(""))

// voltear("otroletravaladna logi")


// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

// function textoEnCadena(cadena="",texto=""){
//     if(!cadena) return console.warn("no ingresaste texto")
//     if(!texto) return console.warn("no ingresaste la palabra")

//     let i = 0,
//     contador=0
//     while(i !== -1){ 
//     i=cadena.indexOf(texto,i)
//     if(i!== -1)
//     i++
//     contador++
//     }
//     return console.info("la palabra", texto ,"se repite", contador, "veces")
// }

// textoEnCadena("hoy es el dia que hizo el señor nos alegraremos y gozaremos en el señor", "señor")
// textoEnCadena()


// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

// const palindromo = (palabra="")=>{
//     if(!palabra)return console.warn("no ingresaste nada")
//     palabra = palabra.toLocaleLowerCase()
//     let alReves = palabra.split("").reverse("").join("")
//     return (palabra===alReves)
//     ? console.info("si es palindromo, Palabra original: ",palabra, "palabra al reves: ", alReves)
//     : console.info("no es palindromo, palabra original: ",palabra, "Palabra al reves: ",alReves)
// }
// palindromo("Ala")


// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

// const eliminar = (texto="",patron="") =>
// (!texto)
// ?console.warn("no ingresaste texto")
// :(!patron)
// ?console.warn("no ingresaste patron de caracteres")
// :console.info(texto.replace(new RegExp(patron,"ig"),""))

// eliminar("horoscos","o")


// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

// const aleatorio = () =>{
//     console.log(Math.round(Math.random()*100+500))
// }
// aleatorio()

// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

// const capicua = (numero=0)=>{
//     if(!numero)console.warn("no ingresaste un nemero")
//     if(typeof numero !="number") console.warn("el valor de ", numero,"no es un numero")

//     numero=numero.toString()
//     let alReves = numero.split("").reverse().join("")

//     return(numero === alReves)
//     ? console.info("si es capicua, numero original: ",numero, "numero al reves: ",alReves)
//     : console.info("no es capicua, numero original: ",numero, "numero al reves: ", numero)
// }

// capicua(2002)
// capicua(1999)

//ejercicio 11 // 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.


// const factorial = (numero=undefined) =>{
//     if (numero=== undefined) return console.warn("no ingresaste un numero")
//     if (typeof numero !=="number") return console.error("el valor ",numero,"ingresado, no es un numero")
//     if (numero === 0) return console.error("el numero no puede ser 0")
//     if(Math.sign(numero)=== -1) return console.error("El numero no puede ser negativo")

//     let factorial= 1
//     for(let i = numero; i>1;i--){ 
//     factorial*=i 
//     }
//     console.info("El factorial de ", numero,"es ",factorial)
// }
// factorial(5)
// factorial()
// factorial(-5)
// factorial("aaa")


// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

// const nPrimo = (numero=undefined)=>{
//     if (numero=== undefined) return console.warn("no ingresaste un numero")
//     if (typeof numero !=="number") return console.error("el valor ",numero,"ingresado, no es un numero")
//     if (numero === 0) return console.error("el numero no puede ser 0")
//     if(Math.sign(numero)=== -1) return console.error("El numero no puede ser negativo")

//     let divisible = false
//     for(let i =2; i<numero; i++){
//         if((numero %i)=== 0){ 
//             divisible=true
//             break
//     }
//     }
//     return (divisible)
//     ?console.log("el numero ",numero,"No es primo")
//     :console.log("el numero ",numero," Si es primo")
// }

// nPrimo()
// nPrimo(4)
// nPrimo(7)
// nPrimo(200)
// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

// const nroParImpar = (numero=undefined) => {
//     if (typeof numero !=="number") return console.error("el valor ",numero,"ingresado, no es un numero")
//     if (numero === 0) return console.error("el numero no puede ser 0")

//     return((numero%2)===0)
//     ? console.log("El numero " ,numero,"es par")
//     : console.log("El numero " ,numero,"es impar")
// }

// nroParImpar()
// nroParImpar("hello")
// nroParImpar(10)
// nroParImpar(11)


// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

// const convertirGrados = (grados = undefined,unidad=undefined) =>{
//     if (typeof grados !=="number") return console.error("el valor ",grados,"ingresado, no es un numero");               if (grados === undefined) return console.error("no ingresaste grados a convertir");
//     if (typeof unidad !== "string") console.warn("el valor ",unidad, "no es una cadena de texto")
//     if ( unidad.length !== 1 || !/(C|F)/.test(unidad)) return console.log("valor de unidad invalido")
//     if (unidad==="C"){
//         return console.info(grados ,"°C=" ,(Math.round(9/5)+32 ),"°F")
//     } else if (unidad === "F"){
//         return console.info(grados,"°F=", (Math.round((grados-32)*(5/9))),"°C")
//     }
// }
// convertirGrados(0,"C")
// convertirGrados(32,"F")
// convertirGrados(100, "F")



// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
// const aplicarD = (monto=undefined,desc=undefined)=>{
//     if(monto===undefined)console.error("no ingresaste un monto")
//     if(typeof monto !== "number") console.error("ingresa un numero")
//     if(Math.sign(monto)===-1)console.error("ingresa un numero positivo")
//     if(typeof desc !=="number")console.log("no  ingresaste un numero")
//     if(Math.sign(desc)=== -1)console.log("ingresa un numero negativo")
//     return console.log("monto: $",monto, "- El descuento de",desc,"% da un total de:",(monto-(monto*desc)/100))
// }

// aplicarD(100,30)


// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

// const calcularAnios=(fecha= undefined) =>{
//     if(fecha===undefined)return console.warn("No ingresaste fecha")
//     if(!(fecha instanceof Date))return console.error("el valor que ingresaste no es una fecha valida")

//     let hoyMenosFecha = new Date().getTime()- fecha.getTime(),
//     aniosMs= 1000 *60*60*24*365 
//     aniosHumanos = Math.floor(hoyMenosFecha/aniosMs)
//     return (Math.sign(aniosHumanos === -1))
//     ? console.info("Faltan ",Math.abs(aniosHumanos),"años para el " , fecha.getFullYear())
//     :(Math.sign(aniosHumanos)=== 1)
//     ?console.info("han pasado " ,aniosHumanos," años,desde", fecha.getFullYear())
//     : console.info("estamos en el año actual ",fecha.getFullYear())
// }

// calcularAnios()
// calcularAnios({})
// calcularAnios(new Date(1988/04/22))
// calcularAnios(new Date (2021/11/01))

// 18)

// const contarLetras=(cadena="" ) =>{
//     if(!cadena) console.warn("no ingresaste un texto")
//     if( typeof cadena !== "string") console.warn("valor ingresado invalid")

//     let vocales = 0
//     let consonantes = 0
//     cadena= cadena.toLocaleLowerCase()

//     for (let letra of cadena){
        
//         if(/[aeiou]/.test(letra)){ 
//         vocales ++
//     }
    
//     if(/[bcdfghijklmnñpqrstvwxyz]/.test(letra)){
//         consonantes++
//     }
// }
// return console.info(
//     "La cadena:",cadena,"esta formada por:",vocales,"vocales y ",consonantes,"consonantes"
// )

// }
// contarLetras("renata gomez mari")

//19 crear una funcion que valide si una cadena ingresada es un mail valido

// const validarMail = (email="") =>{
//     if(!email) console.error("no ingresaste ningun valor")
//     if(typeof email !== "string")console.error("el valor de ",email, "debe ser una cadena de texto ")
//     let expReg =  /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email)
//     return (expReg)
//     ? console.info(email,"es un mail valido")
//     : console.warn( email,"no es un mail valido")
// }

// validarMail("david@hotmail.com")
// validarMail("")
// validarMail("11111@111111.com")

// *************expresion regular para validar un mail:

// La expresión regular que uso para el email en este video /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i******************



// 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

// const devcuadrados = ( arr=undefined) =>{
//     if(!arr)console.log("no ingresaste ningun valor")
//     if(!(arr instanceof Array))console.error("el valor ingresado no es un array")
//     for(let num of arr){
//         if(typeof num !=="number")return console.error("el valor ",num,"ingresado, No es un array")
//     }
//     const newArr = arr.map(el => el *el)
//     return console.info("arreglo original:",arr, "\nArreglo elevado al cuadrado: ",newArr)
// }

// devcuadrados([2,4,6,8])

// 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

    // const ArrayMinMax = (arr = undefined) =>{ 
    // if(!arr)console.log("no ingresaste ningun valor")
    //  if(!(arr instanceof Array))console.error("el valor ingresado no es un array")
    // for(let num of arr){
    //     if(typeof num !=="number")return console.error("el valor ",num,"ingresado, No es un array")
    // }
    // return console.info("arreglo origial: ",arr,"\nValor mayor:",Math.max(...arr) ,"\nValor menor: ", Math.min(...arr))
    // }
    // ArrayMinMax([100,1,55,989,-5])

// 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

// const separaParesImpares =(arr=undefined) =>{ 

//     if(!arr)console.log("no ingresaste ningun valor")
// if(!(arr instanceof Array))console.error("el valor ingresado no es un array")
// for(let num of arr){
// if(typeof num !=="number")return console.error("el valor ",num,"ingresado, No es un array")
//     }
//     return console.log({ 
//     pares:arr.filter(num => num %2 === 0),
//     impares: arr.filter(num => num %2 === 1)    
// })}
// separaParesImpares([1,2,3,4,5,6,7,8,9])

// 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.

// const ordenarArreglo = (arr=undefined) => { 
// if(!arr)console.log("no ingresaste ningun valor")
// if(!(arr instanceof Array))console.error("el valor ingresado no es un array")
// for(let num of arr){
// if(typeof num !=="number")return console.error("el valor ",num,"ingresado, No es un array")
// }
//  console.log({
//    "arreglo original": arr,
//     asc:arr.map(el => el).sort(),
//     desc: arr.map(el =>el).sort().reverse()
//  })
// }

// ordenarArreglo([6,8,8,9,6,333,9,1,0,2])



// 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

const eliminardupli = (arr=undefined)=>{ 

if(!arr)console.log("no ingresaste ningun valor")
if(!(arr instanceof Array))console.error("el valor ingresado no es un array")
if(arr.length===0)console.error("No ingresaste un valor")
if(arr.length===1)console.log("ingresa un arreglo con mas de un alemento")

console.info({
    original:arr,
    // sinDuplicados: arr.filter((value,index,self)=>self.indexOf(value)=== index)
sindupli:[... new Set(arr)]
})
}
eliminardupli([1,true,false,true,2,3,1,2,"hola","hola"])

// 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.


// 27) Programa una clase llamada Pelicula.

// La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
//   - Todos los datos del objeto son obligatorios.
//   - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
//      7 restantes números.
//   - Valida que el título no rebase los 100 caracteres.
//   - Valida que el director no rebase los 50 caracteres.
//   - Valida que el año de estreno sea un número entero de 4 dígitos.
//   - Valida que el país o paises sea introducidos en forma de arreglo.
//   - Valida que los géneros sean introducidos en forma de arreglo.
//   - Valida que los géneros introducidos esten dentro de los géneros 
//      aceptados*.
//   - Crea un método estático que devuelva los géneros aceptados*.
//   - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
//     decimal de una posición.
//   - Crea un método que devuelva toda la ficha técnica de la película.
//   - Apartir de un arreglo con la información de 3 películas genera 3 
//     instancias de la clase de forma automatizada e imprime la ficha técnica 
//     de cada película.

// * Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.