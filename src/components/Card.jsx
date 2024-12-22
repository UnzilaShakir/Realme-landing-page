
import './Card.css'; 
import img1 from '../../public/c75.webp'
import img2 from '../../public/13-5G-.png'
import img3 from '../../public/GT 6.webp'
import img4 from '../../public/note 60.webp'
import img5 from '../../public/c61.webp'
import img6 from '../../public/c65.webp'
import img7 from '../../public/12.webp'
import img8 from '../../public/12+5g.webp'
import img9 from '../../public/C63.webp'
import img10 from '../../public/note 50.webp'
import img11 from '../../public/c67.webp'
import img12 from '../../public/c53.webp'

const Card = () => {

    return (
        <div className="maindiv">
            <h1 style={{paddingTop: "30px", paddingLeft: "30px"}}>SmartPhones</h1>
            <div className="cardDiv1" style={{ display: "flex", paddingTop: "20px", flexWrap: "wrap" }}>
                <div className="card">
                    <div className="card-content">
                        <h2 className="card-title">realme c75</h2>
                        <p className="card-description">Dhulai Horai Hai</p>
                    </div>
                    <div className="card-image">
                        <img src={img1} alt="Card" />
                    </div>
                </div>

                <div className="card">
                    <div className="card-content">
                        <h2 className="card-title">realme 13 + 5G</h2>
                        <p className="card-description">Speed to Victory</p>
                        <p className='line'>Rs 89 999</p>

                    </div>
                    <div className="card-image">
                        <img src={img2} alt="Card" />
                    </div>
                </div>

                <div className="card">
                    <div className="card-content">
                        <h2 className="card-title">realme GT 6</h2>
                        <p className="card-description">Power Meets AI</p>
                        <p className='line'>Rs 149,999</p>
                    </div>
                    <div className="card-image">
                        <img src={img3} alt="Card" />
                    </div>
                </div>

                <div className="card">
                    <div className="card-content">
                        <h2 className="card-title">realme note 60</h2>
                        <p className="card-description">Champion Quality</p>
                        <p className='line'> From Rs 26,999 </p>
                    </div>
                    <div className="card-image">
                        <img src={img4} alt="Card" />
                    </div>
                </div>

                <div className="card">
                    <div className="card-content">
                        <h2 className="card-title">realme C61</h2>
                        <p className="card-description">Hard to break</p>
                        <p className='line'>Rs 32, 999</p>
                    </div>
                    <div className="card-image">
                        <img src={img5} alt="Card" />
                    </div>
                </div>

                <div className="card">
                    <div className="card-content">
                        <h2 className="card-title">realme C65</h2>
                        <p className="card-description">Unbreakable Champion</p>
                        <p className='line'>Rs 49 999</p>
                    </div>
                    <div className="card-image">
                        <img src={img6} alt="Card" />
                    </div>
                </div>

                <div className="card">
                    <div className="card-content">
                        <h2 className="card-title">realme 12</h2>
                        <p className="card-description">Power in every shot</p>
                        <p className='line'>Rs 59 999</p>
                    </div>
                    <div className="card-image">
                        <img src={img7} alt="Card" />
                    </div>
                </div>

                <div className="card">
                    <div className="card-content">
                        <h2 className="card-title">realme 12 + 5G</h2>
                        <p className="card-description">Power in every shot</p>
                        <p className='line'>Rs 74 999</p>
                    </div>
                    <div className="card-image">
                        <img src={img8} alt="Card" />
                    </div>
                </div>

                <div className="card">
                    <div className="card-content">
                        <h2 className="card-title">realme C63</h2>
                        <p className="card-description">3 min charge, 60 min T20 Match</p>
                        <p className='line'>Rs 32 999</p>
                    </div>
                    <div className="card-image">
                        <img src={img9} alt="Card" />
                    </div>
                </div>

                <div className="card">
                    <div className="card-content">
                        <h2 className="card-title">realme Note 50</h2>
                        <p className="card-description">Long lasting value beast</p>
                        <p className='line'>From Rs 24 999</p>
                    </div>
                    <div className="card-image">
                        <img src={img10} alt="Card" />
                    </div>
                </div>

                
                <div className="card">
                    <div className="card-content">
                        <h2 className="card-title">realme C67</h2>
                        <p className="card-description">108MP 3x in Sensor zoom camera Snapdragon 685</p>
                        <p className='line'>Rs 39 999</p>
                    </div>
                    <div className="card-image">
                        <img src={img11} alt="Card" />
                    </div>
                </div>

                
                <div className="card">
                    <div className="card-content">
                        <h2 className="card-title">realme C53</h2>
                        <p className="card-description">Champion Gold 33W Champion Charge</p>
                        <p className='line'>Rs 39 999</p>
                    </div>
                    <div className="card-image">
                        <img src={img12} alt="Card" />
                    </div>
                </div>


            </div>
        </div>
    )

};

export default Card;

