import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar.jsx";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext.jsx";

function HomePage() {

  const {currentUser} = useContext(AuthContext)

  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <p>
          Welcome to our Real Estate Marketplace!
           Discover your dream property with ease—explore listings,
            chat directly with owners,
             and find the perfect location using our interactive maps.  <br/>
             <div className="main">Start your journey towards a new home today!</div> 
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">   
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;