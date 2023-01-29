import * as React from 'react';
import { useNavigate } from "react-router-dom";
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';


const subtotal = localStorage.getItem('subtotal')
const tipAmounts = [.15, .18, .2]



const Tip = (props) => {

    let navigate = useNavigate(); 
    const nextPage = (tipAmount) =>{ 
        let path = `../select`; 
        navigate(path);
        localStorage.setItem('tipAmount', tipAmount);
    }

    const buttons = [];

    for (let i = 0; i < tipAmounts.length; i++) {
        var percent = tipAmounts[i];
        const tipAmount = percent * subtotal;
        buttons.push(<Button key={i} onClick={() => nextPage(tipAmount)}>{percent * 100}% - ${tipAmount}</Button>);
    }

    return (
        <>
            <h1>Tip</h1>
            <ButtonGroup size="large" variant="contained" orientation="vertical" aria-label="text button group">
                <Button onClick={() => nextPage(0)}>None</Button>
                {buttons}
                <Button onClick={() => nextPage(5)}>Custom</Button>
            </ButtonGroup>
        </>
    );
};
  
export default Tip;