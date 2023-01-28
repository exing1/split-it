import TopBar from "../components/TopBar";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

const Scan = () => {
    const get_image = (img) => {
        console.log(img)
    }
    return (
        <>   
            <TopBar prev=""/>
            <div className="box">
                <Button variant="contained" component="label">
                    Upload
                    <input hidden accept="image/*" multiple type="file" />
                </Button>
                <div className="input">
                    <Link className="nav" to="/input">
                        input manually
                    </Link>
                </div>
            </div>
        </>
    );
};
  
export default Scan;