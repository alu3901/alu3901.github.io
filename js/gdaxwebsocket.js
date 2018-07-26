function subscribeToTimer(cb) {
  console.log('Opening socket');
  const socket = new WebSocket('wss://ws-feed.gdax.com');

  socket.addEventListener('message', function(event) {
    console.log('new message', event.data);
  });

  socket.addEventListener('open', function(event) {
    console.log('Subscribing');


    var subscribe = '{"type": "subscribe", "channels": [{"name": "ticker", "product_ids": ["BTC-EUR"]}]}';
    socket.send(subscribe);

    socket.addEventListener('close', function(event) {
      console.log('Client disconnected.');
    });    
  });

  //socket.addEventListener('message', timestamp => cb(null, timestamp));
}