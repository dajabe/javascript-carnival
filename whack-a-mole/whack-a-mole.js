// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')

// The ability to store or get references to the cells in the HTML table.
// A function to randomly select which cell should show the mole.
// A way to show a mole in the chosen cell.

const feild = document.getElementsByTagName('TD')

// Bring in our whacking sound
const whack = new Audio('./whack-audio.wav')
whack.volume = 0.2
whack.preload = 'auto'

const whackEm = (e) => {
  if (e.target.className === 'mole-hill') {
    // play sound, cloneNode() here allows the sound effects to overlap and so you get a new sound with each click
    whack.cloneNode().play()
    // remove class
    e.target.classList.remove('mole-hill')
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
