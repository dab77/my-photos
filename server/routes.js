const router = app => {
  app.get('/', (request, response) => {
    response.send({
      message: 'Node.js and Express REST API'
    });
  });
  app.get('/gallery', (request, response) => {
    if (request.query.name !== undefined) {
      const callback = request.query.callback;
      switch (request.query.name) {
        case 'fareast':
          const fareast = require('./data/fareast');
          response.send(`${callback}(${JSON.stringify(fareast)})`);
          break;
        default:
          response.send('nothing');
      }
    } else {
      response.send('nothing');
    }
  });
}

module.exports = router;