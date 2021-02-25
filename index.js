import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Numbers(props){
  return (
    <button className="numbers" onClick={() => props.onClick()}>
      {props.value}
    </button>
  );
}

function Functions(props){
  return (
    <button className="functions" onClick={() => props.onClick()}>
      {props.value}
    </button>
  );
}

function Clear(props){
  return (
    <button className="clear" onClick={() => props.onClick()}>
      {props.value}
    </button>
  );
}

function Screen(props){
  return (
    <textarea className="screen">
      {props.value}
    </textarea>
  );
}

function History(props){
  return (
    <textarea className="history">
      {props.value}
    </textarea>
  );
}

class Keypad extends React.Component{
  constructor(props){
    super(props);
    this.renderNumber = this.renderNumber.bind(this);
    this.renderClear = this.renderClear.bind(this);
    this.renderFunction = this.renderFunction.bind(this);
    this.renderScreen = this.renderScreen.bind(this);
    this.renderHistory = this.renderHistory.bind(this);
  }

  renderNumber(i){
    return(
      <Numbers value = {i} />
    );
  }

  renderFunction(i){
    return(
      <Functions value = {i} />
    );
  }

  renderClear(i){
    return(
      <Clear value = {i} />
    );
  }

  renderScreen(i){
    return(
      <Screen value = {i} />
    );
  }

  renderHistory(i){
    return(
      <History value = {i} />
    );
  }

  render(){
    return(
      <div className="calc">
        <div className="board-row">
          {this.renderHistory('History')}
        </div>
        <div className="board-row">
          {this.renderScreen('Screen')}
        </div>
        <div className="board-row">
          {this.renderNumber(7)}
          {this.renderNumber(8)}
          {this.renderNumber(9)}
          {this.renderFunction('/')}
        </div>
        <div className="board-row">
          {this.renderNumber(4)}
          {this.renderNumber(5)}
          {this.renderNumber(6)}
          {this.renderFunction('*')}
        </div>
        <div className="board-row">
          {this.renderNumber(1)}
          {this.renderNumber(2)}
          {this.renderNumber(3)}
          {this.renderFunction('-')}
        </div>
        <div className="board-row">
          {this.renderNumber(0)}
          {this.renderNumber('.')}
          {this.renderFunction('=')}
          {this.renderFunction('+')}
        </div>
        <div className="board-row">
          {this.renderClear('Clear')}
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Keypad />,
  document.getElementById('root')
);