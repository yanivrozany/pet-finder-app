import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CameraIcon from '@material-ui/icons/PhotoCamera';

import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Dogs from './Dog';
import FilterForm from './FilterForm';
import { createMuiTheme } from '@material-ui/core/styles';

const styles = theme => createMuiTheme({
     
  appBar: {
    position: 'relative',
    backgroundColor: '#6504b5',
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
    backgroundColor: theme.palette.background.deepPurple,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '600px',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  h2: {
    whiteSpace: 'nowrap', 
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: '#6504b5',
    padding: theme.spacing.unit * 6,
  },
});

class PetFinder extends Component {
  constructor(props){
    super(props);
    this.state = {
      filterAge : [],
      filterSize : [],
      dogsFull : props.dogs,
      dogs : props.dogs
    }
  }

  filterItemHelper = (ageFilter,sizeFilter) => {
    let dogs = this.state.dogsFull;
    return dogs.filter((item) => {
       let age =(ageFilter.length === 0 || ageFilter.includes(item.age['$t']));
       let size = (sizeFilter.length === 0 || sizeFilter.includes(item.age['$t']));
       return (size && age);
    });
  }

  handleFilterAge = (ageList) => {
    let dogsFiltered = this.filterItemHelper(ageList,this.state.filterSize);
    this.setState({dogs:dogsFiltered, filterAge: ageList });
    
  }
  handleFilterSize = (sizeList) => {
    let dogsFiltered = this.filterItemHelper(this.state.filterAge,sizeList);
    this.setState({dogs:dogsFiltered, filterSize: sizeList });
    
  }

  render() {
    const dogs = this.state.dogs;
    return (
     <React.Fragment>
      <CssBaseline />
      <AppBar position="static" className={this.props.classes.appBar}>
        <Toolbar>
          <CameraIcon className={this.props.classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <FilterForm onFilterAgeChange={this.handleFilterAge} onFilterSizeChange={this.handleFilterSize}/>
        <Dogs dogs={dogs} classes={this.props.classes}></Dogs> 
      </main>
      {/* Footer */}
      <footer className={this.props.classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          petfinder
        </Typography>
      </footer>
      {/* End footer */}
    </React.Fragment>
    );
  };
}

PetFinder.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PetFinder);
