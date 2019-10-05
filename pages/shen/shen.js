// pages/shen/shen.js
const app = getApp();
Page({
  data: {
    //  底部导航
    curIdx: 1,
    listInfo: [
      {
        text: '首页',
        imgUrl: './image/text.png',
        curUrl: './image/texter.png',
      },
      {
        text: '兼职入口',
        imgUrl: './image/card.png',
        curUrl: './image/carder.png',
      },
      {
        text: '个人中心',
        imgUrl: './image/view.png',
        curUrl: './image/viewer.png',
      },
    ]
  },
  Navigation: function (event) {
    var that = this;
    app.Navigation(event, that);
  },
  // 底部导航
  chooseImg: function (e) {
    this.setData({
      curIdx: e.currentTarget.dataset.current
    })
    //  console.log(e)
    //  console.log(this.data.curIdx) 
  },
  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})