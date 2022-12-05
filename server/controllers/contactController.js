const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../utils/catchAsyncErrors");
const Contact = require("../models/contactModel");

exports.saveMessage = catchAsyncErrors(async (req, res, next) => {
  const { name, email, subject, message } = req.body;
  const contact = await Contact.create({ name, email, subject, message });

  res.status(200).json({
    success: true,
    contact,
    message: "contact recevied",
  });
});
