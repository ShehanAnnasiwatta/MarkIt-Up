import * as React from 'react';
import axios from 'axios'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const handleDelete = (id) => {
  console.log('Delete clicked for row with id:', id);
};

export default function Presentations() {
  const [presentations, setPresentations] = React.useState([]);

  React.useEffect(() => {
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

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Type</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Start Time</TableCell>
            <TableCell>End Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {presentations.map((row) => (
            <TableRow key={row._id}>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.startTime}</TableCell>
              <TableCell>{row.endTime}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
