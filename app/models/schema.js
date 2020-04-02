const bookshelf = require('../bookshelf.js');

const Project = bookshelf.model('Project', {
    tableName: 'projects'
})

module.exports.Project = Project;
