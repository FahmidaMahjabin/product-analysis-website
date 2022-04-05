import React from 'react';
import useReviewes from '../../Hooks/useReviews';
import OneReview from '../OneReview/OneReview';

const Reviews = () => {
    const [reviews] = useReviewes();
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 m-8'>
            {
                reviews.map(review => <OneReview review = {review}></OneReview>)
            }
            
        </div>
    );
};

export default Reviews;