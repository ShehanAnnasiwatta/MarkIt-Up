const express = require('express');
const router = express.Router();

const {getProjects, getOneProject, createProject, updateProject, deleteProject} = require('../projectRegController')


router.get('/', getProjects)
router.get('/:id', getOneProject)

router.post('/', createProject)
router.put('/:id', updateProject)
router.delete('/:id', deleteProject)

module.exports = router;