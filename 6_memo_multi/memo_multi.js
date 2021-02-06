new Vue({
  el: "#app",
  data: {
    lists: [
      /*
      {
        memos: ["メモ１", "メモ２"],
        inputValue: ""
      }
      */
    ],
  },
  methods: {
    saveMemo: function (listIndex) {
      this.lists[listIndex].memos = [
        ...this.lists[listIndex].memos,
        this.lists[listIndex].inputValue,
      ]
      localStorage.lists = JSON.stringify(this.lists)
      this.lists[listIndex].inputValue = ""
    },
    deleteMemo: function (listIndex, memoIndex) {
      this.lists[listIndex].memos.splice(memoIndex, 1)
      localStorage.lists = JSON.stringify(this.lists)
    },
    addList: function () {
      const list = {
        memos: [],
        inputValue: "",
      }
      this.lists.push(list)
      localStorage.lists = JSON.stringify(this.lists)
    },
    deleteList: function (listIndex) {
      this.lists.splice(listIndex, 1)
      localStorage.lists = JSON.stringify(this.lists)
    },
  },
  // Vue インスタンスが作られるときに実行される関数 created
  created: function () {
    this.lists = JSON.parse(localStorage.lists)
  },
})
