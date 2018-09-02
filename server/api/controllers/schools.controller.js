const SchoolService = require('../services/school.service');
// const School = require('../models/school.model');

exports.createSchool = async function (req, res, next) {
  console.log(req.body)
  let School = {
    schoolName: req.body.temp.schoolName,
    schoolData: {
      year: '',
      month: '',
      week: '',
      elecEuro: '',
      elecKwh: '',
      heatEuro: '',
      heatKwh: '',
      waterEuro: '',
      waterLiter: ''
    }
  };
  console.log('===schoolAdd====');
  console.log(School);
  try {
    let createdSchool = await SchoolService.createdSchool(School);
    return res.status(200).json({ status: 201, data: createdSchool, message: "Successfully Created School" })
  } catch (e) {

    return res.status(400).json({ status: 400, message: "School Creation was Unsuccessfully" })
  }
};

exports.getSchool = async function (req, res, next) {
  try {

    let school = await SchoolService.getSchool();
    return res.status(200).json({ status: 200, data: school, message: "Successfully Users Received" });
  }
  catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.getSchoolById = async function (req, res, next) {

  if (!req.params.id) {
    return res.status(400).json({ status: 400, message: "Id must be present" })
  }

  let id = req.params.id;

  try {
    let SchoolByIdData = await SchoolService.getSchoolById(id);
    return res.status(200).json({ status: 200, data: SchoolByIdData, message: "Successfully Edit page loaded" })
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.saveSchool = async function (req, res, next) {

  let id = req.params.id;
  let SchoolDatas = {
    year: req.body.year,
    month: req.body.month,
    week: req.body.week,
    elecEuro: req.body.elecEuro,
    elecKwh: req.body.elecKwh,
    heatEuro: req.body.heatEuro,
    heatKwh: req.body.heatKwh,
    waterEuro: req.body.waterEuro,
    waterLiter: req.body.waterLiter
  };

  try {

    // // Creating a new Mongoose Object by using the new keyword
    School.findById(req.params.id)
      .exec((err, school) => {

        if (err) {
          res
            .status(400)
            .json(err);
        } else {

          school.schoolData.push({
            year: parseInt(SchoolDatas.year),
            month: parseInt(SchoolDatas.month),
            week: parseInt(SchoolDatas.week),
            elecEuro: parseInt(SchoolDatas.elecEuro),
            elecKwh: parseInt(SchoolDatas.elecKwh),
            heatEuro: parseInt(SchoolDatas.heatEuro),
            heatKwh: parseInt(SchoolDatas.heatKwh),
            waterEuro: parseInt(SchoolDatas.waterEuro),
            waterLiter: parseInt(SchoolDatas.waterLiter)

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
                .json({ "message": "success", "data": school });
            }
          });

        }
      });

  } catch (e) {

    return res.status(400).json({ status: 400, message: "School Creation was Unsuccessfully" })
  }
};


exports.removeUser = async function (req, res, next) {

  let id = req.params.id;

  try {
    let deleted = await UserService.deleteUser(id);
    return res.status(204).json({ status: 204, message: "Successfully User Deleted" })
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message })
  }

};

      
