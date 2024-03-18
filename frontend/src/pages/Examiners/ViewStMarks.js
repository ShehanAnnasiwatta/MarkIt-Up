import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import Swal from 'sweetalert2';
import { ImSearch } from 'react-icons/im';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { Switch } from 'antd'; // Import Switch component from antd library

function ManageMark() {
  const [marks, setMarks] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const getMarks = () => {
    axios.get("http://localhost:3005/mark/")
      .then((res) => {
        setMarks(res.data);
        console.log('marks retrieved:', res.data);
      })
      .catch((err) => {
        console.error('Error retrieving marks:', err);
      });
  };

  useEffect(() => {
    getMarks();
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
        axios.delete(`http://localhost:3005/mark/${id}`)
          .then((res) => {
            setIsSubmitted(!isSubmitted);
            toast.success('Mark deleted');
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
                  <th style={{ backgroundColor: '#008DDA', fontWeight: 'bolder', fontSize: '10px' }}>Group Id</th>
                  <th style={{ backgroundColor: '#008DDA', fontWeight: 'bolder', fontSize: '10px' }}>Proposal</th>
                  <th style={{ backgroundColor: '#008DDA', fontWeight: 'bolder', fontSize: '10px' }}>Progress1</th>
                  <th style={{ backgroundColor: '#008DDA', fontWeight: 'bolder', fontSize: '10px' }}>Progress2</th>
                  <th style={{ backgroundColor: '#008DDA', fontWeight: 'bolder', fontSize: '10px' }}>Final Presentation</th>
                  <th style={{ backgroundColor: '#008DDA', fontWeight: 'bolder', fontSize: '10px' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {marks.map((mark) => (
                  <tr key={mark._id}>
                    <td>{mark.groupId}</td>
                    <td>{mark.proposal}</td>
                    <td>{mark.progress1}</td>
                    <td>{mark.progress2}</td>
                    <td>{mark.finalPresentation}</td>
                   
                    <td>
                      <button className="btn btn-danger" onClick={() => handleDelete(marks._id)}>Delete</button>
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
  const [marks, setMarks] = useState([]);
  const handleSearch = (e) => {
    e.preventDefault();
    axios.get(`http://localhost:3005/mark?search=${search}`)
      .then((res) => {
        setMarks(res.data);
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

export default ManageMark;
