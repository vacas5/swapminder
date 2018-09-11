import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import MediaCard from './MediaCard';
import loaned from './fixtures/loaned';

Dashboard.propTypes = {
  classes: PropTypes.object,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 12,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function Dashboard({ classes }) {
  return (
    <div className={classes.root}>
      <Typography>
        <h2>On Loan</h2>
      </Typography>
      <Grid container spacing={24}>
        {loaned.data.map(item => {
          return (
            <Grid item sm={6} md={4} lg={3}>
              <MediaCard {...item} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default withStyles(styles)(Dashboard);
