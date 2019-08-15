const SubTask = require('../models/subTask');

exports.index = (req, res) => {
    SubTask.find()
        .populate('task')
        .populate('author')
        .then(subtasks => res.json(subtasks))
        .catch(err => res.status(404).send(err));
};
exports.show = (req, res) => {

    SubTask.findOne({
        _id: req.params.id,
    })
        .then(subtask => res.json(subtask))
        .catch(err => res.status(401).send(err));
};

exports.update =(req, res) => {
    if (!req.isAuthenticated()) return res.status(401).send({error: "sign in idget"});

    SubTask.updateOne({
        _id: req.body.id,
        author: req.session.userId
    },req.body.subtask, {
        runValidators: true
    })
        .then(()=> res.status(202).send({success: "your subtask is updated"}))
        .catch(err => res.status(400).send(err));
};

exports.create =(req, res) => {
    if (!req.isAuthenticated()) return res.status(401).send({error: "sign in idget"});

    console.log(req.body);

    req.body.subtask.author = req.session.userId;
    SubTask.create(req.body.subtask)
    .then(() => res.status(201).send({success: "Taks are created"}))
    .catch(err => res.status(400).send(err));
}
exports.edit =(req, res) => {
    if (!req.isAuthenticated()) return res.status(401).send({error: "sign in idget"});

    SubTask.findOne({
        _id: req.params.id,
        author: req.session.userId
    })
    .then(subtask => res.json(subtask))
    .catch(err => res.status(400).send(err));
}
exports.destroy =(req, res) => {
    if (!req.isAuthenticated()) return res.status(401).send({error: "sign in idget"});

    SubTask.deleteOne({
        _id: req.body.id,
        author: req.session.userId
    })
    .then(() => res.status(202).send({success: "your subtask is deleted and may be completed"}))
    .catch(err => res.status(401).send(err));
}