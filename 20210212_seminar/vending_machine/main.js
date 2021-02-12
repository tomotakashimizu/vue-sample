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
      } else {
        this.totalMoney += Number(this.inputValue)
        this.inputValue = ""
      }
    },
    buyDrink: function (index) {
      if (this.drinks.prices[index] > this.totalMoney) {
        alert("投入金額が不足しています。")
      } else {
        this.totalMoney -= this.drinks.prices[index]
        this.lists.push(`${this.drinks.drinks[index]}を購入しました。`)
      }
    },
  },
  // Vue インスタンスが作られるときに実行される関数 created
  created: function () {
    // this.lists = JSON.parse(localStorage.lists)
  },
})
