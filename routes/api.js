const express = require('express');
const UserinfoController = require('../controller/UserinfoController');
const DomainLookupController = require('../controller/DomainLookupController');
const SelectController = require('../controller/SelectController');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.send("user api access");
})


router.get('/userinfo', UserinfoController.getAllUsers);
router.get('/whois/:domainToLookup', DomainLookupController.lookupDomain);
router.get('/test', SelectController.getAll);
router.get('/testbi', SelectController.getAllbi);


// Add more routes as needed

module.exports = router;
