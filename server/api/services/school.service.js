const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const School = require('../models/school.model');

exports.createdSchool = async function (school) {
  console.log(school.schoolName)

  // Creating a new Mongoose Object by using the new keyword
  let newSchool = new School({
    schoolName: school.schoolName,
    schoolData: {
      year: school.schoolData.year,
      month: school.schoolData.month,
      week: school.schoolData.week
    }
  });

  try {
    // Saving the User
    let savedSchool = await newSchool.save();
    return savedSchool;
  } catch (e) {
    // return an Error message describing the reason
    throw Error("Error while Creating User");
  }
};

exports.getSchool = async function (query) {

  try {
    let school = await School.find();

    // Return the user list that was returned by the mongoose promise
    return school;
  } catch (e) {
    // return a Error message describing the reason
    throw Error('Error while Paginating Users');
  }
};


exports.getSchoolById = async function (id) {

  try {
    //Find the old User Object by the Id
    school = await School.findById(id);
    return school;
  } catch (e) {
    throw Error("Error occured while Finding the school");
  }


};


exports.updateUser = async function (user) {
  let id = user.id;
  let oldUser;

  try {
    //Find the old User Object by the Id
    oldUser = await User.findById(id);
  } catch (e) {
    throw Error("Error occured while Finding the User");
  }

  // If no old User Object exists return false
  if (!oldUser) {
    return false;
  }

  //Edit the User Object
  oldUser.firstName = user.firstName || oldUser.firstName;
  oldUser.lastName = user.lastName || oldUser.lastName;
  oldUser.avatar = user.avatar || oldUser.avatar;

  try {
    let savedUser = await oldUser.save();
    return savedUser;
  } catch (e) {
    throw Error("And Error occured while updating the User");
  }
};

exports.deleteUser = async function (id) {

  // Delete the User
  try {
    let deleted = await User.remove({ _id: id });
    if (deleted.result.n === 0) {
      throw Error("User Could not be deleted");
    }
    return deleted;
  } catch (e) {
    throw Error("Error Occured while Deleting the User")
  }
};