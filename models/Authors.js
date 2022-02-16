const bookshelf = require('./bookshelf');
const Title = require('./Title');

const Authors = bookshelf.Model.extend({
    tableName: "Authors",

});

module.exports = Authors;