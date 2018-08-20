import React, { Component } from 'react';
import './App.css';
import { Button, CardMedia, Typography, Card } from '@material-ui/core';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Card style={{margin: '20px', padding: '20px'}}>
          <CardMedia 
            style={{ height: '200px' }}
            image='https://static1.squarespace.com/static/5a6d52351f318d427dab4845/t/5b75b54288251ba6b9801b49/1534440786822/IMG_4553.jpg' />
          <Typography>
            Text here
          </Typography>
          <Typography>
            Text here
          </Typography>
          <Button size='large' variant="outlined" color="secondary">
            Hello World
          </Button>
        </Card>
      </div>
    );
  }
}

export default App;
