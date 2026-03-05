import { v2 as cloudinary } from "cloudinary";
import streamifier from "streamifier";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

// Cloudinary Configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// Function to Upload Image to Cloudinary
const uploadImageToCloudinary = (fileBuffer) => {
    return new Promise((resolve, reject) => {
        let stream = cloudinary.uploader.upload_stream(
            { folder: "uploads" }, // Optional: specify folder in Cloudinary
            (error, result) => {
                if (error) return reject(error);
                resolve(result);
            }
        );
        streamifier.createReadStream(fileBuffer).pipe(stream);
    });
};

// Controller Function for Uploading Image
export const uploadImageController = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                message: "No file uploaded",
                success: false,
                error: true
            });
        }

        const uploadedFile = await uploadImageToCloudinary(req.file.buffer);

        return res.json({
            message: "File uploaded successfully",
            data: uploadedFile,
            success: true,
            error: false
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message || "Internal Server Error",
            success: false,
            error: true
        });
    }
};
