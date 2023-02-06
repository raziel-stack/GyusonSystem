import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Candidates.module.css';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import CandidatesTable from '../CandidatesTable/CandidatesTable';
import CandidatesFilter from '../CandidatesFilter/CandidatesFilter';

export class Candidates extends Component{

  constructor(props){
    super(props);
    this.state = {candidatesJson: [],candidatesJsonFiltered: [],LanguagesJson: []}
  }

  componentDidMount(){
    this.getAllCandidates();
    this.getAllLanguages();
  }

  getAllCandidates = () => {

    fetch("api/Candidates/GetAllCandidates").then(r => r.json()).then(r => {
      this.setState({...this.state,candidatesJson: r,candidatesJsonFiltered: r});
    }).catch(e => console.error("error: " + e))

  }

  getAllLanguages = () => {

    fetch("api/Candidates/GetAllLanguages").then(r => r.json()).then(r => {
      this.setState({...this.state,LanguagesJson: r});
    }).catch(e => console.error("error: " + e))

  }



  render(){
    return(

      <Box sx={{flexGrow: 1}}>

        <Grid container spacing={2}>

      {/* The filter is done in the client side because i need show all candidates so all data is in the clinent side and i don't need get data from the server again*/}
          <Grid item xs={12}>
            <CandidatesFilter candidatesJson={this.state.candidatesJson} LanguagesJson={this.state.LanguagesJson} SetCandidatesJson={(cj) => {this.setState({...this.state,candidatesJsonFiltered: cj})}} />
          </Grid>

          <Grid item xs={12}>
            <CandidatesTable rows={this.state.candidatesJsonFiltered}/>
          </Grid>

        </Grid>

        </Box>

    )
  }



}

Candidates.propTypes = {};

Candidates.defaultProps = {};

export default Candidates;
