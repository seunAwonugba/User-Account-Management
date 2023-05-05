const express = require("express");
const { getProfile } = require("../controller/profile");

const profileRouter = express.Router();

profileRouter.get("/get-profile", getProfile);

module.exports = { profileRouter };
