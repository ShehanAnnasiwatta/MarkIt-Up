const asyncHandler = require('express-async-handler');

const Resrch = require('../Models/resPaperModel')


// @desc    Fetch all vets
// @route   GET /api/vets
// @access  Private/Admin
const getResearch = asyncHandler(async (req, res) => {

    const pSearch = req.query.search
    //testing
    //console.log(vSearch)
    let research

    if(pSearch){
        research = await Resrch.find(
            {
                $text: { $search: pSearch }
            }
        )
    }
    else{
        research = await Resrch.find();
    }
    
    res.status(200).json(research);

})
  
// @desc    Fetch logged in user vet
// @route   GET /api/vets/:id
// @access  Private
const getOneReserch = asyncHandler(async (req, res) => {
    const research = await Resrch.findById(req.params.id)
  
    if (research) {
        res.status(200).json(research)
    } else {
        res.status(404)
        throw new Error('Research not found')
    }
})
  
// @desc    Create vet
// @route   POST /api/vets
// @access  Private
const createResearch = asyncHandler(async (req, res) => {
    
    const { groupId, title, student, supervisor, coSupervisor, conference, journal, issnNum, conJouLink, verLink, acceptPhoto, successPhoto, selectedCurrency, fee} = req.body;

    const research = new Resrch({
        groupId: groupId,
        title: title,
        student: student,
        supervisor: supervisor,
        coSupervisor: coSupervisor,
        conference: conference,
        journal: journal,
        issnNum: issnNum,
        conJouLink: conJouLink,
        verLink: verLink,
        acceptPhoto: acceptPhoto,
        successPhoto: successPhoto,
        selectedCurrency: selectedCurrency,
        fee: fee,
    })

    const savedResearch = await research.save();

    res.status(200).json(savedResearch); 
})
  
// @desc    Update vet
// @route   PUT /api/vets/:id
// @access  Private
const updateResearch = asyncHandler(async (req, res) => {

    const research = await Resrch.findById(req.params.id)
  
    if (research) {
  
        const updateResearch = await Resrch.findByIdAndUpdate(req.params.id, { $set: req.body },{ 
            new: true,
        });
       
        res.status(200).json(updateResearch)

    } else {
        res.status(404)
        throw new Error('Research not found')
    }
  })

// @desc    Delete vet
// @route   DELETE /api/vetstv/:id
// @access  Private
const deleteResearch = asyncHandler(async (req, res) => {
    const research = await Resrch.findById(req.params.id)
  
    if (research) {
        await research.deleteOne();
        res.status(200).json({message: 'Research removed'})
    } else {
        res.status(404)
        throw new Error('Research not found')
    }
})

module.exports = {getResearch, getOneReserch, createResearch, updateResearch, deleteResearch}