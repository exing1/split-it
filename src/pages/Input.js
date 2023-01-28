import TopBar from "../components/TopBar";
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import { useState } from "react";


export default function Input() {

    const [inputs, setInputs] = useState([<InputBox />, <InputBox />, <InputBox />])

    const addBox = () => {
        setInputs([...inputs, <InputBox />])
    }

    // const submit = () => {
    //     inputs.map((input) => )
    // }

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
                <IconButton>
                    <ConfirmIcon/>
                </IconButton>
            </Stack>
        </div>
        </>
    )
}

function InputBox() {
    return (
        <div className="input-box">
            <TextField label="item"/>
            <TextField label="price" type="number" sx={{width: "10ch"}}/>
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