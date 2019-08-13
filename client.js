const dgram = require('dgram');
const client = dgram.createSocket('udp4');
const message = 'hello udp';

client.send(message, 8081, 'localhost', err => {
  client.on('message', (msg, rinfo) => {
    console.log(msg.toString('ascii'));
    client.close();
  });
});
