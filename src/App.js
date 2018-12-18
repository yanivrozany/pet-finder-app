import React, { Component } from 'react';
import PetFinder from './Album';

// eslint-disable-next-line react/require-render-return
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded : false,
      filters: {
        age:{},
        size:{}
      },
      dogs : []
    }
  }
  

  componentWillMount(){
    fetch('http://127.0.0.1:5000/dogs/', {mode: 'cors'})
    .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            dogs: result
          });
        },
        
        (error) => {
          this.setState({
            isLoaded: true,
            error : error
        });
      }
    )
  }
  render() {
    const { error, isLoaded} = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <PetFinder dogs={this.state.dogs}/>
      );
    }        
  }
}

export default App;
