function iterate(max, action) {
  for (let i = 0; i <= max; i++) {
    action(i);
  }
}

function num(n) {
  console.log(n);
}

function dub(n) {
  console.log(n * 2);
}

iterate(5, num);
iterate(5, dub);

setTimeout(() => iterate(5, num), 1000);
