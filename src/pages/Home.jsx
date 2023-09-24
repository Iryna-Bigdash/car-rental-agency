import { Link } from "react-router-dom";
import bannerUrl from '../assets/images/banner.jpg';

const Home = () => {
    // useEffect(()=>{http}, [])


  return (
    <div style={{
      width: "100vw",
      height: '100vh',
      backgroundImage: `url(${bannerUrl})`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
    }}>
    <h1>Home page 😻</h1>
    <ul>
      <li><Link>About Us</Link></li>
      <li><Link>Gallery</Link></li>
      <li><Link>Reviews</Link></li>
    </ul>
  </div>
  );
};

export default Home;
