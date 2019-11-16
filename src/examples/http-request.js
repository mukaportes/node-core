const { httpRequest, httpsRequest } = require('../modules/http');
const HTTP_METHODS = require('../modules/http/enum');

const httpUrl = 'http://taco-randomizer.herokuapp.com/random/?full-taco=true';
const httpsUrl = 'https://api.openbrewerydb.org/breweries?by_state=new_york';

httpRequest(httpUrl, HTTP_METHODS.GET)
  .then(data => console.log('Successful HTTP request', data))
  .catch(error => console.error('Failed HTTP request', error));

httpsRequest(httpsUrl, HTTP_METHODS.GET)
  .then(data => console.log('Successful HTTPS request', data))
  .catch(error => console.error('Failed HTTPS request', error));