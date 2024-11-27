import jwt from "jsonwebtoken";

const createTokenAndSaveCookie = (userId, res) => {
    try {
        // Generating the token
        const token = jwt.sign({ userId }, process.env.JWT_TOKEN, {
            expiresIn: "5d",
        });

       

        // Set the cookie with the token
        res.cookie("jwt", token, {
            httpOnly: true,  
            secure: true,
            sameSite: "strict",  
        });

    } catch (error) {
        console.error("Error generating token:", error);
    }
};

export default createTokenAndSaveCookie;
