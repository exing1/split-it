import TopBar from "../components/TopBar";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Scan = () => {

    const navigate = useNavigate();

    const scanReceipt = () => {
        axios({
          method: "GET",
          url:"/scan-receipt",
        })
        .then((response) => {
          const res = response.data
          console.log(res.items)
          localStorage.setItem('receiptItems', JSON.stringify(res.items))
        })
        .then(() => {
            navigate("/input");
        }).catch((error) => {
          if (error.response) {
            console.log(error.response)
            console.log(error.response.status)
            console.log(error.response.headers)
            }
        })
    }
    return (
        <>   
            <TopBar prev=""/>
            <div className="box">
                <Button variant="contained" component="label" endIcon={<PhotoIcon />}>
                    Upload
                    <input hidden accept="image/*" multiple type="file" />
                </Button>
                <div className="input">
                    <Button className="nav" onClick={scanReceipt}>
                        input manually 
                    </Button>
                </div>
            </div>
        </>
    );
};
  
export default Scan;

const PhotoIcon = () => {
    return (
        <span className="material-symbols-outlined">
            image
        </span>
    );
}