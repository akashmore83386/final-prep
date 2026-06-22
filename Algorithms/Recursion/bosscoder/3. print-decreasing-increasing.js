function PID(n) {
  if (n === 0) return;
  console.log(n);
  PID(n - 1);
  console.log(n);
}

console.log(PID(4));
