const mongoose = require('mongoose');
require("dotenv").config()
// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI);

// Define schemas

const UserSchema = new mongoose.Schema({
    // Schema definition here
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const TodoSchema = new mongoose.Schema({
    // Schema definition here
    title: String
});

const User = mongoose.model('User', UserSchema);
const Todo = mongoose.model('Todo', TodoSchema);

module.exports = {
    User,
    Todo
}