/*function calcAge(age) {
	let AnneeJour = age*365;
	return age = AnneeJour;
}

console.log("20" +" -> "+ calcAge(20));

function circuitPower(voltage, current) {
	return voltage * current;
}
console.log("circuitPower(230, 10)"+" -> "+ circuitPower(230, 10));
function remainder(x, y) {
    return x % y;
  }
  
  console.log("remainder(1, 3)"+ " -> " + remainder(1, 3));
  console.log("remainder(3, 4)"+ " -> " + remainder(3, 4));
  console.log("remainder(-9, 45)"+ " -> " + remainder(-9, 45)); 
  console.log("remainder(1, 3)"+ " -> " + remainder(5, 5)); 
  
  function getFirstValue(arr) {
	   let stock = arr[0];
     return stock;
  }

  console.log("getFirstValue([1, 2, 3])"+ " ➞ " + getFirstValue([1, 2, 3]));
  console.log("getFirstValue([80, 5, 100]))"+ " ➞ " + getFirstValue([80, 5, 100]));
  function giveMeSomething(a) {
	   let phrase = "something";
     return phrase +" "+ a;
  }
  console.log(giveMeSomething("is better than nothing"));

  function isSpecialArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0 && arr[i] % 2 !== 0) {
            return false;
        } else if (i % 2 !== 0 && arr[i] % 2 === 0) {
            return false;
        }
    }
    return true;
}

console.log("isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3])" + " ➞ " + isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]));

function generation(x, y) {
  const generations = {
      "-3": { "m": "great grandfather", "f": "great grandmother" },
      "-2": { "m": "grandfather", "f": "grandmother" },
      "-1": { "m": "father", "f": "mother" },
      "0": { "m": "me!", "f": "me!" },
      "1": { "m": "son", "f": "daughter" },
      "2": { "m": "grandson", "f": "granddaughter" },
      "3": { "m": "great grandson", "f": "great granddaughter" }
  };

  if (x === 0) {
      if (y === "m") {
          return "me!";
      } else if (y === "f") {
          return "me!";
      }
  } else if (x < 0) {
      return generations[Math.abs(x)][y];
  } else {
      return generations[x][y];
  }
}

console.log(generation(2, "f")); 
console.log(generation(-3, "m")); 
console.log(generation(1, "f")); 

function numbersSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
          sum += arr[i];
      }
  }
  return sum;
}

// Test cases
console.log(numbersSum([1, 2, "13", "4", "645"])); 
console.log(numbersSum([true, false, "123", "75"])); 
console.log(numbersSum([1, 2, 3, 4, 5, true])); 
function timeForMilkAndCookies(date) {
  return date.getMonth() === 11 && date.getDate() === 24;
}

// Test cases
console.log(timeForMilkAndCookies(new Date(2013, 11, 24))); 
console.log(timeForMilkAndCookies(new Date(2013, 0, 23))); 
console.log(timeForMilkAndCookies(new Date(3000, 11, 24))); 

function count(n) {
  n = Math.abs(n);
  
  if (n === 0) {
      return 1;
  }

  let count = 0;
  while (n!== 0) {
      n = Math.floor(n / 10);
      count++;
  }
  return count;
}

console.log(count(318)); 
console.log(count(-92563)); 
console.log(count(4666)); 
console.log(count(-314890)); 
console.log(count(654321)); 
console.log(count(638476)); 

function reverseOdd(str) {
  return str.split(" ").map(word => {
      if (word.length % 2 !== 0) {
          return word.split("").reverse().join("");
      } else {
          return word;
      }
  }).join(" ");
}

console.log(reverseOdd("Bananas"));  
console.log(reverseOdd("One two three four")); 
console.log(reverseOdd("Make sure uoy only esrever sdrow of ddo length")); 

function numInStr(arr) {
  // Définir une fonction de test qui vérifie si une chaîne contient un nombre
  function containsNumber(str) {
      // Parcourir chaque caractère de la chaîne
      for (let i = 0; i < str.length; i++) {
          // Vérifier si le caractère actuel est un nombre en utilisant sa valeur Unicode
          if (str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57) {
              // Si un nombre est trouvé, retourner vrai
              return true;
          }
      }
      // Si aucun nombre n'est trouvé dans la chaîne, retourner faux
      return false;
  }

  // Filtrer les éléments du tableau en utilisant la fonction de test
  let filteredArray = [];
  for (let i = 0; i < arr.length; i++) {
      // Vérifier si la chaîne actuelle contient un nombre en appelant la fonction de test
      if (containsNumber(arr[i])) {
          // Si la chaîne contient un nombre, l'ajouter au tableau filtré
          filteredArray.push(arr[i]);
      }
  }

  // Retourner le tableau filtré contenant uniquement les chaînes avec des nombres
  return filteredArray;
}

console.log(numInStr(["1a", "a", "2b", "b"])); 
console.log(numInStr(["abc", "abc10"])); 
console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"])); 
console.log(numInStr(["this is a test", "test1"])); 
let i=0;
let n=10;
for(i=0; i<=n; i++){
    if(i%2==0){
        console.log(i);
    }
}*/

let numbers = [19, 65, 1, 2, 6, 1, 9, 9, 2, 1]
let i=0;
for(i=0; i<numbers.length; i++){
    if(numbers[i]%2 !==0){
        console.log(numbers[i]);
    }
}

