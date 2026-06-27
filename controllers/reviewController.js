const Review = require('../models/reviews');
async function createReview(req, res, next){
    try{
        const saved = await Review.create(req.body);
        res.status(201).json(saved);
    } catch(err){
        next(err);
    }
}

async function getAllReviews(req, res, next){
    try{
        const revs = await Review.find();
        res.status(200).json(revs);
    } catch(err){
        next(err);
    }
}

async function getOneReview(req, res, next){
    const id = req.params.id;
    try{
        const rev = await Review.findById(id);
        if(!rev){
            return res.status(404).json({error: "Review not found."});
        }
        res.status(200).json(rev);

    } catch(err){
        next(err);
    }

}

async function updateReview(req, res, next){
    const id = req.params.id;
    try {
        const newReview = await Review.findByIdAndUpdate(id, req.body, {new:true, runValidators: true});
        if(!newReview){
            return res.status(404).json({error: "Review not found."});
        }
        res.status(200).json(newReview);
    } catch(err){
        next(err);
    }
}

async function deleteReview(req,res, next){
    const id = req.params.id;
    try {
        const delReview = await Review.findByIdAndDelete(id);
        if(!delReview){
            return res.status(404).json({error: "Review not found"});
        }
        res.status(200).json(delReview);
    } catch(err) {
        next(err);
    }    
}

module.exports = { createReview, getAllReviews, getOneReview, updateReview, deleteReview};

