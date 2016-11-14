/**
 * Created by Erum on 16/10/25.
 */
var mongoose = require('mongoose');

var ArticleSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        default: 'unknown'
    },
    meta: {
        createAt: {
            type: Date,
            default: Date.now()
        },
        updateAt: {
            type: Date,
            default: Date.now()
        }
    }
});

var ArticleModel = mongoose.model('Article', ArticleSchema);

module.exports = ArticleModel;