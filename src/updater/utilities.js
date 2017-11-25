const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');

const dataPath = path.resolve('public/data');

function getTopOfCurrentHour() {
    let date = new Date;
    date.setUTCMinutes(0);
    date.setUTCSeconds(0);
    return Math.floor(date.getTime() / 1000);
}
module.exports.getTopOfCurrentHour = getTopOfCurrentHour;

function readJson(filename) {
    return JSON.parse(fs.readFileSync(filename));
}
module.exports.readJson = readJson;

function writeJson(filename, data) {
    mkdirp(path.dirname(filename));
    fs.writeFileSync(filename, JSON.stringify(data));
}
module.exports.writeJson = writeJson;

function readData(filename) {
    return readJson(`${dataPath}/${filename}`);
}
module.exports.readData = readData;