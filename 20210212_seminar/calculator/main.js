new Vue({
  el: "#app",
  data: {
    inputNumber: 0,
    total: [],
    totalNumber: 0,
  },
  methods: {
    addButton: function (x) {
      this.inputNumber = this.inputNumber * 10 + x
    },
    calButton: function (y) {
      this.total.push(this.inputNumber)
      this.total.push(y)
      this.inputNumber = 0
      console.log(this.total)
    },
    equalButton: function () {
      this.total.push(this.inputNumber)
      if (this.total[1] == "plus") {
        this.totalNumber = this.total[0] + this.total[2]
      } else if (this.total[1] == "minus") {
        this.totalNumber = this.total[0] - this.total[2]
      } else if (this.total[1] == "kake") {
        this.totalNumber = this.total[0] * this.total[2]
      } else if (this.total[1] == "waru") {
        this.totalNumber = this.total[0] / this.total[2]
      }
      this.total = []
      this.inputNumber = 0
    },
    clearButton: function () {
      this.total = []
      this.totalNumber = 0
    },
  },
})
