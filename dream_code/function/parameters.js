//매개변수의 정보는 함수 내부에서 접근이 가능한 arguments 객체에 저장됨
//매개변수 기본값 지정 가능
function add(a = 1, b = 1) {
  console.log(a);
  console.log(b);
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
  return a + b;
}

add();

// rest 매개변수
function sum(a, b, ...numbers) {
  console.log(a);
  console.log(b);
  console.log(arguments);
  console.log(numbers);
}

sum(1, 2, 3, 4, 5, 6, 7, 8, 9);
