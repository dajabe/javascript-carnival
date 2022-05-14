// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Dress The Clown!')

// track which feature we're customising
// What features are there?
const features = ['head', 'body', 'shoes']
const selectedFeature = features[0]
// number options for each feature
const howManyOptions = 6

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
      img.src = img.getAttribute('src').replace(optNum, ++optNum)
      break
    case false:
      img.src = img.getAttribute('src').replace(optNum, --optNum)
      break
  }
}

function changeFeature(up) {}

changeOption(selectedFeature, true)
changeOption(selectedFeature, true)
