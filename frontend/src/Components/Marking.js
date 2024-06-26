import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Table, TableHead, TableBody, TableRow, TableCell, Typography, TextField, Button } from '@mui/material';

function Marking() {
  const [rubric, setRubric] = useState(null);
  const [specialization, setSpecialization] = useState('');
  const [studentId, setStudentId] = useState('');
  const [marks, setMarks] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchRubric = async () => {
      try {
        const response = await axios.get(`http://localhost:3005/normalroutes/rubric/${id}`);
        setRubric(response.data);
        setSpecialization(response.data.specialization); // Set specialization
        // Initialize marks array with default values
        const initialMarks = response.data.criteria.slice(1).map(() => '');
        setMarks(initialMarks);
      } catch (error) {
        console.error('Error fetching rubric:', error);
      }
    };

    fetchRubric();

    return () => {
      setRubric(null);
    };
  }, [id]);

  const handleMarksChange = (index, value) => {
    const newMarks = [...marks];
    newMarks[index] = value;
    setMarks(newMarks);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:3005/normalroutes/addRubricMark', {
        specialization: specialization,
        assignment: rubric.assignment,
        SID: studentId,
        totalMarks: marks.reduce((acc, curr) => acc + parseFloat(curr), 0).toFixed(2)
      });
      console.log('Marks submitted:', response.data);
      alert('Marks added!')
      // Clear the form after submission
      setStudentId('');
      setMarks([]);
    } catch (error) {
      console.error('Error submitting marks:', error);
    }
  };

  if (!rubric) {
    return <div>Loading...</div>;
  }

  const totalMarks = marks.reduce((acc, curr) => acc + parseFloat(curr), 0).toFixed(2);

  return (
    <div>
      <Typography variant="h3" align="center" style={{ marginTop: '20px' }}>
        {specialization}
      </Typography>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: 'calc(100vh - 200px)' }}>

      <h3 style={{marginBottom:'30px'}}>Marking Rubric for {rubric.assignment}</h3>
        <TextField
          label="Student ID"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          style={{ marginBottom: '20px' }}
        />
        <div style={{ textAlign: 'center' }}>
          <Table>
            <TableHead>
              <TableRow>
                {rubric.criteria[0].name.map((header, index) => (
                  <TableCell key={index}>
                    <Typography variant="h6" style={{ fontWeight: '400' }}>{header}</Typography>
                  </TableCell>
                ))}
                <TableCell>
                  <Typography variant="h6" style={{ fontWeight: '400' }}>Marks</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rubric.criteria.slice(1).map((criterion, index) => (
                <TableRow key={index}>
                  {criterion.name.map((cell, cellIndex) => (
                    <TableCell key={cellIndex}>{cell}</TableCell>
                  ))}
                  <TableCell>
                    <TextField
                      type='number'
                      value={marks[index]}
                      onChange={(e) => handleMarksChange(index, e.target.value)}
                      variant="outlined"
                      size="small"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <TableRow>
            <TableCell align="right" colSpan={rubric.criteria[0].name.length}>
              <Typography variant="h6" style={{ fontWeight: '400' }}>Total Marks:</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h6" style={{ fontWeight: '400' }}>{totalMarks}</Typography>
            </TableCell>
          </TableRow>
        </div>

        <Button variant="contained" color="primary" onClick={handleSubmit} style={{ marginTop: '20px' }}>
          Submit
        </Button>

      </div>
    </div>
  );
}

export default Marking;
