const mongoose = require('mongoose');
const School = mongoose.model('School');
// const School = require('../models/schools');

const schoolsHome = function (req, res) {
    School
        .find()
        .exec((err, school) => {
            if (err) {
                res
                    .status(400)
                    .json(err);
            } else {
                res.json(school);
            }
        })
};

const schoolsAdd = function (req, res) {
    // show schoolsAdd window
};

const schoolsCreate = function (req, res) {
    let newSchool = new School({
        name: req.body.name
    });

    newSchool.save((err, school)=>{
        if (err)
        {
            res
                .status(400)
                .json(err);
        } else {
            res.json(school);
        }
    });
    
};

const statisticsList = function (req, res) {
    if (req.params && req.params.schoolid){
        School
            .findById(req.params.schoolid)
            .exec((err, school) => {
                if (!school) {
                    res
                        .status(404)
                        .json({
                            "message": "schoolid not found"
                        });
                    return;                   
                } else if (err) {
                    res
                        .status(404)
                        .json(err);
                    return;
                }
                res
                    .status(200)
                    .json(school);
            });
    } else {
        res
            .status(404)
            .json({
                "message": "No schoolid in request"
            })
    }
};

const statisticsCreate = function (req, res) {

    /*     const schoolid = req.params.schoolid;
    if (schoolid) {
        School
            .findById(schoolid)
            .exec((err, school) => {
                if (err) {
                    res
                        .status(400)
                        .json(err);
                } else {
                    statisticsSave(req, res, school);
                }
            });
    } else {
        res
            .status(404)
            .json({
                "message" : "Not found, schoolid required"
            });
    } */
};

const statisticsSave = function (req, res) {
console.log('====schools.js==')
    const schoolid = req.body._id;
    School
        .findById(schoolid)
        .exec((err, school) => {
            if (err) {
                res
                    .status(400)
                    .json(err);
            } else {
                school.schoolData.push({
                    year: parseInt(req.body.year),
                    week: parseInt(req.body.week),
                    month: parseInt(req.body.month),
                    elecEuro: parseFloat(req.body.elecEuro),
                    elecKwh: parseFloat(req.body.elecKwh),
                    heatEuro: parseFloat(req.body.heatEuro),
                    heatKwh: parseFloat(req.body.heatKwh),
                    waterEuro: parseFloat(req.body.waterEuro),
                    waterLiter: parseFloat(req.body.waterLiter)
                });
                school.save((err, school) => {
                    if (err) {
                        console.log(err);
                        res
                            .status(400)
                            .json(err);
                    } else {
                        res
                            .status(201)
                            .json({"message":"success", "data":school});
                    }
                });
            }
        });
    
};

const statisticsEdit = function (req, res) {
    res.json("You can create schools");
};

const statisticsUpdateOne = function (req, res) {
    res.json("You can create schools");
};

const statisticsDeleteOne = function (req, res) {
    res.json("You can create schools");
};

module.exports = {
    schoolsHome,
    schoolsAdd,
    schoolsCreate,
    statisticsList,
    statisticsCreate,
    statisticsSave,
    statisticsEdit,
    statisticsUpdateOne,
    statisticsDeleteOne
}

