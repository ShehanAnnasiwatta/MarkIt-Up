import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import Swal from 'sweetalert2';
import { ImSearch } from 'react-icons/im';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { Switch } from 'antd';

function ManageResearch() {
  const [research, setResearch] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const getResearch = () => {
    axios.get("http://localhost:3005/research/")
      .then((res) => {
        setResearch(res.data);
        console.log('Research retrieved:', res.data);
      })
      .catch((err) => {
        console.error('Error retrieving Research:', err);
      });
  };

  useEffect(() => {
    getResearch();
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
        axios.delete(`http://localhost:3005/research/${id}`)
          .then((res) => {
            setIsSubmitted(!isSubmitted);
            toast.success('Research deleted');
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
                  <th style={{ backgroundColor: '#008DDA', fontWeight: 'bolder', fontSize: '10px' }}>Group ID</th>
                  <th style={{ backgroundColor: '#008DDA', fontWeight: 'bolder', fontSize: '10px' }}>Project Title</th>
                  <th style={{ backgroundColor: '#008DDA', fontWeight: 'bolder', fontSize: '10px' }}>Student</th>
                  <th style={{ backgroundColor: '#008DDA', fontWeight: 'bolder', fontSize: '10px' }}>Supervisor</th>
                  <th style={{ backgroundColor: '#008DDA', fontWeight: 'bolder', fontSize: '10px' }}>Co-Supervisor</th>
                  <th style={{ backgroundColor: '#008DDA', fontWeight: 'bolder', fontSize: '10px' }}>Conference</th>
                  <th style={{ backgroundColor: '#008DDA', fontWeight: 'bolder', fontSize: '10px' }}>Journal</th>
                  <th style={{ backgroundColor: '#008DDA', fontWeight: 'bolder', fontSize: '10px' }}>ISSN Number</th>
                  <th style={{ backgroundColor: '#008DDA', fontWeight: 'bolder', fontSize: '10px' }}>Conference/Journal Link</th>
                  <th style={{ backgroundColor: '#008DDA', fontWeight: 'bolder', fontSize: '10px' }}>Version Link</th>
                  <th style={{ backgroundColor: '#008DDA', fontWeight: 'bolder', fontSize: '10px' }}>Acceptance Photo</th>
                  <th style={{ backgroundColor: '#008DDA', fontWeight: 'bolder', fontSize: '10px' }}>Success Photo</th>
                  <th style={{ backgroundColor: '#008DDA', fontWeight: 'bolder', fontSize: '10px' }}>USD</th>
                  <th style={{ backgroundColor: '#008DDA', fontWeight: 'bolder', fontSize: '10px' }}>LKR</th>
                  <th style={{ backgroundColor: '#008DDA', fontWeight: 'bolder', fontSize: '10px' }}>Fee</th>
                  <th style={{ backgroundColor: '#008DDA', fontWeight: 'bolder', fontSize: '10px' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {research.map((research) => (
                  <tr key={research._id}>
                    <td>{research.groupId}</td>
                    <td>{research.proTitle}</td>
                    <td>{research.student}</td>
                    <td>{research.supervisor}</td>
                    <td>{research.coSupervisor}</td>
                    <td>{research.conference}</td>
                    <td>{research.journal}</td>
                    <td>{research.issnNum}</td>
                    <td>{research.conJouLink}</td>
                    <td>{research.verLink}</td>
                    <td>{research.acceptPhoto}</td>
                    <td>{research.successPhoto}</td>
                    <td>{research.usd}</td>
                    <td>{research.lkr}</td>
                    <td>{research.fee}</td>
                    <td>
                      <button className="btn btn-danger" onClick={() => handleDelete(research._id)}>Delete</button>
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
  const [research, setResearch] = useState([]);
  const handleSearch = (e) => {
    e.preventDefault();
    axios.get(`http://localhost:3005/research?search=${search}`)
      .then((res) => {
        setResearch(res.data);
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

export default ManageResearch;
