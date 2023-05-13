/** implement the node app called fetcher.js
 * it should take two cl args -- a url and a local file path (./index.html)
 * it should download the resource at the url to the local file path
 * upon completion, print out a message like "Downloaded and saved 1235 bytes to ./index.html" note: 1 character == 1 byte
 */

/** two operations which will take an unknown amount of time
 * 1. make an http request and wait for the response
 * 2. after the http request is complete, take the received data and write it to a file in your local file system
 * can use nested callbacks to control the order of async ops
 */


const url = process.argv[2];
const localPath = process.argv[3];

const fs = require('fs');
const request = require('request');

request(url, (err, response, body) => {
  if (err) {
    console.log('HTTP Request Error: ', err);
  }
  fs.writeFile(`${localPath}`, body, err => {
    if(err) {
      console.log('Write File Error: ', err);
    } else {
      console.log(`Downloaded and saved ${response.headers["content-length"]} bytes to ${localPath}`)
    }
  })
});
