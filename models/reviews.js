const mongoose = require('mongoose');
const reviewSchema = new mongoose.Schema(
    {
    reviewerName: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 50
    },
    productName : {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 50
    },
    comment: {
        type: String,
        required: false,
        minlength:1,
        maxlength:500
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    }
    },
    {timestamps: true}
);

const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;