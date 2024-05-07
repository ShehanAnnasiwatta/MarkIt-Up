import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from 'react-select';

function AddProject() {
    const [regNum, setRegNum] = useState("");
    const [leader, setLeader] = useState("");
    const [students, setStudents] = useState([{ name: '' }]);
    const [telephone, setTelephone] = useState("");
    const [email, setEmail] = useState("");
    const [batch, setBatch] = useState("");
    const [specialization, setSpecialization] = useState("");
    const [proTitle, setProTitle] = useState("");
    const [resArea, setResArea] = useState("");
    const [classification, setClassification] = useState("");
    const [supervisor, setSupervisor] = useState("");
    const [coSupervisor, setCoSupervisor] = useState("");

    const handleReset = () => {
        setRegNum('');
        setLeader('');
        setStudents([{ name: '' }]);
        setTelephone('');
        setEmail('');
        setBatch('');
        setSpecialization('');
        setProTitle('');
        setResArea('');
        setClassification('');
        setSupervisor('');
        setCoSupervisor('');
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const allData = { regNum, leader, students, telephone, email, batch, specialization, proTitle, resArea, classification, supervisor, coSupervisor };

        axios.post("http://localhost:3005/projects/", allData)
            .then(res => {
                toast.success('Project added');
                console.log('Project added');
                handleReset();
            }).catch(err => {
                toast.error(err.message);
                console.log(err.message);
            })
    }

    const handleAddStudent = () => {
        setStudents([...students, { name: '' }]);
    }

    const handleStudentChange = (index, value) => {
        const updatedStudents = [...students];
        updatedStudents[index].name = value;
        setStudents(updatedStudents);
    }

    return (
        <div className="container">
            <div className='container2' style={{ marginTop: '100px', border: '2px solid #ccc', borderRadius: '10px', padding: '20px' }}>
                <form onSubmit={handleSubmit}>
                    <h2 className='row justify-content-center'>Add Research Groups</h2>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <div className="mb-3">
                                <label htmlFor="regNum" className="form-label">Leader's Registration Number</label>
                                <input type="text" className="form-control" id="regNum" value={regNum} onChange={(e) => setRegNum(e.target.value)} required/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="leader" className="form-label">Leader Name</label>
                                <input type="text" className="form-control" id="leader" value={leader} onChange={(e) => setLeader(e.target.value)} required/>
                            </div>
                            {students.map((student, index) => (
                                <div key={index} className="mb-3">
                                    <label htmlFor={`students${index}`} className="form-label">Student Name</label>
                                    <div className="input-group">
                                        <input type="text" className="form-control" id={`students${index}`} value={student.name} onChange={(e) => handleStudentChange(index, e.target.value)} />
                                        {index === students.length - 1 && <button type="button" className="btn btn-outline-secondary" onClick={handleAddStudent}>+</button>}
                                    </div>
                                </div>
                            ))}
                            <div className="mb-3">
                                <label htmlFor="telephone" className="form-label">Telephone</label>
                                <input type="tel" className="form-control" id="telephone" value={telephone} onChange={(e) => setTelephone(e.target.value)} pattern="[0-9]{10}" placeholder="0123456789" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="batch" className="form-label">Batch</label>
                                <input type="text" className="form-control" id="batch" value={batch} onChange={(e) => setBatch(e.target.value)} required/>
                            </div>
                            
                        </div>
                        <div className="col-md-4">

                        <div className="mb-3">
                                <label htmlFor="specialization" className="form-label">Specialization</label>
                                <Select
                                    options={[
                                        { value: 'IT', label: 'IT' },
                                        { value: 'SE', label: 'SE' },
                                        { value: 'IS', label: 'IS' },
                                        { value: 'CS', label: 'CS' },
                                        { value: 'DS', label: 'DS' },
                                        { value: 'CSNE', label: 'CSNE' }
                                    ]}
                                    value={specialization ? { value: specialization, label: specialization } : null}
                                    onChange={(selectedOption) => setSpecialization(selectedOption.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="proTitle" className="form-label">Project Title</label>
                                <input type="text" className="form-control" id="proTitle" value={proTitle} onChange={(e) => setProTitle(e.target.value)} required/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="resArea" className="form-label">Research Area</label>
                                <input type="text" className="form-control" id="resArea" value={resArea} onChange={(e) => setResArea(e.target.value)} required/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="classification" className="form-label">Classification</label>
                                <input type="text" className="form-control" id="classification" value={classification} onChange={(e) => setClassification(e.target.value)} />
                            </div>
                            {/* <div className="mb-3">
                                <label htmlFor="classification" className="form-label">Machine Learning/Natural Language Processing/Intelligent Systems/Robotics</label>
                                <input type="text" className="form-control" id="classification" value={classification} onChange={(e) => setClassification(e.target.value)} />
                            </div> */}
                            <div className="mb-3">
                                <label htmlFor="supervisor" className="form-label">Supervisor</label>
                                <input type="text" className="form-control" id="supervisor" value={supervisor} onChange={(e) => setSupervisor(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="coSupervisor" className="form-label">Co-Supervisor</label>
                                <input type="text" className="form-control" id="coSupervisor" value={coSupervisor} onChange={(e) => setCoSupervisor(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="d-grid gap-2">
                                <button type="submit" className="btn btn-primary" style={{ marginRight: '10px' }}>Submit</button>
                                <button type="button" className="btn btn-secondary" onClick={handleReset} style={{ marginRight: '10px' }}>Reset</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddProject;