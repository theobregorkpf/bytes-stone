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

/*
Vue.component('todo-item', {
  template: '\
    <li>\
      {{ title }}\
      <button v-on:click="$emit(\'remove\')">X</button>\
    </li>\
  ',
  props: ['title']
})
*/

Vue.component('card-item', {
  __template: '<div class="card"> <div :class="className"></div> </div>',
  _template: '<div :class="className"></div>',
  __template: '<img src="/assets/images/{{name}}.png" alt="" />',
  template: '<div class="card"><img v-bind:src="url" /></div>',
  props: ['name'],
  methods: {
    reverseMessage: function () {
      return 'fuckyou'
    },
  },
  computed: {
    className() {
      return `bg bg-${this.name}`;
    },
    url() {
      return `/assets/images/${this.name}.png`
    }
  },
})

new Vue({
  el: '#todo-list-example',
  data: {
    names,
    nextTodoId: 4,
    show: true,
  },
  computed: {
    selectedNames: function () {
      return this.threeRandomCards().slice(0)
      const shuffledNames = shuffle(this.names)

      console.log({shuffledNames})

      return [
        {id: 0, name: shuffledNames[0] },
        {id: 1, name: shuffledNames[1] },
        {id: 2, name: shuffledNames[2] },
      ]
    }
  },
  methods: {
    reverseMessage: function () {
      return 'fuckyou'
    },
    threeRandomCards: function() {
      const shuffledNames = shuffle(this.names)

      console.log({shuffledNames})

      return [
        {id: 0, name: shuffledNames[0] },
        {id: 1, name: shuffledNames[1] },
        {id: 2, name: shuffledNames[2] },
      ]
    },
    addNewTodo: function () {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      })
      this.newTodoText = ''
    },
    reshuffle() {
      debugger
      this.$forceUpdate();
      // vm.$forceUpdate();
    },
    rerender(){
      this.$forceUpdate();
      console.log('rerender...')
        this.show = false
        this.$nextTick(() => {
            this.show = true
            console.log('re-render start')
            this.$nextTick(() => {
                console.log('re-render end')
                this.$forceUpdate();
            })
        })
    }
  }
})
