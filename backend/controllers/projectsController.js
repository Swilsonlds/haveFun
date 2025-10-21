const Project = require('../models/Project');

exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createProject = async (req, res) => {
  try {
    const { title, description, url, tags } = req.body;
    const proj = await Project.create({ title, description, url, tags });
    res.status(201).json(proj);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};