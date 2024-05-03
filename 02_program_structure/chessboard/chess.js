for (let i = 0; i < 8; i++) {
  let output = '';
  if (i % 2 == 0) {
    for (let j = 0; j < 8; j++) {
      if (j % 2 == 0) {
        output += ' ';
      } else {
        output += '#';
      }
    }
  } else {
    for (let j = 0; j < 8; j++) {
      if (j % 2 == 0) {
        output += '#';
      } else {
        output += ' ';
      }
    }
  }

  console.log(output);
}
