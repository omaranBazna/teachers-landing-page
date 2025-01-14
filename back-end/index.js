const express = require("express");
const multer = require("multer");
const path = require("path");
const { v4: uuidv4 } = require("uuid"); // Import uuid for unique ID generation

const cors = require("cors");

// Set up Express app
const app = express();
const port = 8080;

app.use(cors());

// Set up storage engine for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/"); // Directory where images will be stored
  },
  filename: (req, file, cb) => {
    // Generate a unique ID using UUID and use the original file extension
    const uniqueSuffix = uuidv4();
    req.imageID = uniqueSuffix
    cb(null, uniqueSuffix + path.extname(file.originalname)); // Unique filename
  },
});

// Initialize multer with the storage configuration
const upload = multer({ storage});

// Serve static files (e.g., profile images)
app.use("/uploads", express.static("uploads"));
app.get("/",(req,res)=>{
    res.send("I am up")
})
// API endpoint to handle image upload
app.post(
  "/upload-profile-image",
  upload.single("profile_image"),
  (req, res) => {
    console.log("start uploading")
    if (!req.file) {
      return res
        .status(400)
        .json({ success: false, message: "No file uploaded" });
    }
   
    // Return the uploaded file details with the generated ID
    res.json({
      success: true,
      message: "Image uploaded successfully",
      file: req.file,
      url:`http://localhost:${port}/uploads/${req.file.filename}`
    });
  },
);

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
