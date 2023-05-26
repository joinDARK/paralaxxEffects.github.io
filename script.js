stars = document.getElementById('stars')
moon = document.getElementById('moon')
mountains_behind = document.getElementById('mountains_behind')
text = document.getElementById('text')
btn = document.getElementById('btn')
mountains_front = document.getElementById('mountains_front')
header = document.querySelector('header')

window.addEventListener('scroll', function(){
    value = window.scrollY
    stars.style.left = value * 0.25 + 'px'
    moon.style.top = value * 1.05 + 'px'
    mountains_behind.style.top = value * 0.5 + 'px'
    mountains_front.style.top = value * 0 + 'px'
    text.style.marginRight = value * 4 + 'px'
    text.style.marginTop = value * 1.5 + 'px'
    btn.style.marginTop = value * 1.5 + 'px'
    header.style.top = value * 0.5 + 'px'
})