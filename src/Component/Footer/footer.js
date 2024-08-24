import './footer.css'

function Footer(){
    return(
        <div className = 'footer-container'>

            <div className='intro'>
                <h2 className = 'intro-head'>Our Main Clients</h2>
            </div>

            <div className = 'our-logo'>
                <img src = 'download (1).jpeg' alt = 'image' className='img-logo'/>
                <img src = 'download (1).png' alt = 'image' className='img-logo'/>
                <img src = 'download (2).jpeg' alt = 'image' className='img-logo'/>
                <img src = 'images (2).jpeg' alt = 'image' className='img-logo'/>
            </div>

            <div className = 'last'>
                <h2 className='last-title'>Do you like this awesome React theme?</h2>
                <button className='last-btn'>DOWNLOAD NOW</button>

            </div>

        </div>
    )
}

export default Footer