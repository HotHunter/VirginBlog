/**
 * Created by Erum on 16/10/25.
 */
var mongoose = require('mongoose');

var ArticleSchema = new mongoose.Schema({
    title:String,
    create_date:{
        type:Date,
        default:new Date()
    },
    update_date:{
        type:Date,
        default:new Date()
    },
    content:String,
    author:{
        type:String,
        default:'unknown'
    }
});

var ArticleModel = mongoose.model('Article', ArticleSchema);

module.exports = ArticleModel;