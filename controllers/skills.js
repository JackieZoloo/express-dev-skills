const Skill= require("../models/skill");

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit,
    update
}
function update(req, res) {
    req.body.complete = !!req.body.complete;
    Skill.update(req.params.id, req.body);
    res.redirect(`/skills/${req.params.id}`);

}
function edit(req, res) {
    const skill = Skill.getOne(req.params.id);
    res.render("skills/edit", {skill})
}
function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect("/skills");
}
function create(req, res) {
   Skill.create(req.body)
    res.redirect("/skills");

}

function newSkill(req, res, next) {
    res.render("skills/new" );

}
function index(req, res, next) {
    res.render("skills/index", {
        skills: Skill.getAll()
    });
}

function show(req, res, next) {
    res.render("skills/show", {
        name: Skill.getOne(req.params.id),
        skillNum: Skill.getAll().findIndex(skill => skill.id === parseInt(req.params.id)) + 1
    })

}

