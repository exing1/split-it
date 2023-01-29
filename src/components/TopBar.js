import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function TopBar(props) {
    const prev = useRef(null)

    const showPrev = () => {
        if (!props.prev) {
            prev.current.style.visibility = "hidden";
        }
    }

    useEffect(showPrev, [props.prev])

    return (
        <div className="top-bar">
            <Link className="nav" to={props.prev} ref={prev}>
                <div className="material-symbols-outlined">
                    navigate_before
                </div>
            </Link>
            <div className="name">split it</div>
            <Link className="nav" to={props.next ? props.next : ""} id={props.next ? "" : "hidden-next"}>
                <div className="material-symbols-outlined">
                    navigate_next
                </div>
            </Link>
            
        </div>
    )
}

export default TopBar;