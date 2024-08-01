import React from 'react';

function Course() {
  const courseDetails = [
    { code: 'CSE101', name: 'Introduction to Computer Science', ltps: '3-1-0-4', credits: 4 },
    { code: 'MATH101', name: 'Calculus I', ltps: '3-0-0-3', credits: 3 }
  ];

  return (
    <div>
      <h2>Courses</h2>
      <ul>
        {courseDetails.map(course => (
          <li key={course.code}>
            {course.code} - {course.name}, L-T-P-S: {course.ltps}, Credits: {course.credits}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Course;
