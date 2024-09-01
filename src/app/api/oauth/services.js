import dao from "./dao";

class AuthServices {
    async registerUser(first_name, last_name, img_link, email, password, provider, providerId) {
        return await dao.createUser(first_name, last_name, img_link, email, password, provider, providerId);
    }

    async loginUser(email, password, provider, providerId) {
        return await dao.login(email, password, provider, providerId);
    }

    async deleteUser(email, provider) {
        return await dao.deleteUser(email, provider);
    }

    async getUser(email, provider) {
        return await dao.getUser(email, provider);
    }

    async updateUser(email, provider, oldpassword, newPassword, token) {
        return await dao.updateUser(email, provider, oldpassword, newPassword, token);
    }

    async getDetails(token) {
        return await dao.getDetails(token);
    }
}

const authServices = new AuthServices();
export default authServices;
