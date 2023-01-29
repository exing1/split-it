import TopBar from "../components/TopBar";
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom"

const NameStorage = {}
const PriceStorage = {}

export default function Input() {

    const navigate = useNavigate()

    const init = []
    for (let i = 0; i < 3; i++) {
        init.push(<InputBox key={i} count={i} />)
    }

    const [inputs, setInputs] = useState(init);

    const count = useRef(3);

    const addBox = () => {
        setInputs([...inputs, <InputBox key={count.current} count={count.current}/>]);
        count.current++;
    }

    const submit = () => {
        const results = {};
        for (let i = 0; i < count.current; i++) {
            if (NameStorage[i] && PriceStorage[i]);
            results[NameStorage[i]] = PriceStorage[i];
        }
        console.log(results)
        navigate("/select", {state: results});
    }

    return (
        <>
        <TopBar prev="/"/>
        <div className="box">
            <div id="text-inputs">
                {inputs}
            </div>
            <Stack className="input-opt" direction="row" spacing={8}>
                <IconButton onClick={addBox}>
                    <AddIcon/>
                </IconButton>
                <IconButton onClick={submit} color="primary">
                    <ConfirmIcon/>
                </IconButton>
            </Stack>
        </div>
        </>
    )
}

const store = (e, i, s) => {
    if (e.target.value) {
        s[i] = e.target.value;
    }
}

function InputBox(props) {
    const c = props.count
    return (
        <div className="input-box" key={c}>
            <TextField label="item" onChange={(e) => store(e, c, NameStorage)}/>
            <TextField label="price" type="number" sx={{width: "10ch"}} onChange={(e) => store(e, c, PriceStorage)}/>
        </div>
    );
}

function AddIcon() {
    return (
        <span className="material-symbols-outlined">
            add
        </span>
    );
}

function ConfirmIcon() {
    return (
        <span className="material-symbols-outlined">
            check
        </span>
    );
}