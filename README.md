# :computer: First_JS

El contenido de este repositorio corresponde al contenido del curso de **Fundamentos de Javascript** de Platzi. Además, se incluye, algunas notas:notebook: de conceptos importantes dados en el curso.

## :clipboard: `var`, `let` y `const`: las diferencias entre ellos

`var` es la manera más antigua de declarar variables. No es muy estricta en cuanto al alcance, ya que al declarar variables de esta forma, dichas variables podrán ser accedidas, e incluso modificaddas, tanto dentro como fuera de los bloques internos en una función.

Con `let` por otra parte, el alcance se reduce al bloque (las llaves) en el cual la variable fue declarada. Fuera de este bloque la variable no existe. Una vez declarada la variable con let, no se puede volver a declarar con en ninguna otra parte de la función.

`const` al igual que `let` se define en el contexto o alcance de un bloque, a diferencia de let y var, las varibles definidas como constantes (const), ya no podrán ser modificadas ni declaradas nuevamente, en ninguna otra parte de la función o el contexto en el que ya existen.

La recomendación es reducir siempre al mínimo el alcance de nuestras variables, por lo que se debe usar let en lugar de var mientras sea posible.

## :calendar: Usando variables tipo Date.

Con variables de tipo Date, se pueden realizar operaciones de suma y resta similares a las que se realizan con números. El resultado que se obtiene está en milisegundos, por lo que luego hay que hacer algunas operaciones adicionales para llevarlos a días, meses o años según queramos. También aplica para Horas, Minutos, Segundos y Milisegundos.

## :bookmark_tabs:  Funciones recursivas

La recursividad es un concepto muy importante en cualquier lenguaje de programación. Una función recursiva es básicamente aquella que se llama (o se ejecuta) a sí misma de forma controlada, hasta que sucede una condición base.

## :pushpin: Memoización: ahorrando cómputo

La memoización es una técnica de programación que nos permite ahorrar cómputo o procesamiento en JavaScript, al ir almacenando el resultado invariable de una función para que no sea necesario volver a ejecutar todas las instrucciones de nuevo, cuando se vuelva a llamar con los mismos parámetros. Es similar a usar memoria cache.


## :black_nib: Entiende los closures de JavaScript

Un closure, básicamente, es una función que recuerda el estado de las variables al momento de ser invocada, y conserva este estado a través de reiteradas ejecuciones. Un aspecto fundamental de los closures es que son funciones que retornan otras funciones.

## :paperclip: Estructuras de datos inmutables

Las estructuras de datos inmutables forman parte de los principios de la Programación Funcional y nos permiten evitar tener efectos colaterales en los datos. En otras palabras, que hayan modificaciones en las variables sin nuestro consentimiento, produciendo comportamientos inesperados en el programa.

## :pencil2: Cambiando de contexto al llamar a una función

El contexto (o alcance) de una función es por lo general, window. Así que en ciertos casos, cuando intentamos referirnos a this en alguna parte del código, es posible que tengamos un comportamiento inesperado, porque el contexto quizás no sea el que esperamos.

Existen al menos tres maneras de cambiar el contexto de una función.

 -   Usando el método `.bind`, enviamos la referencia a la función sin ejecutarla, pasando el contexto como parámetro.
 -   Usando el método `.call`, ejecutamos inmediatamente la función con el contexto indicado
 -  Usando el método `.apply`, es similar a .call pero los parámetros adicionales se pasan como un arreglo de valores
