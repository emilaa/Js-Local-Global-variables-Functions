//1.Whether the number N is divisible by 3 and 7.

let m = 21;

divide(m);

function divide(n) {
  if (n % 3 == 0 && n % 7 == 0) {
    console.log("Divide");
  } else {
    console.log("Not divide");
  }
}

//2.Calculating the factorial of a positive number.

let n = 3;

factorial(n);

function factorial(m) {
  let fact = 1;
  for (let i = 1; i <= m; i++) {
    fact *= i;
  }
  console.log(fact);
}

//3.Sum of squares of even numbers.

let num = [1, 2, 3, 4, 5];

evenNumsSquareSum(num);

function evenNumsSquareSum(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 0) {
      sum += Math.pow(nums[i], 2);
    }
  }
  console.log(sum);
}

//4.Check email and password.

let email = "cavid@code.edu.az";
let password = "12345";

checkEmail(email, password);

function checkEmail(email, password) {
  if (email == "cavid@code.edu.az" && password == "12345") {
    console.log("Signed in");
  } else {
    console.log("Email or password is incorrect");
  }
}

//5.The sum of the odd numbers in the Array.

let nums = [1, 2, 3, 4, 5];

oddNumsSum(nums);

function oddNumsSum(num) {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    if (nums[i] % 2 == 1) {
      sum += num[i];
    }
  }
  console.log(sum);
}

//6.The count of the even numbers in the Array.

let numbers = [1, 2, 3, 4, 5];

evenNumsCount(numbers);

function evenNumsCount(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 0) {
      count++;
    }
  }
  console.log(count);
}
