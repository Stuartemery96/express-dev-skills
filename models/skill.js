const skills = [
  { id: 123456, skill: 'Javascript', desc: 'Code that makes stuff happen' },
  { id: 123457, skill: 'CSS', desc: 'Code that styles the page' },
  { id: 123458, skill: 'HTML', desc: 'Code that shows up on the GUI' }
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
  update,
}

function update(id, updatedSkill) {
  id = parseInt(id);
  const skill = skills.find(skill => skill.id === id);
  Object.assign(skill, updatedSkill);
}

function deleteOne(id) {
  id = parseInt(id);
  const idx = skills.findIndex(skill => skill.id === id);
  skills.splice(idx, 1);
}

function create(skill) {
  skill.id = Date.now() % 1000000;
  skills.push(skill);
}

function getOne(id) {
  id = parseInt(id);
  return skills.find((skill) => skill.id === id);
}

function getAll() {
  return skills;
}