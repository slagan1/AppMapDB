var gplay = require('google-play-scraper');
var apple = require('app-store-scraper');

function badRequest(res, error) {
  console.log({ error });
  res.status(400).send(error);
}

exports.process = (req, res) => {
  var appId = req.query && req.query['appId'];
  var type = req.query && req.query['type'];

  const store = type === 'apple' ? apple : gplay;
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET');
  const key = type === 'apple' ? 'id' : 'appId';

  console.log({ appId, type, key });

  if (appId) {
    store.app({ [key]: appId }).then(
      success => {
        console.log({ Success: appId });
        res.status(200).send(success);
      },
      error => badRequest(res, error)
    );
  } else {    
    badRequest(res, 'Invalid appId');
  }
};
