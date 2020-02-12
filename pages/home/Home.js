Page({
  data: {
    name: '测试绑定数据',
    studuts: [
      { id: 0, name: '马克1号' },
      { id: 1, name: '马克22号' },
      { id: 2, name: '马克42号' },
      { id: 3, name: '马克99号'},
    ],
    num: 0
  },
  // 点击 + 号
  addButton() {
    this.setData({
      num: this.data.num+1
    })
  },
  // 点击 - 号
  cantenBotton() {
    this.setData({
      num: this.data.num-1
    })
  },
})