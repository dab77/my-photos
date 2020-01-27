var fs = require('fs');


const getDir = (dir, callback) => {
  fs.readdir(`img/${dir}/`, function (err, items) {
    callback(items.filter(item => {
      return (item.indexOf('.jpg') > -1)
    }).map(item => {
      return {
        image: `./${dir}/${item}`,
        thumb: `./${dir}/thumb/${item}`
      }
    }));
  });
}


const router = app => {
  app.get('/gallery', (request, response) => {
    if (request.query.name !== undefined) {
      const callback = request.query.callback;
      getDir(request.query.name, (res) => {
        response.send(`${callback}(${JSON.stringify(res)})`);
      });
    } else {
      response.send('nothing');
    }
  });
}

module.exports = router;