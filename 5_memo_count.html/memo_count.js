new Vue({
  el: "#app",
  data: {
    inputValue: "",
    memos: [],
  },
  computed: {
    memoCount: function () {
      return this.memos.length
    },
  },
  methods: {
    saveMemo: function () {
      this.memos.push(this.inputValue)
      localStorage.memos = JSON.stringify(this.memos)
      this.inputValue = ""
    },
    deleteMemo: function (index) {
      this.memos.splice(index, 1)
      localStorage.memos = JSON.stringify(this.memos)
    },
  },
  // Vue インスタンスが作られるときに実行される関数 created
  created: function () {
    this.memos = JSON.parse(localStorage.memos)
  },
})
