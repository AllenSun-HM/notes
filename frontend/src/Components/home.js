import React from 'react'

  import Typography from '@material-ui/core/Typography';

const Home = () => {
    return(
      <div style={{marginLeft: '10px'}}>
        <h1 ><Typography variant="h3">Notes App</Typography></h1>
        <div>
          <p >
            <Typography variant="body1">
              Welcome to my note app! At here, you can take your notes and organize them.
              This app is still in development. I built it while learning React, Node.js, and MongoDB.
            </Typography>
          </p>
        </div>
      </div>
      )
    }

    export default Home;