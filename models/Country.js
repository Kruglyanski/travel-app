const {Schema, model} = require('mongoose')

const schema = new Schema({

    name: {type: String, required: true},
    capital: {type: String, required: true},
    capitalLocation: {
        coordinates: [
            {type: String, required: true}
        ],
        type: {type: String, required: true},
        id: {type: String, required: true}
    },
    description: {type: String, required: true},
    imageUrl: {type: String, required: true},
    videoUrl: {type: String, required: true},
    currency: {type: String, required: true},
    timeOffset: {type: String, required: true},
    ISOCode: {type: String, required: true},
    places: [
        {
            name: {type: String, required: true},
            description: {type: String, required: true},
            photoUrl: {type: String, required: true},

        }
    ],
})

module.exports = model('Country', schema)