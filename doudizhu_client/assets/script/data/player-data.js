let PlayData = function() {
    let that = {};
    that.uid = undefined;
    that.uniqueID = '8888';
    // that.nickName = '小明' + Math.floor(Math.random() * 10);
    that.nickName = '小花'+ Math.floor(Math.random() * 10);
    that.avatarUrl = 'http://5b0988e595225.cdn.sohucs.com/images/20181105/42b599f6d4de4eea9511b1607b0fdba6.jpeg';
    that.houseCardCount = 0;
    for (let i = 0; i < 8; i++) {
        // that.uniqueID  = that.uniqueID * Math.floor(Math.random() * 10);
        that.uniqueID += Math.floor(Math.random() * 10); //0-10的一个整数
    }
    that.wxLoginSuccess = function (data) {
      that.uniqueID = data.uniqueID;
      that.nickName = data.nickName;
      that.avatarUrl = data.avatarUrl;
    };
    that.loginSuccess = function (data) {
        console.log('data = ' + JSON.stringify(data));//stringify序列号对象
    }
    return that;
};
export default PlayData;
