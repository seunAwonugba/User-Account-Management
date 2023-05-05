const { StatusCodes } = require("http-status-codes");
const { ProfileService } = require("../service/profile-service");

const profileService = new ProfileService();

const getProfile = async (req, res, next) => {
    console.log(req.user.id);
    try {
        const profile = await profileService.getProfile(req.user.id);
        return res.status(StatusCodes.OK).json(profile);
    } catch (error) {
        next(error);
    }
};

module.exports = { getProfile };
