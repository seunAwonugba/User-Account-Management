const { user } = require("../models");

class UserRepository {
    async createUser(data) {
        const createUser = user.create(data);

        return createUser;
    }
}

module.exports = { UserRepository };
