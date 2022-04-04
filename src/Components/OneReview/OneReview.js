import React from 'react';
// list of reviews theke ekta kore review nibo. tader image, comment, rating show korbo

const OneReview = (props) => {
    const {name, comment, rating,picture } = props.review;
    return (
        <div className='flex flex-col bg-blue-100 rounded p-4'>
            <img className='w-32 h-32 rounded-full mx-auto' src = {picture} alt = "propic"></img>
            <p className='my-4'>Name: {name}</p>
            <div>
                <p>{comment}</p>
            </div>
            <div className='my-4'>
                <p>Rating: <span className='font-medium'>{rating}</span></p>
            </div>
            
            
        </div>
    );
};

export default OneReview;