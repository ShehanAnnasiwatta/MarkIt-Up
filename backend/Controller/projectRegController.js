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
// const createProject = asyncHandler(async (req, res) => {
//     try {
//         const projectsData = req.body;

//         // Array to hold saved projects
//         const savedProjects = [];

//         // Validate each project data and save to the database
//         for (const projectData of projectsData) {
//             const { regNum, students, telephone, email, batch, specialization, proTitle, resArea, classification, supervisor, coSupervisor } = projectData;

//             // Validate specialization
//             if (!['IT', 'SE', 'IS', 'CS', 'DS', 'CSNE'].includes(specialization)) {
//                 return res.status(400).json({ error: 'Invalid specialization. Please select from IT, SE, IS, CS, DS, CSNE.' });
//             }

//             // Find or create the project
//             const project = await Project.findOneAndUpdate(
//                 { regNum },
//                 { 
//                     $addToSet: { 
//                         students, 
//                         telephone, 
//                         email, 
//                         batch, 
//                         specialization, 
//                         proTitle, 
//                         resArea, 
//                         classification, 
//                         supervisor, 
//                         coSupervisor 
//                     } 
//                 }, // Add fields to the project if not already present
//                 { upsert: true, new: true }
//             );

//             savedProjects.push(project);
//         }

//         res.status(200).json(savedProjects);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });

const createProject = asyncHandler(async (req, res) => {
    
    const { regNum, leader,  students, telephone, email, batch, specialization, proTitle, resArea, classification, supervisor, coSupervisor } = req.body;

    // Ensure students is an array of strings
    const studentNames = students.map(student => student.name); // Assuming your student objects have a 'name' field
    // If your student objects have a different structure, modify the above line accordingly

    if (specialization !== 'IT' && specialization !== 'SE' && specialization !== 'IS' && specialization !== 'CS' && specialization !== 'DS' && specialization !== 'CSNE') {
        return res.status(400).json({ error: 'Invalid currency selection. Please select either USD or LKR.' });
    }

    const project = new Project({
        regNum: regNum,
        leader: leader,
        students: studentNames, // Assign the array of student names
        telephone: telephone,
        email: email,
        batch: batch,
        specialization: specialization,
        proTitle: proTitle,
        resArea: resArea,
        classification: classification,
        supervisor: supervisor,
        coSupervisor: coSupervisor,
    });

    const savedProject = await project.save();

    res.status(200).json(savedProject); 
});


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