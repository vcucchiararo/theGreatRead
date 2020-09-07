const User = require('../models/userModel');

const post = (req, res) => {
    console.log('HE ENTRADO AQUI! Y AUN NO SOY FELIZ');
    const user = new User(req.body);
    user.save();
    res.status(201).json(user);
};

module.exports = { post };
