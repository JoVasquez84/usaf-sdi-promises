/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');
var promiseConstructor = require('./promiseConstructor.js');
var pluckFirstLineFromFileAsync = promiseConstructor.pluckFirstLineFromFileAsync;
var getDataAsync = promiseConstructor.getDataAsync;
var writeToJSONFileAsync = promiseConstructor.writeToJSONFileAsync;

//import previous functions from callbacks and promises

//use promisify to make them promises

var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  //returns a promise (promise 0)
   //promise 1
  //TODO: first big task, reads a GitHub username from a `readFilePath`
  return pluckFirstLineFromFileAsync(readFilePath)

    //promise 2
//TODO .then(gitHubUserName)
//TODO: sends a request to the GitHub API for the user's profile
  .then(function (userName) {
    return getDataAsync(`https://api.github.com/users/${userName}`)
  })
//prmoise 3
//TODO: writes the JSON response of the API to `writeFilePath`
  .then(function (data) {
    return writeToJSONFileAsync(writeFilePath, data.body)
  })
};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
