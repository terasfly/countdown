const days = document.getElementById('days')
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')
const gif = document.querySelector('.gif');



const currentYear = new Date().getFullYear()
console.log(currentYear)

const christmasDay = new Date(`December 01 ${currentYear} 00:00:00`)
console.log(christmasDay)

function updadeCountDown() {
    const currentTime = new Date()
    console.log(currentTime)
    const diff = christmasDay - currentTime
    console.log(diff)

    const d = Math.floor(diff / (24 * 60 * 60 * 1000))

    console.log(d)
    const h = Math.floor((diff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    const m = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000));

    const s = Math.floor((diff % (60 * 1000)) / 1000);



    days.textContent = d < 10 ? '0' + d : d
        // days.style.fontSize = '100px'
        // days.style.color = 'yellow'
    days.style.fontSize = '100px';
    days.style.animationName = 'flashing';
    days.style.animationDuration = '1s'; // Change the duration as you like
    days.style.animationIterationCount = 'infinite';

    hours.textContent = h < 10 ? '0' + h : h
    minutes.textContent = m < 10 ? '0' + m : m
    seconds.textContent = s < 10 ? '0' + s : s



    setTimeout(() => {
        gif.classList.add('flex')

    }, 3000);



}
// updadeCountDown()

setInterval(updadeCountDown, 1000)
