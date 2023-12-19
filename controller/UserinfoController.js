const UserinfoModel = require('../models/UserinfoModel');

const UserinfoController = {
    getAllUsers: (req, res) => {
        UserinfoModel.getAllUsers((err, UserinfoModel) => {
            if (err) {
                res.status(500).json({ error: 'Internal Server Error' });
                return;
            }
            res.status(200).json(UserinfoModel);
        });
    },
    // Add more controller methods as needed
};

module.exports = UserinfoController;
