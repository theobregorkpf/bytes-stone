const names = [
  'one-and-eight',
  'two-and-seven',
  'fives',
  'fifty-fifty',
  'alliance',
  'assist',
  'beards',
  'bones',
  'cheap',
  'classy',
  'color',
  'cry',
  'defense',
  'dragon',
  'equal',
  'evens',
  'expansion',
  'fire-ice',
  'fortify',
  'girls',
  'healer',
  'horde',
  'hunter',
  'legendary-curves',
  'letters',
  'lift',
  'mammoth',
  'odds',
  'offense',
  'only-one',
  'pauper',
  'pauper-plus',
  'rafam',
  'randomonium',
  'silenced-a',
  'suicide',
  'three',
]

const getRandomKey = (hash) => {
  const keys  = Object.keys(hash)
  const min   = 0
  const max   = keys.length - 1
  const index = Math.floor(Math.random() * (max - min + 1)) + min

  return hash[index]
}

Vue.component('card-item', {
  props: ['name'],
  template: `<div class="card animate bg-${name}"></div>`
})
var vm = new Vue({
  el: '#app',
  data: {
    // names,
    // template: '<p id="app">Hello</p>',
    count: 3,
  },
})
/*
var vm = new Vue({
  el: '#app',
  data: {
    // names,
    // template: '<p id="app">Hello</p>',
    count: 3,
  },
  computed: {
    wat() {
      return 1
    },
    namesHash() {
      return this.names().reduce((hash, item) => hash[item] = item, {})
    },
    names() {
      // debugger
      let count = this.count
      console.log({count})
      let namesHashCopy = Object.assign({}, this.namesHash())
      let selectedNamesHash = {}

      // while (count > 0) {
      //   const key  = getRandomKey(namesHashCopy)
      //   const name = key
      //
      //   delete namesHashCopy[key]
      //
      //   selectedNames.push(key)
      //
      //   count = count - 1
      // }

      // return Object.keys(selectedNames)
      return 'This and that'
    },
    firstCardName: function () {
      return names[0];
      // `this` points to the vm instance
      // return this.message.split('').reverse().join('')
    }
  }
})
*/

// var app = new Vue({
//   el: '#app',
//   data: { names },
// })

// console.log({app})
