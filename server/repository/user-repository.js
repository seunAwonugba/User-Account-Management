const { user } = require("../models");

class UserRepository {
    async createUser(data) {
        const createUser = user.create(data);

        return createUser;
    }

    async findUser(id) {
        const findUser = user.findOne({
            where: {
                id,
            },
        });

        return findUser;
    }

    async deleteUser(id) {
        const deleteUser = user.destroy({
            where: {
                id,
            },
        });

        return deleteUser;
    }
}

module.exports = { UserRepository };
