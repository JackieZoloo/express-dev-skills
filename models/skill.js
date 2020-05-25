// The ids can be generated using:
// Date.now() % 1000000
let skills = [
    {id: 125223, skill: 'javascript', complete: true},
    {id: 127904, skill: ' css', complete: false},
    {id: 139608, skill: 'html', complete: false}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
  };
  
  function update(id, skill) {
    const skillObj = skills.find(t => t.id === parseInt(id));
    Object.assign(skillObj, skill);
  }
  
  function deleteOne(id) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
  }
  
  function create(todo) {
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill);
  }
  
  function getOne(id) {
    // Use the Array.prototype.find iterator method
    return skills.find(skill => skill.id === parseInt(id));
  }
  
  function getAll() {
    return skills;
  }