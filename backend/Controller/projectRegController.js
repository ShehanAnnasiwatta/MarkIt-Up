const asyncHandler = require('express-async-handler');

const Project = require('../Models/projectRegModel')


// @desc    Fetch all vets
// @route   GET /api/vets
// @access  Private/Admin
const getProjects = asyncHandler(async (req, res) => {

    const pSearch = req.query.search
    //testing
    //console.log(vSearch)
    let projects

    if(pSearch){
        projects = await Project.find(
            {
                $text: { $search: pSearch }
            }
        )
    }
    else{
         projects = await Project.find();
    }
    
    res.status(200).json(projects);

})
  
// @desc    Fetch logged in user vet
// @route   GET /api/vets/:id
// @access  Private
const getOneProject = asyncHandler(async (req, res) => {
    const project = await Project.findById(req.params.id)
  
    if (project) {
        res.status(200).json(project)
    } else {
        res.status(404)
        throw new Error('Project not found')
    }
})
  
// @desc    Create vet
// @route   POST /api/vets
// @access  Private
const createProject = asyncHandler(async (req, res) => {
    
    const { regNum, stName, telephone, email, batch, specialization, proTitle, resArea, classification, supervisor, coSupervisor} = req.body;

    const project = new Project({
        regNum: regNum,
        stName: stName,
        telephone: telephone,
        email: email,
        batch: batch,
        specialization: specialization,
        proTitle: proTitle,
        resArea: resArea,
        classification: classification,
        supervisor: supervisor,
        coSupervisor: coSupervisor,
    })

    const savedProject = await project.save();

    res.status(200).json(savedProject); 
})
  
// @desc    Update vet
// @route   PUT /api/vets/:id
// @access  Private
const updateProject = asyncHandler(async (req, res) => {

    const project = await Project.findById(req.params.id)
  
    if (project) {
  
        const updateProject = await Project.findByIdAndUpdate(req.params.id, { $set: req.body },{ 
            new: true,
        });
       
        res.status(200).json(updateProject)

    } else {
        res.status(404)
        throw new Error('Project not found')
    }
  })

// @desc    Delete vet
// @route   DELETE /api/vetstv/:id
// @access  Private
const deleteProject = asyncHandler(async (req, res) => {
    const project = await Project.findById(req.params.id)
  
    if (project) {
        await project.deleteOne();
        res.status(200).json({message: 'Project removed'})
    } else {
        res.status(404)
        throw new Error('Project not found')
    }
})

module.exports = {getProjects, getOneProject, createProject, updateProject, deleteProject}