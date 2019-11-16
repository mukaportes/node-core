const http = require('http');
const https = require('https');

/**
 * 
 * @param {string} url URL target of the request
 * @param {string} method Method from the application's enum
 */
const httpsRequest = (url, method) => new Promise((resolve, reject) => {
  return https[method](url, (resp) => {
    let data = '';

    resp.on('data', (chunk) => data += chunk);
    resp.on('end', () => resolve(JSON.parse(data)));

  }).on("error", (err) => reject("Error: " + err.message));
});

/**
 * 
 * @param {string} url URL target of the request
 * @param {string} method Method from the application's enum
 */
const httpRequest = (url, method) => new Promise((resolve, reject) => {
  return http[method](url, (resp) => {
    let data = '';

    resp.on('data', (chunk) => data += chunk);
    resp.on('end', () => resolve(JSON.parse(data)));

  }).on("error", (err) => reject("Error: " + err.message));
});

module.exports = {
  httpRequest,
  httpsRequest,
};
