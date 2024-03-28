import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import axios from 'axios';
import Button from '@mui/material/Button';


const columns = [
    { field: 'id', headerName: 'Index', width: 80 },
    { field: 'group', headerName: 'Group', width: 120 },
    { field: 'type', headerName: 'Type', width: 150 },
    { field: 'date', headerName: 'Date', width: 150 }, // Fixed width column
    { field: 'startTime', headerName: 'Start Time', width: 150 },
    { field: 'endTime', headerName: 'End Time', width: 150 },
    { field: 'location', headerName: 'Location', width: 100 },
    {
      field: 'delete', // field name for the delete button
      headerName: 'Actions', // Header for the column
      width: 250,
      renderCell: (params) => (
        <div>
            <Button onClick={() => handleDelete(params.row.id)}>Delete</Button>
            <Button onClick={() => handleDelete(params.row.id)}>EDIT</Button>
        </div>
      ),
    },
  ];
  
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
          console.log(data)
        }
      } catch (error) {
        console.error('Error fetching presentations:', error);
      }
    };
    fetchPresentations();
  }, []);

  return (
    <Box sx={{ width: 1 , height: '100vh' }}>
    <h2 style={{margin:'10px'}}>Presentations</h2>
      <Box sx={{ margin:'10px'}}>
        <DataGrid
          columns={columns}
          rows={presentations.map((presentation, index) => ({
            id: index + 1,
            group: presentation.group,
            type: presentation.type,
            date: presentation.date,
            startTime: presentation.startTime,
            endTime: presentation.endTime,
            location: presentation.location

        // Map other fields here
          }))}
          disableColumnFilter
          disableDensitySelector
          slots={{ toolbar: GridToolbar }}
          slotProps={{ toolbar: { showQuickFilter: true } }}
        />
      </Box>
    </Box>
  );
}
