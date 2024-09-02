import { useContext } from "react";
import Searchbar from "../../components/searchbar/Searchbar";
import "./homepage.scss";
import { AuthContext } from "../../context/AuthContext";

function Homepage(){

    const{currentUser} = useContext(AuthContext);
    console.log(currentUser)

    return(
        <div className="homePage">
             <div className="textContainer"> 
                <div className="wrapper"> 
                    <h1 className="title">Find Real Estate and get your Dream Place</h1>
                     <p> 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur beatae culpa deserunt mollitia ea aliquam nam laboriosam blanditiis nisi. Tempora incidunt nemo impedit quo, autem explicabo asperiores sit nihil vero esse fugit sint unde ut.
                     </p>
                     <Searchbar/>
                     <div className="boxes">
                        <div className="box">
                            <h1>10+</h1>
                            <h2>Years of experience</h2>
                        </div>
                        <div className="box">
                            <h1>100</h1>
                            <h2>Awards Gained</h2>
                        </div>
                        <div className="box">
                            <h1>1000+</h1>
                            <h2>Properties Ready </h2>
                        </div> 
                     </div>
                </div>
             </div>
             <div className="imgContainer">
                <img src="/bg.png " alt="" />
             </div>
             
        </div>
    )
}
export default Homepage;