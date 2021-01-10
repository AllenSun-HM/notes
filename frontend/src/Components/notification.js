import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import {useRef} from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  
}));

Notification = ({message, error}) => {
  const ref = useRef()
  const classes = useStyles();
  if (message){
    {setTimeout(
      () => {
        if (ref.current){
        ref.current.style.display='none'
        }
      }
    ,5000)
  }
  }
  return (
    <div>
      {
    message == null ? null
    :
    <div ref={ref} className={classes.root} >
      <Alert severity="success">{`${message}, welcome!`}</Alert>
    
    </div>


}
{error &&
    <div className={classes.root}>
      <Alert severity="error">{error}</Alert>
    
    </div>}
    </div>
    
  );
}


export default Notification