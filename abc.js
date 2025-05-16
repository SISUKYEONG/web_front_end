// const helloEl = document.querySelector('.hello')
// console.log(helloEl) //HTMLElement | null

const user = {
  name: 'Neo',
  age: 20
}
function hello(user) {
  const { name } = user //객체 구조 분해 할당
  console.log(name) //'Neo'
  console.log(user.name) //'Neo'
}
hello(neo)

const users = ['Neo', 'Evan', 'Lewis']
function getUser(user) {
  const [neo, evan, lewis] = users //배열 구조 분해 할당당
  console.log(neo, evan, lewis) //'Neo', 'Evan', 'Lewis'
  console.log(users[0], users[1], users[2]) //'Neo', 'Evan', 'Lewis'
}
getUser(users)
