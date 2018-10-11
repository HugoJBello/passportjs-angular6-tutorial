var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BlogEntrySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
    },
    tags: {
        //type: Array[String],
        type: String,
        required: true
    }
},
    { collection: 'entries' });

module.exports = mongoose.model('BlogEntry', BlogEntrySchema);