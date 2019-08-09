const Task = require('../models/task');

exports.index = (req, res) => {
    Task.find()
        
        .populate('author')
        .then(tasks => res.json(tasks))
        .catch(err => res.status(404).send(err));
};
exports.show = (req, res) => {

    Task.findOne({
        _id: req.params.id,
    })
        
        .then(task => res.json(blog))
        .catch(err => res.status(401).send(err));
};

exports.update =(req, res) => {
    if (!req.isAuthenticated()) return res.status(401).send({error: "sign in idget"});

    Task.updateOne({
        _id: req.body.id,
        author: req.session.userId
    },req.body.task, {
        runValidators: true
    })
        .then(()=> res.status(202).send({success: "your task is updated"}))
        .catch(err => res.status(400).send(err));
};

exports.create =(req, res) => {
    if (!req.isAuthenticated()) return res.status(401).send({error: "sign in idget"});

    req.body.task.author = req.session.userId;
    Task.create(req.body.task)
    .then(() => res.status(201).send({success: "Taks are created"}))
    .catch(err => res.status(400).send(err));
}
exports.edit =(req, res) => {
    if (!req.isAuthenticated()) return res.status(401).send({error: "sign in idget"});

    Task.findOne({
        _id: req.params.id,
        author: req.session.userId
    })
    .then(task => res.json(task))
    .catch(err => res.status(400).send(err));
}
exports.destroy =(req, res) => {
    if (!req.isAuthenticated()) return res.status(401).send({error: "sign in idget"});

    Task.deleteOne({
        _id: req.body.id,
        author: req.session.userId
    })
    .then(() => res.status(202).send({success: "your task is deleted and may be completed"}))
    .catch(err => res.status(401).send(err));
}