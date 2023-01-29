import TopBar from "../components/TopBar";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Scan = () => {

    const navigate = useNavigate();

    const [loading, setLoading] = useState("");

    const scanReceipt = () => {
        setLoading("parsing image...");
        axios({
          method: "GET",
          url:"/scan-receipt",
        })
        .then((response) => {
          const res = response.data
          navigate("/input", {state: res.items})
        }).catch((error) => {
          if (error.response) {
            console.log(error.response)
            console.log(error.response.status)
            console.log(error.response.headers)
            }
        })
    }

    const checkFile = (e) => {
        const path = e.target.value
        if (path != "") {
            const file = path.substring(path.lastIndexOf("\\") + 1);
            console.log(file)
            setLoading(file + " uploaded");
        }
    }

    return (
        <>   
            <TopBar prev=""/>
            <div id="loading">
                {loading}
            </div>
            <div className="box">
                <Button variant="outlined" component="label" endIcon={<PhotoIcon />} onChange={checkFile}>
                    Upload
                    <input hidden accept="image/*" multiple type="file" />
                </Button>
                <div className="input">
                    <Button variant="contained" className="nav" onClick={scanReceipt}>
                        Split 
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