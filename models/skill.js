const skills = [
    {id: 125223, name: "html", complete: true },
    {id: 127904, name: "css", complete: true},
    {id: 139608, name: "javascript", complete: true, },
    {id: 130490, name: "express", complete: false },
    {id: 129389, name: "python", complete: false}
]

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
}
function update(id, skill) {
    const skillObj = skills.find(s => s.id === parseInt(id));
    Object.assign(skillObj, skill);
}
function deleteOne(id) {
    const idx = skills.find(s => s.id === parseInt(id));
    skills.splice(idx, 1);

}
function create(skill) {
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