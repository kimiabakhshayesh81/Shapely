import './body.css'

function Body(){
    return(
        <div className="back-ground">

            <div className="container">
                <img src='ocean.avif' alt="img" className="back-image"/>
                <h2 className="overlay-text2">Small Parallax Section</h2>
                <p className='text-lo'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus imperdiet rhoncus porta. Ut quis sem quis purus lobortis dictum.
                </p>

            </div>

            <div className='btn-containe'>
                    <button className='btn-elem'>MORE INFO</button>
            </div>

            <div className='other'>
                <h2 className='limit'>Limitless Options</h2>
                <p className='parag'>
                Phasellus sed nisi ac dui interdum semper. Etiam consequat fermentum sollicitudin.
                 Fusce vulputate porta faucibus. Vivamus nulla tellus,<br/>
                 accumsan non efficitur id, pretium quis ante
                </p>
                <button className='l-button'>DOWNLOAD NOW</button>
            </div>
        </div>
    )
}
export default Body