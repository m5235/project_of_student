const { User, validate } = require('../models/Users');

const createUser = (req, res, next) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = new User({
        email: req.body.email,
        password: req.body.password,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        level: req.body.level,
        identifier: req.body.identifier,
        room: req.body.room,
        school: req.body.school,
    })

    user.save().then(result => {
        res.status(201).json({
            message: 'Student Created',
            result: result
        });
    }).catch(err => {
        res.status(500).json({
            message: 'Student Exist',
            error: err
        });
    });
}

function getAll(req, res, next) {
    User.find()
        .exec()
        .then(users => res.status(200).json(users))
        .catch(err => res.status(500).json({
            message: 'Students not found - :(',
            error: err
        }))
}

function getById(req, res, next) {
    User.findOne({_id: req.params.id})
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}


function deleteUser(req, res, next) {
    User.deleteOne({ _id: req.params.id }).then(result => {
        if (result.n > 0) {
            res.status(200).json({ message: 'Student Deleted Successful !' });

        } else {
            res.status(404).json({ message: "Student not Found" });

        }
    })
}

function updateUser(req, res) {
    const student = User.findByIdAndUpdate(req.params.id,{
        email :req.body.email,
        password : req.body.password,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        level: req.body.level,
        identifier: req.body.identifier,
        room: req.body.room,
        scool: req.body.school
    },{new:true}).then(result => {
        res.status(201).json({
            message : 'Student  Updated',
            result: result
        });
    }).catch(err=>{
        res.status(500).json({
            message : 'Student not Updated',
            error: err
        });  
    });
}


module.exports = {getAll,getById,createUser,deleteUser,updateUser}