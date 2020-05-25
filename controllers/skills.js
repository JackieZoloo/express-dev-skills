const Skill = require('../models/skill');

module.exports = {
  index,
  show,
  new: newSkill,
  create,
  delete: deleteSkill,
  edit
};
function edit(req, res) {
  //Retrieve the todo being edited

  const name = Skill.edit(req.params.id)
  res.render("skills/edit", {name});

}
function deleteSkill(req, res) {
  // The model is responsible for deleting the todo
  Skill.deleteOne(req.params.id);
  res.redirect('/skills');
}

function create(req, res) {
  console.log(req.body);
  // The model is responsible for creating data
  Skill.create(req.body);
  // Do a redirect anytime data is changed
  res.redirect('/skills');
}

function newSkill(req, res) {
  res.render('skills/new.ejs');
}

function index(req, res) {
  res.render('skills/index', {
    names: Skill.getAll(),
    time: req.time
  });
}

function show(req, res) {
  res.render('skills/show', {
    name: Skill.getOne(req.params.id),
    // Would like to display the number of the todo within the list
    skillNum: Skill.getAll().findIndex(skill => skill.id === parseInt(req.params.id)) + 1
  });
}
