const dgram = require('dgram');
const server = dgram.createSocket('udp4');

server.on('error', err => {
  console.log(`server error:\n${err.stack}`);
  server.close();
});

server.on('message', (msg, rinfo) => {
  const text = 'i like udp';
  console.log(JSON.stringify(rinfo.port));
  server.send(text, rinfo.port, '127.0.0.1', function(error) {
    if (error) client.close();
    else console.log('Data sent !!!');
  });
  console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
});

server.on('listening', () => {
  const address = server.address();
  console.log(`server listening ${address.address}:${address.port}`);
});

server.bind(8081);
