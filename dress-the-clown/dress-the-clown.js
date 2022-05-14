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
function updateFeature(clown, feature) {
  document.getElementById(feature).src = clown[feature]
}

// create an object to represent the clown
let ourClown = {
  head: document.getElementById('head').getAttribute('src'),
  body: document.getElementById('body').getAttribute('src'),
  shoes: document.getElementById('shoes').getAttribute('src'),
}

console.log(ourClown)

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

document.onkeydown = keyPress

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
          img.src = img.getAttribute('src').replace(optNum, 0)
          break
        default:
          img.src = img.getAttribute('src').replace(optNum, ++optNum)
          break
      }
      break

    case false:
      switch (optNum) {
        case 0:
          img.src = img.getAttribute('src').replace(optNum, optMax)
          break
        default:
          img.src = img.getAttribute('src').replace(optNum, --optNum)
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
      features.unshift(features.pop())
      break
    case false: // Take top feature and make it last feature
      features.push(features.shift())
      break
  }
}
