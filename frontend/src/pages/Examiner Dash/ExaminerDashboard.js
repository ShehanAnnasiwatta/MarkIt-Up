import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import 'bootstrap/dist/css/bootstrap.min.css';

function ExaminerDash() {
    return (
        <div className="container">
            <div className='container2' style={{ marginTop: '100px', border: '2px solid #ccc', borderRadius: '10px', padding: '20px' }}>
                <div className="d-flex justify-content-center">
                  <Link to="/createrubric" className="btn btn-primary">Add Mark</Link> 
                </div>
            </div>
        </div>
    );
}

export default ExaminerDash;
