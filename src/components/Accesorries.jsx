import './Accessories .css';
import img1 from '../../public/budst110.webp'
import img2 from '../../public/budsq.webp'


const Accessories = () => {
    return (
        <div className="maindiv1">
            <div className="content">
                <h1 className='heading'>Accessories</h1>
                <div className="carddiv" style={{display: "flex"}}>
                    <div className="card">
                        <div className="card-content">
                            <h2 className="card-title">realme Buds T110</h2>
                            <p className="card-description">Listen in Full Color</p>
                            <p className='line'>Rs 4,999</p>
                        </div>
                        <div className="card-image">
                            <img src={img1} alt="Card" />
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-content">
                            <h2 className="card-title">realme c75</h2>
                            <p className="card-description">Dhulai Horai Hai</p>
                            <p className='line'>Rs 7,999</p>
                        </div>
                        <div className="card-image">
                            <img src={img2} alt="Card" />
                        </div>
                    </div>
                </div>

            </div>

        </div>

    )

}


export default Accessories