
import './App.css';
import useReviewes from './Hooks/useReviews';

function App() {
  const [reviewes, setReviewes] = useReviewes();
  console.log(reviewes)
  return (
    <p>reviewes</p>
  );
}

export default App;
