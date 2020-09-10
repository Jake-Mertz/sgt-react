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
    fetch('../../database/db.json', {
      method: 'GET'
    })
      .then(res => res.json())
      .then(data => this.setState({ grades: data }));
  }

  // const myGrades = this.state.grades.map(grades => {
  //   <tr key={grades.name}>
  //     <td key={grades}>{grades.name}</td>
  //     <td key={grades}>{grades.course}</td>
  //     <td key={grades}>{grades.grade}</td>
  //   </tr>
  // });

  render() {
    return (
      <div>
        <Header />
        <GradeTable grades={this.state.grades} />
      </div>
    );
  }
}

export default App;
