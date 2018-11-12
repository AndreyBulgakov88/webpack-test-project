import React, { Component } from 'react';
import style from './app.scss';
import MountainSvg from './mountain.svg';
import FileJSON from './FileJSON.json';

class App extends Component {

  render() {
    console.log('1');
      return (
      <div>
        <div className={style.hello}>
          Hello React!
        </div>    
        <img className={style.image} src={require('./background.base64.jpg')} alt={FileJSON.name} />    
        <MountainSvg />
      </div>)
    }
};

export default App;