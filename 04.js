
function solution(list) {
  const listLength = list.length;

  if (listLength < 5) {
      return false;
  }
  if (listLength > 100000) {
      return false;
  }

  const total = list.reduce((a, b) => a + b, 0);
  let leftIndex = 1;
  let rightIndex = list.length - 2;
  let firstSum = list[0];
  let secondSum = list[list.length - 1];


  while (leftIndex < list.length - 3 && leftIndex < rightIndex - 1) {
      if (firstSum < secondSum) {
          firstSum += list[leftIndex];
          leftIndex++;
      } else if (firstSum > secondSum) {
          secondSum += list[rightIndex];
          rightIndex--;
      } else {
          const middleSum = total - firstSum - secondSum - list[leftIndex] - list[rightIndex];
          if (firstSum === middleSum) {
              return true;
          }
          firstSum += list[leftIndex];
          secondSum += list[rightIndex];
          leftIndex++;
          rightIndex--;
      }
  }
  return false;
}



const createArray = () => {
  const arr = [];
  for (let i = 0; i < 20_000; i += 1) {
    const element = (i % 2 === 0) ? 1 : 2;
    arr.push(element)
  }
  return arr;
}

console.log(solution[1, 1, 1, 1, 1, 1]); // -> false
console.log(solution(createArray())); // -> true
console.log(solution([1, 3, 4, 2, 2, 2, 1, 1, 2])); // -> true
