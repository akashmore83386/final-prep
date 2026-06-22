export class Solution {
  orderCheck(arr) {
    let item = arr[0];

    for (let i = 1; i < arr.length; i++) {
      if (item > arr[i]) return false;
      item = arr[i];
    }

    return true;
  }
}