import React, { Component } from 'react';
import PetFinder from './petFinder';
import './App.css';
// eslint-disable-next-line react/require-render-return
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded : false,
      config : {
        serverURL : 'http://127.0.0.1:5000/api/v1/dogs/findgoldenretriver/'
      }
    }
  }
  

  componentWillMount(){
    fetch(this.state.config.serverURL, {mode: 'cors'})
    .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            dogs: result.map(item => {
              if ('photos' in item.media ){
                console.log('in if');
                item.image = item.media.photos.photo[2].$t;
              }

              return item;
            })
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
