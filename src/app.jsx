import React, { Component } from 'react';
import nesting from './nesting.scss';
import variables from './variables.scss';
import mixin from './mixin.scss';
import MountainSvg from './mountain.svg';
import FileJSON from './FileJSON.json';

class App extends Component {

  render() {
    return (
      <div>
        <div className={variables.hello}>
          Hello React!
        </div>    
        <p className={nesting.paragraph}>НЕ внутренний текст</p>
        <div className={nesting.container}>
          <p className={nesting.paragraph}>Внутренний текст</p>
        </div>
        <div>
          <button className={mixin.button_green}>Green button</button>
          <button className={mixin.button_white}>White button</button>
          <button className={mixin.button_red}>Red button</button>
        </div>
        <img className={variables.image} src={require('./background.base64.jpg')} alt={FileJSON.name} />    
        <MountainSvg />
      </div>)
    }
};

export default App;