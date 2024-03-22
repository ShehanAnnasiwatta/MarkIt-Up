import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import axios from "axios";
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';

function AddResearch() {

  const [groupId, setGroupId] = useState("");
  const [title, setTitle] = useState("");
  const [student, setStudent] = useState("");
  const [supervisor, setSupervisor] = useState("");
  const [coSupervisor, setCoSupervisor] = useState("");
  const [conference, setConference] = useState("");
  const [journal, setJournal] = useState("");
  const [issnNum, setIssnNum] = useState("");
  const [conJouLink, setConJouLink] = useState("");
  const [verLink, setVerLink] = useState("");
  const [acceptPhoto, setAcceptPhoto] = useState("");
  const [successPhoto, setSuccessPhoto] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("");
  const [fee, setFee] = useState("");

  const handleReset = () => {
    setGroupId('');
    setTitle('');
    setStudent('');
    setSupervisor('');
    setCoSupervisor('');
    setConference('');
    setJournal('');
    setIssnNum('');
    setConJouLink('');
    setVerLink('');
    setAcceptPhoto('');
    setSuccessPhoto('');
    setSelectedCurrency('');
    setFee('');
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
   
    const researchData = {
      groupId,
      title,
      student,
      supervisor,
      coSupervisor,
      conference,
      journal,
      issnNum,
      conJouLink,
      verLink,
      acceptPhoto,
      successPhoto,
      selectedCurrency,
      fee
    };
    
    axios.post("http://localhost:3005/research/", researchData)
    .then(res => {
      toast.success('research added');
      console.log('research added');
      handleReset();
    }).catch(err => {
      toast.error(err.message);
      console.log(err.message);
    })
  }  

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h3>Add Research</h3>
        <div className="row">
          <div className="col">
            <div className="mb-3">
              <label htmlFor="groupId" className="form-label">Group ID</label>
              <input type="text" className="form-control" id="groupId" value={groupId} onChange={(e) => setGroupId(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Title</label>
              <input type="text" className="form-control" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="student" className="form-label">Student</label>
              <input type="text" className="form-control" id="student" value={student} onChange={(e) => setStudent(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="groupId" className="form-label">Supervisor</label>
              <input type="text" className="form-control" id="groupId" value={supervisor} onChange={(e) => setSupervisor(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Co Supervisor</label>
              <input type="text" className="form-control" id="title" value={coSupervisor} onChange={(e) => setCoSupervisor(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="student" className="form-label">Conference</label>
              <input type="text" className="form-control" id="student" value={conference} onChange={(e) => setConference(e.target.value)} />
            </div>
          </div>
          <div className="col">
            <div className="mb-3">
              <label htmlFor="groupId" className="form-label">Journal</label>
              <input type="text" className="form-control" id="groupId" value={journal} onChange={(e) => setJournal(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">ISSN Number</label>
              <input type="text" className="form-control" id="title" value={issnNum} onChange={(e) => setIssnNum(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="student" className="form-label">Conference/Journal Link</label>
              <input type="text" className="form-control" id="student" value={conJouLink} onChange={(e) => setConJouLink(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="groupId" className="form-label">Verification Link</label>
              <input type="text" className="form-control" id="groupId" value={verLink} onChange={(e) => setVerLink(e.target.value)} />
            </div>
            <div className="mb-3">
            <label htmlFor="acceptPhoto" className="form-label">Acceptance Photo</label>
            <input type="file" className="form-control" id="acceptPhoto" value={acceptPhoto} onChange={(e) => setAcceptPhoto(e.target.value)} />
            </div>
            <div className="mb-3">
            <label htmlFor="successPhoto" className="form-label">Success Photo</label>
            <input type="file" className="form-control" id="successPhoto" value={successPhoto} onChange={(e) => setSuccessPhoto(e.target.value)} />
            </div>

          </div>
          <div className="col">
            <div className="mb-3">
              <label htmlFor="currency" className="form-label">Currency</label>
              <Select
                options={[
                  { value: 'USD', label: 'USD' },
                  { value: 'LKR', label: 'LKR' }
                ]}
                value={selectedCurrency ? { value: selectedCurrency, label: selectedCurrency } : null}
                onChange={(selectedOption) => setSelectedCurrency(selectedOption.value)}
              />
            </div>
             <div className="mb-3">
              <label htmlFor="student" className="form-label">Fee</label>
              <input type="text" className="form-control" id="student" value={fee} onChange={(e) => setFee(e.target.value)} />
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

export default AddResearch;
