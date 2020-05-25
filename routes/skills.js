var express = require('express');
var router = express.Router();
var skillCrtl = require('../controllers/skills');

// GET /todos
router.get('/', skillCrtl.index);
// GET /todos/new   to see a new todo form 
router.get('/new', skillCrtl.new);
// GET /todos/:id
router.get('/:id', skillCrtl.show);
// GET /todos/:id/edit
router.get('/:id/edit', skillCrtl.edit);
// POST /todos
router.post('/', skillCrtl.create);
// DELETE /todos/:id
router.delete('/:id', skillCrtl.delete);
// PUT /todos/:id
// router.put('/:id', skillCrtl.update);


module.exports = router;
