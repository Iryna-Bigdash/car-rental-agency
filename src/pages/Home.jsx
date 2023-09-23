import { Link } from "react-router-dom";

const Home = () => {
    // useEffect(()=>{http}, [])


  return <div>
    <h1>Home page 😻</h1>
    <ul>
      <li><Link>About Us</Link></li>
      <li><Link>Gallery</Link></li>
      <li><Link>Reviews</Link></li>
      
    </ul>
  </div>;
};

export default Home;
