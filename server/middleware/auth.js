import jwt from "jsonwebtoken";

const auth = async (request, response, next) => {
    try {
        const token = request.cookies.accessToken || request?.headers?.authorization?.split(" ")[1];

        // console.log("🔹 Received Token:", token); // Debugging

        if (!token) {
            return response.status(401).json({
                message: "Provide token",
                error: true,
                success: false
            });
        }

        const decode = jwt.verify(token, process.env.SECRET_KEY_ACCESS_TOKEN);

        // console.log("✅ Decoded Token:", decode); // Debugging

        request.userId = decode.id;
        next();
    } catch (error) { 
        console.error("❌ Token Verification Failed:", error.message); // Debugging
 
        return response.status(401).json({
            message: "You have not logged in",
            error: true,
            success: false
        });
    }
};

export default auth;
