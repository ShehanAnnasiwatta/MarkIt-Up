import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

function AddProject() {

  const [regNum , setRegNum] = useState("");
  const [stName, setstName] = useState("");
  const [telephone , setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [batch, setBatch] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [proTitle, setproTitle] = useState("");
  const [resArea, setResArea] = useState("");
  const [classification, setClassification] = useState("");
  const [supervisor, setSupervisor] = useState("");
  const [coSupervisor, setcoSupervisor] = useState("");

  const handleReset = () => {
        setRegNum('');
        setstName('');
        setTelephone('');
        setEmail('');
        setBatch('');
        setSpecialization('');
        setproTitle('');
        setResArea('');
        setClassification('');
        setSupervisor('');
        setcoSupervisor('');
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
   
    const Alldata = { regNum, stName, telephone, email, batch, specialization, proTitle, resArea, classification, supervisor, coSupervisor };
    
    axios.post("http://localhost:3005/projects/",Alldata)
    .then(res => {
        toast.success('Project added');
        console.log('Project added');
        handleReset();
    }).catch(err => {
        toast.error(err.message);
        console.log(err.message);
    })
  }  

  return (
    <div className="container">
        <form onSubmit={handleSubmit}>
            <h3>Add Project</h3>
            <div className="row">
              <div className="col">
                <div className="mb-3">
                  <label htmlFor="regNum" className="form-label">Registration Number</label>
                  <input type="text" className="form-control" id="regNum" value={regNum} onChange={(e) => setRegNum(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label htmlFor="stName" className="form-label">Leader Name</label>
                  <input type="text" className="form-control" id="stName" value={stName} onChange={(e) => setstName(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label htmlFor="telephone" className="form-label">Telephone</label>
                  <input type="tel" className="form-control" id="telephone" value={telephone} onChange={(e) => setTelephone(e.target.value)} pattern="[0-9]{10}" placeholder="0123456789" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label htmlFor="batch" className="form-label">Batch</label>
                  <input type="text" className="form-control" id="batch" value={batch} onChange={(e) => setBatch(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label htmlFor="specialization" className="form-label">Specialization</label>
                  <input type="text" className="form-control" id="specialization" value={specialization} onChange={(e) => setSpecialization(e.target.value)} />
                </div>
              </div>
              <div className="col">
                <div className="mb-3">
                  <label htmlFor="proTitle" className="form-label">Project Title</label>
                  <input type="text" className="form-control" id="proTitle" value={proTitle} onChange={(e) => setproTitle(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label htmlFor="resArea" className="form-label">Research Area</label>
                  <input type="text" className="form-control" id="resArea" value={resArea} onChange={(e) => setResArea(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label htmlFor="classification" className="form-label">Classification</label>
                  <input type="text" className="form-control" id="classification" value={classification} onChange={(e) => setClassification(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label htmlFor="supervisor" className="form-label">Supervisor</label>
                  <input type="text" className="form-control" id="supervisor" value={supervisor} onChange={(e) => setSupervisor(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label htmlFor="coSupervisor" className="form-label">Co-Supervisor</label>
                  <input type="text" className="form-control" id="coSupervisor" value={coSupervisor} onChange={(e) => setcoSupervisor(e.target.value)} />
                </div>
              </div>
            </div>
            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-primary">Submit</button>
              <button type="button" className="btn btn-secondary" onClick={handleReset}>Reset</button>
            </div>
        </form>
    </div>
  )
}

export default AddProject;
