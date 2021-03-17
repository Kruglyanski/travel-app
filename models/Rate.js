const {Schema, model} = require('mongoose')

const schema = new Schema({
    value: {type: String},
    userId: {type: String},
    countryId: {type: String}
})

module.exports = model('Rate', schema)