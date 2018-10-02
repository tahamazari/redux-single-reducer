import React, { Component } from 'react';
import {connect} from 'react-redux'
import './App.css'

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="container">
          <div>
            Age: <span>{this.props.age}</span>
          </div>
          <button className="btn btn-primary" onClick={this.props.onAgeUp}>Age UP</button>{'  '}
          <button className="btn btn-primary" onClick={this.props.onAgeDown}>Age DOWN</button>
        </div>
        <hr />
        <div className="container">
          History
        </div>
        <div className="container">
          <ul>
            {
              this.props.history.map(element => (
                <li className="historyItem" key={element.id} onClick={() => this.props.onDelete(element.id)}>
                  {element.age}
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    age: state.age,
    history: state.history
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAgeUp: () => dispatch({type: 'AGE_UP', value: 1}),
    onAgeDown: () => dispatch({type: 'AGE_DOWN', value:1 }),
    onDelete: (id) => dispatch({type: 'DELETE_ITEM', key: id})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
