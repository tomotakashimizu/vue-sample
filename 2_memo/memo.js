new Vue({
  el: "#app",
  data: {
    inputValue: "",
    memos: [],
  },
  methods: {
    saveMemo: function () {
      this.memos.push(this.inputValue)
      this.inputValue = ""
    },
  },
})
