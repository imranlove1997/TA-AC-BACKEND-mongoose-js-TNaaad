var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = ({
    title: String,
    description: String,
    tags: [String],
    likes: Number,
    author: Schema.Types.ObjectId,
    comments: String
}, { timeStamps: true})

var Article = mongoose.model('Article', articleSchema);

module.exports = Article;