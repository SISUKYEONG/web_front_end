//제네릭 <타입변수>
function add<T>(a: T, b: T): T {
  return a + b
}
//a,b 매개변수

console.log(add(1, 2)) //3 //제너릭 타입 추론
console.log(add('1', '2')) //'12'
console.log(add(true, false)) //false
// console.log(add(1, '2'))
