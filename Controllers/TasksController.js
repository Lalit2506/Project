const Task = require('../models/task');

exports.index = (req, res) => {
    Task.find()
    .then(blogs => {
        res.render('tasks/index', {
            tasks: tasks,
            title: 'Lists'
        });
    })
    .catch(err => {
        console.error(`Error: ${err}`);
    });
};
exports.show = (req, res) => {
    Task.findById(req.params.id)
    .then(task => {
        res.render('blogs/show',{
            task: task,
            title: task.title
        });
    })
    .catch(err => {
        console.error(`Error: ${err}`);
    });
};
exports.new =(req, res) => {
    res.render('tasks/new', {
        title: 'New Task Post'
    });
}
exports.update =(req, res) => {
    Task.updateOne({
        _id: req.body.id
    },req.body.task, {
        runValidators: true
    })
    .then(()=> {
        res.redirect(`/tasks/${req.body.id}`);
    })
    .catch(err => {
        console.error(`ERROR: ${err}`);
    });
};

exports.new = ( req,res ) => {
    res.render('blogs/new', {
        title: 'New Blog Post'
    });
}
exports.create =(req, res) => {
    Task.create(req.body.task)
    .then(() => {
       res.redirect('/tasks');
    })
    .catch(err => {
        console.error(`Error: ${err}`);
    });
}
exports.edit =(req, res) => {
    Task.findById(req.params.id)
    .then(task => {
        res.render('tasks/edit',{
            task: task,
            title: task.title
        });
    })
    .catch(err => {
        console.error(`Error: ${err}`);
    });
}
exports.destroy =(req, res) => {
    Task.deleteOne({
        _id: req.body.id
    })
    .then(() => {
        res.redirect('/tasks');
    })
    .catch(err => {
        console.error(`ERROR: ${err}`);
    });
}