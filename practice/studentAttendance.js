// Homework
const students = [
  {
    name: "Sophia",
    attendance: [true, true, false, true, true],
    testScores: [88, 92, 85, 78, 90],
  },
  {
    name: "Mason",
    attendance: [true, true, true, true, false],
    testScores: [70, 82, 88, 75, 62],
  },
  {
    name: "Isabella",
    attendance: [true, false, false, true, true],
    testScores: [68, 71, 70, 60, 78],
  },
  {
    name: "Liam",
    attendance: [true, true, true, true, true],
    testScores: [90, 87, 92, 88, 95],
  },
  {
    name: "Olivia",
    attendance: [true, true, true, true, false],
    testScores: [72, 78, 75, 80, 62],
  },
];

const getAttendanceRate = (students) => {
  return students.map((student) => {
    const attendance = student.attendance;
    const totalDays = attendance.length;
    const totalPresent = attendance.filter((day) => day).length;
    return totalPresent / totalDays * 100 + "%";
  });
};

const getAvgScore = (students) => {
  return students.map((student) => {
    const testScores = student.testScores;
    const totalScores = testScores.length;
    const total = testScores.reduce((acc, score) => acc + score, 0);
    return total / totalScores;
  });
};

const underPerformStudents = (students) => {
  const avgScores = getAvgScore(students);
  return students.filter((student, index) => {
    return student.testScores < avgScores[index];
  });
};

console.log(getAttendanceRate(students));
console.log(getAvgScore(students));


