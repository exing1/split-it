import TopBar from "../components/TopBar";

const Result = () => {
    // ids to names
    const people = {
        0: "Lizzle",
        1: "Ed",
        2: "Paul",
        3: "Alan"
    }

    // dict of foods to people (unique ids?)
    const foods = {
        "carrot": [0, 2],
        "mushroom": [1],
        "porridge": [3],
        "appetizers": [0, 1, 2, 3]
    }

    // people to foods

    // empty people to prices


    // for each food, see which people have it and assign prices
    return (
        <>
        <TopBar prev="/select"/>
        <div className="box">
            <div id="text-inputs">
                <div className="receipt-line">
                    <div>AG</div><div>$7.49</div>
                </div>
                <div className="receipt-line">
                    <div>EX</div><div>$12.50</div>
                </div>
                <div className="receipt-line">
                    <div>EZ</div><div>$1.99</div>
                </div>
                <div className="receipt-line">
                    <div>PZ</div><div>$7.49</div>
                </div>
            </div>
        </div>
        </>
    )
  };
  
  export default Result;