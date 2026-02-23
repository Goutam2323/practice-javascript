function find_max_sum_subarray(arr, k) {
  let max_sum = 0;
  for (let i = 0; i <= arr.length - k; i++) {
    let sum = 0;
    for (let j = i; j < i + k; j++) {
      sum += arr[j];
    }
    max_sum = Math.max(max_sum, sum);
  }
  return max_sum;
}
console.log(find_max_sum_subarray([1, 2, 3, 4, 5], 2)); // Output: 9 (4 + 5)
console.log(find_max_sum_subarray([1, 2, 3, 4, 5], 3)); // Output: 12 (3 + 4 + 5)
console.log(find_max_sum_subarray([1, 2, 3, 4, 5, 4, 7, 8, 9], 4)); // Output: 14 (2 + 3 + 4 + 5)

//Variable Window Size
function find_min_sum_subarray(arr, target) {
  let min_sum = Infinity;
  let start = 0;
  let current_sum = 0;
  for (let i = 0; i < arr.length; i++) {
    current_sum += arr[i];
    while (current_sum >= target) {
      min_sum = Math.min(min_sum, i - start + 1);
      current_sum -= arr[start];
      start++;
  }
}
  return min_sum;
}
console.log(find_min_sum_subarray([1, 2, 3, 4, 5], 2));
