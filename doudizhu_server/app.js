const socket = require('socket.io');
const  app = socket('3000');

app.on('connection', function (socket) {
    console.log('用户连接网络');
    // socket.send()
    socket.emit('welcome to guangdong,', 'helloworld')
    socket.on('login', function (data) {
        console.log('a user login =' + JSON.stringify(data));
    });
});
console.log('监听事件进来');


/**上面就是写好了服务器端的代码*/