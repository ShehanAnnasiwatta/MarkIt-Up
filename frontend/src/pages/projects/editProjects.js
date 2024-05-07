import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from "axios";
import { toast } from 'react-hot-toast';
import { Input, Button } from 'antd';

function EditProject() {

const [regNum, setRegNum] = useState('');
const [leader, setLeader] = useState('');
const [students, setStudents] = useState('');
const [telephone, setTelephone] = useState('');
const [email, setEmail] = useState('');
const [batch, setBatch] = useState('');
const [specialization, setSpecialization] = useState('');
const [proTitle, setProTitle] = useState('');
const [resArea, setResArea] = useState('');
const [classification, setClassification] = useState('');
const [supervisor, setSupervisor] = useState('');
const [coSupervisor, setCoSupervisor] = useState('');


  const { id } = useParams();

  useEffect(() => {
    fetchData(id);
  }, [id]);

  const fetchData = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3005/projects/${id}`);
      const data = response.data;
      setRegNum(data.regNum);
      setLeader(data.leader);
      setStudents(data.students);
      setTelephone(data.telephone);
      setEmail(data.email);
      setBatch(data.batch);
      setSpecialization(data.specialization);
      setProTitle(data.proTitle);
      setResArea(data.resArea);
      setClassification(data.classification);
      setSupervisor(data.supervisor);
      setCoSupervisor(data.coSupervisor);
      } catch (error) {
      toast.error(error.message);
      console.error(error);
    }
  }

  const updateUserData = async (e) => {
    e.preventDefault();
    const userData = {
      regNum: regNum,
      leader: leader,
      students: students,
      telephone: telephone,
      email: email,
      batch: batch,
      specialization: specialization,
      proTitle: proTitle,
      resArea: resArea,
      classification: classification,
      supervisor: supervisor,
    };

    try {
        const response = await axios.put(`http://localhost:3005/projects/${id}`, userData);
        if (response.status === 200) {
            toast.success('Data updated successfully');
            console.log('Data updated successfully');
        }
    } catch (error) {
        toast.error(error.message);
        console.error(error);
    }
}

return (
  <div className="container">
    <div className='container2' style={{ marginTop: '100px' }}>
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card mt-5">
                    <div className="card-body">
                        <h2 className='row justify-content-center'>Edit Project Information</h2><br />
                        <form onSubmit={updateUserData}>
                            <div className="mb-3">
                                <label htmlFor="regNum">Registration Number</label>
                                <input
                                    type="text"
                                    id="regNum"
                                    className="form-control"
                                    placeholder="Registration Number"
                                    value={regNum}
                                    onChange={(e) => setRegNum(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="leader">Leader Name</label>
                                <input
                                    type="text"
                                    id="leader"
                                    className="form-control"
                                    placeholder="Leader Name"
                                    value={leader}
                                    onChange={(e) => setLeader(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="students">Student Name</label>
                                <input
                                    type="text"
                                    id="students"
                                    className="form-control"
                                    placeholder="Student Name"
                                    value={students}
                                    onChange={(e) => setStudents(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="telephone">Telephone</label>
                                <input
                                    type="text"
                                    id="telephone"
                                    className="form-control"
                                    placeholder="Telephone"
                                    value={telephone}
                                    onChange={(e) => setTelephone(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="form-control"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="batch">Batch</label>
                                <input
                                    type="text"
                                    id="batch"
                                    className="form-control"
                                    placeholder="Batch"
                                    value={batch}
                                    onChange={(e) => setBatch(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="specialization">Specialization</label>
                                <input
                                    type="text"
                                    id="specialization"
                                    className="form-control"
                                    placeholder="Specialization"
                                    value={specialization}
                                    onChange={(e) => setSpecialization(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="proTitle">Project Title</label>
                                <input
                                    type="text"
                                    id="proTitle"
                                    className="form-control"
                                    placeholder="Project Title"
                                    value={proTitle}
                                    onChange={(e) => setProTitle(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="resArea">Research Area</label>
                                <input
                                    type="text"
                                    id="resArea"
                                    className="form-control"
                                    placeholder="Research Area"
                                    value={resArea}
                                    onChange={(e) => setResArea(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="classification">Classification</label>
                                <input
                                    type="text"
                                    id="classification"
                                    className="form-control"
                                    placeholder="Classification"
                                    value={classification}
                                    onChange={(e) => setClassification(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="supervisor">Supervisor</label>
                                <input
                                    type="text"
                                    id="supervisor"
                                    className="form-control"
                                    placeholder="Supervisor"
                                    value={supervisor}
                                    onChange={(e) => setSupervisor(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="coSupervisor">Co-Supervisor</label>
                                <input
                                    type="text"
                                    id="coSupervisor"
                                    className="form-control"
                                    placeholder="Co-Supervisor"
                                    value={coSupervisor}
                                    onChange={(e) => setCoSupervisor(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <button type="submit" className="btn btn-primary" style={{ marginRight: '10px' }}>Submit</button>
                                <button type="reset" className="btn btn-secondary">Reset</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

)
}

export default EditProject;
