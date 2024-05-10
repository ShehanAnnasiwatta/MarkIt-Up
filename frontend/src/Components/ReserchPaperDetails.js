import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Swal from 'sweetalert2';


function ReserchPaperDetails() {

    const [reserchPaperDetails, setReserchPaperDetails] = useState([])

    const getReserchPaperDetails = () => {
        axios.get("http://localhost:3005/normalroutes/getResearchPaper").then((res) => {
            console.log(res.data)
            setReserchPaperDetails(res.data)
        }).catch((err) => {
            console.log("Reserch Paper details fetching error")
            console.log(err)
        })
    }

    const deleteReserchPaperDetails = (id) => {
        axios.delete(`http://localhost:3005/normalroutes/deleteResearchPaper/${id}`).then((res) => {
            if(res.data.message==="data deleted"){
                Swal.fire({
                    icon: "success",
                    title: "Deleted Success",
                    text: `${res.data.message}`,
                  });
            }
            else{
                Swal.fire({
                    icon: "error",
                    title: "Data not deleted",
                    text: `${res.data.message}`,
                  });
            }
            console.log("Reserch Paper details deleted")
            console.log(res)
            getReserchPaperDetails()
        }).catch((err) => {
            console.log("Reserch Paper details delete error")
            console.log(err)

            Swal.fire({
                icon: "error",
                title: "Data not deleted",
                text: `data deleted error`,
              });
        })
    
    }

    useEffect(() => {
        getReserchPaperDetails()
    }, [])

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
      
      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));
      
  return (
    <div>

<TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Group Id</StyledTableCell>
            <StyledTableCell align="right">Title</StyledTableCell>
            <StyledTableCell align="right">Supervisior</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reserchPaperDetails.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row"> {row.groupId}</StyledTableCell>
              <StyledTableCell align="right">{row.title}</StyledTableCell>
              <StyledTableCell align="right">{row.supervisor}</StyledTableCell>
              <StyledTableCell align="right"><Button variant="outlined" startIcon={<DeleteIcon />} onClick={()=>{deleteReserchPaperDetails(row._id)}}>Delete</Button></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

      
    </div>
  )
}

export default ReserchPaperDetails
