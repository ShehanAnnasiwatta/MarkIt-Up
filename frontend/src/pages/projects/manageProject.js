import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import Swal from 'sweetalert2';
import { ImSearch } from 'react-icons/im';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { Switch } from 'antd'; // Import Switch component from antd library

function ManageProject() {
  const [projects, setProjects] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
  }, [isSubmitted]);

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
        axios.delete(`http://localhost:3005/projects/${id}`)
          .then((res) => {
            setIsSubmitted(!isSubmitted);
            toast.success('Project deleted');
          })
          .catch((err) => {
            alert(err);
          });
      }
    });
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <div className="listContainer">
            <SearchBar />
            <table className="table table-hover" style={{ width: '80%', margin: 'auto' }}>
              <thead>
                <tr>
                  <th style={{ backgroundColor: '#008DDA', fontWeight: 'bolder', fontSize: '10px' }}>Registration Number</th>
                  <th style={{ backgroundColor: '#008DDA', fontWeight: 'bolder', fontSize: '10px' }}>Student Name</th>
                  <th style={{ backgroundColor: '#008DDA', fontWeight: 'bolder', fontSize: '10px' }}>Telephone</th>
                  <th style={{ backgroundColor: '#008DDA', fontWeight: 'bolder', fontSize: '10px' }}>Email</th>
                  <th style={{ backgroundColor: '#008DDA', fontWeight: 'bolder', fontSize: '10px' }}>Batch</th>
                  <th style={{ backgroundColor: '#008DDA', fontWeight: 'bolder', fontSize: '10px' }}>Specialization</th>
                  <th style={{ backgroundColor: '#008DDA', fontWeight: 'bolder', fontSize: '10px' }}>Project Title</th>
                  <th style={{ backgroundColor: '#008DDA', fontWeight: 'bolder', fontSize: '10px' }}>Research Area</th>
                  <th style={{ backgroundColor: '#008DDA', fontWeight: 'bolder', fontSize: '10px' }}>Classification</th>
                  <th style={{ backgroundColor: '#008DDA', fontWeight: 'bolder', fontSize: '10px' }}>Supervisor</th>
                  <th style={{ backgroundColor: '#008DDA', fontWeight: 'bolder', fontSize: '10px' }}>Co-Supervisor</th>
                  <th style={{ backgroundColor: '#008DDA', fontWeight: 'bolder', fontSize: '10px' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project) => (
                  <tr key={project._id}>
                    <td>{project.regNum}</td>
                    <td>{project.stName}</td>
                    <td>{project.telephone}</td>
                    <td>{project.email}</td>
                    <td>{project.batch}</td>
                    <td>{project.specialization}</td>
                    <td>{project.proTitle}</td>
                    <td>{project.resArea}</td>
                    <td>{project.classification}</td>
                    <td>{project.supervisor}</td>
                    <td>{project.coSupervisor}</td>
                    <td>
                      <button className="btn btn-danger" onClick={() => handleDelete(project._id)}>Delete</button>
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

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const [projects, setProjects] = useState([]);
  const handleSearch = (e) => {
    e.preventDefault();
    axios.get(`http://localhost:3005/projects?search=${search}`)
      .then((res) => {
        setProjects(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="input-group">
      <input
        type="text"
        className="form-control"
        value={search}
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className="btn btn-primary" onClick={handleSearch}>
        <ImSearch className="search" />
      </button>
    </div>
  );
};

export default ManageProject;
