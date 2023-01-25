const mongoose = require ("mongoose");
const Shema = mongoose.schema;

let postShema = new schema({

    title : {
        type : String,
        required : true
    },

    content : {
        type : String,
        required : true
    },

    created_at : {
        type : Date,
        default : Date, now
    }
});

module.exports = mongoose.model('Post',postSchema);