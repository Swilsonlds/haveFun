
exports.getHome = (req, res) => {
  res.send('<h1>Welcome to my portfolio API</h1><p>See /api/projects for project data.</p>');
};