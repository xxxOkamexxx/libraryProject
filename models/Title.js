const bookshelf = require('./bookshelf');


const Title = bookshelf.Model.extend({
    tableName: "Title",

});

module.exports = Title;