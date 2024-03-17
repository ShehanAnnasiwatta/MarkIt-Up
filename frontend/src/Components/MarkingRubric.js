import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Button,
  Box,
  Typography,
} from '@mui/material';

const MarkingRubric = () => {
  const [criteria, setCriteria] = useState([['Criterion 1'], ['Criterion 2'], ['Criterion 3'], ['Criterion 4'], ['Criterion 5']]);
  const [scores, setScores] = useState([]);

  const handleCriteriaChange = (rowIndex, colIndex, event) => {
    const newCriteria = [...criteria];
    newCriteria[rowIndex][colIndex] = event.target.value;
    setCriteria(newCriteria);
  };

  const handleScoreChange = (rowIndex, event) => {
    const newScores = [...scores];
    newScores[rowIndex] = event.target.value;
    setScores(newScores);
  };

  const addRow = () => {
    const newRow = new Array(criteria[0].length).fill('');
    setCriteria([...criteria, newRow]);
    setScores([...scores, '']);
  };

  const addColumn = () => {
    const newCriteria = criteria.map(row => [...row, '']);
    setCriteria(newCriteria);
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <Paper elevation={3} style={{ padding: 20 }}>
        <Typography variant="h5" gutterBottom>
          Marking Rubric
        </Typography>
        <TableContainer>
          <Table aria-label="marking rubric table">
            <TableHead>
              <TableRow>
                {criteria[0].map((_, index) => (
                  <TableCell key={index}>Criterion {index + 1}</TableCell>
                ))}
                <TableCell align="right">Score</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {criteria.map((row, rowIndex) => (
                <TableRow key={rowIndex}>
                  {row.map((col, colIndex) => (
                    <TableCell key={`${rowIndex}-${colIndex}`}>
                      <TextField
                        value={criteria[rowIndex][colIndex]}
                        onChange={(e) => handleCriteriaChange(rowIndex, colIndex, e)}
                        variant="outlined"
                        size="small"
                        fullWidth
                      />
                    </TableCell>
                  ))}
                  <TableCell align="right">
                    <TextField
                      value={scores[rowIndex] || ''}
                      onChange={(e) => handleScoreChange(rowIndex, e)}
                      variant="outlined"
                      size="small"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box mt={2} display="flex" justifyContent="center">
          <Button variant="contained" color="primary" onClick={addRow} style={{ marginRight: 10 }}>
            Add Row
          </Button>
          <Button variant="contained" color="primary" onClick={addColumn}>
            Add Column
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default MarkingRubric;
