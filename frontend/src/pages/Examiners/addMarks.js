import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from 'react-select';

function AddExaminerMark() {
    const [groupNum, setGroupNum] = useState("");
    const [proposal, setProposal] = useState("");
    const [progress1, setProgress1] = useState("");
    const [progress2, setProgress2] = useState("");
    const [fPresentation, setFPresentation] = useState("");

    const handleReset = () => {
        setGroupNum('');
        setProposal('');
        setProgress1('');
        setProgress2('');
        setFPresentation('');
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const allData = { groupNum, proposal, progress1, progress2, fPresentation };

        axios.post("http://localhost:3005/examiner/", allData)
            .then(res => {
                toast.success('Mark added');
                console.log('Mark added');
                handleReset();
            }).catch(err => {
                toast.error(err.message);
                console.log(err.message);
            })
    }


    return (
        <div className="container">
            <div className='container2' style={{ marginTop: '100px', border: '2px solid #ccc', borderRadius: '10px', padding: '20px' }}>
                <form onSubmit={handleSubmit}>
                    <h2 className='row justify-content-center'>Add Marks</h2>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <div className="mb-3">
                                <label htmlFor="regNum" className="form-label">Group Number</label>
                                <input type="text" className="form-control" id="regNum" value={groupNum} onChange={(e) => setGroupNum(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="telephone" className="form-label">Proposal</label>
                                <input type="ext" className="form-control" id="telephone" value={proposal} onChange={(e) => setProposal(e.target.value)}  />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Progress 1</label>
                                <input type="text" className="form-control" id="email" value={progress1} onChange={(e) => setProgress1(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="batch" className="form-label">Progress 2</label>
                                <input type="text" className="form-control" id="batch" value={progress2} onChange={(e) => setProgress2(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="batch" className="form-label">Final Presentation</label>
                                <input type="text" className="form-control" id="batch" value={fPresentation} onChange={(e) => setFPresentation(e.target.value)} />
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

export default AddExaminerMark;