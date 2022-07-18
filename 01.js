function checkQuadrant({ x, y }) {
  const gradient = calculateGradient({ x, y});
  if (gradient > 0) {
    return x > 0 ? 1 : 2;
  }
  return x < 0 ? 1 : 2; 
}

function calculateGradient({ x, y }) {
  return y / x;
}

function solution(points) {
  const rays = points.reduce((accum, point) => {
    const quadrant = checkQuadrant(point);
    const gradient = calculateGradient(point);
    const statue = [gradient, quadrant];
    if (accum[statue] === undefined ) accum[statue] = 1;
    return accum;
  }, {});

  let rayCount = 0;
  for (let key in rays) {
    rayCount += rays[key];
  }

  return rayCount;
}

console.log(solution([{ x: 0, y: 1 }, { x: 2, y: 2 }]));    // 2
console.log(solution([{ x: 1, y: 1 }, { x: -1, y: 1 }, { x: -1, y: -1 }, { x: 1, y: -1 }]));    // 4
console.log(solution([{ x: 3, y: 1 }, { x: 4, y: 2 }]));    // 2
console.log(solution([{ x: 0, y: 1 }, { x: 0, y: -4 }, { x: 4, y: 4 }]));   // 3
console.log(solution([{ x: 1, y: 2 }, { x: 4, y: 8 },  { x: -6, y: 4 }, { x: -2, y: -1 }, { x: 2, y: -2 }]));   // 4

console.log(solution([{ x: 1, y: -1 }, { x: 1, y: -1 }, { x: 1, y: -1 }]));    // 2
console.log(solution([{ x: 1, y: 1 }, { x: 1, y: 1 }, { x: 1, y: 1 }]));   