const asyncHandler = require('express-async-handler');

const Mark = require('../Models/MarkModel')


// @desc    Fetch all vets
// @route   GET /api/vets
// @access  Private/Admin
const getMark = asyncHandler(async (req, res) => {

    const mSearch = req.query.search
    //testing
    //console.log(vSearch)
    let mark

    if(mark){
        mark = await Mark.find(
            {
                $text: { $search: mSearch }
            }
        )
    }
    else{
        mark = await Mark.find();
    }
    
    res.status(200).json(mark);

})
  
// @desc    Fetch logged in user vet
// @route   GET /api/vets/:id
// @access  Private
const getOneMark = asyncHandler(async (req, res) => {
    const mark = await Mark.findById(req.params.id)
  
    if (mark) {
        res.status(200).json(mark)
    } else {
        res.status(404)
        throw new Error('Mark not found')
    }
})
  
// @desc    Create vet
// @route   POST /api/vets
// @access  Private
const createMark = asyncHandler(async (req, res) => {
    
    const {groupId, proposal, progress1, progress2, finalPresentation} = req.body;

    const mark = new Mark({
        groupId: groupId,
        proposal: proposal,
        progress1: progress1,
        progress2: progress2,
        finalPresentation: finalPresentation,
    })

    const savedMark = await mark.save();

    res.status(200).json(savedMark); 
})
  
// @desc    Update vet
// @route   PUT /api/vets/:id
// @access  Private
const updateMark= asyncHandler(async (req, res) => {

    const mark = await Mark.findById(req.params.id)
  
    if (mark) {
  
        const updateMark = await Mark.findByIdAndUpdate(req.params.id, { $set: req.body },{ 
            new: true,
        });
       
        res.status(200).json(updateMark)

    } else {
        res.status(404)
        throw new Error('Research not found')
    }
  })

// @desc    Delete vet
// @route   DELETE /api/vetstv/:id
// @access  Private
const deleteMark= asyncHandler(async (req, res) => {
    const mark = await Mark.findById(req.params.id)
  
    if (mark) {
        await mark.deleteOne();
        res.status(200).json({message: 'Research removed'})
    } else {
        res.status(404)
        throw new Error('Research not found')
    }
})

module.exports = {getMark, getOneMark, createMark, updateMark, deleteMark}