
import global from './../global'
cc.Class({

    extends: cc.Component,

    properties: {

    },
    onLoad: function () {
        // let socket = io('https://localhost:3000');
        // socket.on('welcome', function(data) {
        //     console.log('data ========8888888===== ' + data);
        // })
        // global.socket.init();
    },

    buttonClick(event, customData) {
        console.log('custom data= 疯狂点击按钮', + customData);
        switch (customData) {
            case 'wxlogin':
                global.socket.login(
                    global.tianba.playerData.uniqueID,
                    global.tianba.playerData.nickName,
                    global.tianba.playerData.avatarUrl, function(err, data) {
                        if (err) {
                            console.log('login err' + err);
                        } else {
                            console.log('login data' + JSON.stringify(data));
                        }
                    });
                break;
            default:
                break;
        }
    }
    //
    // start () {
    //
    // },


});
