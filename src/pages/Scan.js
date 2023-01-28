import TopBar from "../components/TopBar";
import { Link } from "react-router-dom";

const Scan = () => {
    const get_image = (img) => {
        console.log(img)
    }
    return (
        <>   
            <TopBar prev=""/>
            <div className="box">
                <div className="upload">
                    <form className="upload-form">
                        <input type="file" id="file-upload"/>
                        <Link to="/tip">
                            <input type="submit"/>
                        </Link>
                    </form>
                </div>
                <div className="input">
                    input manually
                </div>
            </div>
        </>
    );
};
  
export default Scan;