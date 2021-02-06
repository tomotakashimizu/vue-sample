new Vue({
  el: "#app",
  data: {
    inputValue: "",
    memos: [],
  },
  methods: {
    save: function () {
      this.memos.push(this.inputValue)
      localStorage.memos = JSON.stringify(this.memos)
    },
  },
  created() {
    this.memos = JSON.parse(localStorage.memos)
  },
})
