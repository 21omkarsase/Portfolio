const mongoose = require("mongoose");

const projectsModel = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  github: {
    type: String,
    required: true,
  },
  website: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  tech: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    data: Buffer,
  },
});

module.exports = mongoose.model("Project", projectsModel);
