const fs = require('fs');

// read json file and returns contents
function getDataFromDatabase(file) {
    const data = fs.readFileSync(__dirname + `/../database/${file}`).toString();
    return data ? JSON.parse(data) : [];
}; 

// add data in file json
function setDataFromDatabase(file, data) {
    fs.writeFileSync(__dirname + `/../database/${file}`, JSON.stringify(data, null, 4));
};

module.exports = { getDataFromDatabase, setDataFromDatabase };