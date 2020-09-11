import React from 'react';
import Grade from './Grade';
// import App from './app';

function GradeTable(props) {
  // console.log(<Grade/>);
  // console.log(props);
  return <table className="gradeTable"><Grade myData={props.grades}/>
    <thead></thead>
    <tbody>
      <tr>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </tbody>

  </table>;
}

export default GradeTable;
