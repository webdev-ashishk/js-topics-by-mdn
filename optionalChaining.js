let user = {
  name: 'ashishk',
  age: 20,
  address: {
    country: 'india',
    state: 'uttar pradesh',
    city: 'sonbhadra',
    vill: 'myorpur',
    location: () => {
      console.log('location will called!');
    },
  },
};
// console.log(user.anju.deepika);
console.log(user.address?.state);
console.log(user.address && user.address.location);
console.log(user.address?.location?.());

let nullish = user.address?.vijayLal?.() ?? 'function not found';
console.log(nullish);

console.log(![]);
console.log(!{});
let value;
console.log('empty statement', !value);
