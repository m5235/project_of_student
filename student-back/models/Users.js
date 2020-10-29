const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Joi = require('joi');


const userSchema = new mongoose.Schema({
    email: {
        type: String, required: true, unique: true
    },
    password: {
        type: String,
        required: true,
    },
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    level: {
        type: String,
        required: true,
    },
    identifier: {
        type: String,
        required: true,
    },
    room: {
        type: String,
        required: true,
    },
    school: {
        type: String,
        required: true,
    }

}, {
    timestamps: true
});
userSchema.plugin(uniqueValidator);

const User = mongoose.model('User', userSchema);

function validateUser(user) {
    const schema = {
        email: Joi.string().required(),
        password: Joi.string().required(),
        firstname: Joi.string().required(),
        lastname: Joi.string().required(),
        level: Joi.string().required(),
        identifier: Joi.string().required(),
        room: Joi.string().required(),
        school: Joi.string().required(),
    };
    return Joi.validate(user, schema);
}

exports.User = User;
exports.validate = validateUser;