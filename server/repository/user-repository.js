const { user } = require("../models");

class UserRepository {
    async createUser({ firstName, lastName, email, password }) {
        const data = { firstName, lastName, email, password };

        // const createUser = user.create({ ...data });

        return data;
    }
}

module.exports = { UserRepository };
