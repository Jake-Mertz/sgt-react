import React from 'react';
import Header from './header';
import GradeTable from './GradeTable';
import GradeForm from './gradeform';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
    this.addGrade = this.addGrade.bind(this);
    this.getGrades = this.getGrades.bind(this);
    this.getAverageGrade = this.getAverageGrade.bind(this);
  }

  componentDidMount() {
    this.getGrades();
    this.getAverageGrade();
  }

  getGrades() {
    fetch('/api/grades')
      .then(res => res.json())
      .then(data => {
        this.setState({ grades: data });
      });
  }

  addGrade(name, course, grade) {
    fetch('/api/grades', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, course, grade })
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ grades: [...this.state.grades, data] });
      })
      .catch(err => console.error(err));
  }

  getAverageGrade(props) {
    let sum = 0;
    for (let i = 0; i < this.state.grades.length; i++) {
      sum += this.state.grades[i].grade;
    }
    const average = sum / this.state.grades.length;
    const averageRounded = Math.floor(average);
    return averageRounded;
  }

  render() {
    const { grades } = this.state;
    return (
      <div className="container">
        <Header average={this.getAverageGrade()}/>
        <GradeTable grades={grades} />
        <GradeForm grade={this.props.newGrade} addGrade={this.addGrade}/>
      </div>
    );
  }
}

export default App;
