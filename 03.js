function solution(a) {
  if (a.length <= 1) {
      return a.length
  }

  var count = 1
  for (let i = 1; i < a.length; i++) {
      const prev = a[i - 1]
      const current = a[i]
      if (prev <= current) {
          count += 1;
          continue
      }
                              // current < previous
      for (var j = i; j > 0 && a[j] < a[j - 1]; j--) {
          // swap elements
          a = swap(a, j);

          if (j <= count - 1) {
              count -= 1;
          }
      }
  }
  return count;
}

function swap(array, index) {
  var temp = array[index]
  array[index] = array[index - 1]
  array[index - 1] = temp;

  return array;
}


// TEST CASES
console.log(solution([2, 4, 1, 6, 5, 9, 7]))	    // 3
console.log(solution([4, 3, 2, 6, 1]))				// 1
console.log(solution([2, 1, 6, 4, 3, 7]))			// 3
console.log(solution([1, 2, 3, 1, 5, 6, 7]))			// 3
console.log(solution([1, 4, 5, 6, 2, 7, 8]))			// 3