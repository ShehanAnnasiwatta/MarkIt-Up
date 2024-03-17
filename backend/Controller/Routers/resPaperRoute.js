const express = require('express');
const router = express.Router();

const {getResearch, getOneReserch, createResearch, updateResearch, deleteResearch} = require('../resPaperController')


router.get('/', getResearch)
router.get('/:id', getOneReserch)

router.post('/', createResearch)
router.put('/:id', updateResearch)
router.delete('/:id', deleteResearch)

module.exports = router;