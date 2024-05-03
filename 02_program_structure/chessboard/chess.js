const size = 12;

for (let i = 0; i < size; i++) {
  let output = '';
  if (i % 2 == 0) {
    for (let j = 0; j < size; j++) {
      if (j % 2 == 0) {
        output += ' ';
      } else {
        output += '#';
      }
    }
  } else {
    for (let j = 0; j < size; j++) {
      if (j % 2 == 0) {
        output += '#';
      } else {
        output += ' ';
      }
    }
  }

  console.log(output);
}
