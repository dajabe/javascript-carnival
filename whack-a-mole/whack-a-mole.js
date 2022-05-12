// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')

// The ability to store or get references to the cells in the HTML table.
// A function to randomly select which cell should show the mole.
// A way to show a mole in the chosen cell.

const feild = document.getElementsByTagName('TD')

// Documentation suggests going this route. Which means we would have to generate
// a random number twice in order to select a cell. I liked the simpler method I already
// had and decided against implimenting it.
// const moleFeild = document.getElementById('mole-feild')

// Bring in our whacking sound
const whack = new Audio('./whack-audio.wav')
whack.volume = 0.2
whack.preload = 'auto'

// Whack counter
let whackCount = 0

// Whack timer in seconds.
const whackTime = 5
let whackCountdown = whackTime
let whackTimer

const whackEm = (e) => {
  if (whackCount === 0) {
    whackTimer = setInterval(decreaseTime, 1000)
  }
  if (e.target.className === 'mole-hill') {
    // play sound, cloneNode() here allows the sound effects to overlap and so you get a new sound with each click
    whack.cloneNode().play()
    // remove class
    e.target.classList.remove('mole-hill')
    updateWhackCount(++whackCount)
    makeMoleHill(randCell())
  }
}

for (const e of feild) {
  e.onclick = whackEm
}

// Create the molehill.
const makeMoleHill = (cell) => feild[cell].classList.add('mole-hill')

// Randomly select the square for the mole to make their hill
const randCell = () => Math.floor(Math.random() * feild.length)

// Pop our first mole into play
makeMoleHill(randCell())

const updateWhackCount = (whacks) => {
  document.getElementById('whack-number').innerHTML = whacks
}

// Timey Wimey Stuff

const whackReset = () => {
  whackCountdown = whackTime
  showTime(whackCountdown)
  whackCount = 0
  updateWhackCount(whackCount)
}

const decreaseTime = () => {
  if (whackCountdown > 0) {
    whackCountdown--
    showTime(whackCountdown)
  } else {
    clearInterval(whackTimer)
    window.alert(
      `You whacked ${whackCount} moles!\n
That's ${whackCount / whackTime} whacks per second!!!`
    )
    whackReset()
  }
}

// let whackTimer = setInterval(decreaseTime, 1000)

const showTime = (time) => {
  document.getElementById('whack-timer').innerHTML = time
}

// Sets initial timer value to what the variable says.
showTime(whackTime)
