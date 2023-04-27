const { UserRepository } = require("../repository/user-repository");
const validator = require("validator");
const { createUserSchema } = require("../validator/createUserSchema");
const { UnprocessableEntity } = require("../error");

class UserService {
    constructor() {
        this.repository = new UserRepository();
    }

    async signUp(payload) {
        const data = await createUserSchema.validateAsync(payload);
        if (!validator.default.isStrongPassword(data.password)) {
            throw new UnprocessableEntity(
                "Your password must include a minimum of 8 characters, at least one number, and a combination of uppercase and lowercase letters."
            );
        }
        return {
            success: true,
            data,
        };
    }
}

module.exports = { UserService };
