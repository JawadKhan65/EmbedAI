import { hash_password, generateToken, comparePassword } from "../../../../lib/utils";
import { clientPromise } from "../../../../lib/db";

const dbName = process.env.DB_NAME;

class AuthDao {
    constructor() {
        this.clientPromise = clientPromise;
    }

    async getCollection() {
        const client = await this.clientPromise;
        return client.db(dbName).collection("users");
    }

    async getUser(email, provider = 'local') {
        try {
            const collection = await this.getCollection();
            const user = await collection.findOne({ email, provider });
            return { data: user || null };
        } catch (error) {
            console.error("Error finding user:", error);
            throw new Error("Internal Server Error");
        }
    }

    async findExistingUser(email, provider = 'local') {
        try {
            const collection = await this.getCollection();
            const user = await collection.findOne({ email, provider });
            return { success: !!user };
        } catch (error) {
            console.error("Error finding user:", error);
            throw new Error("Internal Server Error");
        }
    }

    async createUser(FirstName, LastName, img_link = null, email, password = null, provider = 'local', providerId = null) {
        try {
            const { success } = await this.findExistingUser(email, provider);

            if (success) {
                return { response: "User already exists", success: false }
            }

            const collection = await this.getCollection();
            let newUser;

            if (provider === 'local') {
                if (!password) {
                    return { response: "Password is required", success: false }
                }
                const hashedPassword = await hash_password(password);
                newUser = await collection.insertOne({ first_name: FirstName, last_name: LastName, img_link: img_link, email: email, password: hashedPassword, provider: provider });
            } else {
                newUser = await collection.insertOne({ first_name: FirstName, last_name: LastName, img_link: img_link, email: email, provider: provider, providerId: providerId });
            }

            const authToken = await generateToken({ id: newUser?.insertedId, first_name: FirstName, last_name: LastName, img_link: img_link, email: email });
            if (!authToken) {
                return { response: "Error generating token", success: false }
            }



            return { response: { email }, token: authToken, success: true }
        } catch (error) {
            console.error("Error creating user:", error);
            return { response: "Internal Server Error", success: false }
        };
    }


    async login(email, password = null, provider = 'local', providerId = null) {
        try {
            const { success } = await this.findExistingUser(email, provider);

            if (!success) {
                return { response: "Invalid email or password", success: false }
            }

            const collection = await this.getCollection();
            const user = await collection.findOne({ email, provider });

            if (provider === 'local') {
                const isPasswordValid = await comparePassword(password, user.password);
                if (!isPasswordValid) {
                    return { response: "Invalid email or password", success: false }
                }
            } else if (user.providerId !== providerId) {
                return { response: "Invalid provider credentials", success: false }
            }

            let authToken = await generateToken({ id: user._id, first_name: user?.first_name, last_name: user?.last_name, img_link: user?.img_link, email: user?.email, });
            if (!authToken) {
                console.error("authToken is undefined or null.");
                return;
            }

            return { response: "Login successful", token: authToken, success: true }
        } catch (error) {
            console.error("Error logging in:", error);
            return { response: "Internal Server Error", success: false }
        }
    }

    async deleteUser(email, provider = 'local') {
        try {
            const { success } = await this.findExistingUser(email, provider);

            if (!success) {
                return { response: "User not found", success: false }
            }

            const collection = await this.getCollection();
            const deletedUser = await collection.deleteOne({ email, provider });

            if (deletedUser.deletedCount > 0) {
                return { response: "User deleted successfully", success: true }
            } else {
                return { response: "Error deleting user", success: false }
            }
        } catch (error) {
            console.error("Error deleting user:", error);
            return { response: "Internal Server Error", success: false }
        }
    }

    async updateUserPassword(email, provider = 'local', oldPassword, newPassword, token) {
        try {
            const decoded = verifyToken(token);
            if (!decoded || decoded.email !== email) {
                return { response: "Unauthorized", success: false }
            }

            const collection = await this.getCollection();
            const user = await collection.findOne({ email, provider });

            if (!user) {
                return { response: "User not found", success: false }
            }

            if (provider === 'local') {
                const isPasswordValid = await comparePassword(oldPassword, user.password);
                if (!isPasswordValid) {
                    return { response: "Invalid old password", success: false }
                }
            }

            const hashedPassword = await hash_password(newPassword);
            const result = await collection.updateOne({ email, provider }, { $set: { password: hashedPassword } });

            if (result.modifiedCount > 0) {
                return { response: "Password updated successfully", success: true }
            } else {
                return {
                    response: "Failed to update password", success: false
                }
            }
        } catch (error) {
            console.error("Error updating password:", error);
            return { response: "Internal Server Error", success: false }
        }
    }
    async getDetails(token) {
        try {
            const decoded = verifyToken(token);
            if (!decoded) {
                return { response: "Unauthorized", success: false }
            }





            return { response: decoded, success: true }
        } catch (error) {
            console.error("Error getting user details:", error);
            return { response: "Internal Server Error", success: false }
        }
    }
}

const dao = new AuthDao();
export default dao;
