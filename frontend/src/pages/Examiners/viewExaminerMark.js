import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from "axios";
import { toast } from 'react-hot-toast';
import { Input, Button } from 'antd';

function EditMarks() {

    const [groupNum, setGroupNum] = useState("");
    const [proposal, setProposal] = useState("");
    const [progress1, setProgress1] = useState("");
    const [progress2, setProgress2] = useState("");
    const [fPresentation, setFPresentation] = useState("");
  const { id } = useParams();

  useEffect(() => {
    fetchData(id);
  }, [id]);

  const fetchData = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3005/examiner/${id}`);
      const data = response.data;
      setGroupNum(data.groupNum);
      setProposal(data.proposal);
      setProgress1(data.progress1);
      setProgress2(data.progress2);
      setFPresentation(data.fPresentation);
      } catch (error) {
      toast.error(error.message);
      console.error(error);
    }
  }

  const updateUserData = async (e) => {
    e.preventDefault();
    const userData = {
      groupNum: groupNum,
      proposal: proposal,
      progress1: progress1,
      progress2: progress2,
      fPresentation: fPresentation,
    };

    try {
        const response = await axios.put(`http://localhost:3005/examiner/${id}`, userData);
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
                        <h2 className='row justify-content-center'>Edit Marks</h2><br />
                        <form onSubmit={updateUserData}>
                            <div className="mb-3">
                                <label htmlFor="regNum">Group Number</label>
                                <input
                                    type="text"
                                    id="regNum"
                                    className="form-control"
                                    placeholder="Registration Number"
                                    value={groupNum}
                                    onChange={(e) => setGroupNum(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="students">Proposal</label>
                                <input
                                    type="text"
                                    id="students"
                                    className="form-control"
                                    placeholder="Student Name"
                                    value={proposal}
                                    onChange={(e) => setProposal(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="telephone">Progress 1</label>
                                <input
                                    type="text"
                                    id="telephone"
                                    className="form-control"
                                    placeholder="Telephone"
                                    value={progress1}
                                    onChange={(e) => setProgress1(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email">Progress 2</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="form-control"
                                    placeholder="Email"
                                    value={progress2}
                                    onChange={(e) => setProgress2(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="batch">Final Presentation</label>
                                <input
                                    type="text"
                                    id="batch"
                                    className="form-control"
                                    placeholder="Batch"
                                    value={fPresentation}
                                    onChange={(e) => setFPresentation(e.target.value)}
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

export default EditMarks;
