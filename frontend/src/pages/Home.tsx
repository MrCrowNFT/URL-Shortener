import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";

const HomePage = (()=>{
    return (
    <div>
        <div>
            <img></img>
            <label>Paste URL:</label>
            <input type="url" />
            <div>
                <img src={facebook}/>
                <img src={instagram}/>
                <img src={twitter}/>
            </div>
        </div>
    </div>
    )
})

export default HomePage