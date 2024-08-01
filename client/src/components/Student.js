import React from 'react';

function Student() {
  const studentDetails = [
    { id: 1, name: 'Alice Johnson', branch: 'CSE', year: '2nd Year' },
    { id: 2, name: 'Bob Brown', branch: 'ECE', year: '1st Year' },
    { id: 3, name: 'Charlie Davis', branch: 'EEE', year: '3rd Year' }
  ];

  return (
    <div>
      <h2>Students</h2>
      <ul>
        {studentDetails.map(student => (
          <li key={student.id}>
            {student.id} - {student.name}, {student.branch}, {student.year}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Student;
