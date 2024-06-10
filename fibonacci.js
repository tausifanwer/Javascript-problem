(function (num) {
  let a = 0;
  let b = 1;
  let next = 0;
  for (let i = 1; i <= num; i++) {
    console.log(a);
    next = a + b;
    a = b;
    b = next;
  }
})(10);
