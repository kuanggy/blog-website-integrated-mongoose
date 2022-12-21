const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    topic: String,
    detail: String
});

module.exports = mongoose.model("Post", postSchema);