import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { ImSearch } from 'react-icons/im';

function ManageResearch() {
    const [researchData, setResearchData] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const getResearch = () => {
        axios.get("http://localhost:3005/research/")
            .then((res) => {
                setResearchData(res.data);
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
                    .then(() => {
                        setIsSubmitted(prevState => !prevState);
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
                        <SearchBarResearch setIsSubmitted={setIsSubmitted} />
                        <table className="table table-hover" style={{ width: '80%', margin: 'auto' }}>
                            <thead>
                                <tr>
                                    <th>Group ID</th>
                                    <th>Project Title</th>
                                    <th>Student</th>
                                    <th>Supervisor</th>
                                    <th>Co-Supervisor</th>
                                    <th>Conference</th>
                                    <th>Journal</th>
                                    <th>ISSN Number</th>
                                    <th>Conference/Journal Link</th>
                                    <th>Version Link</th>
                                    <th>Acceptance Photo</th>
                                    <th>Success Photo</th>
                                    <th>Currency</th>
                                    <th>Fee</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {researchData.map((research) => (
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
                                        <td>{research.selectedCurrency}</td>
                                        <td>{research.fee}</td>
                                        <td>
                                            <Link to={`/editRes/${research._id}`}>
                                                <Button type="primary">Edit</Button>
                                            </Link>
                                            <Button type="danger" onClick={() => handleDelete(research._id)}>Delete</Button>
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

const SearchBarResearch = ({ setIsSubmitted }) => {
    const [search, setSearch] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        axios.get(`http://localhost:3005/research?search=${search}`)
            .then(() => {
                setIsSubmitted(prevState => !prevState);
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
