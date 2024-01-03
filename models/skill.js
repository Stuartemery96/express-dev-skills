const skills = [
  { id: 1234, skill: 'Javascript' },
  { id: 1235, skill: 'CSS' },
  { id: 1236, skill: 'HTML' }
];

module.exports = {
  getAll
}

function getAll() {
  return skills;
}