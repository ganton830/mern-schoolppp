const SchoolService = require('../services/school.service');

exports.createSchool = async function (req, res, next) {

  let School = {
    schoolName: req.body.schoolName,
    schoolData: {
      year: req.body.schoolData.year,
      month: req.body.schoolData.month,
      week: req.body.schoolData.week
    }
  };

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
exports.removeUser = async function (req, res, next) {

  let id = req.params.id;

  try {
    let deleted = await UserService.deleteUser(id);
    return res.status(204).json({ status: 204, message: "Successfully User Deleted" })
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message })
  }

};