import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { Input, Button, Table } from 'antd'; 
import { Link } from 'react-router-dom';

function ManageProject() {
  const [projects, setProjects] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState('');

  const getProjects = () => {
    
    axios.get("http://localhost:3005/projects/")
      .then((res) => {
        setProjects(res.data);
        console.log('Projects retrieved:', res.data);
      })
      .catch((err) => {
        console.error('Error retrieving projects:', err);
      });
  };

  useEffect(() => {
    getProjects();
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
        axios.delete(`http://localhost:3005/projects/${id}`)
          .then((res) => {
            setIsSubmitted(!isSubmitted);
            toast.success('Project deleted');
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
    const filteredData = projects.filter(cash =>
      cash.regNum.toLowerCase().includes(searchKeyword.toLowerCase())
  );
  setProjects(filteredData);
  };

  return (
    <div className="container-fluid mt-5" style={{ width: '100%', margin: '0 auto' }}>
      <div className="row"  style={{ marginTop: '100px' }}>
        <div className="col-md-12">
          
          <Input
                    placeholder="Search by Registration Number"
                    style={{ width: 200, marginBottom: '10px' }}
                    value={searchKeyword}
                    onChange={(e) => setSearchKeyword(e.target.value)}
                />
                <Button type="primary" onClick={handleSearch} style={{ marginBottom: '10px', marginLeft: '10px' }}>Search</Button>
            <table className="table table-hover" style={{ width: '100%' }}>
              <thead>
                <tr>
                  <th style={{ backgroundColor: '#D9EDF8', fontWeight: 'bolder', fontSize: '10px', textAlign: 'center' }}>Registration Number</th>
                  <th style={{ backgroundColor: '#D9EDF8', fontWeight: 'bolder', fontSize: '10px', textAlign: 'center' }}>Leader Name</th>
                  <th style={{ backgroundColor: '#D9EDF8', fontWeight: 'bolder', fontSize: '10px', textAlign: 'center' }}>Student Name</th>
                  <th style={{ backgroundColor: '#D9EDF8', fontWeight: 'bolder', fontSize: '10px', textAlign: 'center' }}>Telephone</th>
                  <th style={{ backgroundColor: '#D9EDF8', fontWeight: 'bolder', fontSize: '10px' , textAlign: 'center'}}>Email</th>
                  <th style={{ backgroundColor: '#D9EDF8', fontWeight: 'bolder', fontSize: '10px', textAlign: 'center' }}>Batch</th>
                  <th style={{ backgroundColor: '#D9EDF8', fontWeight: 'bolder', fontSize: '10px' , textAlign: 'center'}}>Specialization</th>
                  <th style={{ backgroundColor: '#D9EDF8', fontWeight: 'bolder', fontSize: '10px', textAlign: 'center' }}>Project Title</th>
                  <th style={{ backgroundColor: '#D9EDF8', fontWeight: 'bolder', fontSize: '10px', textAlign: 'center' }}>Research Area</th>
                  <th style={{ backgroundColor: '#D9EDF8', fontWeight: 'bolder', fontSize: '10px', textAlign: 'center' }}>Classification</th>
                  <th style={{ backgroundColor: '#D9EDF8', fontWeight: 'bolder', fontSize: '10px', textAlign: 'center' }}>Supervisor</th>
                  <th style={{ backgroundColor: '#D9EDF8', fontWeight: 'bolder', fontSize: '10px', textAlign: 'center' }}>Co-Supervisor</th>
                  <th style={{ backgroundColor: '#D9EDF8', fontWeight: 'bolder', fontSize: '10px', textAlign: 'center' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project) => (
                  <tr key={project._id}>
                    <td style={{textAlign: 'center' }}>{project.regNum}</td>
                    <td style={{textAlign: 'center' }}>{project.leader}</td>
                    <td style={{textAlign: 'center' }}>{project.students}</td>
                    <td style={{textAlign: 'center' }}>{project.telephone}</td>
                    <td style={{textAlign: 'center' }}>{project.email}</td>
                    <td style={{textAlign: 'center' }}>{project.batch}</td>
                    <td style={{textAlign: 'center' }}>{project.specialization}</td>
                    <td style={{textAlign: 'center' }}>{project.proTitle}</td>
                    <td style={{textAlign: 'center' }}>{project.resArea}</td>
                    <td style={{textAlign: 'center' }}>{project.classification}</td>
                    <td style={{textAlign: 'center' }}>{project.supervisor}</td>
                    <td style={{textAlign: 'center' }}>{project.coSupervisor}</td>
                    <td style={{textAlign: 'center' }}>
                    <div className="btn-group" role="group" aria-label="Edit" style={{ marginRight: '5px' }}>
    <Link to={`/editPro/${project._id}`} className="btn btn-primary">Edit</Link>
</div>
<div className="btn-group" role="group" aria-label="Delete">
    <button className="btn btn-danger" onClick={() => handleDelete(project._id)}>Delete</button>
</div>


                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
  );
}

export default ManageProject;
