import React from 'react';
import Grade from './Grade';

function GradeTable(props) {
  const gradeElements = props.grades.map(gradeData => {
    const { id, name, course, grade } = gradeData;
    return <Grade key={id} name={name} course={course} grade={grade}/>;
  });

  return (
    <table className="table table-striped">
      <thead>
        <tr className="bg-light">
          <th>Name</th>
          <th>Course</th>
          <th>Grade</th>
        </tr>
      </thead>
      <tbody>
        {gradeElements}
      </tbody>
    </table>
  );
}

export default GradeTable;
