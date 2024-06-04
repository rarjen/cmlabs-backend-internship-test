const fizzBuzz = () => {
  for (let i = 1; i <= 100; i++) {
    let hasil = "";
    if (i % 15 == 0) {
      // Kelipatan 3 & 5 = 15
      console.log("FizzBuzz");
    } else if (i % 3 == 0) {
      hasil += "Fizz";
    } else if (i % 5 == 0) {
      hasil += "Buzz";
    }
    console.log(hasil || i);
  }
};

fizzBuzz();
