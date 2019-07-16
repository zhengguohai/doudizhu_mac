import defines from './../defines';
const SocketController = function () {
    let that = {};
    let _socket = undefined;
    that.init = function () {
        // _socket = io('https://localhost:3000');
        _socket = io(defines.serverUrl);
    };
    that.login = function (unique, nickname, avatar, cb) {
        _socket.emit('login', {
            uniqueID: unique,
            nickName: nickname,
            avatarUrl: avatar
        });
    }
    return that;
};
export  default SocketController;