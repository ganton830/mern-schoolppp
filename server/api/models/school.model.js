const { mongoose } = require('../../config');
const mongoosePaginate = require('mongoose-paginate');

let SchoolSchema = new mongoose.Schema({
  schoolName: String,
  schoolData:{
    year:String,
    month: String,
    week: String
  }
});

// SchoolSchema.plugin(mongoosePaginate);
const School = mongoose.model('School', SchoolSchema);

module.exports = School;