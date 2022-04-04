import React from 'react';
import { useNavigate } from 'react-router-dom';
import useReviewes from '../../Hooks/useReviews';
import OneReview from '../OneReview/OneReview';
const Home = () => {
    const navigate = useNavigate();
    const [reviews, setReviews] = useReviewes();
    const firstThreeReviews = reviews.slice(0, 3);
    return (
        <div>
            <h1 className='text-5xl font-bold text-center text-green-900 p-4'>Lost in Mountain</h1>
            <div className="grid grid-cols-2 gap-4 m-8">
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum consequatur delectus, totam cumque magnam accusantium dolor voluptates tempora velit, accusamus cum, fugiat inventore odit ex! Amet, ea ut voluptatum reiciendis iusto consequuntur doloribus illum provident perspiciatis similique ab laboriosam voluptatibus deleniti repudiandae dolorum culpa quam eaque earum maxime cumque quibusdam aspernatur doloremque delectus. Reiciendis esse excepturi maxime adipisci quaerat aliquid, dolor aspernatur consequatur odit sit nam ab aut minus ullam perferendis nulla numquam sint qui saepe tempora iure suscipit amet fugiat. Recusandae ipsum qui excepturi illo mollitia explicabo quia! Magni, ipsa ab temporibus laudantium dolorum mollitia quod dolorem reiciendis quisquam.</p>
                </div>
                <div className='mx-auto'>
                    <img src="https://img.freepik.com/free-psd/travel-tour-instagram-post-social-media-post-template_501970-132.jpg?t=st=1649066311~exp=1649066911~hmac=727e65b5fabac90ce39800c803977d3def437108d5fd0ed83b2fdb2908a225f6&w=740" className='w-80' alt="travel photo"></img>
                </div>
            </div>

            <button className='bg-blue-500 font-bold px-6 py-2 text-white rounded mx-8'>See Detail</button>
            {/* show review section */}
            <div className='m-8'>
                <h1 className='text-3xl font-bold text-center text-green-900 mb-4'>Reviews</h1>
                <div className='grid grid-cols-3 gap-4'>
                    {firstThreeReviews.map(review => <OneReview review={review}></OneReview>)}
                </div>
            </div>
            {/* button to see more review */}
            <div className='flex flex-row-reverse m-8'>
                <button onClick = {() => navigate("/reviews")} className='p-4  bg-blue-700 rounded text-white'>See More Review</button>
            </div>
            
        </div>
    );
};

export default Home;