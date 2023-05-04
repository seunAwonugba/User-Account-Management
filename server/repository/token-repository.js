const { token } = require("../models");

class TokenRepository {
    async createToken({ accessToken, userId }) {
        const createToken = token.create({
            token: accessToken,
            userId,
        });

        return createToken;
    }

    async findToken({ accessToken }) {
        const findToken = token.findOne({
            where: {
                token: accessToken,
            },
        });

        return findToken;
    }

    async deleteToken(userId) {
        const deleteToken = token.destroy({
            where: {
                userId,
            },
        });

        return deleteToken
    }
}

module.exports = { TokenRepository };
