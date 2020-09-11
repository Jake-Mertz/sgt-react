import React from 'react';
// import ReactDOM from 'react-dom'
import Header from './header';
// import Grade from './Grade';
import GradeTable from './GradeTable';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
    // console.log(props);
    // console.log(this.state.grades);
  }

  componentDidMount() {
    fetch('/api/grades', {
      method: 'GET'
    })
      .then(res => res.json())
      .then(data => this.setState({ grades: data })
        // console.log(data)
      );
  }

  render() {
    // console.log(this.props);
    // console.log(this.state);
    return (
      <div>
        <Header />
        <GradeTable theData={this.state.grades} />
      </div>
    );
  }
}

export default App;
