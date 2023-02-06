import React from 'react';
import PropTypes from 'prop-types';
import styles from './CandidatesTable.module.css';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const CandidatesTable = ({rows}) => {

return(
  
  <TableContainer component={Paper}>
  <Table sx={{ minWidth: 650 }} aria-label="simple table">
    <TableHead>
      <TableRow>
        <TableCell>Name</TableCell>
        <TableCell align="right">Languages</TableCell>
        <TableCell align="right">Begin Year</TableCell>
        <TableCell align="right">Years of experience</TableCell>
        <TableCell align="right">Degree</TableCell>
        <TableCell align="right">Last Update Date</TableCell>
        <TableCell align="right">Id</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {rows.map((row) => (
        <TableRow
          key={row.id}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            {row.name}
          </TableCell>
          <TableCell align="right">{row.langNames}</TableCell>
          <TableCell align="right">{row.beginYear}</TableCell>
          <TableCell align="right">{(row.beginYear > 0 && (new Date()).getFullYear() - row.beginYear)}</TableCell>
          <TableCell align="right">{(row.beginYear > 0 && ((new Date()).getFullYear() - row.beginYear) >= 3 ? "Senior" : "Junior")}</TableCell>
          <TableCell align="right">{row.lastUpdateDate}</TableCell>
          <TableCell align="right">{row.id}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>

)

}

CandidatesTable.propTypes = {
  rows: PropTypes.array.isRequired
};

CandidatesTable.defaultProps = {};

export default CandidatesTable;
