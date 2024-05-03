const symbol = '#';

for (let i = 1; i <= 7; i++) {
  let string = '';

  for (let j = 0; j < i; j++) {
    string += symbol;
  }
  console.log(string);
}
