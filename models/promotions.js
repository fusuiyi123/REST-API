const mongoose = require('mongoose');
const Scheme = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;


const promotionScheme = new Scheme({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    label: {
        type: String,
        default: ''
    },
    price: {
        type: Currency,
        required: true,
        min: 0
    },
    description: {
        type: String,
        required: true
    },
    featured: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

var Promotions = mongoose.model('Promotion', promotionScheme);
module.exports = Promotions;