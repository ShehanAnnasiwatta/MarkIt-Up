import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Table, TableHead, TableBody, TableRow, TableCell, Typography, TextField } from '@mui/material';

function Marking() {
  const [rubric, setRubric] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchRubric = async () => {
      try {
        const response = await axios.get(`http://localhost:3005/normalroutes/rubric/${id}`);
        setRubric(response.data);
      } catch (error) {
        console.error('Error fetching rubric:', error);
      }
    };

    fetchRubric();

    return () => {
      setRubric(null);
    };
  }, [id]);

  if (!rubric) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ textAlign: 'center' }}>
        <h3>{rubric.specialization + " Marking Rubric"}</h3>
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
                  <TextField type='number' id={`marks-${index}`} variant="outlined" size="small" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default Marking;
