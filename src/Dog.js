import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 3450,
   },
  media: {
    height: 70000,
  }
  
};


const Dogs = ({dogs,classes}) => {
    return (
      
          <Grid container spacing={40}>
            {dogs.map(card => (
              <Grid item key={card.id['$t']} sm={6} md={4} lg={3}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.image}
                    title={card.name['$t']}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.name['$t']}
                    </Typography>
                    
                    <Typography>
                      {card.sex['$t']} | {card.age['$t']} | {card.size['$t']}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        
        )
    }
 
  
  export default withStyles(styles)(Dogs);