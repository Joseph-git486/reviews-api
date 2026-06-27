const express = require('express');
const router = express.Router();

const { createReview, getAllReviews, getOneReview, updateReview, deleteReview } = require('../controllers/reviewController');
router.post('/', createReview);
router.get('/', getAllReviews);
router.get('/:id', getOneReview);
router.put('/:id', updateReview);
router.delete('/:id', deleteReview);
module.exports = router;