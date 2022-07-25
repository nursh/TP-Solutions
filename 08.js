function solution(N, S) {
  const reserved = S.split(' ');
  const canReserve = (row, cols) => !cols.some(col => reserved.includes(row + col))
  return [...Array(N)].reduce((sum, _, currentIndex) => {
    const row = currentIndex + 1
    if (canReserve(row, ['B', 'C', 'D', 'E', 'F', 'G', 'H', 'J'])) {
      return sum + 2
    } else if (canReserve(row, ['B', 'C', 'D', 'E']) || canReserve(row, ['D', 'E', 'F', 'G']) || canReserve(row, ['F', 'G', 'H', 'J'])) {
      return sum + 1
    } else {
      return sum
    }
  }, 0)
}

console.log(solution(2, "1A 2F 1C"))
console.log(solution(1, ""))


