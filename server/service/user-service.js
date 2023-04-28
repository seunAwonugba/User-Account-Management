const { UserRepository } = require("../repository/user-repository");
const validator = require("validator");
const { createUserSchema } = require("../validator/createUserSchema");
const { UnprocessableEntity } = require("../error");
const { GenerateToken } = require("../utils");
const { sendConfirmEmail } = require("../utils/mailer");

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

        const createUser = await this.repository.createUser(data);
        const token = await GenerateToken({
            id: createUser.id,
            email: createUser.email,
        });

        const url = `${process.env.CLIENT_URL}/email-confirmation/?token=${token}`;

        sendConfirmEmail(
            createUser.email,
            "Email Confirmation",
            "verify_email",
            createUser.firstName,
            url
        );

        return {
            success: true,
            data: `Confirmation email sent to ${createUser.email}, please proceed to your mail box to confirm your email address`,
            token,
        };

        // return {
        //     success: true,
        //     data: createUser,
        //     token,
        // };
    }
}

module.exports = { UserService };
