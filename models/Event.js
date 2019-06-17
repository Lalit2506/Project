const mongoose = require('mongoose');

//our schema
const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        requrie: true
    },
    date: {
        type: date
    },
    status: {
        type: String,
        enum:['Done', 'On-Going'],
        default:'On-Going'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('SubTask', TaskSchema);