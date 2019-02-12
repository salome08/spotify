const express = require('express');
const router = express.Router();
const request = require('request');

const spotify = {
  client_id: '6fa5833cc5624630b1605c1be289f43f',
  client_secret: '097a5717688c46a1ae4519f369338666',
  access_token: ''
}

const requestTokenOptions = {
  form: {
    grant_type: 'client_credentials'
  },
  headers: {
    'Authorization': 'Basic ' + new Buffer.from(spotify.client_id + ':' + spotify.client_secret).toString('base64'),
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  uri : 'https://accounts.spotify.com/api/token',
  json: true
}

const apiOptions = {
  headers: {
    'Authorization': 'Bearer ' + spotify.access_token,
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': 'application/json'
  },
  json: true
}

router.get('/token', (req, res) => {
  request.post(requestTokenOptions, (err, response, body) => {
    if (body) {
      spotify.access_token = body.access_token;
      Object.assign(apiOptions, {headers : {Authorization: 'Bearer ' + spotify.access_token}});
      res.send(spotify);
    }
    else {
      res.send(err);
    }
  });
});

router.get('/search', (req, res) => {
  const {artist} = req.query;
  const url = 'https://api.spotify.com/v1/search?q='+ artist +'&type=artist&limit=20'
  Object.assign(apiOptions, {uri: url});
  request.get(apiOptions, (err, response, body) => {
    if (body) {
      res.json(body.artists.items)
    }
    if (err) {
      res.send(err);
    }
  })
});


router.get('/artist/:id', (req, res) => {
  const id = req.params.id
  const url = 'https://api.spotify.com/v1/artists/'+ id +'/albums?limit=5'
  //
  Object.assign(apiOptions, {uri : url});
  console.log(apiOptions);
  request.get(apiOptions, (err, response, body) => {
    if (body) {
      res.json(body.items)
    }
    if (err) {
      res.send(err);
    }
  })
});
  //
  // request({
  //   headers: requestParameters.headers,
  //   uri: url.token_url,
  //   body: requestParameters.body,
  //   method: 'POST'
  // }, (err, res, body) => {
  //   console.log('working : ', res);
  //   if (err) {
  //     console.log('error : ', err);
  //   }
  // });


module.exports = router
