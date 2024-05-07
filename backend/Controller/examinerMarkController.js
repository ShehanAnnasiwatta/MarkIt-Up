const asyncHandler = require('express-async-handler');

const Mark = require('../Models/examinerMarkModel')

const getExamMark = asyncHandler(async (req, res) => {

    const pSearch = req.query.search
    //testing
    //console.log(vSearch)
    let marks

    if(pSearch){
        marks = await Mark.find(
            {
                $text: { $search: pSearch }
            }
        )
    }
    else{
         marks = await Mark.find();
    }
    
    res.status(200).json(marks);

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
        throw new Error('Project not found')
    }
})
  


const createMark = asyncHandler(async (req, res) => {
    
    const { groupNum, proposal, progress1, progress2, fPresentation } = req.body;


    try {
        const mark = new Mark({
            groupNum: groupNum,
            proposal: proposal,
            progress1: progress1,
            progress2: progress2,
            fPresentation: fPresentation
        });

        const savedMark = await mark.save(); // Corrected this line

        res.status(200).json(savedMark);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create mark', error: error.message });
    } 
});


const updateMark = asyncHandler(async (req, res) => {

    const mark = await Mark.findById(req.params.id)
  
    if (mark) {
  
        const updateMark = await Mark.findByIdAndUpdate(req.params.id, { $set: req.body },{ 
            new: true,
        });
       
        res.status(200).json(updateMark)

    } else {
        res.status(404)
        throw new Error('mark not found')
    }
  })

// @desc    Delete vet
// @route   DELETE /api/vetstv/:id
// @access  Private
const deleteMark = asyncHandler(async (req, res) => {
    const mark = await Mark.findById(req.params.id)
  
    if (mark) {
        await mark.deleteOne();
        res.status(200).json({message: 'mark removed'})
    } else {
        res.status(404)
        throw new Error('mark not found')
    }
})

module.exports = {getExamMark, getOneMark, createMark, updateMark, deleteMark}