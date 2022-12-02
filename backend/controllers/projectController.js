const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../utils/catchAsyncErrors");
const Project = require("../models/projectModel");
const multer = require("multer");
const fs = require("fs");
const Storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: Storage,
}).single("projectImage");

exports.uploadProject = catchAsyncErrors(async (req, res, next) => {
  upload(req, res, (err) => {
    if (err) {
      return next(new ErrorHandler("upload project failed"));
    }

    const project = new Project({
      name: req.body.name,
      title: req.body.title,
      github: req.body.github,
      website: req.body.website,
      tech: req.body.tech,
      desc: req.body.desc,
      category: req.body.category,
      image: {
        data: fs.readFileSync("uploads/" + req.file.filename),
        contentType: "image/png",
      },
    });
    project
      .save()
      .then(() =>
        res.status(200).send({
          success: true,
          message: "Project uploaded successfully",
          project,
        })
      )
      .catch((err) => {
        console.log("****************started*********");
        console.log(err);
        res
          .status(400)
          .send({ success: false, message: "Project upload failed" });
      });
  });
});

exports.getAllProjects = catchAsyncErrors(async (req, res, next) => {
  const projects = await Project.find({});

  if (!projects) {
    return next(new ErrorHandler("Project not found"));
  }

  res.status(200).send({
    success: true,
    message: "projects found",
    projects,
  });
});

exports.getSingleProject = async (req, res, next) => {
  const id = req.params.id;

  const project = await Project.findById(id);

  if (!project) return next(new ErrorHandler("Project not found"));

  res.status(200).send({
    success: true,
    message: "Project found",
    project,
  });
};
