import React, { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Grid, FormControl, InputLabel, Select, MenuItem, Button, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Checkbox, ListItemText, OutlinedInput } from '@mui/material';
import axios from 'axios';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs from 'dayjs'; // Import dayjs library


const StyledItem = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  padding: theme.spacing(2),
}));

export default function SchedulePresentation() {
  const [type, setType] = React.useState('');
  const [group, setGroup] = React.useState('');
  const [date, setDate] = React.useState(null);
  const [startTime, setStartTime] = React.useState(null);
  const [endTime, setEndTime] = React.useState(null);
  const [location, setLocation] = React.useState('');
  const [examiners, setExaminers] = React.useState([]);
  const [selectedExaminers, setSelectedExaminers] = React.useState([]);

  useEffect(() => {
    const fetchExaminers = async () => {
      try {
        const response = await axios.get('http://localhost:3005/normalroutes/allExaminers');
        console.log(response);
        if (response.status === 200) {
          setExaminers(response.data);
        }
      } catch (error) {
        console.error('Error fetching examiners:', error);
      }
    };

    fetchExaminers();
  }, []);

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleExaminersChange = (event) => {
    setSelectedExaminers(event.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!type || !group || !date || !startTime || !endTime || !location || !selectedExaminers.length) {
      alert("Please fill all fields");
      return;
    }
  
    // Extracting date portion from selected date
    const dateOnly = date.toISOString().split('T')[0];
  
    const newPresentation = {
      type,
      group,
      date: dateOnly,
      startTime: startTime.toDate().toLocaleTimeString(),
      endTime: endTime.toDate().toLocaleTimeString(),
      location,
      examiners: selectedExaminers
    };
  
    axios.post("http://localhost:3005/normalroutes/addpresentation", newPresentation)
      .then(() => {
        alert('Presentation added');
        window.location.reload();
      })
      .catch((err) => {
        alert(err);
      });
  };
  
  
  
  
  return (
    <div>
    <h2 style={{marginLeft:'220px', marginTop:'20px'}}>Shedule  a presentation</h2>
    <Grid container spacing={5} sx={{ margin: '0 auto', maxWidth: '1200px' }}>
      <Grid item xs={12} sm={6} >
        <StyledItem>
          <FormControl fullWidth size='small'>
          
            <InputLabel id="presentation-type-label">Presentation Type</InputLabel>
            <Select
              labelId="presentation-type-label"
              id="presentation-type"
              value={type}
              label="Presentation Type"
              onChange={(e) => setType(e.target.value)}
            >
              <MenuItem value="lecture">Progress Showing</MenuItem>
              <MenuItem value="workshop">Final Presentation</MenuItem>
            </Select>
          </FormControl>
          <br/><br/>

          <FormControl fullWidth size='small'>  
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
        <br/><br/>

          <LocalizationProvider dateAdapter={AdapterDayjs} >
            <DatePicker
              value={date}
              onChange={(value) => setDate(value)}
              label="Date"
              style={{ marginBottom: '16px' }}
            />
          </LocalizationProvider>
          <br/><br/>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker
              value={startTime}
              onChange={(value) => setStartTime(value)}
              label="Start Time"
              style={{ marginBottom: '16px' }}
            />
          </LocalizationProvider>
          <br/><br/>
          
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker
              value={endTime}
              onChange={(value) => setEndTime(value)}
              label="End Time"
              
            />
          </LocalizationProvider>
          <br/><br/>

          <FormControl fullWidth size='small'>
            <InputLabel id="location-label">Location</InputLabel>
            <Select
              labelId="location-label"
              id="location"
              value={location}
              label="Location"
              onChange={handleLocationChange}
            >
              <MenuItem value="room1">Room 1</MenuItem>
              <MenuItem value="room2">Room 2</MenuItem>
            </Select>
          </FormControl>
          <br/><br/>

          <Button variant="contained" onClick={handleSubmit}>Create Presentation</Button>
        </StyledItem>
      </Grid>

      <Grid item xs={12} sm={6}>
        <StyledItem>
          <FormControl fullWidth size='small'>
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
              {examiners.map((examiner) => (
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
                </TableRow>
              </TableHead>
              <TableBody>
                {selectedExaminers.map((name, index) => (
                  <TableRow key={index}>
                    <TableCell>{name}</TableCell>
                    <TableCell align="right">{index}</TableCell>
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
