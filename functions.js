let abc = (a, b, c = 30) => {
  return a + b + c;
};

let result = abc(10, 20, 300);
console.log('result is ', result);

let obj = {
  ashish: {
    location: () => {
      return 'location returned';
    },
  },
};
let result2 = obj.ashish?.location?.() ?? 'method not present';
console.log(result2);
