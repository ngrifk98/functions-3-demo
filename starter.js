const lotr = ['biLbO BaGGINs', 'leGOlAs', 'Frodo bAGGINS', 'sAMwiSe GamGEe', 'gAndALF tHe GREY']

const copyArrToCamelCase = arr => {
  const newArr = []

  for (let i = 0; i < arr.length; i++) {
    const str = arr[i]
    const splitStr = str.split(' ')
    let camelCaseStr = ''

    for (let x = 0; x < splitStr.length; x++) {
      let word = splitStr[x]

      word = word.toLowerCase()

      if (x !== 0) {
        word = word.charAt(0).toUpperCase() + word.slice(1)
      }

      camelCaseStr += word
    }

    newArr.push(camelCaseStr)
  }

  return newArr
}

const copyArrToSnakeCase = arr => {
  const newArr = []

  for (let i = 0; i < arr.length; i++) {
    let str = arr[i]
    str = str.toLowerCase()
    const splitStr = str.split(' ')
    const snakeCaseStr = splitStr.join('_')
    newArr.push(snakeCaseStr)
  }

  return newArr
}

console.log('Copy and Change Arrays:')
console.log('-----------------------')

// Copy and change arrays
const camelCaseArray = copyArrToCamelCase(lotr)
const snakeCaseArray = copyArrToSnakeCase(lotr)

console.log('Camel Case Array:')
console.log(camelCaseArray)  // ["biLbOBaGGINs", "leGOlAs", "FrodoBaGGINS", "sAMwiSeGamGEe", "gAndALFtHeGREY"]

console.log('\nSnake Case Array:')
console.log(snakeCaseArray)  // ["bilbo_baggins", "legolas", "frodo_baggins", "samwise_gamgee", "gandalf_the_grey"]

console.log('\nHigher Order Array Methods:')
console.log('---------------------------')

// Higher order array methods
const colors = ['red', 'blue', 'yellow', 'green', 'orange']

console.log('Mapped Colors:')

// Pass a callback to map that will return 'pink' for each color in the array.
const mappedColors = colors.map(color => 'pink')
console.log(mappedColors)  // ["pink", "pink", "pink", "pink", "pink"]

const formalNames = ['Bernard', 'Elizabeth', 'Conrad', 'Mary Margaret']

console.log('\nFormal Greetings:')

// Edit the formalGreeting function and use the built-in .map method to map over the names parameter and return a new array with "Hello, " appended to the beginning of each name.
const formalGreeting = names => {
  return names.map(name => `Hello, ${name}`)
}

console.log(formalGreeting(formalNames))  // ["Hello, Bernard", "Hello, Elizabeth", "Hello, Conrad", "Hello, Mary Margaret"]

const places = ['Binghampton', 'Albany', 'New York', 'Ithaca', 'Auburn', 'Rochester', 'Buffalo']

console.log('\nPlaces that Start with A:')
// Pass a callback to filter that will return only strings that begin with the letter A.
const placesThatStartWithA = places.filter(place => place.startsWith('A'))
console.log(placesThatStartWithA)  // ["Albany", "Auburn"]

let jobs = [
  { receptionist: "James" },
  { programmer: "Steve" },
  { designer: "Alicia" },
];

console.log('\nIdentifier - Person with Programmer Job:')
// Create a function called identifier that uses the filter higher-order array method to filter over the provided jobs array of objects.
// The function should return the object of the person with a job as a programmer.
const identifier = jobs.filter(job => job.programmer)[0]
console.log(identifier)  // { programmer: "Steve" }

const numsToReduce = [43, 7, 24, 79, 290]

console.log('\nProduct of Array:')
// Edit the productOfArray function and use the built-in .reduce method to loop over the numbers parameter and return the product of all the numbers in the array.
const productOfArray = numbers => {
  return numbers.reduce((acc, curr) => acc * curr)
}

console.log(productOfArray(numsToReduce))  // 11340096

const budget = 2000

const expenses = [
  { title: 'rent', amount: 1000 },
  { title: 'car payment', amount: 250 },
  { title: 'food', amount: 300 }
]

console.log('\nRemaining Budget:')
// Pass a callback and an initial value to reduce that will subtract all the expenses in the array from the initial budget.
const remaining = expenses.reduce((budget, expense) => budget - expense.amount, budget)
console.log(remaining)  // 450

// 6: CHALLENGE: Make a callback function that takes in a number and returns that number multiplied by 4. Try with arrow function syntax. Can you do it in one line?
console.log("\nCHALLENGE")
const multiplyByFour = number => number * 4;

// Testing the callback function
console.log(multiplyByFour(5)); // Output: 20
console.log(multiplyByFour(10)); // Output: 40
