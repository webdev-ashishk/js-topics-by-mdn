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
// function definition
// ;

let obj2 = {
  anju() {
    // anju is called function defintion without function keywrods .
    return 'anju fun called!s';
  },
};

console.log(obj2.manjus?.() ?? 'not available');

// rest parameter

function anju(ashish, ...moneys) {
  console.log('ashish', ashish);
  console.log('... rest parameter', moneys);
}

anju(10, 20, 30, 40);
