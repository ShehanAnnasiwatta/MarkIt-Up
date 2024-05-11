import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Grid, FormControl, InputLabel, Select, MenuItem, Button, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Checkbox, ListItemText, OutlinedInput, IconButton } from '@mui/material';
import axios from 'axios';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import RemoveIcon from '@mui/icons-material/Remove';

const StyledItem = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  padding: theme.spacing(2),
}));

const examinersData = [
  { id: 1, Fname: 'John', Lname: 'Doe' },
  { id: 2, Fname: 'Jane', Lname: 'Smith' },
  { id: 3, Fname: 'Alice', Lname: 'Johnson' },
  { id: 4, Fname: 'Michael', Lname: 'Brown' },
  { id: 5, Fname: 'Emily', Lname: 'Jones' },
  { id: 6, Fname: 'William', Lname: 'Davis' },
  { id: 7, Fname: 'Olivia', Lname: 'Miller' },
  { id: 8, Fname: 'James', Lname: 'Wilson' },
  { id: 9, Fname: 'Sophia', Lname: 'Taylor' },
  { id: 10, Fname: 'Benjamin', Lname: 'Anderson' }
];

export default function EditPresentation() {
  const [presentation, setPresentation] = useState({});
  const [type, setType] = useState('');
  const [group, setGroup] = useState('');
  const [date, setDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [location, setLocation] = useState('');
  const [selectedExaminers, setSelectedExaminers] = useState([]);
  const params = useParams();
  const { id: ID } = params;

  useEffect(() => {
    const fetchPresentation = async () => {
      try {
        const response = await axios.get(`http://localhost:3005/normalroutes/presentation/${ID}`);
        const presentationData = response.data;
        console.log(presentationData);
        setPresentation(presentationData);
        setType(presentationData.type);
        setGroup(presentationData.group);
        setLocation(presentationData.location);
        setSelectedExaminers(presentationData.examiners);
      } catch (error) {
        console.error('Error fetching presentation:', error);
      }
    };
  
    fetchPresentation();
  }, [ID]);
  

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleExaminersChange = (event) => {
    setSelectedExaminers(event.target.value);
  };

  const handleRemoveExaminer = (examinerName) => {
    setSelectedExaminers(selectedExaminers.filter(examiner => examiner !== examinerName));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedPresentation = {
      type,
      group,
      date,
      startTime,
      endTime,
      location,
      examiners: selectedExaminers
    };
    
    try {
      await axios.put(`http://localhost:3005/normalroutes/presentation/${ID}`, updatedPresentation);
      alert('Presentation updated successfully');
      window.location.href = '/presentations';
    } catch (error) {
      console.error('Error updating presentation:', error);
      alert('Failed to update presentation');
    }
  };

  return (
    <div style={{ marginTop: '10px' }}>
      <h2 style={{ marginLeft: '220px', marginTop: '10px' }}>Edit Presentation</h2>
      <Grid container spacing={5} sx={{ margin: '0 auto', maxWidth: '1200px' }}>
        <Grid item xs={12} sm={6} >
          <StyledItem>
            <FormControl fullWidth>
              <InputLabel id="presentation-type-label">Presentation Type</InputLabel>
              <Select
                labelId="presentation-type-label"
                id="presentation-type"
                value={type}
                label="Presentation Type"
                onChange={(e) => setType(e.target.value)}
              >
                <MenuItem value="Progress Showing">Progress Showing</MenuItem>
                <MenuItem value="Final Presentation">Final Presentation</MenuItem>
                <MenuItem value="Final Viva">Final Viva</MenuItem>

              </Select>
            </FormControl>
            <br /><br />
            <FormControl fullWidth >
              <InputLabel id="presentation-group-label">Group</InputLabel>
              <Select
                labelId="presentation-group-label"
                id="presentation-group"
                value={group}
                label="Group"
                onChange={(e) => setGroup(e.target.value)}
              >
                <MenuItem value='WE_106'>WE_106</MenuItem>
                <MenuItem value='WE_107'>WE_107</MenuItem>
                <MenuItem value='WE_108'>WE_108</MenuItem>
                <MenuItem value='WE_109'>WE_109</MenuItem>
              </Select>
            </FormControl>
            <br /><br />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={date}
                onChange={(value) => setDate(value)}
                label="Date"
                style={{ marginBottom: '16px' }}
              />
            </LocalizationProvider>
            <br /><br />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimePicker
                value={startTime}
                onChange={(value) => setStartTime(value)}
                label="Start Time"
                style={{ marginBottom: '16px' }}
              />
            </LocalizationProvider>
            <br /><br />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimePicker
                value={endTime}
                onChange={(value) => setEndTime(value)}
                label="End Time"
              />
            </LocalizationProvider>
            <br /><br />
            <FormControl fullWidth>
              <InputLabel id="location-label">Location</InputLabel>
              <Select
                labelId="location-label"
                id="location"
                value={location}
                label="Location"
                onChange={handleLocationChange}
              >
                <MenuItem value="F_501">F_501</MenuItem>
                <MenuItem value="F_502">F_502</MenuItem>
                <MenuItem value="F_503">F_503</MenuItem>
                <MenuItem value="F_504">F_504</MenuItem>
              </Select>
            </FormControl>
            <br /><br />
            <Button variant="contained" onClick={handleSubmit}>Update Presentation</Button>
          </StyledItem>
        </Grid>

        <Grid item xs={12} sm={6}>
          <StyledItem>
            <FormControl fullWidth >
              <InputLabel id="examiners-label">Select Examiners</InputLabel>
              <Select
                labelId="examiners-label"
                id="examiners"
                multiple
                value={selectedExaminers}
                onChange={handleExaminersChange}
                input={<OutlinedInput label="Select Examiners" />}
                renderValue={(selected) => selected.join(', ')}
                MenuProps={MenuProps}
              >
                {examinersData.map((examiner) => (
                  <MenuItem key={examiner.id} value={examiner.Fname + " " + examiner.Lname}>
                    <Checkbox checked={selectedExaminers.indexOf(examiner.Fname + " " + examiner.Lname) > -1} />
                    <ListItemText primary={examiner.Fname + " " + examiner.Lname} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell><b>Examiner Name</b></TableCell>
                    <TableCell align="right"><b>ID</b></TableCell>
                    <TableCell align="right"></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {selectedExaminers.map((name, index) => (
                    <TableRow key={index}>
                      <TableCell>{name}</TableCell>
                      <TableCell align="right">{index}</TableCell>
                      <TableCell align="right">
                        <IconButton onClick={() => handleRemoveExaminer(name)}>
                          <RemoveIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </StyledItem>
        </Grid>
      </Grid>
    </div>
  );
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
