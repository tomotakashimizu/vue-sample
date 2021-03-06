new Vue({
  el: "#app",
  data: {
    inputValue: "",
    memos: [],
  },
  methods: {
    saveMemo: function () {
      this.memos.push(this.inputValue)
      localStorage.memos = JSON.stringify(this.memos)
      this.inputValue = ""
    },
  },
  created() {
    this.memos = JSON.parse(localStorage.memos)
  },
})
