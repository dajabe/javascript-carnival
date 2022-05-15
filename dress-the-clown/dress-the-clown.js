// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Dress The Clown!')

// track which feature we're customising
// What features are there?
let features = ['head', 'body', 'shoes']
// number options less 1 as counting starts from 0
const optMax = 5

// update feature on page
function updateFeature(feature, curOpt, newOpt) {
  const img = document.getElementById(feature)
  img.src = img.getAttribute('src').replace(curOpt, newOpt)
  document.getElementById(`${feature}-option`).innerHTML = `${newOpt}`
}

// create an object to represent the clown
function Clown() {
  this.head = document.getElementById('head')
  this.body = document.getElementById('body')
  this.shoes = document.getElementById('shoes')
}

// document.getElementById('head').onclick = updateFeature(ourClown, 'head')

// Monitor for arrow key presses

const keyPress = (e) => {
  switch (e.keyCode) {
    case 37: // Left arrow
      changeOption(features[0], false)
      break
    case 38: // Up arrow
      changeFeature(true)
      break
    case 39: // Right arrow
      changeOption(features[0], true)
      break
    case 40: // Down arrow
      changeFeature(false)
      break
  }
}

// This works but it's inelegant and I don't understand fully what I'm doing here.
// It also doesn't give the option to save with a file name of choosing.

const saveClown = () => {
  let theClown = new Clown()
  let drawingArea = document.getElementById('to-save')
  let canva = drawingArea.getContext('2d')
  drawingArea.width = theClown.body.width
  drawingArea.height = theClown.head.height
  canva.drawImage(theClown.body, 0, 0)
  canva.drawImage(theClown.shoes, 0, 0)
  canva.drawImage(theClown.head, 0, 0)
  var image = document.getElementById('to-save').toDataURL('image/png')

  download(image)
}

function download(url) {
  const a = document.createElement('a')
  a.href = url
  a.download = 'clown.png'
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}

document.onkeydown = keyPress
document.getElementById('save-clown').onclick = saveClown

// Feature changing functions all look the same. This can probably be a single function
// As single function should take args (feature, option)

// Change head

// Change body

// Change shoes

function changeOption(feature, up) {
  const img = document.getElementById(feature)
  let optNum = Number(img.getAttribute('src').at(-5))

  switch (up) {
    case true:
      switch (optNum) {
        case optMax:
          // img.src = img.getAttribute('src').replace(optNum, 0)
          updateFeature(feature, optNum, 0)
          break
        default:
          // img.src = img.getAttribute('src').replace(optNum, ++optNum)
          updateFeature(feature, optNum, ++optNum)
          break
      }
      break

    case false:
      switch (optNum) {
        case 0:
          // img.src = img.getAttribute('src').replace(optNum, optMax)
          updateFeature(feature, optNum, optMax)
          break
        default:
          // img.src = img.getAttribute('src').replace(optNum, --optNum)
          updateFeature(feature, optNum, --optNum)
          break
      }
      break
  }
}

// The simplest way I found to change which feature was selected while allowing cycling
// through the list was to manipulate the array itself.
function changeFeature(up) {
  switch (up) {
    case true: // Take last feature and make it top feature
      document.getElementById(`${features[0]}-arrow`).classList.toggle('hide')
      features.unshift(features.pop())
      document.getElementById(`${features[0]}-arrow`).classList.toggle('hide')
      break
    case false: // Take top feature and make it last feature
      document.getElementById(`${features[0]}-arrow`).classList.toggle('hide')
      features.push(features.shift())
      document.getElementById(`${features[0]}-arrow`).classList.toggle('hide')
      break
  }
}
