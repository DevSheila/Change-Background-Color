
const button = document.querySelector('button')
const body = document.querySelector('body')
// colors the backgroundColor would change to at randon
const colors = ['grey','yellow','violet','indigo','blue']


body.style.backgroundColor = 'pink'
button.addEventListener('click', changeBackground)

function changeBackground(){
const colorIndex= parseInt(Math.random()*colors.length)
body.style.backgroundColor = colors[colorIndex]
button.style.backgroundColor=colors[colorIndex]
}
