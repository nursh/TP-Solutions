
function solution(A) {
    const count1 = A.filter((el, idx) => idx % 2 === 0 && isProtruded(idx, A)).length
    const count2 = A.filter((el, idx) => idx % 2 === 1 && isProtruded(idx, A)).length
    return Math.min(count1, count2)
}
function isProtruded(idx, A) {
	const isLeftProtruded = idx > 0 && A[idx] >= A[idx - 1]
    const isRightProtruded = idx < A.length - 1 && A[idx] >= A[idx + 1]
    return isLeftProtruded || isRightProtruded
}

console.log(solution([2,7,10,9,8,6]))
console.log(solution([5,4,3,2,6]))
console.log(solution([3,7,4,5]))