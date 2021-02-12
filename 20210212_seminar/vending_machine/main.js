new Vue({
  el: "#app",
  data: {
    drinks: {
      drinks: ["水", "お茶", "缶コーヒー"],
      prices: [100, 150, 120],
    },
    inputValue: "",
    totalMoney: 0,
    lists: [],
  },
  methods: {
    putMoney: function () {
      if (Number.isNaN(Number(this.inputValue))) {
        alert("数字を入力してください。")
        this.inputValue = ""
      } else if (this.inputValue == "") {
        alert("数字を入力してください。")
      } else {
        this.totalMoney += Number(this.inputValue)
        localStorage.totalMoney = this.totalMoney
        this.inputValue = ""
      }
    },

    buyDrink: function (index) {
      if (this.drinks.prices[index] > this.totalMoney) {
        alert("投入金額が不足しています。")
      } else {
        this.totalMoney -= this.drinks.prices[index]
        localStorage.totalMoney = this.totalMoney
        this.lists.push(`${this.drinks.drinks[index]}を購入しました。`)
        localStorage.lists = JSON.stringify(this.lists)
      }
    },

    clearTotalMoney: function () {
      this.totalMoney = 0
      localStorage.totalMoney = this.totalMoney
    },

    deleteList: function (index) {
      this.lists.splice(index, 1)
      localStorage.lists = JSON.stringify(this.lists)
    },
  },

  // Vue インスタンスが作られるときに実行される関数 created
  created: function () {
    this.totalMoney = Number(localStorage.totalMoney) || 0
    this.lists = JSON.parse(localStorage.lists) || []
  },
})
