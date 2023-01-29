import { useLocation } from "react-router-dom";
import TopBar from "../components/TopBar";

const Select = () => {
    const location = useLocation();
    const data = location.state

    console.log(data)

    const items = []

    for (const n in data) {
        items.push(
        <div className="receipt-line">
            <span>{n}</span>
            <span>{"$" + data[n]}</span>
        </div>)
    }

    return (
        <>
        <TopBar prev="/input" next="/result"/>
        <div className="box">
            <h2>Assign items:</h2>
            <div id="text-inputs" onScroll={setClasses}>
                {items}
            </div>
            <div className="people">
                <div className="userIcon">AG</div>
                <div className="userIcon">EX</div>
                <div className="userIcon">EZ</div>
                <div className="userIcon">PZ</div>
            </div>
        </div>
        </>
   );
};

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
  
export default Select;