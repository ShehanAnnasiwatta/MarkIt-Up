const express = require('express');
const router = express.Router();

const {getMark, getOneMark, createMark, updateMark, deleteMark} = require('../MarkController')


router.get('/', getMark)
router.get('/:id', getOneMark)

router.post('/', createMark)
router.put('/:id', updateMark)
router.delete('/:id', deleteMark)

module.exports = router;