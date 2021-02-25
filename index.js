import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Numbers(props){
  return (
    <button className="numbers" onClick={props.onClick} value = {props.value} >
      {props.value}
    </button>
  );
}

function Functions(props){
  return (
    <button className="functions" onClick={props.onClick} value = {props.value}>
      {props.value}
    </button>
  );
}

function Clear(props){
  return (
    <button className="clear" onClick={props.onClick}>
      Clear
    </button>
  );
}

function Screen(props){
  return (
    <textarea className="screen" value={props.res} onChange={props.onChange}>
      {props.res}
    </textarea>
  );
}

function History(props){
  return (
    <textarea className="history" value={props.hist} >
      {props.hist}
    </textarea>
  );
}

class Keypad extends React.Component{
  constructor(props){
    super(props);
    this.state = {result: '0',
                  history: '0'}
    this.renderNumber = this.renderNumber.bind(this);
    this.renderClear = this.renderClear.bind(this);
    this.renderFunction = this.renderFunction.bind(this);
    this.renderScreen = this.renderScreen.bind(this);
    this.renderHistory = this.renderHistory.bind(this);

    this.handleClear = this.handleClear.bind(this);
    this.handleFunction = this.handleFunction.bind(this);
    this.handleNumber = this.handleNumber.bind(this);
  }

  renderNumber(i){
    return(
      <Numbers value = {i} onClick={this.handleNumber} />
    );
  }

  renderFunction(i){
    return(
      <Functions value = {i} onClick={this.handleFunction} />
    );
  }

  renderClear(){
    return(
      <Clear onClick={this.handleClear} />
    );
  }

  renderScreen(){
    return(
      <Screen res = {this.state.result} />
    );
  }

  renderHistory(){
    return(
      <History hist = {this.state.history} />
    );
  }

  handleClear(){
    this.setState({history: '0', result: '0'})
  }

  handleFunction(e){
    const res = this.state.result;
    const hist = this.state.history
    hist === '0' ? this.setState({result: '0', history: res + e.target.value}) 
                    : this.setState({result: '0', history: hist + res + e.target.value})
  }

  handleNumber(e){
    const res = this.state.result;
    res === '0' ? this.setState({result: e.target.value})
                  : this.setState({result: res + e.target.value})
  }

  render(){
    return(
      <div className="calc">
        <div className="board-row">
          {this.renderHistory()}
        </div>
        <div className="board-row">
          {this.renderScreen()}
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
          {this.renderClear()}
          {this.state.history}
        </div>
        {this.state.result}
      </div>
    )
  }
}

ReactDOM.render(
  <Keypad />,
  document.getElementById('root')
);