const express = require('express');
const router = express.Router();

var mongoose = require('mongoose');
var Schools = require('../models/school.model');
// Getting the User Controller

const SchoolController = require('../controllers/schools.controller');

// Map each API to the Controller Functions
router.post('/', SchoolController.createSchool);
router.get('/', SchoolController.getSchool);
router.get('/:id', SchoolController.getSchoolById);


module.exports = router;