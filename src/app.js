import React, { Component } from 'react';
import style from './app.scss';
import MountainSvg from './mountain.svg';
import FileJSON from './FileJSON.json';

class App extends Component {
  render() {
      return (
      <div>
        <div className={style.hello}>
          Hello React!
        </div>    
        <img className={style.image} src={require('./background.jpg')} alt={FileJSON.name} />    
        <MountainSvg />
      </div>)
    }
};

export default App;