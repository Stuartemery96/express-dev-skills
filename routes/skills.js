const express = require('express');
const router = express.Router();
const skillsCtrl = require('../controllers/skills');


/* GET users listing. */
router.get('/', skillsCtrl.index);

// GET /skills/new
router.get('/new', skillsCtrl.new);

router.get('/:id', skillsCtrl.show);

// GET /:id/edit
router.get('/:id/edit', skillsCtrl.edit)

// POST /skills
router.post('/', skillsCtrl.create);

// PUT /skills/:id
router.put('/:id', skillsCtrl.update);

// DELETE /skills/:id
router.delete('/:id', skillsCtrl.delete);

module.exports = router;
