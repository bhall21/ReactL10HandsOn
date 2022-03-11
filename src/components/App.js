import React from 'react';
import Counter from './Counter';
import { connect } from 'react-redux';
import { increment, decrement, inputNumber, inputNumberChange, timesClicked} from '../actions/index';

class App extends React.Component {
  render() {
    return (
      <div>
        <h3>Counter</h3>
        <Counter count={this.props.count} onIncrement={this.props.onIncrement} onDecrement={this.props.onDecrement} onInputNumberChange={this.props.onInputNumberChange} onInputNumber={this.props.onInputNumber} timesClicked={this.props.timesClicked} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
   onInputNumber: () => dispatch(inputNumber()),
   onInputNumberChange: (number) => dispatch(inputNumberChange(number))
  };
}
function mapStateToProps(state) {
    return {
      count: state.count,
      numberInputted: state.numberInputted,
      timesClicked: state.timesClicked
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(App);