const { user } = require("../models");

class UserRepository {
    async createUser(data) {
        const createUser = user.create(data);

        return createUser;
    }

    async findUserById(id) {
        const findUser = user.findOne({
            where: {
                id,
            },
        });

        return findUser;
    }

    async findUserByEmail(email) {
        const findUser = user.findOne({
            where: {
                email,
            },
        });

        return findUser;
    }

    async deleteUserById(id) {
        const deleteUser = user.destroy({
            where: {
                id,
            },
        });

        return deleteUser;
    }
}

module.exports = { UserRepository };
