// pages/test/test.js
Page({
  
  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数-监听页面加载
   */
  onLoad: function(options){
    wx.cloud.callFunction({
      name:'getPlayList'
    }).then((res) => {
      console.log(res)
    })
  },
})
