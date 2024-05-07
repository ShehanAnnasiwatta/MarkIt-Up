import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import Swal from 'sweetalert2';
import { ImSearch } from 'react-icons/im';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { Input, Button, Table } from 'antd'; 
import { Link } from 'react-router-dom';

function ManageMark() {
  const [marks, setMarks] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState('');

  const getMark = () => {
    
    axios.get("http://localhost:3005/examiner/")
      .then((res) => {
        setMarks(res.data);
        console.log('Marks retrieved:', res.data);
      })
      .catch((err) => {
        console.error('Error retrieving marks:', err);
      });
  };

  useEffect(() => {
    getMark();
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Confirmation Needed',
      text: 'Please confirm your action',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#f44336',
      cancelButtonColor: '#4caf50',
      confirmButtonText: 'Delete',
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(`${id}`);
        axios.delete(`http://localhost:3005/examiner/${id}`)
          .then((res) => {
            setIsSubmitted(!isSubmitted);
            toast.success('Mark deleted');
            // Auto-refresh the page
            window.location.reload();
          })
          .catch((err) => {
            alert(err);
          });
      }
    });
  };
  

  const handleSearch = (registrationNumber) => {
    const filteredData = marks.filter(cash =>
      cash.regNum.toLowerCase().includes(searchKeyword.toLowerCase())
  );
  setMarks(filteredData);
  };

  return (
    <div className="container mt-5" >
      <div className="row"  style={{ marginTop: '100px' }}>
        <div className="col-md-12">
          <div className="listContainer">
          <Input
                    placeholder="Search by Registration Number"
                    style={{ width: 200, marginBottom: '10px' }}
                    value={searchKeyword}
                    onChange={(e) => setSearchKeyword(e.target.value)}
                />
                <Button type="primary" onClick={handleSearch} style={{ marginBottom: '10px', marginLeft: '10px' }}>Search</Button>
            <table className="table table-hover" style={{ width: '80%', margin: 'auto' }}>
              <thead>
                <tr>
                  <th style={{ backgroundColor: '#D9EDF8', fontWeight: 'bolder', fontSize: '10px', textAlign: 'center' }}>Group Number</th>
                  <th style={{ backgroundColor: '#D9EDF8', fontWeight: 'bolder', fontSize: '10px', textAlign: 'center' }}>Proposal</th>
                  <th style={{ backgroundColor: '#D9EDF8', fontWeight: 'bolder', fontSize: '10px', textAlign: 'center' }}>Progress 1</th>
                  <th style={{ backgroundColor: '#D9EDF8', fontWeight: 'bolder', fontSize: '10px', textAlign: 'center' }}>Progress 2</th>
                  <th style={{ backgroundColor: '#D9EDF8', fontWeight: 'bolder', fontSize: '10px', textAlign: 'center' }}>Final Presentation</th>
                  <th style={{ backgroundColor: '#D9EDF8', fontWeight: 'bolder', fontSize: '10px', textAlign: 'center' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {marks.map((mark) => (
                  <tr key={mark._id}>
                    <td style={{textAlign: 'center' }}>{mark.groupNum}</td>
                    <td style={{textAlign: 'center' }}>{mark.proposal}</td>
                    <td style={{textAlign: 'center' }}>{mark.progress1}</td>
                    <td style={{textAlign: 'center' }}>{mark.progress2}</td>
                    <td style={{textAlign: 'center' }}>{mark.fPresentation}</td>
                    
                    <td style={{textAlign: 'center' }}>
                    <div className="btn-group" role="group" aria-label="Edit">
    <Link to={`/editMark/${mark._id}`} className="btn btn-primary" >Edit</Link>
</div>
<div className="btn-group" role="group" aria-label="Delete" style={{ marginLeft: '5px' }}>
    <button className="btn btn-danger" onClick={() => handleDelete(mark._id)}>Delete</button>
</div>


</td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageMark;