import React, { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';

function EditResearch() {
  const { id } = useParams();

  const [groupId, setGroupId] = useState('');
  const [title, setTitle] = useState('');
  const [student, setStudent] = useState('');
  const [supervisor, setSupervisor] = useState('');
  const [coSupervisor, setCoSupervisor] = useState('');
  const [conference, setConference] = useState('');
  const [journal, setJournal] = useState('');
  const [issnNum, setIssnNum] = useState('');
  const [conJouLink, setConJouLink] = useState('');
  const [verLink, setVerLink] = useState('');
  const [acceptPhoto, setAcceptPhoto] = useState('');
  const [successPhoto, setSuccessPhoto] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [fee, setFee] = useState('');

  useEffect(() => {
    fetchData(id);
  }, [id]);

  const fetchData = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3005/research/${id}`);
      const research = response.data;
      setGroupId(research.groupId);
      setTitle(research.title);
      setStudent(research.student);
      setSupervisor(research.supervisor);
      setCoSupervisor(research.coSupervisor);
      setConference(research.conference);
      setJournal(research.journal);
      setIssnNum(research.issnNum);
      setConJouLink(research.conJouLink);
      setVerLink(research.verLink);
      setAcceptPhoto(research.acceptPhoto);
      setSuccessPhoto(research.successPhoto);
      setSelectedCurrency(research.selectedCurrency);
      setFee(research.fee);
    } catch (error) {
      toast.error('Failed to fetch research data for editing.');
      console.error('Error fetching research data:', error);
    }
  };

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
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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

    try {
      await axios.put(`http://localhost:3005/research/${id}`, researchData);
      toast.success('Research updated successfully');
      handleReset();
    } catch (error) {
      toast.error('Failed to update research.');
      console.error('Error updating research:', error);
    }
  };

  return (
    <div className="container">
        <form onSubmit={handleSubmit}>
            <h3>Edit Research</h3>
            <div className="row">
                <div className="col">
                    <div className="mb-3">
                        <label htmlFor="groupId" className="form-label">Group ID</label>
                        <input type="text" className="form-control" id="groupId" name="groupId" value={groupId} onChange={(e) => setGroupId(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="student" className="form-label">Student</label>
                        <input type="text" className="form-control" id="student" name="student" value={student} onChange={(e) => setStudent(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="supervisor" className="form-label">Supervisor</label>
                        <input type="text" className="form-control" id="supervisor" name="supervisor" value={supervisor} onChange={(e) => setSupervisor(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="coSupervisor" className="form-label">Co Supervisor</label>
                        <input type="text" className="form-control" id="coSupervisor" name="coSupervisor" value={coSupervisor} onChange={(e) => setCoSupervisor(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="conference" className="form-label">Conference</label>
                        <input type="text" className="form-control" id="conference" name="conference" value={conference} onChange={(e) => setConference(e.target.value)} />
                    </div>
                </div>
                <div className="col">
                    <div className="mb-3">
                        <label htmlFor="journal" className="form-label">Journal</label>
                        <input type="text" className="form-control" id="journal" name="journal" value={journal} onChange={(e) => setJournal(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="issnNum" className="form-label">ISSN Number</label>
                        <input type="text" className="form-control" id="issnNum" name="issnNum" value={issnNum} onChange={(e) => setIssnNum(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="conJouLink" className="form-label">Conference/Journal Link</label>
                        <input type="text" className="form-control" id="conJouLink" name="conJouLink" value={conJouLink} onChange={(e) => setConJouLink(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="verLink" className="form-label">Verification Link</label>
                        <input type="text" className="form-control" id="verLink" name="verLink" value={verLink} onChange={(e) => setVerLink(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="acceptPhoto" className="form-label">Acceptance Photo</label>
                        <input type="file" className="form-control" id="acceptPhoto" name="acceptPhoto" value={acceptPhoto} onChange={(e) => setAcceptPhoto(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="successPhoto" className="form-label">Success Photo</label>
                        <input type="file" className="form-control" id="successPhoto" name="successPhoto" value={successPhoto} onChange={(e) => setSuccessPhoto(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="currency" className="form-label">Currency</label>
                        <select className="form-select" id="currency" name="selectedCurrency" value={selectedCurrency} onChange={(e) => setSelectedCurrency(e.target.value)}>
                            <option value="USD">USD</option>
                            <option value="LKR">LKR</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="fee" className="form-label">Fee</label>
                        <input type="text" className="form-control" id="fee" name="fee" value={fee} onChange={(e) => setFee(e.target.value)} />
                    </div>
                </div>
            </div>
            <div className="d-grid gap-2">
                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>Update</Button>
                <Button fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>Cancel</Button>
            </div>
        </form>
    </div>
);

}

export default EditResearch;
