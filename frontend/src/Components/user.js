import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 18,
  },
});

const User = ({user, setErrorMessage}) => {
  const classes = useStyles();
  if (!user){
  setErrorMessage('please login first')
  setTimeout(() => setErrorMessage(null), 3000)
  return( <Redirect to="/login"></Redirect>)
  }
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography color="textSecondary">
          username
        </Typography>
        <Typography className={classes.pos} variant="h5" component="h2">
          {user.username}
        </Typography>
        <Typography color="textSecondary">
          ID
        </Typography>
        <Typography variant="h5" component="h2">
          {user.id}
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button color='primary' size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default User;
