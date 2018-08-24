// Select color input
// Select size input
let $inputHeight = $('#inputHeight')
let $inputWidth = $('#inputWidth')
let $submit = $('input[type=submit]')
let $colorPicker = $('#colorPicker')
let $pixelCanvas = $('#pixelCanvas')

$pixelCanvas.on('click', 'td', function() {
  $(this).css({
    backgroundColor: $colorPicker.val()
  })
})

$submit.on('click', function(event) {
  event.preventDefault()
  makeGrid()
})

// When size is submitted by the user, call makeGrid()
function makeGrid() {
  // Your code goes here!
  let widthValue = $inputWidth.val()
  let heightValue = $inputHeight.val()
  let templateGird = getGrid(widthValue, heightValue)
  $pixelCanvas.html(templateGird)
}

function getGrid(width, height) {
  let template = ''
  for (let i = 0; i < width; i++) {
    template += `<tr>`
    for (let j = 0; j < height; j++) {
      template += `<td></td>`
    }
    template += `<tr>`
  }
  return template
}
