// return을 명시적으로 하지 않으면 자동으로 undefined이 반환된다.
function add(num1, num2) {
  return num1 + num2;
}

const result = add(1, 2);

console.log(result);

// return을 중간에 하면 함수 종료
// 조건에 맞지 않은 경우 함수 도입 부분에 함수를 일찍 종료
function print(num) {
  if (num < 0) {
    return;
  }
  console.log(num);
}

print(10);
print(-10);
