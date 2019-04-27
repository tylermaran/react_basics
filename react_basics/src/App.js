import React from 'react';
import './App.css';
import Header from './components/header';
import {
  Home
} from './components/home';

class App extends React.Component {
    constructor() {
      super();
      this.state = {
        homeLink: 'Home',
        homeMounted: true
      }
    }

    onGreet() {
      alert('Hello there');
    };

    onChangeLink(newName) {
      this.setState({
        homeLink: newName
      });
    };

    onChangeHomeMounted() {
      this.setState({
        homeMounted: !this.state.homeMounted
      });
    };


  render() {
    let home_component = '';
    if (this.state.homeMounted) {
      home_component = (
        <Home 
          name={'Tyler'} 
          initial_age={27} 
          greet={this.onGreet} 
          changeLink = {this.onChangeLink.bind(this)}
          homeLink = {this.state.homeLink}
        />
      )
    }

    return (
      <div className='container'>
        <div className="row">
          <div className="col col-12">
            {/* Header component */}
            <Header homeLink={this.state.homeLink} />
          </div>

        </div>
        <div className="row">
          <div className="col col-12">
            {/* Home component */}
            {home_component}
          </div>
        </div>

        <div className="row">
          <div className="col col-12">
            <button 
              className="btn btn-primary"
              onClick={this.onChangeHomeMounted.bind(this)}
              >{this.state.homeMounted ? 'Un-mount' : 'Re-mount'} Home Component</button>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
