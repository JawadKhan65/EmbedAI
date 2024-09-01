import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const hash_password = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}


export const comparePassword = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
}

export const generateToken = async (payload) => {
    return await jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: '1d'
    });
}



export const verifyToken = async (token) => {
    try {

        const decoded = await new Promise((resolve, reject) => {
            jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
                if (err) {
                    return reject(err); // Token verification failed
                }
                resolve(decoded); // Token successfully verified
            });
        });


        return { success: true, data: decoded };

    } catch (error) {

        if (error.name === 'TokenExpiredError') {
            return { success: false, message: 'Token expired' };
        }
        return { success: false, message: 'Token verification failed' };
    }
};


export const decodeToken = async (token) => {
    return await jwt.decode(token);
}





