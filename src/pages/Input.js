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
    

    const receiptItems = JSON.parse(localStorage.getItem("receiptItems"))

    const init = []
    for (let i = 0; i < receiptItems.length; i++) {
        const item = receiptItems[i]
        init.push(<div key={i} className="input-box">
            <TextField defaultValue={item.name} label="item" onChange={(e) => store(e, i, NameStorage)}/>
            <TextField defaultValue={item.price} label="price" type="number" sx={{width: "10ch"}} onChange={(e) => store(e, i, PriceStorage)}/>
        </div>)
    } 
        
    const count = useRef(receiptItems.length);
    

    const [inputs, setInputs] = useState(init);

    

    const addBox = () => {
        setInputs([...inputs, <InputBox key={count.current} count={count.current}/>]);
        count.current++;
        console.log(document.getElementById("input-tail"))
        const tail = document.getElementById("input-tail")
        tail.scrollIntoView({behavior: "smooth"});
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
            <div id="text-inputs" onScroll={(e) => setClasses(e.currentTarget)}>
                {inputs}
                <div id="input-tail"/>
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

const setClasses = (el) => {
    const isScrollable = el.scrollHeight > el.clientHeight;
    
    // GUARD: If element is not scrollable, remove all classes
    if (!isScrollable) {
      el.classList.remove('is-bottom-overflowing', 'is-top-overflowing');
      return;
    }
    
    // Otherwise, the element is overflowing!
    // Now we just need to find out which direction it is overflowing to (can be both)
    const isScrolledToBottom = el.scrollHeight <= el.clientHeight + el.scrollTop;
    const isScroledlToTop = el.scrollTop === 0;
    el.classList.toggle('is-bottom-overflowing', !isScrolledToBottom);
    el.classList.toggle('is-top-overflowing', !isScroledlToTop);
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