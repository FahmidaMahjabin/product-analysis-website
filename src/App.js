
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Components/Blogs/Blogs';
import DashBoard from './Components/DashBoard/DashBoard';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Reviews from './Components/Reviews/Reviews';
import usereviews from './Hooks/useReviews';

function App() {
  const [reviews, setreviews] = usereviews();
  console.log(reviews)
  return (
    <div>
      <h1>Lost In Mountain</h1>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element = {<Home></Home>}></Route>
        <Route path='/reviews' element = {<Reviews></Reviews>}></Route>
        <Route path='/dashboard' element = {<DashBoard></DashBoard>}></Route>
        <Route path='/blogs' element = {<Blogs></Blogs>}></Route>
      </Routes>
    </div>
    
  );
}

export default App;
