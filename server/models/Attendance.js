const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema(
    {
        // Define the user field as a reference to a User document
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",  // Referencing the "User" model/collection
            required: true,
        },
        // Define the date field with type Date and required
        date: {
            type: Date,
            required: true,
        },
        // Define the status field with type String and enum values of "Present", "Absent", "Late"
        status: {
            type: String,
            enum: ["Present", "Absent", "Late"],
            required: true,
        },
    },
    { timestamps: true }  // Add timestamps for createdAt and updatedAt
);

// Export the Mongoose model for the attendance schema, using the name "Attendance"
module.exports = mongoose.model("Attendance", attendanceSchema);
