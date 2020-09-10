import React from 'react';
// import ReactDOM from 'react-dom'
import Header from './header';
// import Grade from './grade';
import GradeTable from './GradeTable';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
  }

  componentDidMount() {
    fetch('/api/grades', {
      method: 'GET'
    })
      .then(res => res.json())
      .then(data => this.setState({ grades: data })
        // console.log(this.data)
      );

  }
  /* <tr key={this.state.grades.name}>
<td key={this.state.grades}>{this.state.grades.name}</td>
<td key={this.state.grades}>{this.state.grades.course}</td>
<td key={this.state.grades}>{this.state.grades.grade}</td>
</tr>  */

  render() {
    // console.log(this.props);
    return (
      <div>
        <Header />
        <GradeTable grades={this.state.grades} />
      </div>
    );
  }
}

export default App;
