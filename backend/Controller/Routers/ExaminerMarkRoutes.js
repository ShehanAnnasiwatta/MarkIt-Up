const express = require('express');
const router = express.Router();

const {getExamMark, getOneMark, createMark, updateMark, deleteMark} = require('../examinerMarkController')


router.get('/', getExamMark)
router.get('/:id', getOneMark)

router.post('/', createMark)
router.put('/:id', updateMark)
router.delete('/:id', deleteMark)

module.exports = router;