module.exports = (app) => {

    const projectsController = require('../controllers/projects.controller.js');
    app.get('/projects', projectsController.findAll);
    app.get('/projects/:project', projectsController.findOne);

}
