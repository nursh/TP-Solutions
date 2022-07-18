function solution(U, L, C) {

  const IMPOSSIBLE = 'IMPOSSIBLE';
  const upArray = []
  const downArray = [];

  const total = U + L;
  const sumArray = arrayTotal(C);
  if (total !== sumArray) return IMPOSSIBLE;

  for (let index = 0; index < C.length; index += 1) {
    switch (C[index]) {
      case 2:
        U -= 1;
        L -= 1;
        upArray[index] = 1;
        downArray[index] = 1;
        break;
      
      case 0:
        upArray[index] = 0;
        downArray[index] = 0;
        break;

      default:
        if (U === 0) {
          upArray[index] = 0
          downArray[index] = 1;
          L -= 1;
        } else {
          upArray[index] = 1
          downArray[index] = 0;
          U -= 1;
        }
        break;
    }

  }

  
  return [
    upArray.join(''),
    downArray.join('')
  ]
}

const arrayTotal = (arr) => arr.reduce((sum, a) => sum += a, 0);


console.log(solution(3, 2, [2, 1, 1, 0, 1]));   // 10101,11000
console.log(solution(2, 3, [0, 0, 1, 1, 2]));   // IMPOSSIBLE
console.log(solution(2, 2, [2, 0, 2, 0]));      // 1010,1010

