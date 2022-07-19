function solution(list) {
  const maxOfSlices = [];

  for (let index = 0; index <= list.length; index += 1) {
    const firstElem = index === 0;
    const ascending = list[index] > list[index - 1];

    if (firstElem || ascending) {
      maxOfSlices.push(list[index]);
    } else {
      while (maxOfSlices.length > 1) {
        const lastSliceIndex = maxOfSlices.length - 2;
        const lastSliceMax = maxOfSlices[lastSliceIndex];
        if (list[index] < lastSliceMax) {
          maxOfSlices.splice(lastSliceIndex, 1)
        } else {
          break;
        }
      }    
    }
  }
  
  return maxOfSlices.length;
}

console.log(solution([2, 4, 1, 6, 5, 9, 7]))	    // 3
console.log(solution([4, 3, 2, 6, 1]))				// 1
console.log(solution([2, 1, 6, 4, 3, 7]))			// 3
console.log(solution([1, 2, 3, 1, 5, 6, 7]))			// 3
console.log(solution([1, 4, 5, 6, 2, 7, 8]))			// 3