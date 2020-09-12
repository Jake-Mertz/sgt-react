import React from 'react';
import Header from './header';
import GradeTable from './GradeTable';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
    // console.log(this.state.grades);
  }

  componentDidMount() {
    this.getGrades();
  }

  getGrades() {
    fetch('/api/grades')
      .then(res => res.json())
      .then(data => {
        this.setState({ grades: data });
      });
  }

  getAverageGrade() {

  }

  render() {

    const { grades } = this.state;
    // const grades = this.state.grades;

    // console.log(this.props);
    // console.log(this.state);
    return (
      <div className="container">
        <Header />
        <GradeTable grades={grades} />
      </div>
    );
  }
}

export default App;
