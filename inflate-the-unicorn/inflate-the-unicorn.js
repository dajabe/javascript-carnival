// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Inflate The Unicorn!')

// look for clicks on unicorns
// record which unicorn was clicked
// Check which unicorn image is currently being displayed.
// Display next unicorn image on click
// when unicorn-3.png is being displayed window alert.

const unicorns = document.getElementsByClassName('inflate-an-image')

for (let index = 0; index < unicorns.length; index++) {
  unicorns[index].onclick = inflate
}

function inflate() {
  const whichUnicorn = this.id.slice(-1)
  const inflateLevel = this.src.slice(-5, -4)

  switch (inflateLevel) {
    case '0':
      this.src = `./images/unicorn-1.png`
      break
    case '1':
      this.src = `./images/unicorn-2.png`
      break
    case '2':
      this.src = `./images/unicorn-3.png`
      break
    default:
      unicornThankYou(whichUnicorn)
      break
  }
}

function unicornThankYou(unicorn) {
  window.alert(`Unicorn ${unicorn} expresses their heartfelt thanks.`)
}
