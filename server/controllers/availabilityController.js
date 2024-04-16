const asyncHandler = require("express-async-handler");
const { v4: uuidv4 } = require("uuid"); // https://www.npmjs.com/package/uuid

exports.createAvailability = asyncHandler(async (req, res, next) => {
  res.json({ hash: uuidv4() });
});
