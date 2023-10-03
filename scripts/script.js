/**Caterina Ilario
 * https://github.com/cateilario/promptJavaScript.git
 */

let number = parseFloat(prompt("Introduce a number:"));
        if (number === 0) {
            console.log(window.alert(`${number} es igual a 0`))
        }else if(number < 0){
            console.log(window.alert (`${number} es número negativo`))
        }else if(number > 0){
            console.log(window.alert (`${number} es número positivo`))
        }else if (isNaN(number)){
            console.log(window.alert (`Tienes que introducir un número`))
        }