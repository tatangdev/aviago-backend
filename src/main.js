const {Airport} = require('./db/models');

Airport.findAll().then(data => console.log(data));