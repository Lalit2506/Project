const mongoose = require('mongoose');

//our schema
const ToDoSchema = new mongoose.Schema({
    title: {
        type: String,
        requrie: true
    },
    Details: {
        type: String
    },
    status: {
        type: String,
        enum:['Done', 'On-Going'],
        default:'On-Going'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('ToDo', ToDoSchema);