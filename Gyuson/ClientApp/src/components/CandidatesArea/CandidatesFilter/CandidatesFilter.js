import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './CandidatesFilter.module.css';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export class CandidatesFilter extends Component{

  constructor(props){
    super(props);
    this.state = {degree: '',langId: 0}
  }

  

  jsonFiltered = [];


  filter = () => {

    this.jsonFiltered = this.props.candidatesJson.filter(f => 
      (this.state.degree == '' ||  (this.state.degree == "Senior" && (f.beginYear > 0 && ((new Date()).getFullYear() - f.beginYear) >= 3)) || (this.state.degree == "Junior" && ( f.beginYear == 0 || ((new Date()).getFullYear() - f.beginYear) < 3)))  
      && ( this.state.langId == 0 ||  f.langIds.split(',').some(s => s == this.state.langId) ))
      
      this.props.SetCandidatesJson(this.jsonFiltered);

  }


  changeLang = (val) => {
    this.setState({...this.state,langId: val},() => {this.filter()});
  }

  changeDegree = (val) => {
    this.setState({...this.state,degree: val},() => {this.filter()});
  }


  render(){


    return(

      <Box sx={{flexGrow: 1}}>

    <Grid container spacing={2}>
  
      <Grid item xs={2}>

        <Autocomplete
              disablePortal
              id={'languages'}
               options={this.props.LanguagesJson.map(l => {return {label: l.name,id: l.id}})}
              sx={{ width: '100%' }}
              onChange={(e,v) => {this.changeLang((v != null ? v.id : 0))}}
              renderInput={(params) => <TextField margin="normal"   fullWidth variant="standard" {...params} label={'Languages'} />}
            />



      </Grid>
  
      <Grid item xs={2}>

      <Autocomplete
              disablePortal
              id={'Degree'}
               options={[{label: 'Junior'},{label: 'Senior'}]}
              sx={{ width: '100%' }}
              onChange={(e,v) => {this.changeDegree((v != null ? v.label : ''))}}
              renderInput={(params) => <TextField margin="normal"   fullWidth variant="standard" {...params} label={'Degree'} />}
            />

      </Grid>

      

    </Grid>
  
  
    </Box>

    )
  }

}

CandidatesFilter.propTypes = {
  LanguagesJson: PropTypes.array.isRequired,
};

CandidatesFilter.defaultProps = {};

export default CandidatesFilter;
