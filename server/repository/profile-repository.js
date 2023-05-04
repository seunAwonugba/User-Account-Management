const { profile } = require("../models");

class ProfileRepository {
    async createUserProfile({ firstName, lastName, email, userId }) {
        const data = { firstName, lastName, email, userId };
        const createProfile = profile.create({ ...data });

        return createProfile;
    }
}

module.exports = { ProfileRepository };
