// component/popLogin.js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
    //传值标题
    title: {            // 属性名
      type: String,     // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: '标题'     // 属性初始值（可选），如果未指定则会根据类型选择一个
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    closeUrl: './images/close.png',
    isShow: false,
    phone: '',
    identifyingCode: '', //验证码
    randomKey: '', //生成验证码对应的随机字符串，用来登录使用
    hasGetCode: false, //是否已发送验证码
    countDown: 60,
    timer: null,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //显示弹框
    showPopLogin: function () {
      this.setData({
        isShow: !this.data.isShow
      })
    },
    //隐藏弹框
    hidePopLogin: function () {
      this.setData({
        isShow: !this.data.isShow
      })
    },
    getPhoneNum: function (e) {
      this.setData({
        phone: e.detail.value
      })

    },
    getIdentify: function (e) {
      this.setData({
        identifyingCode: e.detail.value
      })
    },
    //获取验证码
    getIdentifyingCode: function () {
      console.log('获取验证码');
    },
    timeCountDown: function (_this) {
      _this.hasGetCode = true;
      let countDown = 60;
      //验证码倒计时
      this.timer = setInterval(function () {
        countDown--;
        if (countDown <= 0) {
          _this.hasGetCode = false;
          clearInterval(_this.timer);
          // countDown = 60;
        }
      }, 1000);
    },

    //登录接口
    _loginClick: function () {
      if (this.data.phone.length == 0){
        wx.showToast({
          title: '手机号不能为空',
          icon: 'none'
        });
        return;
      }
      const code = this.data.identifyingCode.toString();
      if (code.length == 0) {
        wx.showToast({
          title: '验证码不能为空',
          icon: 'none'
        });
        return;
      }
      this.setData({
        isShow: false
      })
      //向父组件传值
      this.triggerEvent("loginStatus", { 'isLogin': true });

    },
  }
})
