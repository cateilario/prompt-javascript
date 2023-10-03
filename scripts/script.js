let number = parseInt(prompt("Introduce a number:"));
        if (number === 0) {
            console.log(window.alert(`${number} es igual a 0`))
        }else if(number < 0){
            console.log(window.alert (`${number} es número negativo`))
        }else if(number > 0){
            console.log(window.alert (`${number} es número positivo`))
        }