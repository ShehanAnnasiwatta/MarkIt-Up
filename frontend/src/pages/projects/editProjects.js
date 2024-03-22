import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@mui/material/Button';

function EditProject() {
    const { id } = useParams();

    const [regNum, setRegNum] = useState('');
    const [stName, setStName] = useState('');
    const [telephone, setTelephone] = useState('');
    const [email, setEmail] = useState('');
    const [batch, setBatch] = useState('');
    const [specialization, setSpecialization] = useState('');
    const [proTitle, setProTitle] = useState('');
    const [resArea, setResArea] = useState('');
    const [classification, setClassification] = useState('');
    const [supervisor, setSupervisor] = useState('');
    const [coSupervisor, setCoSupervisor] = useState('');
    
    useEffect(() => {
        fetchDataForEditing(id);
    }, [id]);
    
    const fetchDataForEditing = async (id) => {
        try {
            const response = await axios.get(`http://localhost:3005/projects/${id}`);
            const projectData = response.data;
            setRegNum(projectData.regNum);
            setStName(projectData.stName);
            setTelephone(projectData.telephone);
            setEmail(projectData.email);
            setBatch(projectData.batch);
            setSpecialization(projectData.specialization);
            setProTitle(projectData.proTitle);
            setResArea(projectData.resArea);
            setClassification(projectData.classification);
            setSupervisor(projectData.supervisor);
            setCoSupervisor(projectData.coSupervisor);
        } catch (error) {
            toast.error('Failed to fetch project data for editing.');
            console.error('Error fetching project data:', error);
        }
    };
    
    const handleReset = () => {
        setRegNum('');
        setStName('');
        setTelephone('');
        setEmail('');
        setBatch('');
        setSpecialization('');
        setProTitle('');
        setResArea('');
        setClassification('');
        setSupervisor('');
        setCoSupervisor('');
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const projectData = {
            regNum,
            stName,
            telephone,
            email,
            batch,
            specialization,
            proTitle,
            resArea,
            classification,
            supervisor,
            coSupervisor
        };
        try {
            await axios.put(`http://localhost:3005/projects/${id}`, projectData);
            toast.success('Project updated successfully');
            handleReset();
        } catch (error) {
            toast.error('Failed to update project.');
            console.error('Error updating project:', error);
        }
    };
    

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h3>Edit Project</h3>
                <div className="row">
                     <div className="col">
                        <div className="mb-3">
                            <label htmlFor="regNum" className="form-label">Registration Number</label>
                            <input type="text" className="form-control" id="regNum" name="regNum" value={regNum} onChange={(e) => setRegNum(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="stName" className="form-label">Leader Name</label>
                            <input type="text" className="form-control" id="stName" name="stName" value={stName} onChange={(e) => setStName(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="telephone" className="form-label">Telephone</label>
                            <input type="tel" className="form-control" id="telephone" name="telephone" value={telephone} onChange={(e) => setTelephone(e.target.value)} pattern="[0-9]{10}" placeholder="0123456789" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="batch" className="form-label">Batch</label>
                            <input type="text" className="form-control" id="batch" name="batch" value={batch} onChange={(e) => setBatch(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="specialization" className="form-label">Specialization</label>
                            <input type="text" className="form-control" id="specialization" name="specialization" value={specialization} onChange={(e) => setSpecialization(e.target.value)} />
                        </div>
                    </div>
                    <div className="col">
                        <div className="mb-3">
                            <label htmlFor="proTitle" className="form-label">Project Title</label>
                            <input type="text" className="form-control" id="proTitle" name="proTitle" value={proTitle} onChange={(e) => setProTitle(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="resArea" className="form-label">Research Area</label>
                            <input type="text" className="form-control" id="resArea" name="resArea" value={resArea} onChange={(e) => setResArea(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="classification" className="form-label">Classification</label>
                            <input type="text" className="form-control" id="classification" name="classification" value={classification} onChange={(e) => setClassification(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="supervisor" className="form-label">Supervisor</label>
                            <input type="text" className="form-control" id="supervisor" name="supervisor" value={supervisor} onChange={(e) => setSupervisor(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="coSupervisor" className="form-label">Co-Supervisor</label>
                            <input type="text" className="form-control" id="coSupervisor" name="coSupervisor" value={coSupervisor} onChange={(e) => setCoSupervisor(e.target.value)} />
                        </div>
                    </div>
                </div>
                <div className="d-grid gap-2">
                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>Update</Button>
                {/* <Link to={`/managePro/`}>
            <Button  type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, width: '100px', margin: '10px' }}>Update</Button>
                  </Link> */}
                    <Button fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>Cancel</Button>
                </div>
            </form>
        </div>
    );
}

export default EditProject;

