// badalkr0521bth
// YZMNmITvfLTiHRbV
// mongodb+srv://badalkr0521bth:YZMNmITvfLTiHRbV@cluster0.gl6fy.mongodb.net/
const mongoose = require('mongoose');

const conectDB = async () => {
    await mongoose.connect('mongodb+srv://badalkr0521bth:YZMNmITvfLTiHRbV@cluster0.gl6fy.mongodb.net/dev__tinder')
}

module.exports = conectDB;