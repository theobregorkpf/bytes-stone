const path = 'http://marclundgren.ngrok.io/assets/images'

const urls = [
  `${path}/1and8.png`,
  `${path}/2and7.png`,
  `${path}/5s.png`,
  `${path}/50-50.png`,
  `${path}/Alliance.png`,
  `${path}/Assist.png`,
  `${path}/BEARDS.png`,
  `${path}/Bones.png`,
  `${path}/CHEAP.png`,
  `${path}/Classy.png`,
  `${path}/Color.png`,
  `${path}/Cry.png`,
  `${path}/DEFENSE.png`,
  `${path}/Dragon.png`,
  `${path}/Equal.png`,
  `${path}/EVENS.png`,
  `${path}/Expansion.png`,
  `${path}/FireIce.png`,
  `${path}/Fortify.png`,
  `${path}/GIRLS.png`,
  `${path}/HEALER.png`,
  `${path}/HORDE.png`,
  `${path}/HUNTER.png`,
  `${path}/LegendaryCurves.png`,
  `${path}/Lettters.png`,
  `${path}/Lift.png`,
  `${path}/Mammoth.png`,
  `${path}/ODDS.png`,
  `${path}/OFFENSE.png`,
  `${path}/OnlyOne.png`,
  `${path}/Pauper.png`,
  `${path}/PauperPlus.png`,
  `${path}/Rafam.png`,
  `${path}/Randomonium.png`,
  `${path}/SILENCEDa.png`,
  `${path}/SUICIDE.png`,
  `${path}/Three.png`,
]

const getRandomIndex = (list) => {
  const min = 0
  const max = urls.length - 1

  return Math.floor(Math.random() * (max - min + 1)) + min
}

const syncUI = () => {
  $('button').off('click')
  $('button').on('click', (event) => {
    event.preventDefault()
    $('#random img').remove()
    randomImage()
  })
}

const randomImage = () => {
  const index = getRandomIndex()
  const url   = urls[index]
  const image = `<img src="${url}" border="0"></img>`
  const link = `<a href="#">${image}</a>`
  const cell = `<div class="item">${link}</div>`

  $('main').append(cell)
  $('main').append(cell)
  $('main').append(cell)

  syncUI()
}

randomImage()
