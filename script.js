function factorialFormat(n){
  var factorialAnswer = n;
  for(var i = 0; i < n-1; i++){
    factorialAnswer = factorialAnswer * (n - (i+1));
  }
  
  return factorialAnswer;
}

function add(){
  var numOfAddends = parseInt(prompt("How Many Numbers Would You Like To Add?"));
  var nums = [];
  
  for(var i = 0; i < numOfAddends; i++){
    var insert = prompt(`Insert Number ${(i+1)}:`);
    insert = parseInt(insert);
    nums.push(insert);
  }

  var sum = 0;

  for(var j = 0; j < nums.length; j++){
    sum = sum + nums[j];
  }

  alert(`The Sum Of The Following Numbers ${nums} Is ${sum}!`);
}

function subtract(){
  var numOfSubtrahends = parseInt(prompt("How Many Numbers Would You Like To Subtract?"));
  var nums = [];
  
  for(var i = 0; i < numOfSubtrahends; i++){
    var insert = prompt(`Insert Number ${(i+1)}:`);
    insert = parseInt(insert);
    nums.push(insert);
  }

  var difference = nums[0];

  for(var j = 0; j < nums.length-1; j++){
    difference = difference - nums[j+1];
  }

  alert(`The Difference Of The Following Numbers ${nums} Is ${difference}!`);
}

function multiply(){
  var numOfFactors = parseInt(prompt("How Many Numbers Would You Like To Multiply?"));
  var nums = [];
  
  for(var i = 0; i < numOfFactors; i++){
    var insert = prompt(`Insert Number ${(i+1)}:`);
    insert = parseInt(insert);
    nums.push(insert);
  }

  var product = 1;

  for(var j = 0; j < nums.length; j++){
    product = product * nums[j];
  }

  alert(`The Product Of The Following Numbers ${nums} Is ${product}!`);
}

function divide(){
  var numOfDivisors = parseInt(prompt("How Many Number Would You Like To Divide?"));
  var nums = [];

  for(var i = 0; i < numOfDivisors; i++){
    var insert = prompt(`Insert Number ${(i+1)}:`);
    insert = parseInt(insert);
    nums.push(insert);
  }

  var quotient = nums[0];

  for(var j = 0; j < nums.length-1; j++){
    quotient = quotient / nums[j+1];
  }

  if (quotient == Infinity){
    alert("Divide By Zero Error!");
  } else {
    alert(`The Quotient Of the Following Numbers ${nums} Is ${quotient}`);
  }
}

function nPr(){
  var n = prompt("Insert Number (n): ");
  var r = prompt("Insert Number (r): ");

  n = parseInt(n);
  r = parseInt(r);

  var answer = 0;

  if (n < r){
    alert(`nPr Where N = ${n} And R = ${r}, Is 0`);
  } else {
    answer += factorialFormat(n) / factorialFormat(n-r);
    alert(`nPr Where N = ${n} And R = ${r}, Is ${answer}`);
  }
}

function nCr(){
  var n = prompt("Insert Number (n): ");
  var r = prompt("Insert Number (r): ");

  n = parseInt(n);
  r = parseInt(r);

  var answer = 0;

  if (n < r){
    alert(`nCr Where N = ${n} And R = ${r}, Is 0`);
  } else {
    answer += factorialFormat(n) / (factorialFormat(n-r) * factorialFormat(r));
    alert(`nCr Where N = ${n} And R = ${r}, Is ${answer}`);
  }
}

function quad(){
  alert("All Response Must Be In Form 0 = ax^2 + bx + c");
  var a = prompt("Input Number (a): ");
  var b = prompt("Input Number (b): ");
  var c = prompt("Input Number (c): ");

  a = parseInt(a);
  b = parseInt(b);
  c = parseInt(c);

  var primaryx;
  var negativex;
  var primaryy;
  var negativey;

  // var y = prompt("Input Number (y): ");


  primaryx = (-b + Math.sqrt(Math.pow(b, 2) - 4*a*c))/(2*a);
  negativex = (-b - Math.sqrt(Math.pow(b, 2) - 4*a*c))/(2*a);

  var disc = Math.pow(b, 2) - 4*a*c;
  
  if (disc < 0) {
    alert("One Or Both Of Your Solutions Are Imaginary (Not Real).");
    alert("Please Try Another Equation!");
  } else {
    alert(`The Solutions To Your Equation Are: ${primaryx}, ${negativex}`);
  }
}

function log(){
  alert("All answers must be in form log(x) = y");
  var x;
  x = prompt("Insert Positive Integer: ");
  x = parseInt(x);
  while (x < 1) {
    x = prompt("Insert Positive Integer: ");
    x = parseInt(x);
  }
  var answer;

  answer = Math.log10(x);

  alert(`Log Base 10 Of ${x} Is ${answer}`);
}

function linear(){
  alert("All Responses Must Be In Form y = mx + b");

  var m = prompt("Input Number (m): ");
  var b = prompt("Input Number (b): ");
  var y = prompt("Input Number (y): ");

  m = parseInt(m);
  b = parseInt(b)
  y = parseInt(y);

  var x;

  x = (y-b)/m;
  
  if ((m == 0) && (y == b)) {
    alert("X Can Be All Real Numbers.");
  } else if ((m == 0) && (y != b)) {
    alert("Equation Not Possible.");
  } else {
    alert(`X Is Equal To ${x}`);
  }
}

function dropdownMenu() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


// Views

var n = localStorage.getItem('on_load_counter');

if (n == null) {
  n = 0;
}
n++;

localStorage.setItem("on_load_counter", n);
document.getElementById('view-count').innerHTML = "Views 👤: " + n;