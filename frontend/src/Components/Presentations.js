import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';

export default function Presentations() {
  const [presentations, setPresentations] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchPresentations = async () => {
      try {
        const response = await axios.get('http://localhost:3005/normalroutes/presentations/all');
        if (response.status === 200) {
          const data = response.data;
          setPresentations(data);
        }
      } catch (error) {
        console.error('Error fetching presentations:', error);
      }
    };
    fetchPresentations();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3005/normalroutes/delete/presentation/${id}`);
      if (response.status === 200) {
        console.log('Presentation deleted successfully');
        window.location.reload();
      }
    } catch (error) {
      console.error('Error deleting presentation:', error);
    }
  };

  const filteredPresentations = presentations.filter(row =>
    row.group.toLowerCase().includes(searchTerm.toLowerCase())
  );
  

  return (
    <div style={{marginTop:'100px'}}>
      <h2 style={{padding:'10px'}}>Scheduled Presentations</h2>
      <Link to="/shedulepresentation" style={{marginLeft:'10px'}}>
        <Button variant="contained" size='small' >Add New</Button>
      </Link>
      <TextField
        label="Search by Group"
        variant="outlined"
        style={{float: 'right', marginRight: '10px',marginBottom:'10px'}}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        size='small'
      />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>Group</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Type</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Date</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Start Time</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>End Time</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Location</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Examiners</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredPresentations.map((row) => (
              <TableRow key={row._id} sx={{ '&:hover': { backgroundColor: '#f5f5f5' } }}>
                <TableCell>{row.group}</TableCell>
                <TableCell>{row.type}</TableCell>
                <TableCell>{new Date(row.date).toLocaleDateString()}</TableCell> {/* Display only date */}
                <TableCell>{new Date(row.startTime).toLocaleTimeString()}</TableCell> {/* Display only time */}
                <TableCell>{new Date(row.endTime).toLocaleTimeString()}</TableCell> {/* Display only time */}
                <TableCell>{row.location}</TableCell>
                <TableCell>{row.examiners.join(', ')}</TableCell>
                <TableCell style={{width:'150px'}}>
                  <Link to={`update/presentation/${row._id}`}><Button variant="contained" size='small'>Edit</Button></Link>
                  <IconButton style={{marginLeft:'10px'}} aria-label="delete" onClick={() => handleDelete(row._id)}><DeleteIcon /></IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
