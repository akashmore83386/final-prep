// Given N bottles. The ith bottle has A[i] radius. Once a bottle is enclosed inside another bottle, it ceases to be visible. The task is to minimize the number of visible bottles. You can put the ith bottle into a jth bottle if the following condition is fulfilled.

// ith bottle itself is not enclosed in another bottle.
// jth bottle does not enclose any other bottle.
// Radius of bottle i is smaller than bottle j ( i.e. A[i] < A[j] ).

// Input : 1 1 2 3 4 5 5 4
// Output : 2
// Explanation:
// 1 -> 2 [1, 2, 3, 4, 5, 5, 4]
// 2 -> 3 [1, 3, 4, 5, 5, 4]
// 3 -> 4 [1, 4, 5, 5, 4]
// 4 -> 5 [1, 5, 5, 4]
// 1 -> 4 [5, 5, 4]
// 4 -> 5 [5, 5]

// Finally, there are 2 bottles left which are visible. Hence the answer is 2.

// Input : 1 1 2 3 4 5 5 4
// Output : 2


function min_visible_bottles(arr, n) {
    let m = new Map();
    let ans = 0;
    for (let i = 0; i < n; i++) {
        if(m.has(arr[i])){
            m.set(arr[i], m.get(arr[i]) + 1)
        }else{
            m.set(arr[i], 1)
        }
        ans = Math.max(ans, m.get(arr[i]));
    }

    console.log("Minimum number of " + 
    "Visible Bottles are: " + ans );
}

// Driver code

    let n = 8;
    let arr = [1, 1, 2, 3, 4, 5, 5, 4];

    // Find the solution
    min_visible_bottles(arr, n);