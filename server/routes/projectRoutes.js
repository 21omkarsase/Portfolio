const express = require("express");
const {
  uploadProject,
  getAllProjects,
  getSingleProject,
} = require("../controllers/projectController");

const router = express.Router();

router.route("/upload").post(uploadProject);
router.route("/allprojects").get(getAllProjects);
router.route("/singleProject/:id").get(getSingleProject);

module.exports = router;
