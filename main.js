const urls = [
  'https://user-images.githubusercontent.com/1154834/33495061-ee2e2d9a-d679-11e7-85e5-bf28e25efd2a.png',
  'https://user-images.githubusercontent.com/1154834/33495062-ee453134-d679-11e7-9f96-9ba2ca3a1cd4.png',
  'https://user-images.githubusercontent.com/1154834/33495063-ee73c4f4-d679-11e7-8c95-86a9157c2f98.png',
  'https://user-images.githubusercontent.com/1154834/33495064-ee8d4c3a-d679-11e7-9d5f-ad2b1f5fbc42.png',
  'https://user-images.githubusercontent.com/1154834/33495065-eea93756-d679-11e7-8a39-9a2e28068226.png',
  'https://user-images.githubusercontent.com/1154834/33495066-eec55b02-d679-11e7-9cbe-24edc2ccd998.png',
  'https://user-images.githubusercontent.com/1154834/33495067-eee89a90-d679-11e7-9a83-4032bcfffbf4.png',
  'https://user-images.githubusercontent.com/1154834/33495068-ef0134ce-d679-11e7-959f-9bbdd5f18fcf.png',
  'https://user-images.githubusercontent.com/1154834/33495069-ef18ecea-d679-11e7-8436-e19ab19d4c6d.png',
  'https://user-images.githubusercontent.com/1154834/33495070-ef2df360-d679-11e7-83e5-342284469221.png',
  'https://user-images.githubusercontent.com/1154834/33495071-ef4b6904-d679-11e7-943b-b405fcc92718.png',
  'https://user-images.githubusercontent.com/1154834/33495073-ef78958c-d679-11e7-8eab-b5060c093d58.png',
  'https://user-images.githubusercontent.com/1154834/33495074-ef8da45e-d679-11e7-87ee-cdb2128b3832.png',
  'https://user-images.githubusercontent.com/1154834/33495075-efa459a6-d679-11e7-93b7-c805596e7061.png',
  'https://user-images.githubusercontent.com/1154834/33495077-efbf0c6a-d679-11e7-887e-4e03698213b5.png',
  'https://user-images.githubusercontent.com/1154834/33495079-efdaa3e4-d679-11e7-9bc2-aa7cea561100.png',
  'https://user-images.githubusercontent.com/1154834/33495080-eff483f4-d679-11e7-8787-66520ad1a1cd.png',
  'https://user-images.githubusercontent.com/1154834/33495081-f00a7e20-d679-11e7-9f41-5fd7a5e38481.png',
  'https://user-images.githubusercontent.com/1154834/33495082-f02187dc-d679-11e7-9b24-b2194156694c.png',
  'https://user-images.githubusercontent.com/1154834/33495084-f0515b88-d679-11e7-984e-727cc000a4a0.png',
  'https://user-images.githubusercontent.com/1154834/33495087-f083122c-d679-11e7-9b6e-fdaad21fe634.png',
  'https://user-images.githubusercontent.com/1154834/33495088-f0a0ca9c-d679-11e7-86a0-51439c7bb7dc.png',
  'https://user-images.githubusercontent.com/1154834/33495089-f0bda036-d679-11e7-88e9-e607b5a836f4.png',
  'https://user-images.githubusercontent.com/1154834/33495090-f0d5f47e-d679-11e7-8d45-fda4e4107884.png',
  'https://user-images.githubusercontent.com/1154834/33495092-f0ef6e7c-d679-11e7-8f50-f37de268a8f6.png',
  'https://user-images.githubusercontent.com/1154834/33495094-f11cfdc4-d679-11e7-9214-e5ffbb68b63e.png',
  'https://user-images.githubusercontent.com/1154834/33495095-f133a4d4-d679-11e7-8f1a-ec6bfeffc99c.png',
  'https://user-images.githubusercontent.com/1154834/33495095-f133a4d4-d679-11e7-8f1a-ec6bfeffc99c.png',
  'https://user-images.githubusercontent.com/1154834/33495097-f16f8a9e-d679-11e7-9426-7cb9798fb8c4.png',
  'https://user-images.githubusercontent.com/1154834/33495098-f189fa14-d679-11e7-923e-2914bfad817f.png',
  'https://user-images.githubusercontent.com/1154834/33495100-f1ca2864-d679-11e7-98b6-7d9281fdc107.png',
  'https://user-images.githubusercontent.com/1154834/33495101-f2253380-d679-11e7-9e49-f68a72f47e88.png',
  'https://user-images.githubusercontent.com/1154834/33495103-f241deb8-d679-11e7-8df5-c5e75eaabe6d.png',
  'https://user-images.githubusercontent.com/1154834/33495104-f2571378-d679-11e7-9c39-f8f58b3a2d27.png',
  'https://user-images.githubusercontent.com/1154834/33495105-f26facc6-d679-11e7-877a-324a9e7e565a.png',
  'https://user-images.githubusercontent.com/1154834/33495106-f284e28a-d679-11e7-8cc6-13d32062ff1a.png',
]

const getRandomInteger = ({max = 10, min = 0}) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const shuffle = (array) => {
  const arrayCopy = array.slice(0) // avoid mutation

  var currentIndex = arrayCopy.length, temporaryValue, randomIndex

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    temporaryValue = arrayCopy[currentIndex]
    arrayCopy[currentIndex] = arrayCopy[randomIndex]
    arrayCopy[randomIndex] = temporaryValue
  }

  return arrayCopy
}

Vue.component('card-item', {
  template: '<div class="card"><img v-bind:src="url" /></div>',
  props: ['url'],
})

new Vue({
  el: '#todo-list-example',
  data: {
    urls,
    nextTodoId: 4,
    show: true,
  },
  methods: {
    threeRandomCards: function() {
      const shuffledUrls = shuffle(this.urls)

      return [
        {id: 0, url: shuffledUrls[0] },
        {id: 1, url: shuffledUrls[1] },
        {id: 2, url: shuffledUrls[2] },
      ]
    },
    reshuffle() {
      this.$forceUpdate();
    },
    rerender(){
      this.$forceUpdate();
      this.show = false
      this.$nextTick(() => {
        this.show = true
        this.$nextTick(() => {
          this.$forceUpdate();
        })
      })
    }
  }
})
