import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Dogs from './Dog';
import FilterForm from './FilterForm';
import { createMuiTheme } from '@material-ui/core/styles';
import deepPurple from '@material-ui/core/colors/deepPurple';

const styles = theme => createMuiTheme({
    palette: {
        primary: deepPurple,
      },
  appBar: {
    position: 'relative',
    backgroundColor: theme.palette.background.deepPurple,
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
    backgroundColor: theme.palette.background.deepPurple,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
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
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.deepPurple,
    padding: theme.spacing.unit * 6,
  },
});

class PetFinder extends Component {
  constructor(props){
    console.log('const');
    super(props);
    this.state = {
      filterAge : {},
      filterSize : {},
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
    let dogsFiltered = this.filterItemHelper(ageList,this.filterSize);
    this.setState({dogs:dogsFiltered, filterAge: ageList });
    
  }
  handleFilterSize = (sizeList) => {
    let dogsFiltered = this.filterItemHelper(this.filterAge,sizeList);
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
        <FilterForm onFilterAgeChange={this.handleFilterAge}/>
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
