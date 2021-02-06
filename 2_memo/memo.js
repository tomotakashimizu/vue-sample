new Vue({
  el: "#app",
  data: {
    inputValue: "",
    memos: [],
  },
  methods: {
    save: function () {
      this.memos.push(this.inputValue)
    },
  },
})
