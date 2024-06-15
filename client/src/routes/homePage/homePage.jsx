import SearchBar from "../../components/searchBar/SearchBar"
import "./homePage.scss"

function homePage() {
  return (
    <div className="homePage">
        <div className="textContainer">
            <div className="wrapper">
                <h1 className="title">
                    Find the real estate and get your dream place !
                </h1>
                <p>
                    erty tyt rtytr rytuytryyuygry y ty ty y tut tytfy tg hg h tf h tyhyfhfy hjf gjhj yjy 
                </p>
                <SearchBar />
                <div className="boxes">
                    <div className="box">
                        <h1>16+</h1>
                        <h2>Years Of Experience</h2>
                    </div>
                    <div className="box">
                        <h1>200</h1>
                        <h2>Award Gained</h2>
                    </div>
                    <div className="box">
                        <h1>200+</h1>
                        <h2>Property Ready</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className="imgContainer">
            <img src="/bg.png" alt="" />
        </div>
       
       
      
    </div>
  )
}

export default homePage
