const mongoose = require('mongoose');

let foodMenus = mongoose.model('foodMenus', {
    name: {type: String},
    menu: {type: Array}
});

module.exports = { foodMenus };