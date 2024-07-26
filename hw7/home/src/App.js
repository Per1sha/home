import React, { Component } from 'react';

class Home extends Component {
  state = {
    num: 0,
  };

  
  handleIncrease = () => {
    this.setState(prevState => ({
      num: Math.min(prevState.num + 1, 15)
    }));
  };

    
  handleDecrease = () => {
    this.setState(prevState => ({
      num: Math.max(prevState.num - 1, 0)
    }));
  };

  handleIncreaseByFive = () => {
    this.setState(prevState => ({
      num: Math.min(prevState.num + 5, 15)
    }));
  };


  handleDecreaseByFive = () => {
    this.setState(prevState => ({
      num: Math.max(prevState.num - 5, 0)
    }));
  };

 
  handleReset = () => {
    this.setState({ num: 0 });
  };

  render() {
    const { num } = this.state;
    const { setShow } = this.props;

    return (
      <div>
        <button onClick={() => setShow(false)}>Hide</button>
        <h1>{num}</h1>
        <button onClick={this.handleIncrease}>+1</button>
        <button onClick={this.handleDecrease}>-1</button>
        <button onClick={this.handleIncreaseByFive}>+5</button>
        <button onClick={this.handleDecreaseByFive}>-5</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default Home;





