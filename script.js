// start search
function myFunction() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
// end search

// start hide when scroll
const bottomRightElement = document.getElementById("bottomRightElement");

let lastScrollPosition = window.pageYOffset;

window.addEventListener("scroll", () => {
  const currentScrollPosition = window.pageYOffset;

  if (currentScrollPosition > lastScrollPosition) {
    bottomRightElement.style.opacity = "1";
  } else {
    bottomRightElement.style.opacity = "0";
  }

  lastScrollPosition = currentScrollPosition;
});

// end hide whenscroll
const sourceDiv = document.getElementById("sourceDiv");
const targetDiv = document.getElementById("targetDiv");

sourceDiv.addEventListener("click", () => {
  const sourceText = sourceDiv.textContent;
  const newTextElement = document.createElement("span");
  newTextElement.textContent = sourceText;
  targetDiv.appendChild(newTextElement);
});
// popup
const inputField = document.getElementById("crud-form-1");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

// inputField.addEventListener("keydown", (event) => {
//   if (event.key === " ") {
//     popup.style.display = "block";
//   }
// });

closePopup.addEventListener("click", () => {
  popup.style.display = "none";
});

// dropdown
const wraper = document.querySelector(".wraper"),
  search = wraper.querySelector(".icon2"),
  liItems = document.querySelectorAll(".item");
const input = wraper.querySelector("input");
const notFound = document.querySelector(".not-found");

search.addEventListener("click", () => {
  wraper.classList.toggle("active");
});
input.addEventListener("click", (event) => {
  if (!search.contains(event.target)) {
    // Check if the click is not on the search icon
    wraper.classList.toggle("active");
  }
});

liItems.forEach((li) => {
  li.addEventListener("click", () => {
    input.value = li.innerText;
    wraper.classList.remove("active");
  });
});
input.addEventListener("keyup", () => {
  const filterText = input.value.toLowerCase();
  let foundItems = false; // Variable to track if any matching items are found
  liItems.forEach((li) => {
    const itemText = li.innerText.toLowerCase();
    if (itemText.includes(filterText)) {
      li.style.display = "block";
      foundItems = true;
    } else {
      li.style.display = "none";
    }
  });

  // Toggle visibility of "Not Found" li element
  if (!foundItems) {
    notFound.style.display = "block";
  } else {
    notFound.style.display = "none";
  }
});
// Hide content when clicking outside the wrapper
document.addEventListener("click", (event) => {
  if (!wraper.contains(event.target)) {
    wraper.classList.remove("active");
  }
});

// js practice

let a = "red";
let b = "blue";

let c = a;
a = b;
b = c;

console.log(a);
console.log(b);

// 10. 10- Max of Two Numbers
// write a function that takes two numbers and return the maximum of two
function MaxNum(N1, N2) {
  if (N1 > N2) {
    return N1;
  } else if (N1 < N2) {
    return N2;
  }
  return N1 > N2 ? N1 : N2;
}
console.log(MaxNum(7, 2));

// fizzbuzz
function fizzBuzz(input) {
  if (input % 3 === 0 && input % 5 === 0) {
    console.log("fizzBuzz");
  } else if (input % 3 === 0) {
    console.log("Fizz");
  } else if (input % 5 === 0) {
    console.log("Buzz");
  } else if (isNaN(input)) {
    console.log("Not a number");
  } else {
    console.log(input);
  }
}
fizzBuzz("h");

// speed limit
function checkSpeed(speed) {
  const point = Math.floor((speed - 70) / 5);
  console.log(point);
  if (point <= 0) console.log("ok");
  else if (point >= 12) console.log("License suspended");
  else console.log(`point is :${point}`);
}
checkSpeed(75);

// Even and odd
function showNumbers(limit) {
  for (i = 0; i <= limit; i++) {
    if (i % 2 === 0) {
      console.log(`${i} : Even`);
    } else {
      console.log(`${i} : ODD`);
    }
  }
}
showNumbers(10);

// count truthy HARD
const array = [0, 2, 1, null, 4];
countTruthy(array);

function countTruthy(array) {
  let count = 0;
  for (i = 0; i < array.length; i++) {
    if (array[i]) {
      count++;
    }
  }
  console.log(`${count} truthy`);
}

//String Properties
const movie = {
  title: `a`,
  year: 2018,
  director: `me`,
};

showProperties(movie);

function showProperties(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "string") console.log(key, obj[key]);
  }
}

//Sum of Multiples 3 and 5
sum(10);

function sum(limit) {
  let sum = 0;
  for (i = 1; i <= limit; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      console.log(i);
      console.log(`sum: ${(sum += i)}`);
    }
  }
}

//Grade (it should be in two functions)
const marks = [80, 80, 50];

calculateGrade(marks);

function calculateGrade(marks) {
  let sum = 0;
  let avg = 0;

  for (let num of marks) {
    console.log(num);
    console.log(`Sum of Grades: ${(sum += num)}`);
  }
  console.log(`Average of Grades: ${(avg = sum / marks.length)}`);
  if (avg <= 59 && avg >= 0) {
    console.log(`F`);
  }
  if (avg <= 69 && avg >= 60) {
    console.log(`D`);
  }
  if (avg <= 79 && avg >= 70) {
    console.log(`C`);
  }
  if (avg <= 89 && avg >= 80) {
    console.log(`B`);
  }
  if (avg <= 100 && avg >= 90) {
    console.log(`A`);
  }
}

//Stars
showStars(10);

function showStars(rows) {
  for (i = 1; i <= rows; i++) {
    let stars = ``;
    for (j = 0; j < i; j++) stars = stars + `*`;

    console.log(stars);
  }
}

// Prime Numbers
showPrime(10);

function showPrime(limit) {
  for (let i = 2; i <= limit; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) isPrime = false;
    }
    if (isPrime === true) console.log(i);
  }
}

// Challenge #4
const bill = 200;
const tip = 300 >= bill && bill >= 50 ? (bill * 15) / 100 : (bill * 20) / 100;

console.log(`bill: ${bill}$ , tip:${tip}$ , total:${bill + tip}$ `);

// Challenge #2.1
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// let avgDolhins=calcAverage(44,23,71);
// let avgKoalas=calcAverage(85,54,41);

let avgDolhins = calcAverage(85, 54, 41);
let avgKoalas = calcAverage(23, 34, 27);
console.log(`Dolhins ${avgDolhins}`);
console.log(`Koalas ${avgKoalas}`);

checkWinner(avgDolhins, avgKoalas);
function checkWinner(avgDolhins, avgKoalas) {
  if (avgDolhins * 2 <= avgKoalas) {
    console.log(`Koalas win (${avgDolhins} vs ${avgKoalas})`);
  } else if (avgKoalas * 2 <= avgDolhins) {
    console.log(`Dolphines win (${avgKoalas} vs ${avgDolhins})`);
  } else {
    console.log(`Nobody Wins`);
  }
}
console.log();
//TODO
