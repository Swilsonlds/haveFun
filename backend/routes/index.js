const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homeController');
const projectsController = require('../controllers/projectsController')

// Example route
router.get('/', homeController.getHome);

// Project Routes
router.get('/api/projects', projectsController.getProjects);
router.post('/api/projects', projectsController.createProject);

module.exports = router;
