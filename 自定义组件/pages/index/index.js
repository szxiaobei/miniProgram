//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    isLogin:false,
  },
  /**
 * 生命周期函数--监听页面初次渲染完成
 */
  onReady: function () {
    console.log("onReady");

    //获得popLogin组件
    this.popLogin = this.selectComponent("#popLogin");
  },
  toLogin: function () {
    this.popLogin.showPopLogin();
  },
  _loginStatus: function (e) {
    console.log('loginStatus:' + JSON.stringify(e));
    this.setData({
      isLogin: e.detail.isLogin
    })
  },
})
