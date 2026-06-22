function solve(recoveryCodes, attempts) {
  for (let i = 0; i < attempts.length; i++) {
    let left = 0;
    let right = recoveryCodes.length - 1;

    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);

      if (recoveryCodes[mid] < attempts[i]) {
        left = mid + 1;
      } else if (recoveryCodes[mid] > attempts[i]) {
        right = mid - 1;
      } else {
        return true;
      }
    }
  }
  return false;
}