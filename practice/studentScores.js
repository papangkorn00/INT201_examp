const studentScores = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 92 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 55 },
  { name: "Eve", score: 78 },
];

const getPassingNames = () => {
  const passingScore = studentScores.filter((s) => s.score > 70);
  return passingScore.map((score) => score.name.toUpperCase());
};

const passingNames = getPassingNames(studentScores);
console.log(passingNames);
