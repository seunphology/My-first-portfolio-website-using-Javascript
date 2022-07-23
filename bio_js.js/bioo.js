let message;
message = 'I miss you so much'

console.log(message);


/*Let lastName = 'Salu',
 age = 30,

 occupation = 'developer';

 const speedOfLight = '300000 KM/hour';
 const myBirthday = '11.02.1987';


 let wife = 'Angela';

 let ex = 'Titi';

 wife = ex;

*/

let a = 8;

let b = 6 * a;

console.log(b);

const q = 3.142;

console.log(a * q);

let great = 4;

great++;

great;

console.log(great);

let mighty = 8;

++mighty;

mighty;

console.log(mighty);

--mighty;

mighty;

console.log(mighty);

// slicing

var dry = "I 'feel' I am a very good scientist and this makes me 'feel' good about myself";

var wet = dry.lastIndexOf("feel", 30);

var cold = dry.search("scientist");

var warm = dry.slice(3,55);

var peek = dry.substring(25);
console.log(peek);



var pan = dry.replace("scientist", "footballer");

console.log(pan);

var pen = pan.toLocaleUpperCase();

console.log(pen);

var yam = pen.concat(pan, peek, wet);

console.log(yam);


// Set the current day of the week to a variable, with 1 being Monday and 7 being Sunday
const day = new Date().getDay();

switch (day) {
    case 1:
        console.log("Happy Monday!");
        break;
    case 2:
        console.log("It's Tuesday. You got this!");
        break;
    case 3:
        console.log("Hump day already!");
        break;
    case 4:
        console.log("Just one more day 'til the weekend!");
        break;
    case 5:
        console.log("Happy Friday!");
        break;
    case 6:
        console.log("Have a wonderful Saturday!");
        break;
    case 7:
        console.log("It's Sunday, time to relax!");
        break;
    default:
        console.log("Something went horribly wrong...");
}

// Set the student's grade. keep changing value of grade and watch the grades change.Boolean is used.
//The expression in parentheses to be evaluated is true in this example. This means that any case that evaluates to true will be a match.

const grade = 60;

switch (true) {
    // If score is 90 or greater
    case grade >= 90:
        console.log("A");
        break;
    // If score is 80 or greater
    case grade >= 80:
        console.log("B");
        break;
    // If score is 70 or greater
    case grade >= 70:
        console.log("C");
        break;
    // If score is 60 or greater
    case grade >= 60:
        console.log("D");
        break;
    // Anything 59 or below is failing
    default:
        console.log("F");
}

// Get number corresponding to the current month, with 0 being January and 11 being December

//The current month at the time of publication was 8, which corresponded to one of the case statements with the "Summer" season output.

const month = new Date().getMonth();

switch (month) {
    // January, February, March
    case 0:
    case 1:
    case 2:
        console.log("Winter");
        break;
    // April, May, June
    case 3:
    case 4:
    case 5:
        console.log("Spring");
        break;
    // July, August, September
    case 6:
    case 7:
    case 8:
        console.log("Summer");
        break;
    // October, November, December
    case 9:
    case 10:
    case 11:
        console.log("Autumn");
        break;
    default:
        console.log("Something went wrong.");
}

let userName = 'John';

function showMessage() {
  let userName = "Bob"; // declare a local variable

  let message = 'Hello, ' + userName; // Bob
  console.log(message);
}

// the function will create and use its own userName
showMessage();

console.log( userName ); // John, unchanged, the function did not access the outer variable




  // This below did not work because of the prompt function.It does not work with the VS editor somehow but works on my replit.com editor

function checkAge(age) {
    if (age >= 18) {
      return true;
    } else {
      return confirm('Do you have permission from your parents?');
    }
  }
  
  let age = prompt('How old are you?', 18);
  if ( checkAge(age) ) {
    console.log( 'Access granted' );
  } else {
    console.log( 'Access denied' );

  }

  

  // I like this
  
  function showPrimes(n) {
    nextPrime: for (let i = 2; i < n; i++) {
  
      for (let j = 2; j < i; j++) {
        if (i % j == 0) continue nextPrime;
      }
  
      console.log( i ); // a prime
    }
  }

  showPrimes(10);

//The second variant uses an additional function isPrime(n) to test for primality:

  function showPrimes(n) {

    for (let i = 2; i < n; i++) {
      if (!isPrime(i)) continue;
  
      console.log(i);  // a prime
    }
  }
  
  function isPrime(n) {
    for (let i = 2; i < n; i++) {
      if ( n % i == 0) return false;
    }
    return true;
  }

  showPrimes(10);


  function add7(p) {
  
    let result = p + 7;

    return result;
    


  


  }

  console.log(add7(3));

  function multiply(f,b) {
      result = (f * b);

      return result;
  }

  console.log(multiply(6,7));

  
  function capitalize(s) {
    // returns the first letter capitalized + the string from index 1 and out aka. the rest of the string
    return s[0].toUpperCase() + s.substr(1);
}
console.log(capitalize("checkmate my boy"));


function lastLetter(d) {
    // returns the last character of a string
    result = d.charAt(d.length -1);

    return result;
}
console.log(lastLetter("checkmate my boy"));




//The Bizz Buzz challenge.Write a program that allows the user to enter a number, print each number between one and the number the user entered, but for numbers that divide by three without a remainder print Fizz instead. For numbers that divide by 5 without a remainder print Buzz and finally for numbers that divide by both three and five without a remainder print FizzBuzz.

function bizzBuzz(z) {

for(let i = 1;i <= z; i++) {
    if(i%3 === 0) {
    console.log("Fizz");

    }else if (i%5 ===0){

    console.log("Buzz");    

        

    }

        
    

    else {

        console.log(i);
    }

    
    
}

}

bizzBuzz(15);


// Objects creation and working with methods under objects

function Player(name, goals) {
    this.name = name
    this.marker = goals
    this.sayName = function() {
      console.log(name)
    }
  }
  
  const player1 = new Player('Kane', '26')
  const player2 = new Player('Salah', '23')
  player1.sayName() // logs 'Kane'
  player2.sayName() // logs 'Salah'





  //PROTOTYPING
  // 
  function isTrue(isNot){
    if(isNot){
      alert('read!');
    }else {

        alert('not read!');
    }
}
  

  function Book(title, author, pages) {



    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.bookStatus = function (){

        console.log(title, author, pages, read)
    }
  }
//

//Book.prototype.isTrue() = function()
 

const reader1 = new Book('Things fall apart', 'Ekwensi', '480', 'Not read')

  const reader2 = new Book('The Lion and Jewel', 'Wole Soyinka', '870', 'Read')

  reader1.bookStatus()

  reader2.bookStatus()


  function Scholarship (type, country, field) {
  
    this.type = type;
    this.country = country;
    this.field = field;

    this.check = function() {

        console.log ('Now scanning');

  }
  }
  
// or const seun = object.create(Scholarship) or const seun = new Scholarship('full', 'Nigeria', sciences)
  const seun = new Scholarship('full','Germany','Engineering'); 

  const tochi = new Scholarship('partial', 'USA', 'Art');

  seun.type = 'full';

  seun.country = 'Nigeria';

  seun.field = 'Arts';

  seun.check();

  console.log(seun.field)

  console.log(seun.check);

  seun.type;



  
