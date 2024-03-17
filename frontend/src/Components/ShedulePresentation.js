import * as React from 'react';
import { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import axios from 'axios';


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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ShedulePresentation() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const [type, setType] = React.useState('');
  const [date, setDate] = React.useState('');
  const [startTime, setStartTime] = React.useState('');
  const [endTime, setEndTime] = React.useState('');
  const [location, setLocation] = React.useState('');
  //const [groups, setGroups] = React.useState([]);
  const [examiners, setExaminers] = React.useState([]);

  useEffect(() => {
    const fetchExaminers = async () => {
      try {
        const response = await axios.get('http://localhost:3005/normalroutes/allExaminers');
        console.log(response); // Log the response
        if (response.status === 200) {
          setExaminers(response.data);
        }
      } catch (error) {
        console.error('Error fetching examiners:', error);
      }
    };
  
    fetchExaminers();
  }, []);
  

  const handleLocation = (event) => {
    setLocation(event.target.value);
  };

  const handleExaminers = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  function sendData(e){
    e.preventDefault();

    if (!type || !date || !startTime || !endTime || !location || !examiners) {
        alert("please fill all fields")
        return;
    }

    const newPresentation ={
        type,
        date,
        startTime,
        endTime,
        location,
        examiners
    }
   axios.post("http://localhost:3005/normalroutes/addpresentation", newPresentation).then(()=>{
    alert('added')
//    navigate("/")
   }).catch((err)=>{
    alert(err)
   })
}
  
  return (
    <Box sx={{ flexGrow: 1, ml:10, mr:10, mt: 5 }}>
    <h1>Shedule a Presentation</h1>
      <Grid container spacing={10}>
        <Grid item xs={6}>
          <Item>   
            <FormControl style={{ width: '100%' }}>
              <InputLabel id="demo-simple-select-label">Presentation Type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={type}
                label="Presentation Type"
                onChange={(e) => {setType(e.target.value)}}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']}>
                <DatePicker onChange={(value) => {setDate(value)}} label="Date"/>
              </DemoContainer>
            </LocalizationProvider>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['TimePicker']}>
                <TimePicker onChange={(value) => {setStartTime(value)}} label="Start Time" />
              </DemoContainer>
            </LocalizationProvider>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['TimePicker']}>
                <TimePicker onChange={(value) => {setEndTime(value)}} label="End Time"/>
              </DemoContainer>
            </LocalizationProvider>

            <FormControl style={{ width: '100%' }} sx={{mt:2}}>
              <InputLabel id="demo-simple-select-label">Location</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={location}
                label="Location"
                onChange={handleLocation}
              >
                <MenuItem value={10}>A501</MenuItem>
                <MenuItem value={20}>F301</MenuItem>
                <MenuItem value={30}>F1305</MenuItem>
              </Select>
            </FormControl>
            <Button sx={{mt:5}} variant="contained" onClick={sendData}>Create Presentation</Button>
          </Item>   
        </Grid>
        <Grid item xs={6}>
          <Item>
            <FormControl style={{ width: '100%' }} sx={{ mr: 1}}>
              <InputLabel id="demo-multiple-checkbox-label">Select Examiners</InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={personName}
                onChange={handleExaminers}
                input={<OutlinedInput label="Select Examiners" />}
                renderValue={(selected) => selected.join(', ')}
                MenuProps={MenuProps}
                >
                {examiners.map((examiner) => (
                    <MenuItem key={examiner.id} value={examiner.Fname +  " " + examiner.Lname}>
                    <Checkbox checked={personName.indexOf(examiner.Fname +  " " + examiner.Lname) > -1} />
                    <ListItemText primary={examiner.Fname +  " " + examiner.Lname} />
                    </MenuItem>
                ))}
                </Select>

            </FormControl>
            <TableContainer style={{ width: '100%' }} >
              <h1>Panel</h1>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell><b>Examiner Name</b></TableCell>
                    <TableCell align="right"><b>ID</b></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {personName.map((name) => (
                    <TableRow
                      key={name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {name}
                      </TableCell>
                      <TableCell align="right">ID </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
