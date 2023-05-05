const { BadRequest } = require("../error");
const { ProfileRepository } = require("../repository/profile-repository");
class ProfileService {
    constructor() {
        this.profileRepository = new ProfileRepository();
    }

    async getProfile(userId) {
        const userProfile = await this.profileRepository.getProfile(userId);

        if (!userProfile) {
            throw new BadRequest("User not found");
        }

        return {
            success: true,
            data: userProfile,
        };
    }
}

module.exports = { ProfileService };
