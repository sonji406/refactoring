const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

// 전달된 action은 콜백함수이다.
// 전달될 당시에 함수를 바로 호출해서 반환된 값을 전달하는게 아니라
// 함수를 가리키고 있는 함수의 레퍼런스(참조값)가 전달된다.
// 그래서 함수는 고차함수안에서 필요한 순간에 호출이 나중에 됨
function calculator(a, b, action) {
  let result = action(a, b);
  console.log(result);
  return result;
}

calculator(1, 2, multiply);
