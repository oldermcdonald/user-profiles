import React from 'react';
import './App.css';
import './reset.css'
import Form from './components/Form.js'


class App extends React.Component {

  constructor() {
    super()
    this.state = {
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="App">
        <Form/>
      </div>
    );
  }

}

export default App;
