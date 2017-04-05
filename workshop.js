function firstLetter(inputString) {
    if (inputString) {
        return inputString[0];
    } else {
        return undefined;
    }
}

function lastLetter(inputString) {
    if (inputString) {
        return inputString[inputString.length - 1];
    } else {
        return undefined;
    }

}

function letterAtPosition(inputString, position) {
    if (inputString) {
        return inputString[position];
    } else {
        return undefined;
    }

}

function addTwoNumbers(num1, num2) {
    if (typeof num1 === "number" , typeof num2 === "number") {
        return num1 + num2;
    } else {
        return undefined;
    }
}

function multiplyTwoNumbers(num1, num2) {
    if (typeof num1 === "number" , typeof num2 === "number") {
        return num1 * num2;
    } else {
        return undefined;
    }
}

function calculator(operation, num1, num2) {
    if (operation === "add") {
        return num1 + num2;
    } else if (operation === "div") {
        return num1 / num2;
    } else if (operation === "sub") {
        return num1 - num2;
    } else if (operation === "mult") {
        return num1 * num2;
    } else {
        return undefined;
    }
}

function repeatString(inputString, numRepetitions) {
    if (numRepetitions > 0) {
        return inputString.repeat(numRepetitions);
    } else if (numRepetitions <= 0) {
        return "";
    } else {
        return undefined;
    }
}

function reverseString(inputString) {
    return inputString.split("").reverse().join("");
}

function longestWord(inputString) {
    var cutString = inputString.split(" ");
    var longestOne = 0;
    for (var i = 0; i < cutString.length; i++) {
        if (cutString[0].length < cutString[i].length) {
            longestOne = cutString[i];
            break;
        } else {
            longestOne = cutString[0];
        }
    } return longestOne;

}

function capitalize(inputString) {
    var words = inputString.toLowerCase().split(" ");
    
    if (inputString === "") {
        return "";
    } else {
    for (var i = 0; i < words.length; i++) {
        var letters = words[i].split("");
        letters[0] = letters[0].toUpperCase();
        words[i] = letters.join("");
    }
    return words.join(" ");
}
}
function sumOfNumbers(arrayOfNumbers) {
    
    if (typeof arrayOfNumbers != "object") {
        return;
    }
    
    for (var i=0; i<arrayOfNumbers.length; i++) {
        if (typeof arrayOfNumbers[i] != "number") {
            return;
        }
    }
    
    var temp = 0;
    for (var i=0; i<arrayOfNumbers.length; i++) {
        temp = temp + arrayOfNumbers[i];
    }
    return temp;
}

function uniqueElements(array1, array2) {
    
    var arrayTemp = [];
    
    if (typeof array1 != "object" && typeof array2 != "object") {
        return;
    }
    
    for (var i = 0; i < array1.length; i++) {
        if (array2.indexOf(array1[i]) < 0) {
            arrayTemp.push(array1[i])
        }
    }
    
    for (var j = 0; j < array2.length; j++) {
        if (array1.indexOf(array2[j]) < 0) {
            arrayTemp.push(array2[j])
        }
    }
    return arrayTemp;

}

function isPalindrome(inputString) {
    var cleanString = inputString.replace(/\W/g, '').toLowerCase();
    var reverseString = cleanString.split("").reverse().join("");
    
    if (cleanString === reverseString) {
        return true;
    } else {
        return false;
    }
}

function wrapCharacter(inputString) {
   
    var arrString = inputString.split("");
    
    for (var i = 0; i < arrString.length; i++) {
        if (i % 40 === 0 && i > 0) {
            if (arrString[i] === ' ') {
                arrString[i] = '\n'
            }
            else {
                arrString[i] = arrString[i] + '\n'
            }
        } 
    } 
    return arrString.join("");
}


function wrapWord(inputString) {

}

function bubbleSort(arrayOfNumbers) {

}

/***** DO NOT EDIT AFTER THIS LINE *****/
module.exports = {
    firstLetter: firstLetter,
    lastLetter: lastLetter,
    letterAtPosition: letterAtPosition,
    addTwoNumbers: addTwoNumbers,
    multiplyTwoNumbers: multiplyTwoNumbers,
    calculator: calculator,
    repeatString: repeatString,
    reverseString: reverseString,
    longestWord: longestWord,
    capitalize: capitalize,
    sumOfNumbers: sumOfNumbers,
    uniqueElements: uniqueElements,
    isPalindrome: isPalindrome,
    wrapCharacter: wrapCharacter,
    wrapWord: wrapWord,
    bubbleSort: bubbleSort
};