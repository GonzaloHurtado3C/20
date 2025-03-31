function contarNumeros(){                          //crea la Función (contarNumeros)
    let n= parseInt(prompt("Introduce un número"));//crea un cuadro de texto para poner un número y lo convierte a entero.
    let count = 1;             //crea un contador que empieza y sigue de 1 en 1 , ejemplo 1,2,3,4,5.
    let array = [];            //crea una lista vacia para almacenar los numeros.
    while(count <=n){          // la condicion se cumple mientras el contador sea menor o igual al número introducido.
        array.push(count);     // inserta todo los numeros que serian menor que 5, del ejemplo = [1,2,3,4,5].
        count++;               // incrementa 1 al contador, osea va agregando 1 cada vez que se cumple la condicion.
    }
}
alert('Contando:${array.join(" - ")}');
/*crea un conteo de los numeros que se han seleccionado ,contando los numeros que son menores de 5, ejemplo [1,2,3,4]
se decide si es mayor,menor o igual con el bucle y la condicion que pide [ while(count <=n){ ] en este caso dice 
menor o igual que 5.*/

function contarNumeros(){      //crea la Función (contarNumeros)
    let n= parseInt(prompt("Introduce un número"));//crea un cuadro de texto para poner un número y lo convierte a entero.
    let limite = 1;             //crea un limite que empieza y sigue de 1 en 1 , ejemplo 1,2,3,4,5. (osea lo mismo que un count)
    let array = [];            //crea una lista vacia para almacenar los numeros.
    while(limite <=n){      /* la condicion se cumple mientras el contador sea menor o igual al número introducido
                            el while es un bucle que se repite mientras la condicion sea verdadera.*/
        array.push(count);     // inserta todo los numeros que serian menor que 5, del ejemplo = [1,2,3,4,5].
        count --;       /*va quitando 1 al contador, osea se resta 1 cada vez que se devuelve al bucle,
                        como ejemplo tengo 5 y se va restando hasta que se cumpla la condicion.*/
    }
}
alert('Contando:${array.join(" - ")}');
/*crea un conteo de los numeros que se han seleccionado ,contando los numeros que son menores de 5, ejemplo [1,2,3,4]
se decide si es mayor,menor o igual con el bucle y la condicion que pide [ while(count <=n){ ] en este caso dice 
menor o igual que 5.*/