import React from 'react';
import Header from 'header.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
    this.getGrades = this.getGrades.bind(this);
  }

  componentDidMount() {
    this.getGrades();
  }

  getGrades() {
    fetch('../../database/db.json', {
      method: 'GET'
    }
      .then(res => res.json())
      .then(data => this.setState({ grades: data })));
  }

  render() {
    return (
      <div><Header /></div>
    );
  }
}

export default App;
