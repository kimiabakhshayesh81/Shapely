import NavBar from "../NavBar/navbar";
import './header.css'

function Header(){
    return(
        <div>
            <NavBar/>
            
            <div className='back-ground'>

                <div className='container'>  
                    <img src='sea.jpg' alt="Background" className="background-image"/>
                    <h2 className="overlay-text">
                        We Change Everything <br />
                        With React
                    </h2>
                    <p className='text'>This is the only Rect theme you will ever want to use.</p>
                </div>
                

                <div className='btn-container'>
                    <button className='btn'>READ MORE</button>
                    <button className='btn'>DOWNLOAD NOW</button>

                </div>
            </div>
        </div>
    )
}

export default Header