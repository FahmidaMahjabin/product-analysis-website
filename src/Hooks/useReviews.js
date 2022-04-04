// database theke reviewer er data nibo and return korbo 
import {useEffect, useState} from 'react';
import { axios } from 'react-axios';
function useReviewes(){
    const [reviews, setReviews] = useState([]);
    useEffect(()=> {
        fetch('reviewerDB.json')
        .then(res => res.json())
        .then(data => setReviews(data))
        

    }, [])
    return [reviews, setReviews]
}
export default useReviewes
