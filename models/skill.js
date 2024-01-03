const skills = [
  { id: 1234, skill: 'Javascript', desc: 'Code that makes stuff happen' },
  { id: 1235, skill: 'CSS', desc: 'Code that styles the page' },
  { id: 1236, skill: 'HTML', desc: 'Code that shows up on the GUI' }
];

module.exports = {
  getAll,
  getOne
}

function getOne(id) {
  id = parseInt(id);
  return skills.find((skill) => skill.id === id);
}

function getAll() {
  return skills;
}