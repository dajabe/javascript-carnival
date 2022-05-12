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
let highestWhacks = 0

// Whack timer in seconds.
const whackTime = 10
let whackCountdown = whackTime
let whackTimer

// No more repeated cells
// We might be able to do this more reliably with a recursive function
let prevCell

const noRepeat = () => {
  let cell = Math.floor(Math.random() * Number(feild.length))
  if (cell != prevCell) {
    console.log(
      `New cell: ${cell} and is ${typeof cell}, Prev Cell: ${prevCell}`
    )
    return cell
  } else {
    console.log('Get another number')
    return noRepeat()
  }
}

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
    let cell = noRepeat()
    makeMoleHill(cell)
  }
}

for (const e of feild) {
  e.onclick = whackEm
}

// Create the molehill.
const makeMoleHill = (cell) => {
  console.log(typeof cell)
  feild[cell].classList.add('mole-hill')
  prevCell = cell
}

// Randomly select the square for the mole to make their hill
const randCell = () => Math.floor(Math.random() * feild.length)

// Pop our first mole into play
makeMoleHill(noRepeat())

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
    --whackCountdown
    showTime(whackCountdown)
  } else {
    clearInterval(whackTimer)
    window.alert(
      `${updateWhackHigh(whackCount)}You whacked ${whackCount} moles!\nThat's ${
        whackCount / whackTime
      } whacks per second!!!`
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

const showWhackHigh = () => {
  document.getElementById('whack-highscore').innerHTML = highestWhacks
}

const updateWhackHigh = (score) => {
  if (score > highestWhacks) {
    highestWhacks = score
    showWhackHigh()
    return `Congratulations new highscore!\n\n`
  } else {
    return `The best whacker whacks ${highestWhacks} moles\n\n`
  }
}
