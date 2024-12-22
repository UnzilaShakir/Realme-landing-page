
import "./Slider.css";


const Slider = () => {
    return (
        <div className="Header">
            <div className="text">
                <h1 style={{ fontSize: "100px" }}>realme c75</h1>
                <h2 className="text1">Dhulai Horai hai</h2>

                <ul className="links">
                    <li style={{ color: "red" }}>IP69 Ultra Dust&Water Resistance</li>
                    <li>6000 mAh  Massive Battery|45W Fast Charge</li>
                    <li>24GB Dynamic RAM</li>
                </ul>
                <button className="launch-button">
                    Launching on Dec 23rd
                </button>

            </div>

            <div className="headimg">
                <img src="./public/realmec75.webp" alt="" width={"600px"} height={"600px"} />
            </div>
        </div>

    );
};

export default Slider;